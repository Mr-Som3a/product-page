import DeleteIcon from "../assets/icon-delete.svg"
import Img from "../../images/image-product-1.jpg"
import { useCart } from "../store/contextApi"
interface Item  {
    id:number,
    url:string,
    alt:string,
    count:number
}

interface CartCardProp{
    item:Item
}
export default function CartCard({item}:CartCardProp){
    const {setItem}= useCart()
  const total = 125*item.count
    return (
    <div className='flex space-x-7 items-center h-full p-10  '>
        <figure>
            <img className="w-20 rounded  " src={Img} alt={item.alt} />
        </figure>
        <div className="flex-1">
            <h6>Full Limited Edition Sneakers</h6>
            <p className="flex justify-between"><span>$125 x {item.count}</span>  <span className="font-bold">${total}</span></p>
        </div>
        <button onClick={()=>setItem([])}>
            <img src={DeleteIcon} alt="delete" />
        </button>
    </div>
  )
}
