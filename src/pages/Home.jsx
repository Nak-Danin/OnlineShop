import Product from "../components/Product";
import shoes from "../data/shoesData";
const men = shoes.filter(({ category }) => category === "men");
const women = shoes.filter(({ category }) => category === "women");
const kid = shoes.filter(({ category }) => category == "kid");
const sale = shoes.filter(({ discount }) => discount !== 0);
const Home = () => {
  return (
    <div className="relative">
      <h1 className="font-mono text-[30px] flex justify-center py-3 lg:mt-[10px]">
        Men Section
      </h1>
      <div className="w-screen h-fit overflow-x-scroll px-10">
        <div className="w-fit flex gap-2 overflow-x-hidden ">
          {men.map(
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
      <h1 className="font-mono text-[30px] flex justify-center py-3 mt-[40px] lg:mt-[10px]">
        Women Section
      </h1>
      <div className="w-screen h-fit overflow-x-scroll px-10">
        <div className="w-fit flex gap-2 overflow-x-hidden ">
          {women.map(
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
      <h1 className="font-mono text-[30px] flex justify-center py-3 mt-[40px] lg:mt-[10px]">
        Kids Section
      </h1>
      <div className="w-screen h-fit overflow-x-scroll px-10">
        <div className="w-fit flex gap-2 overflow-x-hidden ">
          {kid.map(
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
      <h1 className="font-mono text-[30px] flex justify-center py-3 mt-[40px] lg:mt-[10px]">
        Sales Section
      </h1>
      <div className="w-screen h-fit overflow-x-scroll px-10">
        <div className="w-fit flex gap-2 overflow-x-hidden ">
          {sale.map(
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
    </div>
  );
};

export default Home;
