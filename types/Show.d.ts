interface Show {
  id: string;
  episodes: number;
  title: string;
  imageUrl: string;
  imageUrlThumb: string;
}
interface ShowAPIResponse {
  id: string;
  episodes: number;
  title: string;
  product_image_url: string;
  product_image_url_thumb: string;
}

export { Show, ShowAPIResponse };
