import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction} from "react";

interface Item {
    id:number,
    url:string,
    alt:string,
    count:number
}

type CartContextType = {
    item:Item[],
    setItem: Dispatch<SetStateAction<Item[]>>
}
interface CartProviderProps {
    children:ReactNode
}
const CartContext = createContext<CartContextType|undefined>(undefined)


export default function CartProvider({ children }: CartProviderProps) {
  const [item, setItem] = useState<Item[]>([]);

  // Memoize the value to prevent unnecessary re-renders
  const value = { item, setItem };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}