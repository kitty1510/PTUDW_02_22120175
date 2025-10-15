// src/data.ts
export interface ImageItem {
  id: string;
  author: string;
  download_url: string;
  title?: string;
  description?: string;
}

export const img: ImageItem[] = [];

export const addData = (items: ImageItem[]) => {
  for (let i = 0; i < items.length; i++) {
    if (!img.find(item => item.download_url === items[i].download_url)) {
      items[i].id = String(img.length);
      items[i].title = `Photo #${img.length + 1}`;
      items[i].description = "No description available.";
      img.push(items[i]);
    }
  }
};

export const fetchImage = async (page = 1, limit = 20) => {
  const res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
  if (!res.ok) throw new Error("Failed to fetch images");
  return res.json();
};
