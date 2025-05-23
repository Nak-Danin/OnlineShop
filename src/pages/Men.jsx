import { AfterNavBar, Slider } from "../components/index";
import Banner from "../assets/images/Shoe_Banner2.jpg";
import img1 from "../assets/images/MenModel.jpg";
import img2 from "../assets/images/WomenModel.avif";
import img3 from "../assets/images/KidModel.jpg";
import img4 from "../assets/images/TrendingModel.webp";
import shoes from "../data/shoesData";
const all = shoes.filter(({ category }) => category === "men");
const discount = all.filter(({ discount }) => discount !== 0);
const available = all.filter(({ status }) => status == "have stock");
const noStock = all.filter(({ status }) => status !== "have stock");
const card = [
  {
    img: img2,
    detail: "Soak up the sun in style.",
    section: "MODERN WOMEN",
    path: "women",
  },
  {
    img: img1,
    detail: "Soak up the sun in style.",
    section: "SPECIAL OFFER",
    path: "sale",
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
const Men = () => {
  return (
    <div>
      <AfterNavBar banner={Banner} card={card} />
      <Slider item={all} title={"All Products"} />
      <Slider item={discount} title={"Special Offers"} />
      <Slider item={available} title={"Available Products"} />
      <Slider item={noStock} title={"Out Of Stocks"} />
    </div>
  );
};

export default Men;
