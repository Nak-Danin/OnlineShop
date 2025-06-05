import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartProduct } from "../components/index";
import { useCart } from "../hooks/useCartProvider";
import { Link } from "react-router-dom";
import {
  faArrowLeft,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";
const Cart = () => {
  const { cart, clearCart } = useCart();
  const total = cart.reduce(
    (sum, { price, quantity }) => (sum += price * quantity),
    0
  );
  const count = cart.reduce((sum, { quantity }) => (sum += quantity), 0);
  return (
    <div className="flex flex-col items-center justify-center">
      <Link
        to="/"
        className="flex items-center gap-4 px-5 text-[20px] md:text-[25px] w-full mt-3"
      >
        <FontAwesomeIcon
          className="text-[20px] md:text-[25px] mt-1 bg-green-300 p-2 rounded"
          icon={faLongArrowAltLeft}
        />
        Back
      </Link>
      <header className="flex flex-col justify-center items-center border-b-[1px] border-black py-6 w-full">
        <div className="flex justify-between md:w-[80%] items-center px-5 pb-3 w-full">
          <span className="text-[30px] md:text-[50px] font-medium font-serif pb-3 underline underline-offset-6">
            My Cart
          </span>
          <span className="font-medium md:text-[20px]">
            Total {count} Items
          </span>
        </div>
        {cart.length > 0 && (
          <button
            onClick={() => clearCart()}
            className="bg-blue-500 active:bg-blue-500/80 w-[50%] py-2 text-[15px] text-white rounded border-[1px] border-black/50 md:hidden"
          >
            Empty Cart
          </button>
        )}
        {cart.length > 0 && (
          <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr] w-full px-[50px] mt-[20px] items-center">
            <span>Items</span>
            <span className="ms-1">Quantity</span>
            <span className="lg:ms-4 md:ms-5">Price</span>
            {cart.length > 0 && (
              <button
                onClick={() => clearCart()}
                className="bg-blue-500 active:bg-blue-500/80 lg:w-[50%] md:w-[65%] py-2 text-[15px] text-white rounded border-[1px] border-black/50 hidden md:block ms-[37px] hover:cursor-pointer"
              >
                Empty Cart
              </button>
            )}
          </div>
        )}
      </header>

      {cart.length === 0 ? (
        <div className="text-center text-gray-600 font-medium p-10">
          There is no item in the cart.
        </div>
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
            <div className="flex justify-between md:justify-end md:gap-[100px] md:pe-[70px] lg:gap-[230px] lg:pe-[170px] px-5 items-center h-[50px] w-screen">
              <span className="text-[14px] md:text-[19px] md:mt-[2px] lg:text-[23px] font-mono font-bold md:font-normal">
                TOTAL:
              </span>
              <span className="text-[20px] font-medium">
                ${total.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-end items-center px-7 w-screen md:pe-[60px] lg:pe-[141px]">
              <Link className="text-[20px] text-white text-center md:w-[255px] lg:w-fit lg:px-5 bg-green-600/90 active:bg-green-600/60 w-screen py-2 rounded-[5px] hover:cursor-pointer">
                Check Out
              </Link>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default Cart;
