import { AfterNavBar, Slider } from "../components/index";
import shoes from "../data/shoesData";
import Banner from "../assets/images/Shoe_Banner.jpg";
import img1 from "../assets/images/MenModel.jpg";
import img2 from "../assets/images/WomenModel.avif";
import img3 from "../assets/images/KidModel.jpg";
import img4 from "../assets/images/TrendingModel.webp";
const men = shoes.filter(({ category }) => category === "men");
const women = shoes.filter(({ category }) => category === "women");
const kid = shoes.filter(({ category }) => category == "kid");
const sale = shoes.filter(({ discount }) => discount !== 0);
const card = [
  {
    img: img1,
    detail: "Style upgrades for modern men",
    section: "MEN'S FASHION",
    path: "men",
  },
  {
    img: img2,
    detail: "Confident looks for women",
    section: "WOMEN'S STYLE",
    path: "women",
  },
  {
    img: img3,
    detail: "Fun fits for stylish kids",
    section: "KIDS' PICKS",
    path: "kid",
  },
  {
    img: img4,
    detail: "Hot items trending this week",
    section: "TRENDING PRODUCTS",
    path: "new&trending",
  },
];
const Home = () => {
  return (
    <div className="relative">
      <AfterNavBar banner={Banner} card={card} />
      <Slider item={men} title={"Men Section"} />
      <Slider item={women} title={"Women Section"} />
      <Slider item={kid} title={"Kids Section"} />
      <Slider item={sale} title={"Sales Section"} />
    </div>
  );
};

export default Home;
