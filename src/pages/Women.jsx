import { AfterNavBar, Slider } from "../components/index";
import Banner from "../assets/images/Women/Shoe_Banner.jpg";
import Men from "../assets/images/Women/Men.webp";
import Discount from "../assets/images/Women/Discount.webp";
import Kid from "../assets/images/Women/Kid.webp";
import Trending from "../assets/images/Women/Trending.jpg";
import shoes from "../data/shoesData";
const all = shoes.filter(({ category }) => category === "women");
const discount = all.filter(({ discount }) => discount !== 0);
const available = all.filter(({ status }) => status == "have stock");
const noStock = all.filter(({ status }) => status !== "have stock");
const card = [
  {
    img: Men,
    detail: "Sharp looks for modern men",
    section: "MEN'S COLLECTION",
    path: "/men",
  },
  {
    img: Discount,
    detail: "Big savings, limited time only",
    section: "SPECIAL OFFER",
    path: "/sale",
  },
  {
    img: Kid,
    detail: "Cool styles for every kid",
    section: "KIDS' STYLE",
    path: "/kid",
  },
  {
    img: Trending,
    detail: "This week's top trending picks",
    section: "TRENDING PRODUCT",
    path: "/new&trending",
  },
];

const Women = () => {
  return (
    <div>
      <AfterNavBar banner={Banner} card={card} />
      <Slider item={all} title={"All Products"} />
      <Slider item={discount} title={"Special Offers"} />
      <Slider item={available} title={"Available Products"} />
    </div>
  );
};

export default Women;
