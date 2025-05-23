import { Product, AfterNavBar, Slider } from "../components/index";
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
    detail: "Soak up the sun in style.",
    section: "MODERN MEN",
    path: "men",
  },
  {
    img: img2,
    detail: "Soak up the sun in style.",
    section: "MODERN WOMEN",
    path: "women",
  },
  {
    img: img3,
    detail: "Soak up the sun in style.",
    section: "MODERN KIDS",
    path: "kid",
  },
  {
    img: img4,
    detail: "Soak up the sun in style.",
    section: "TRENDING PRODUCT",
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
