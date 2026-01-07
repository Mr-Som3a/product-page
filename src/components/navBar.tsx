import { useState } from "react";
import { useCart } from "../store/contextApi";
import CartCard from "./cartCard";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [togglecart, setToggleCart] = useState(false);
  const { item } = useCart();
  console.log(item);

  const showMenu = () => {
    setOpen((prv) => !prv);
  };

  const handleCart = () => {
    setToggleCart((prv) => !prv);
  };
  const menuSection = [
    { id: 1, name: "Collections" },
    { id: 2, name: "Men" },
    { id: 3, name: "Women" },
    { id: 4, name: "About" },
    { id: 5, name: "Contact" },
  ];
  return (
    <nav className=" md:w-4/5 mx-auto flex items-center justify-between px-6 py-4 ">
      {/* mobile burger icon */}
      <button onClick={showMenu} className="md:hidden mx-2">
        <img src="src/assets/icon-menu.svg" alt="" />
      </button>
      {/* sideBar */}
      <div
        className={`fixed inset-0 z-20 transition-all duration-300 ease-in-out ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-[rgba(0,0,0,0.7)]  transition-opacity duration-300
            ${open ? "opacity-70" : "opacity-0"}
            `}
          onClick={showMenu} // Close sidebar when clicking on backdrop
        />

        {/* Sidebar */}
        <div
          className={`absolute left-0 top-0 h-full w-60 bg-white p-8 space-y-4 z-20 
      transform transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
        >
          <button onClick={showMenu}>
            <img src="src/assets/icon-close.svg" alt="Close menu" />
          </button>
          <ul className="text-lg font-bold space-y-4 mt-10 text-gray-700">
            {menuSection.map((section) => (
              <li key={section.id} className="hover:text-gray-400">
                {section.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* logo */}
      <div className="ms-2 me-8 ">
        <img src="/logo.svg" alt="" />
      </div>

      {/* menu */}
      <div className="hidden  md:flex justify-start">
        <ul className="flex  space-x-4 cursor-pointer">
          {menuSection.map((section) => (
            <li key={section.id} className="hover:text-gray-400">
              {section.name}
            </li>
          ))}
        </ul>
      </div>
      {/* links & profile */}
      <div className="flex flex-1 justify-end space-x-4 items-center ">
        <button className="relative" onClick={handleCart}>
          {item.length > 0 && (
            <div className="absolute -right-1 -top-2 w-5 h-4 rounded-full z-10 bg-amber-600 text-xs text-white">
              {1}
            </div>
          )}
          <img className="" src="src/assets/icon-cart.svg" alt="" />
        </button>
        <img className="w-8" src="src/assets/image-avatar.png" alt="" />
      </div>

      <div
        className={`absolute transform  transition-all duration-300 ease-in-out bg-white md:ring-1 ring-orange-700 top-20 z-10  
          rounded-2xl min-h-52 w-11/12 translate-x-5 md:left-auto sm:w-md  left-0 md:right-48 
          ${
            togglecart ? "opacity-100 translate-0 " : "opacity-0 -translate-y-8"
          }
          `}
      >
        <h3 className="font-semibold p-4 self-start">Cart</h3>
        <hr />
        <div className="h-32 flex w-full">
          {item.length > 0 ? (
            item.map((ele) => (
              <div className="flex-1" key={ele.id}>
                <CartCard item={ele} />
              </div>
            ))
          ) : (
            <div className=" text-gray-600 ">Your Cart is Empty</div>
          )}
        </div>
        <div className="flex justify-center">
          {item.length > 0 && (
            <button className="bg-orange-500 w-4/5 font-semibold hover:text-white transition-colors duration-200 cursor-pointer p-2 ease-in-out my-2 rounded  ">
              Checkout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
