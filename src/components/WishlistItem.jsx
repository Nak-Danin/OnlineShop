import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../hooks/useCartProvider";
import { useWishlist } from "../hooks/useWishlistContext";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
const WishlistItem = ({ id, name, imgsrc, price, status, quantity,discount }) => {
  const product = { id, name, imgsrc, price, status, quantity, discount};
  const { addToCart } = useCart();
  const { removeFromWishlist } = useWishlist();
  const handleAddToCart = () => {
    addToCart(product);
    removeFromWishlist(product.id);
  };
  return (
    <div
      key={id}
      className="grid grid-cols-[2fr_1fr_1fr_2fr] gap-2 w-full pb-2 border-b-[1px] border-black"
    >
      <div className="grid grid-cols-2 gap-2 items-center ps-[5px] lg:ps-[50px] md:ps-[20px] md:py-2">
        <div className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] border-2 border-gray-500/50 rounded-[20px]">
          <img
            className="w-full h-full rounded-[20px] scale-90 object-cover"
            src={imgsrc}
            alt="img"
          />
        </div>
        <span className="md:text-[20px] text-[12px] font-medium">{name}</span>
      </div>
      <h1 className="md:text-[20px] text-[13px] flex justify-evenly items-center">${price}</h1>
      <h1 className="md:text-[20px] text-[11px] flex justify-evenly items-center">{status}</h1>
      <div className="flex justify-evenly items-center">
        <button
        disabled={status === "out of stock"}
          className={`md:text-[20px] text-[10px] h-fit px-1 md:px-3 py-1 text-white rounded ${status === "have stock" ? "hover:cursor-pointer bg-violet-800/70 active:bg-violet-800/50":"hover:cursor-not-allowed bg-black/25"}`}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <FontAwesomeIcon
          onClick={() => removeFromWishlist(product.id)}
          className="text-red-500 text-[15px] md:text-[25px] hover:cursor-pointer"
          icon={faXmarkCircle}
        />
      </div>
    </div>
  );
};

export default WishlistItem;
