import { Slider, AfterNavBar } from "../components/index";
import Banner from "../assets/images/Kid/Shoe_Banner.jpg";
import Men from "../assets/images/Kid/Men.avif";
import Women from "../assets/images/Kid/Women.webp";
import Discount from "../assets/images/Kid/Discount.webp";
import Trending from "../assets/images/Kid/Trending.avif";
import shoes from "../data/shoesData";
const all = shoes.filter(({ category }) => category === "kid");
const discount = all.filter(({ discount }) => discount !== 0);
const available = all.filter(({ status }) => status == "have stock");
const noStock = all.filter(({ status }) => status !== "have stock");
const card = [
  {
    img: Men,
    detail: "Soak up the sun in style.",
    section: "MODERN MEN",
    path: "/men",
  },
  {
    img: Women,
    detail: "Soak up the sun in style.",
    section: "MODERN WOMEN",
    path: "/women",
  },
  {
    img: Discount,
    detail: "Soak up the sun in style.",
    section: "SPECIAL OFFERS",
    path: "/sale",
  },
  {
    img: Trending,
    detail: "Soak up the sun in style.",
    section: "TRENDING PRODUCTS",
    path: "/new&trending",
  },
];
const Kid = () => {
  return(
    <div>
        <AfterNavBar banner={Banner} card={card}/>
        <Slider item={all} title={"All Products"}/>
        <Slider item={discount} title={"Special Offers"}/>
        <Slider item={available} title={"Available Products"}/>
        <Slider item={noStock} title={"Out Of Stocks"}/>
    </div>
  )
};

export default Kid;
