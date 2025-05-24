import {Slider, AfterNavBar} from "../components";
import shoes from "../data/shoesData";
import Men from "../assets/images/Discount/Men.avif";
import Banner from "../assets/images/Discount/Shoe_Banner.jpg";
import Women from "../assets/images/Discount/Women.webp";
import Kid from "../assets/images/Discount/Kid.webp";
import Trending from "../assets/images/Discount/Trending.avif";
const card = [
    {
        img: Men,
        detail: "Elevate your wardrobe",
        section: "TRENDING MEN",
        path: "/men"
    },
    {
        img: Women,
        detail: "The latest in modern elegance.",
        section: "STYLISH WOMEN",
        path: "/women"
    },
    {
        img: Kid,
        detail: "Playful fashion personalities.",
        section: "FRESH FOR KIDS",
        path: "/kid"
    },
    {
        img: Trending,
        detail: "Hot picks for Everyone.",
        section: "TRENDING PRODUCTS",
        path: "/new&trending"
    },
];
const all = shoes.filter(({discount}) => discount !==0);
const men = all.filter(({category}) => category === "men");
const women = all.filter(({category}) => category === "women");
const kid = all.filter(({category}) => category === "kid");
const available = all.filter(({status}) => status === "have stock");
const Sale = () => {
    console.log(all)
  return (
    <div>
        <AfterNavBar banner={Banner} card={card}/>
        <Slider item={available} title={"Available Offers"}/>
        <Slider item={men} title={"Men Products"}/>
        <Slider item={women} title={"Women Products"}/>
        <Slider item={kid} title={"Kids Products"}/>
    </div>
  )
}

export default Sale