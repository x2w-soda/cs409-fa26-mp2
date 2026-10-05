import { useParams } from "react-router-dom";
import {useData} from './Request'
import ArtImage from './ArtImage'

export default function DetailView() {
  const { id } = useParams();
  const data = useData();
  const item = data.data.find(item => item.id == id)

  console.log("DetailView", typeof item, item)
  if (!item) {
      return (
          <h1>ID Unavailable</h1>
      )
  }

  return (
    <div className="gallery">
        <h1> {item.title} </h1>
        <ArtImage imageID={item.image_id} />
    </div>
  );
}
