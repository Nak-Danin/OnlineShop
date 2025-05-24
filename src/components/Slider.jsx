import { useState } from "react";
import Product from "./Product";
const Slider = ({ item, title }) => {
  const [selectId, setSelectId] = useState(null);
  return (
    <>
      <h1 className="font-mono text-[30px] flex justify-center py-3 lg:mt-[10px] mt-[40px] md:mt-[30px]">
        {title}
      </h1>
      <div className="w-screen px-10 overflow-x-scroll h-fit">
        <div className="flex gap-[20px] overflow-x-hidden w-fit ">
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
