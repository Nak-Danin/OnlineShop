import { faShoppingCart, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

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
}) => {
  const [showDetails, setShowDetails] = useState(false);
  useEffect(() => {
    if (showDetails) {
      document.querySelector("body").style.cssText = "overflow-y: hidden";
    } else {
      document.querySelector("body").style.cssText = "overflow-y: auto";
    }
  }, [showDetails]);
  return (
    <>
      <div className="w-[200px] h-[280px] rounded-[10px] border-2 border-black/50">
        <img
          className="w-full bg-red-300 h-[60%] rounded-t-[10px]"
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
          <span className="text-[14px]">
            Price: {(price - (price * discount) / 100).toFixed(2)}$
          </span>
          <div className="flex justify-between items-center">
            <button
              onClick={() => setShowDetails(true)}
              className="bg-green-500 w-fit px-2 py-[1px] rounded text-white text-[14px]"
            >
              Details
            </button>
            <span className="text-[12px]">
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
            <FontAwesomeIcon onClick={() => setShowDetails(false)} icon={faX} />
          </span>
          <div className="flex flex-col justify-center w-full h-full md:flex-row rounded-[20px]">
            <div className="w-full h-[50%] md:h-[100%] rounded-t-[20px] bg-emerald-500 flex items-center md:rounded-e-none md:rounded-s-[20px] justify-center">
              <img
                className="w-[70%] h-[80%] md:w-[80%] md:h-[70%] rounded-[10px] bg-blue-400"
                src="https://t3.ftcdn.net/jpg/01/21/81/86/360_F_121818673_6EID5iF76VCCc4aGOLJkd94Phnggre3o.jpg"
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
                <span>{status}</span>
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
                <span className="">
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
    </>
  );
};

export default Product;
