const imageCache = new Map<string, HTMLImageElement>();
const loadingPromises = new Map<string, Promise<HTMLImageElement>>();

export function loadImage(src: string): Promise<HTMLImageElement> {
  if (imageCache.has(src)) {
    return Promise.resolve(imageCache.get(src)!);
  }

  if (loadingPromises.has(src)) {
    return loadingPromises.get(src)!;
  }

  const promise = new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      imageCache.set(src, img);
      loadingPromises.delete(src);
      resolve(img);
    };
    img.onerror = () => {
      loadingPromises.delete(src);
      reject(new Error(`Failed to load image: ${src}`));
    };
  });

  loadingPromises.set(src, promise);
  return promise;
}

export function getCachedImage(src: string): HTMLImageElement | null {
  return imageCache.get(src) ?? null;
}

export function clearImageRegistry() {
  imageCache.clear();
  loadingPromises.clear();
}
