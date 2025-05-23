import { Link } from "react-router-dom";

const Card = ({ img, detail, section, path }) => {
  return (
    <div className="w-auto h-fit lg:h-[70vh] bg-white lg:hover:border-[1px] lg:hover:p-[1px] border-black relative">
      <img
        className="w-full h-full lg:h-[73%] lg:opacity-100 opacity-90 lg:object-cover"
        src={img}
        alt="Men Model"
      />
      <div className="text-shadow-sm lg:text-shadow-none text-shadow-black absolute w-full left-1/2 bottom-12 -translate-x-1/2 lg:static lg:left-0 text-white lg:text-black lg:translate-0 flex flex-col justify-between items-baseline px-[5px] p-[1px] lg:p-[20px] lg:h-[27%]">
        <div className="flex w-full flex-col gap-4 lg:gap-2 items-center lg:items-baseline">
          <h1 className="lg:text-[20px] text-[30px] font-medium font-sans">
            {section}
          </h1>
          <h1 className="font-serifs text-[20px]">{detail}</h1>
          <Link
            to={path}
            className="lg:w-fit lg:mt-0 mt-5 lg:bg-transparent py-3 text-center bg-black/60 border-2 lg:border-none border-white rounded text-white lg:text-black w-[80%] font-mono font-semibold underline-offset-8 lg:underline text-[18px]"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
