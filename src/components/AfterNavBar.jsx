import Card from "./Card";
const AfterNavBar = ({ banner, card }) => {
  return (
    <div>
      <div className="w-screen h-auto lg:h-[80vh]">
        <img className="object-cover w-full h-full" src={banner} alt="banner" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:mt-2 lg:gap-2 lg:px-[100px]">
        {card.map(({ img, detail, section, path }) => (
          <Card
            key={path}
            img={img}
            detail={detail}
            section={section}
            path={path}
          />
        ))}
      </div>
    </div>
  );
};

export default AfterNavBar;
