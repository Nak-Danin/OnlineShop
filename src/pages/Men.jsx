import { AfterNavBar, Slider } from "../components/index";
import Banner from "../assets/images/Shoe_Banner2.jpg";
import Women from "../assets/images/Men/Women.webp";
import Discount from "../assets/images/Men/Discount.webp";
import Kid from "../assets/images/Men/Kid.webp";
import Trending from "../assets/images/Men/Trending1.webp";
import shoes from "../data/shoesData";
const all = shoes.filter(({ category }) => category === "men");
const discount = all.filter(({ discount }) => discount !== 0);
const available = all.filter(({ status }) => status == "have stock");
const noStock = all.filter(({ status }) => status !== "have stock");
const card = [
  {
    img: Women,
    detail: "Chic styles for modern women",
    section: "WOMEN'S PICKS",
    path: "/women",
  },
  {
    img: Kid,
    detail: "Fun and comfy kidswear",
    section: "KIDS' COLLECTION",
    path: "/kid",
  },
  {
    img: Discount,
    detail: "Best deals you can't miss",
    section: "HOT OFFERS",
    path: "/sale",
  },
  {
    img: Trending,
    detail: "Shop what's trending today",
    section: "TOP TRENDS",
    path: "/new&trending",
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
