import Product from "./Product";
const Slider = ({ item, title }) => {
  return (
    <>
      <h1 className="font-mono text-[30px] flex justify-center py-3 lg:mt-[10px]">
        {title}
      </h1>
      <div className="w-screen h-fit overflow-x-scroll px-10">
        <div className="w-fit flex gap-2 overflow-x-hidden ">
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
                name={name}
                price={price}
                imgsrc={imgsrc}
                discount={discount}
                status={status}
                colors={colors}
                category={category}
                details={details}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Slider;
