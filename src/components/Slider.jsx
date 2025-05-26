import { useState, useEffect, useRef } from "react";
import Product from "./Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
const Slider = ({ item, title }) => {
  const [selectId, setSelectId] = useState(null);
  // useRef instead of document.querySelector
  const outerRef = useRef(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false); 

  const itemWidth = 220; // 200px + 20px gap
  const handleScrollCheck = () => {
    const outer = outerRef.current;
    const scrollLeft = Math.round(outer.scrollLeft);
    const maxScroll = outer.scrollWidth - outer.clientWidth;

    // Update React state instead of DOM directly
    setIsPrevDisabled(scrollLeft <= 0);
    setIsNextDisabled(scrollLeft >= maxScroll - 1);
  };
  useEffect(() => {
    const outer = outerRef.current;
    outer.addEventListener("scroll", handleScrollCheck);
    window.addEventListener("resize", handleScrollCheck);
    // Initial check
    handleScrollCheck();
    return () => {
      outer.removeEventListener("scroll", handleScrollCheck);
      window.removeEventListener("resize", handleScrollCheck);
    };
  }, []);
  const scrollBy = (amount) => {
    outerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <>
      <h1 className="font-mono text-[30px] flex justify-center py-3 lg:mt-[10px] mt-[40px] md:mt-[30px]">
        {title}
      </h1>
      <div className="flex justify-center gap-3 pb-4">
        <button onClick={() => scrollBy(-itemWidth)} disabled={isPrevDisabled} className={`${isPrevDisabled && "opacity-50 cursor-not-allowed"}`}>
          <FontAwesomeIcon
            className="border-[1px] border-black py-1 px-3 rounded-[10px] text-xl hover:text-white hover:bg-black active:text-white active:bg-black"
            icon={faBackward}
          />
        </button>
        <button onClick={() => scrollBy(itemWidth)} disabled={isNextDisabled} className={`${isNextDisabled && "opacity-50 cursor-not-allowed"}`}>
          <FontAwesomeIcon
            className="border-[1px] border-black py-1 px-3 rounded-[10px] text-xl hover:text-white hover:bg-black active:text-white active:bg-black"
            icon={faForward}
          />
        </button>
      </div>
      <div
        ref={outerRef}
        className="w-screen px-10 overflow-x-scroll h-fit scroll-smooth"
      >
        <div className="flex gap-[20px] overflow-x-hidden w-fit innerContainer">
          {item.map(
            ({
              id,
              name,
              price,
              imgsrc,
              discount,
              status,
              colors,
              category,
              details,
            }) => (
              <Product
                key={id}
                id={id}
                name={name}
                price={price}
                imgsrc={imgsrc}
                discount={discount}
                status={status}
                colors={colors}
                category={category}
                details={details}
                selectId={selectId}
                setSelectId={setSelectId}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Slider;
