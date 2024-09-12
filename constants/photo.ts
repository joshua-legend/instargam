import { Category } from "../router/Search";

export type PhotoType = { src: string; category: Category };
export const photo: PhotoType[] = [
  { src: "japan1.jpg", category: "IGTV" },
  { src: "japan2.jpg", category: "IGTV" },
  { src: "shop1.jpg", category: "Shop" },
  { src: "shop2.jpg", category: "Shop" },
  { src: "shop3.jpg", category: "Shop" },
  { src: "shop4.jpg", category: "Shop" },
  { src: "sport1.jpg", category: "Sports" },
  { src: "sport2.jpg", category: "Sports" },
  { src: "sport3.jpg", category: "Sports" },
  { src: "style1.jpg", category: "Style" },
  { src: "tv1.jpg", category: "IGTV" },
  { src: "tv2.jpg", category: "IGTV" },
  { src: "tv3.jpg", category: "IGTV" },
];
