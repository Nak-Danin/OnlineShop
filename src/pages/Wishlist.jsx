import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWishlist } from "../hooks/useWishlistContext";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { WishlistItem } from "../components";
import { Link } from "react-router-dom";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
const Wishlist = () => {
  const { wishlist, clearWishlist } = useWishlist();
  return (
    <div className="w-screen h-fit flex flex-col gap-2 items-center py-[20px] md:py-[50px]">
      <Link
        to="/"
        className="flex items-center gap-4 ps-[20px] lg:ps-[100px] text-[20px] md:text-[25px] w-full mt-3"
      >
        <FontAwesomeIcon
          className="text-[20px] md:text-[25px] mt-1 bg-green-300 p-2 rounded"
          icon={faLongArrowAltLeft}
        />
        Back
      </Link>
      <FontAwesomeIcon className="text-[30px] md:text-[40px] text-red-500" icon={faHeart} />
      <h1 className="text-[25px] md:text-[40px] font-semibold underline underline-offset-4">
        My Wishlist
      </h1>
      {wishlist.length <= 0 ? (
        <span className="text-[20px] mt-3 text-gray-700/90">
          There's no item in the Wishlist
        </span>
      ) : (
        <>
          <div className="grid grid-cols-[2fr_1fr_1fr_2fr] w-full py-2 md:py-5 border-b-[1px] border-black">
            <div className="text-center md:text-[20px] text-[14px]">Product name</div>
            <div className="text-center md:text-[20px] text-[14px]">Unit price</div>
            <div className="text-center md:text-[20px] text-[14px]">Status</div>
            <div className="flex ms-[25px] md:ms-[60px] lg:ms-[110px]">
              <button
                className="md:text-[20px] text-[12px] h-fit px-1 md:px-3 py-1 text-white rounded bg-red-500/90 hover:cursor-pointer active:bg-red-500/70"
                onClick={() => clearWishlist()}
              >
                {" "} 
                Clear Wishlist
              </button>
            </div>
          </div>
          {wishlist.map(({ id, name, imgsrc, price, status, quatity,discount }) => (
            <WishlistItem
              id={id}
              name={name}
              imgsrc={imgsrc}
              price={price}
              status={status}
              quantity={quatity}
              discount={discount}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Wishlist;
