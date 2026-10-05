import {useData} from './Request'

export default function GalleryView() {
  const data = useData();

  console.log("GalleryView", typeof data, data)
  if (!data) {
      return (
          <h1>Data Unavailable</h1>
      )
  }

      // {artworks.map((artwork) => ( <article key={artwork.id}> <h2>{artwork.title}</h2> </article>))}
  return (
    <div className="gallery">
        <h1> kind of working </h1>
    </div>
  );
}
