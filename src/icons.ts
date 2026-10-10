import type { ImageMetadata } from "astro";

const images = import.meta.glob<ImageMetadata>("./assets/icons/*.webp", { eager: true, import: "default" });

/** An app's own icon from src/assets/icons, by file name without extension. */
export function appIcon(name: string): ImageMetadata {
  const image = images[`./assets/icons/${name}.webp`];
  if (!image) throw new Error(`No src/assets/icons/${name}.webp`);
  return image;
}
