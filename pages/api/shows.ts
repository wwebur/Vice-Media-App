import type { NextApiRequest, NextApiResponse } from "next";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import type Show from "../../types/Show";

const db = getFirestore();

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Show[] | string>
) => {
  const showsRef = collection(db, "shows");
  const querySnapshot = await getDocs(showsRef);

  if (querySnapshot.empty) {
    res.status(500).send("Internal Server Error.");
    return;
  }

  const shows = querySnapshot.docs.map((doc) => doc.data()) as Show[];
  // Update cached shows every hour
  res.setHeader("Cache-Control", "public, max-age=720, s-maxage=1440");
  res.status(200).json(shows);
};

export default handler;
