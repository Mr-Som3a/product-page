import { useState } from "react"
import { useCart } from "../store/contextApi"

export default function Price() {
    const {setItem} = useCart()
    const [count ,setCount] = useState(0)

    const addToCart =()=>{
        const newItem = {id:1,url:"@/images/image-product-1.jpg",alt:"newItem",count}
        if(count===0)
            return;
        setItem([newItem])
      
    }
  return (
    <>
        <div className="p-6 space-y-4">
            <div className="flex justify-between ">
                <div className="flex space-x-4">
                    <span className="text-3xl font-bold">$120.00</span>
                    <span className="bg-black self-center rounded-md w-fit text-xs px-1.5 py-0.5 text-white">50%</span>
                </div>
                <span className="text-gray-400  self-center line-through">$240.00</span>
            </div>
            <div className="h-10 p-4 rounded-md flex items-center justify-between">
                <button className="cursor-pointer" onClick={()=> count > 0 &&setCount(count => count-1)}><img src="src/assets/icon-minus.svg" alt="" /></button>
                <span className="font-semibold">{count}</span>
                <button className="cursor-pointer" onClick={()=>setCount(count =>count+1)}><img src="src/assets/icon-plus.svg" alt="" /></button>
            </div>
            <button onClick={addToCart} className="cursor-pointer shadow-orange-400 hover:text-white transition-colors duration-200 ease-in-out shadow-2xl flex items-center justify-center space-x-4 font-medium bg-orange-500 h-10 rounded-md w-full">
                <img className="w-4 h-4" src="src/assets/icon-cart.svg" alt="" />
                <span>Add To Cart</span>
            </button>
        </div>
    </>
  )
}
