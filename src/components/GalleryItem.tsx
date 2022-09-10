import { formatCurrency } from "../scripts/formatCurrency"
import { Card } from "@material-ui/core"

type GalleryItemProps = {
  id: number,
  name: string,
  price: number,
  imgUrl: string
}

export function GalleryItem({ id, name, price, imgUrl }:GalleryItemProps) {
  const quantity = 0
  return (
    <Card>
      <div className="h-100 bg-black">
        <img src={imgUrl} className="flex h-72 md:max-h-full w-auto max-w-fit"/>
        <div className="flex justify-between items-baseline text-white border-t-[2px] border-white">
          <span className="ml-2">{name}</span>
          <span>{formatCurrency(price)}</span>
          {/* if quantity is 0, display add-to-Cart, else show qty +/- remove */}
          {quantity === 0 ? (
            <button className="text-white bg-orange-600">+Add to Cart</button>
          ) : <div className="gap-3"> 
                <button className="text-white bg-orange-600">+</button>
                <button className="text-white bg-red-600">-</button>
                <button className="text-white bg-red-800">Remove</button>
              </div>} 
        </div>
      </div>
    </Card>
  )
}

export default GalleryItem