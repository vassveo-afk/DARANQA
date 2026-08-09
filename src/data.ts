export const PRODUCT_IMAGES = [
  "https://i.ibb.co/1J7xm1P6/Chat-GPT-Image-2-ao-t-2026-23-05-13-1.png",
  "https://i.ibb.co/Jh90K56/Chat-GPT-Image-3-ao-t-2026-00-18-57-2.png",
  "https://i.ibb.co/prMnmGR3/Chat-GPT-Image-3-ao-t-2026-00-18-50-2.png"
];

declare global {
  interface Window {
    ttq?: {
      track: (event: string) => void;
      page: () => void;
    };
  }
}
