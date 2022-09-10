import { NavLink } from "react-router-dom";
import { GalleryItem } from "../components/GalleryItem"
import night_ranger from  "../data/night_ranger.json"

export function Galleries() {
  return (
    
    <div className="mx-auto">
      {/* TODO=use elected from dropdown */}
      <h2 className="font-bold text-xl mb-3"> Night Ranger</h2>
       {/* Row */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* Column */}
          {night_ranger.map(photo => (
            <div key={photo.id}>
               {/* Render GalleryItem */}
              <GalleryItem {...photo} />
            </div>
          ))}
      </div>
    </div>
  )
}