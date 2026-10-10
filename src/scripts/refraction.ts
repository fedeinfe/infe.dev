interface BrandedNavigator extends Navigator {
  userAgentData?: { brands: { brand: string }[] };
}

const card = document.querySelector<HTMLElement>("[data-refract]");
const mapImage = card?.querySelector("feImage");
// Only Chromium runs SVG filters on a backdrop; elsewhere the url() would take the blur down with it.
const isChromium = (navigator as BrandedNavigator).userAgentData?.brands.some(({ brand }) => brand === "Chromium");

if (card && mapImage && isChromium) {
  // Red drives the horizontal shift and blue the vertical one; mid-grey means no shift, so the
  // blurred grey slab keeps the middle of the card still and leaves the bend to the rim.
  const drawMap = () => {
    const { width, height } = card.getBoundingClientRect();
    const radius = parseFloat(getComputedStyle(card).borderRadius);
    const rim = Math.min(width, height) * 0.07;
    const map = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <linearGradient id="r" x1="100%" x2="0%"><stop stop-color="#0000"/><stop offset="100%" stop-color="red"/></linearGradient>
      <linearGradient id="b" x2="0%" y2="100%"><stop stop-color="#0000"/><stop offset="100%" stop-color="blue"/></linearGradient>
      <rect width="${width}" height="${height}" fill="black"/>
      <rect width="${width}" height="${height}" rx="${radius}" fill="url(#r)"/>
      <rect width="${width}" height="${height}" rx="${radius}" fill="url(#b)" style="mix-blend-mode:difference"/>
      <rect x="${rim}" y="${rim}" width="${width - rim * 2}" height="${height - rim * 2}" rx="${radius}" fill="hsl(0 0% 50% / 0.93)" style="filter:blur(${rim / 2}px)"/>
    </svg>`;
    mapImage.setAttribute("href", `data:image/svg+xml,${encodeURIComponent(map)}`);
  };

  new ResizeObserver(drawMap).observe(card);
  card.classList.add("is-refracting");
}
