import Banner from "../assets/images/Trending/Shoe_Banner1.jpg";
import Men from "../assets/images/Trending/Men.jpg";
import Women from "../assets/images/Trending/Women.avif";
import Kid from "../assets/images/Trending/Kid.jpg";
import Discount from "../assets/images/Trending/Discount.webp";
import {Slider, AfterNavBar} from "../components";
import shoes from "../data/shoesData";

const card = [
    {
        img: Men,
        detail: "Elevate your everyday look.",
        section: "TRENDING MEN",
        path: "/men"
    },
    {
        img: Women,
        detail: "Find your perfect outfit.",
        section: "STYLE FOR HER",
        path: "/women"
    },
    {
        img: Kid,
        detail: "Comfort meets cute for kids.",
        section: "LITTLE TRENDSETTERS",
        path: "/kids"
    },
    {
        img: Discount,
        detail: "Unbeatable deals await.",
        section: "LIMITED TIME OFFERS",
        path: "/sale"
    }
];

const allLength = Math.floor(shoes.length/2);
const all = shoes.slice(0,allLength);
const men = all.filter(({category}) => category === "men");
const women = all.filter(({category}) => category === "women");
const kid = all.filter(({category}) => category === "kid");
const Trending = () => {
  return (
    <div>
        <AfterNavBar banner={Banner} card={card}/>
        <Slider item={all} title={"All Trending"}/>
        <Slider item={men} title={"Men Trending"}/>
        <Slider item={women} title={"Women Trending"}/>
        <Slider item={kid} title={"Kids Trending"}/>
    </div>
  )
}

export default Trending