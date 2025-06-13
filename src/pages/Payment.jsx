import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faBank, faGreaterThan, faLock, faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCartProvider";
import visa from "../assets/images/visaLogo.png";
import mastercard from "../assets/images/mastercard.png";
const Payment = () => {
    const {cart} = useCart();
    const total = cart.reduce((sum, {price, quantity, discount}) => sum += (price - price * discount /100) * quantity, 0);

  return (
    <div className="w-screen flex flex-col items-center">
        <Link
          to="/cart"
          className="flex items-center gap-4 px-5 text-[20px] md:text-[25px] w-full mt-3"
        >
          <FontAwesomeIcon
            className="text-[20px] md:text-[25px] mt-1 bg-green-300 p-2 rounded"
            icon={faLongArrowAltLeft}
          />
          Back to Cart
        </Link>
      <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-[100px] lg:px-[100px] w-[95%] mt-[50px]">
        <div className="flex flex-col items-center w-full lg:w-[50%]">
            <ul className="w-full space-y-3">
                <li className="bg-gray-300/80 w-full rounded text-center py-2 text-[20px]">
                    Choose one of the payment options
                </li>
                <li className="flex justify-center items-center gap-1 text-[20px] md:text-[25px] lg:text-[20px] text-gray-800/90 font-semibold py-3 border-[2px] border-gray-400/80 rounded-xl hover:cursor-pointer hover:border-blue-400 hover:bg-black/90 hover:text-white active:bg-black/70 active:text-white">
                    <FontAwesomeIcon icon={faApple}/> Pay
                </li>
                <li className="flex justify-center items-center gap-1 text-[20px] md:text-[25px] lg:text-[20px] text-gray-800/90 font-semibold py-3 border-[2px] border-gray-400/80 rounded-xl hover:cursor-pointer hover:border-blue-400 hover:bg-black/90 hover:text-white active:bg-black/70 active:text-white">
                    <FontAwesomeIcon className="text-[16px] md:text-[20px] lg:text-[16px]" icon={faGoogle}/> Pay
                </li>
                <li className="flex items-center gap-3 border-[2px] border-green-500/90 px-4 bg-green-100/30 rounded-xl py-3 hover:border-blue-400 hover:bg-yellow-50/80 hover:cursor-pointer">
                    <div className="flex flex-col w-[30%] md:w-[10%]">
                        <img src={visa} alt="visa" />
                        <img src={mastercard} alt="matercard" />
                    </div>
                    <div>
                        <h1 className="font-medium text-[25px]">Pay by card</h1>
                        <span className="text-[16px] md:text-[20px] lg:text-[16px]">To pay, please enter your VISA card, MasterCard or Maestro payment card information </span>
                    </div>
                </li>
                <li className="flex items-center gap-3 border-[2px] border-gray-500/90 px-4 rounded-xl py-4 hover:border-blue-400 hover:bg-yellow-50/80 hover:cursor-pointer">
                    <div className="flex justify-center items-center w-[20%] md:w-[10%]">
                        <FontAwesomeIcon className="text-[25px]" icon={faBank}/>
                    </div>
                    <div>
                        <h1 className="font-medium text-[25px]">Pay via Internet banking</h1>
                        <span className="text-[16px] md:text-[20px] lg:text-[16px]">Do you have access to Internet banking and want to pay immediately? Select your bank and make the payment.</span>
                    </div>
                </li>
            </ul>
        </div>
        <div className="flex flex-col gap-3 w-full lg:w-[50%]">
            <div className="flex flex-col justify-center items-center w-full bg-gray-300/80 rounded-md py-[20px]">
                <span className="text-[20px]">Total price</span>
                <span className="font-bold text-[40px]">${total.toFixed(2)}</span>
                <ul className="w-[80%] space-y-2 my-3">
                    {cart.map(({id,name, price, quantity, discount}) => (
                        <li key={id} className="flex justify-between bg-black/90 text-white px-3 py-2 rounded">
                            <span>{name}</span>
                            <span>${((price - price * discount /100) * quantity).toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="md:flex flex-col gap-3 justify-center items-center p-5 bg-gray-300/80 rounded-md hidden">
                <FontAwesomeIcon className="text-[40px]" icon={faLock}/>
                <span className="w-[80%] text-center text-[18px] md:text-[20px] lg:text-[18px] leading-loose">Your payment is 100% safe and secure. We use encryption to protect your data and only work with verified payment gateways. Your trust is a priority for us.</span>
            </div>
            <button className="hidden lg:flex justify-center gap-5 items-center bg-green-500/80 py-3 rounded-md hover:cursor-pointer text-[20px]">Continue<FontAwesomeIcon className="text-[13px] mt-1" icon={faGreaterThan}/> </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
