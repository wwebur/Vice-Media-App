import type { NextApiRequest, NextApiResponse } from "next";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import type { Show, ShowAPIResponse } from "../../types/Show";

const db = getFirestore();

export const getShows = async (): Promise<Show[] | undefined> => {
  const showsRef = collection(db, "shows");
  const querySnapshot = await getDocs(showsRef);

  if (querySnapshot.empty) {
    return undefined;
  }
  const storage = getStorage();
  const showsAPIResponse = querySnapshot.docs.map((doc) =>
    doc.data()
  ) as ShowAPIResponse[];
  const shows = await Promise.all(
    showsAPIResponse.map(async (show) => ({
      ...show,
      imageUrl: await getDownloadURL(
        ref(storage, `images/shows/${show.product_image_url}`)
      ),
      imageUrlThumb: await getDownloadURL(
        ref(storage, `images/shows/${show.product_image_url_thumb}`)
      ),
    }))
  );

  return shows;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Show[] | string>
) => {
  const shows = await getShows();
  if (!shows) {
    res.status(500).send("Internal Server Error.");
    return;
  }

  // Update cached shows every hour
  res.setHeader("Cache-Control", "public, max-age=720, s-maxage=1440");
  res.status(200).json(shows);
};

export default handler;
