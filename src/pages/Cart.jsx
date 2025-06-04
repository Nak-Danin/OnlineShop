import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartProduct } from "../components/index";
import { useCart } from "../hooks/useCartProvider";
import { Link } from "react-router-dom";
import { faArrowLeft, faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
const Cart = () => {
  const { cart, clearCart } = useCart();
  const total = cart.reduce((sum, {price, quantity}) => sum += price * quantity,0)
  const count = cart.reduce((sum, {quantity}) => sum += quantity, 0)
  return (
    <div>
      <Link to='/' className="flex items-center gap-4 px-5 text-[20px]"><FontAwesomeIcon className="text-[20px] mt-1" icon={faLongArrowAltLeft}/>Back</Link>
      <header className="flex flex-col justify-center items-center border-b-[1px] border-black py-6">
        <div className="flex justify-between items-center px-5 pb-3 w-full">
          <span className="text-[30px] font-medium font-serif pb-3">My Bag</span>
          <span className="font-medium">Total {count} Items</span>
        </div>
        {cart.length > 0 && (<button onClick={() => clearCart()} className="bg-blue-500 active:bg-blue-500/80 w-[85%] py-2 text-[15px] text-white rounded border-[1px] border-black/50">Empty Cart</button>)}
      </header>
      
      {cart.length === 0 ? (
      <div className="text-center text-gray-600 font-medium p-10">There is no item in the cart.</div>
    ) : (
      <>
        <div>
          {cart.map(({ id, name, imgsrc, price, discount, quantity }) => (
            <CartProduct
              key={id}
              id={id}
              name={name}
              imgsrc={imgsrc}
              price={price}
              discount={discount}
              quantity={quantity}
            />
          ))}
        </div>

        <footer className="my-3 flex flex-col justify-center items-center">
          <div className="flex justify-between px-5 items-center h-[50px] w-screen">
            <span className="text-[14px] font-mono font-bold">TOTAL</span>
            <span className="text-[20px] font-medium">${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-center items-center px-7 w-screen">
            <Link className="text-[20px] text-white text-center bg-pink-600/80 active:bg-pink-600/60 w-full py-2 rounded-[5px]">
              Next
            </Link>
          </div>
        </footer>
      </>
    )}
      
    </div>
  );
};

export default Cart;
