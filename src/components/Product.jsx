import {
  faShoppingBag,
  faShoppingCart,
  faX,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useCart } from "../hooks/useCartProvider";

const Product = ({
  id,
  name,
  price,
  imgsrc,
  discount,
  status,
  colors,
  category,
  details,
  selectId,
  setSelectId,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const isSelected = selectId === id;
  const [isHearted, setIsHearted] = useState(false);
  const [showAddedToCart, setShowAddToCart] = useState(false);
  useEffect(() => {
    if (showDetails) {
      document.querySelector("body").style.cssText = "overflow-y: hidden";
    } else {
      document.querySelector("body").style.cssText = "overflow-y: auto";
    }
  }, [showDetails]);
  const product = {
    id,
    name,
    price,
    imgsrc,
    status,
    colors,
    category,
    details,
    discount,
  };
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart(product);
    setShowAddToCart(true);
  };
  useEffect(
    () => {
      if (showAddedToCart) {
        const timeout = setTimeout(() => setShowAddToCart(false), 2000);
        return () => clearTimeout(timeout);
      }
    },
    [addToCart],
    [showAddedToCart]
  );
  return (
    <>
      <div
        className={`fixed w-[130px] px-2 py-1 overflow-hidden h-auto top-30 md:w-[200px] md:top-[28%] lg:top-50 md:text-[20px] md:p-3 right-0 bg-gray-600 text-white z-50 rounded-s-[5px] transition-transform duration-500 ${
          showAddedToCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        Product Added
      </div>
      <div className="relative">
        <div
          className={`absolute top-[10px] left-[10px] text-[20px] z-10 flex flex-col lg:hidden justify-between h-[50px] ${
            isSelected ? "block" : "hidden"
          }`}
        >
          <FontAwesomeIcon
            onClick={() => setIsHearted(!isHearted)}
            className={` ${isHearted ? "text-red-500" : "text-white"}`}
            icon={faHeart}
          />
          <FontAwesomeIcon className="text-gray-700" icon={faShoppingBag} />
        </div>
        <div
          onClick={() => {
            if (window.innerWidth < 992) {
              setSelectId(selectId === id ? null : id);
            }
          }}
          onMouseOver={() => {
            if (window.innerWidth >= 992) setSelectId(id);
          }}
          onMouseLeave={() => {
            if (window.innerWidth >= 992) setSelectId(null);
          }}
          className={`w-[200px] h-[280px] relative rounded-[10px] border-2 border-black/50 ${
            isSelected && "border-blue-500"
          }`}
        >
          <div
            className={`absolute w-full h-[60%] bg-black/15 top-0 right-0 rounded-t-[8px] ${
              isSelected ? "block" : "hidden"
            }`}
          >
            <div
              className={`absolute top-[10px] left-[10px] text-[20px] z-[8] flex-col hidden justify-between h-[50px] ${
                isSelected ? "lg:flex" : "hidden"
              }`}
            >
              <FontAwesomeIcon
                onClick={() => setIsHearted(!isHearted)}
                className={` ${isHearted ? "text-red-500" : "text-white"}`}
                icon={faHeart}
              />
              <FontAwesomeIcon className="text-gray-700" icon={faShoppingBag} />
            </div>
          </div>
          <img
            className="w-full h-[60%] bg-white object-cover rounded-t-[10px]"
            src={imgsrc}
            alt={name}
          />
          <div
            key={id}
            className="flex flex-col gap-1 w-full h-[40%] rounded-b-[10px] px-3 bg-white"
          >
            <span className="text-[16px] font-semibold">{name}</span>
            {discount > 0 && (
              <span className="text-[14px] text-red-500 font-medium">
                Discount: {discount} %
              </span>
            )}
            <span className="text-[14px]">Price: {price.toFixed(2)}$</span>
            <div className="flex justify-between items-center">
              <button
                onClick={() => setShowDetails(true)}
                className="bg-green-500 w-fit px-2 py-[1px] rounded text-white text-[14px]"
              >
                Details
              </button>
              <span
                className="text-[12px] hover:cursor-pointer"
                onClick={handleAddToCart}
              >
                Add to cart
                <FontAwesomeIcon className="ms-2" icon={faShoppingCart} />
              </span>
            </div>
          </div>
        </div>
        <div
          className={`fixed inset-0 w-screen h-screen bg-black/70 flex justify-center items-center z-10 ${
            showDetails ? "block" : "hidden"
          }`}
        >
          <article className="w-[70vw] h-[55vh] lg:w-[45%] lg:h-[39vh] md:h-[27vh] rounded-[20px] relative border-2 border-black flex flex-col items-center">
            <span className="flex w-full justify-end p-3 absolute">
              <FontAwesomeIcon
                onClick={() => setShowDetails(false)}
                icon={faX}
              />
            </span>
            <div className="flex flex-col justify-center w-full h-full md:flex-row rounded-[20px]">
              <div className="w-full h-[50%] md:h-[100%] rounded-t-[20px] bg-emerald-500 flex items-center md:rounded-e-none md:rounded-s-[20px] justify-center">
                <img
                  className="w-[70%] h-[80%] md:w-[80%] md:h-[70%] rounded-[10px] bg-white object-cover"
                  src={imgsrc}
                  alt={name}
                />
              </div>
              <div className="h-[50%] w-full md:h-[100%] bg-gray-200 rounded-b-[20px] flex justify-center md:rounded-s-none md:rounded-e-[20px] flex-col gap-1 md:gap-2 px-3 text-black text-[12px] md:text-[15px] lg:text-[14px]">
                <div className="grid grid-cols-2">
                  <span className="">Product Name&nbsp;&nbsp; : </span>
                  <span>{name}</span>
                </div>
                <div className="grid grid-cols-2">
                  {discount > 0 && (
                    <span>Special Offer &nbsp;&nbsp;&nbsp;&nbsp; : </span>
                  )}
                  {discount > 0 && <span>{discount} % off</span>}
                </div>
                <div className="grid grid-cols-2">
                  <span>Product Price &nbsp;&nbsp;&nbsp; : </span>
                  <span>{(price - (price * discount) / 100).toFixed(2)}$</span>
                </div>
                <div className="grid grid-cols-2">
                  <span>Product Status &nbsp;&nbsp;: </span>
                  <span
                    className={`font-semibold ${
                      status === "have stock"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {status}
                  </span>
                </div>
                <div className="grid grid-cols-2">
                  <span>Color Available&nbsp; : </span>
                  <span className="flex gap-1">
                    {colors.map((item, index) => (
                      <span key={index}>{item},</span>
                    ))}
                  </span>
                </div>
                <div className="grid grid-cols-2">
                  <span>
                    Category &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; :{" "}
                  </span>
                  <span>{category}</span>
                </div>
                <span className="text-center font-medium font-mono text-blue-500">
                  {" "}
                  {details}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Product;
