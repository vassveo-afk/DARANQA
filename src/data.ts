export const PRODUCT_IMAGES = [
  "https://i.ibb.co/cXFMy0L5/Chat-GPT-Image-2-ao-t-2026-23-05-13.png",
  "https://i.ibb.co/QvTWFGBG/Chat-GPT-Image-2-ao-t-2026-23-11-41.png",
  "https://i.ibb.co/n8Qm1cM4/Chat-GPT-Image-2-ao-t-2026-23-10-02.png",
  "https://i.ibb.co/vvQmDZ7H/Chat-GPT-Image-3-ao-t-2026-00-18-57.png",
  "https://i.ibb.co/TqhxhBtx/Chat-GPT-Image-3-ao-t-2026-00-18-50.png"
];

declare global {
  interface Window {
    ttq?: {
      track: (event: string) => void;
      page: () => void;
    };
  }
}
