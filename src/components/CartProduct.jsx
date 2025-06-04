import { faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useCart} from "../hooks/useCartProvider"
const CartProduct = ({ id, name, imgsrc, price, discount, quantity }) => {
  const {removeFromCart, increaseQty, decreaseQty} = useCart()
  return (
    <div key={id} className="grid grid-cols-[1fr_2fr_1fr] gap-4 w-screen h-auto border-b-[1px] border-black items-center px-3">
      <div className="w-[100px] h-[100px] border-2 border-gray-500/50 rounded-[20px] my-3 mx-5">
        <img className="w-full h-full rounded-[20px] scale-90 object-cover" src={imgsrc} alt="img" />
      </div>
      <main className="flex flex-col gap-1 justify-center">
        <span className="text-[16px] tracking-tighter">{name}</span>
        <span className="text-[20px] font-medium">
          ${(price - (price * discount) / 100).toFixed(2)}
        </span>
        <span className="text-[16px] flex items-center gap-3">
          <FontAwesomeIcon onClick={() => decreaseQty(id)} className="text-red-500" icon={faMinusSquare} />{" "}
          {quantity}{" "}
          <FontAwesomeIcon onClick={() => increaseQty(id)} className="text-green-500" icon={faPlusSquare} />
        </span>
      </main>
      <button onClick={() => removeFromCart(id)} className="bg-red-500 active:bg-red-500/70 px-3 py-1 text-[15px] text-white rounded border-[1px] border-black/50">Remove</button>
    </div>
  );
};

export default CartProduct;
