import { useState, useEffect } from 'react'

const imageCache = new Map();

export default function ArtImage({imageID}) {
    if (!imageID)
        return (
        <img alt="Image Unavailable" />
        )
  const url = "https://www.artic.edu/iiif/2/" + String(imageID) + "/full/843,/0/default.jpg";

    /*
  const [imageSrc, setImageSrc] = useState(() => imageCache.get(url));
  const [error, setError] = useState(null);

  console.log(typeof imageID, imageID);
  useEffect(() => {
    if (!url || imageCache.has(url)) {
      return;
    }

    const loadImage = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          const str = `Failed to load image: ${response.status}`;
          setError(str);
          console.error(str);
        }

        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);

        imageCache.set(url, objectUrl);
        setImageSrc(objectUrl);
      } catch (error) {
        if (!cancelled) {
          const str = `Image loading failed: ${error}`;
          setError(str);
          console.error(str);
        }
      }
    };

    loadImage();
  }, [url]);
     */

  return (
    <img src={url} alt="Image Unavailable" />
  )
}
