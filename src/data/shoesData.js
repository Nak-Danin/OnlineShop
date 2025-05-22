import shoe_1 from "../assets/images/shoe_5.png"
import shoe_2 from "../assets/images/shoe_2.jpg"
import shoe_3 from "../assets/images/shoe_1.png"
import shoe_4 from "../assets/images/shoe_2.png"
import shoe_5 from "../assets/images/shoe_3.png"
import shoe_6 from "../assets/images/shoe_6.png"
import shoe_7 from "../assets/images/shoe_7.png"
import shoe_8 from "../assets/images/shoe_8.png"
import shoe_9 from "../assets/images/shoe_1.jpg"
import shoe_10 from "../assets/images/shoe_4.png"
const shoes = [
  {
    "id": 1,
    "category": "men",
    "discount": 0,
    "imgsrc": shoe_1,
    "details": "Colorful shoes perfect for kids' activities",
    "price": 153.56,
    "status": "out of stock",
    "name": "Fusion Grip",
    "colors": [
      "teal",
      "white"
    ]
  },
  {
    "id": 2,
    "category": "women",
    "discount": 17,
    "imgsrc": shoe_2,
    "details": "Comfortable sneakers for everyday wear",
    "price": 179.38,
    "status": "out of stock",
    "name": "TrailBlazer Pro",
    "colors": [
      "orange",
      "black"
    ]
  },
  {
    "id": 3,
    "category": "men",
    "discount": 23,
    "imgsrc": shoe_3,
    "details": "High-performance sports shoes for training",
    "price": 166.02,
    "status": "out of stock",
    "name": "ZoomLite X",
    "colors": [
      "brown",
      "tan",
      "black"
    ]
  },
  {
    "id": 4,
    "category": "men",
    "discount": 0,
    "imgsrc": shoe_7,
    "details": "Comfortable sneakers for everyday wear",
    "price": 171.79,
    "status": "have stock",
    "name": "Urban Sprint",
    "colors": [
      "blue",
      "red",
      "white"
    ]
  },
  {
    "id": 5,
    "category": "women",
    "discount": 17,
    "imgsrc": shoe_5,
    "details": "Lightweight running shoes with breathable mesh",
    "price": 184.63,
    "status": "have stock",
    "name": "AirFlex Runner",
    "colors": [
      "multicolor"
    ]
  },
  {
    "id": 6,
    "category": "women",
    "discount": 19,
    "imgsrc": shoe_6,
    "details": "Colorful shoes perfect for kids' activities",
    "price": 60.88,
    "status": "out of stock",
    "name": "CityStep Classic",
    "colors": [
      "orange",
      "black"
    ]
  },
  {
    "id": 7,
    "category": "women",
    "discount": 0,
    "imgsrc": shoe_7,
    "details": "Velcro strap shoes for easy wear",
    "price": 21.61,
    "status": "have stock",
    "name": "Urban Sprint",
    "colors": [
      "blue",
      "red",
      "white"
    ]
  },
  {
    "id": 8,
    "category": "kid",
    "discount": 30,
    "imgsrc": shoe_3,
    "details": "Classic slip-on shoes with cushioned soles",
    "price": 81.05,
    "status": "out of stock",
    "name": "ZoomLite X",
    "colors": [
      "teal",
      "white"
    ]
  },
  {
    "id": 9,
    "category": "women",
    "discount": 0,
    "imgsrc": shoe_9,
    "details": "Velcro strap shoes for easy wear",
    "price": 128.81,
    "status": "have stock",
    "name": "CloudStride",
    "colors": [
      "multicolor"
    ]
  },
  {
    "id": 10,
    "category": "kid",
    "discount": 13,
    "imgsrc": shoe_8,
    "details": "Comfortable sneakers for everyday wear",
    "price": 97.99,
    "status": "out of stock",
    "name": "AeroStreet",
    "colors": [
      "brown",
      "tan",
      "black"
    ]
  },
  {
    "id": 11,
    "category": "women",
    "discount": 0,
    "imgsrc": shoe_3,
    "details": "Water-resistant hiking shoes with grip soles",
    "price": 180.96,
    "status": "have stock",
    "name": "ZoomLite X",
    "colors": [
      "brown",
      "tan",
      "black"
    ]
  },
  {
    "id": 12,
    "category": "men",
    "discount": 25,
    "imgsrc": shoe_10,
    "details": "High-performance sports shoes for training",
    "price": 155.16,
    "status": "out of stock",
    "name": "PowerKick Max",
    "colors": [
      "multicolor"
    ]
  },
  {
    "id": 13,
    "category": "men",
    "discount": 0,
    "imgsrc": shoe_5,
    "details": "High-performance sports shoes for training",
    "price": 85.46,
    "status": "out of stock",
    "name": "AirFlex Runner",
    "colors": [
      "black",
      "white",
      "gray"
    ]
  },
  {
    "id": 14,
    "category": "women",
    "discount": 0,
    "imgsrc": shoe_7,
    "details": "High-performance sports shoes for training",
    "price": 31.3,
    "status": "have stock",
    "name": "Urban Sprint",
    "colors": [
      "green",
      "yellow"
    ]
  },
  {
    "id": 15,
    "category": "men",
    "discount": 0,
    "imgsrc": shoe_3,
    "details": "High-performance sports shoes for training",
    "price": 122.49,
    "status": "out of stock",
    "name": "ZoomLite X",
    "colors": [
      "blue",
      "red",
      "white"
    ]
  },
  {
    "id": 16,
    "category": "women",
    "discount": 0,
    "imgsrc": shoe_2,
    "details": "Comfortable sneakers for everyday wear",
    "price": 154.98,
    "status": "out of stock",
    "name": "TrailBlazer Pro",
    "colors": [
      "pink",
      "purple"
    ]
  },
  {
    "id": 17,
    "category": "men",
    "discount": 32,
    "imgsrc": shoe_4,
    "details": "Classic slip-on shoes with cushioned soles",
    "price": 105.77,
    "status": "out of stock",
    "name": "ComfyWalk",
    "colors": [
      "black",
      "white",
      "gray"
    ]
  },
  {
    "id": 18,
    "category": "men",
    "discount": 0,
    "imgsrc": shoe_9,
    "details": "Water-resistant hiking shoes with grip soles",
    "price": 182.3,
    "status": "out of stock",
    "name": "CloudStride",
    "colors": [
      "pink",
      "purple"
    ]
  },
  {
    "id": 19,
    "category": "kid",
    "discount": 0,
    "imgsrc": shoe_5,
    "details": "Classic slip-on shoes with cushioned soles",
    "price": 160.53,
    "status": "have stock",
    "name": "AirFlex Runner",
    "colors": [
      "green",
      "yellow"
    ]
  },
  {
    "id": 20,
    "category": "women",
    "discount": 0,
    "imgsrc": shoe_7,
    "details": "Comfortable sneakers for everyday wear",
    "price": 129.07,
    "status": "have stock",
    "name": "Urban Sprint",
    "colors": [
      "multicolor"
    ]
  },
  {
    "id": 21,
    "category": "men",
    "discount": 0,
    "imgsrc": shoe_9,
    "details": "Comfortable sneakers for everyday wear",
    "price": 98.98,
    "status": "out of stock",
    "name": "CloudStride",
    "colors": [
      "green",
      "yellow"
    ]
  },
  {
    "id": 22,
    "category": "men",
    "discount": 0,
    "imgsrc": shoe_9,
    "details": "Colorful shoes perfect for kids' activities",
    "price": 95.98,
    "status": "have stock",
    "name": "CloudStride",
    "colors": [
      "pink",
      "purple"
    ]
  },
  {
    "id": 23,
    "category": "women",
    "discount": 26,
    "imgsrc": shoe_5,
    "details": "Colorful shoes perfect for kids' activities",
    "price": 71.68,
    "status": "have stock",
    "name": "AirFlex Runner",
    "colors": [
      "green",
      "yellow"
    ]
  },
  {
    "id": 24,
    "category": "men",
    "discount": 0,
    "imgsrc": shoe_10,
    "details": "Durable leather boots for outdoor activities",
    "price": 138.21,
    "status": "out of stock",
    "name": "PowerKick Max",
    "colors": [
      "green",
      "yellow"
    ]
  },
  {
    "id": 25,
    "category": "men",
    "discount": 0,
    "imgsrc": shoe_8,
    "details": "Stylish casual shoes with a modern design",
    "price": 22.06,
    "status": "out of stock",
    "name": "AeroStreet",
    "colors": [
      "teal",
      "white"
    ]
  },
  {
    "id": 26,
    "category": "men",
    "discount": 0,
    "imgsrc": shoe_10,
    "details": "Elegant dress shoes with premium leather",
    "price": 74.44,
    "status": "out of stock",
    "name": "PowerKick Max",
    "colors": [
      "pink",
      "purple"
    ]
  },
  {
    "id": 27,
    "category": "women",
    "discount": 0,
    "imgsrc": shoe_2,
    "details": "Comfortable sneakers for everyday wear",
    "price": 40.63,
    "status": "out of stock",
    "name": "TrailBlazer Pro",
    "colors": [
      "green",
      "yellow"
    ]
  },
  {
    "id": 28,
    "category": "kid",
    "discount": 0,
    "imgsrc": shoe_6,
    "details": "Water-resistant hiking shoes with grip soles",
    "price": 28.27,
    "status": "out of stock",
    "name": "CityStep Classic",
    "colors": [
      "brown",
      "tan",
      "black"
    ]
  },
  {
    "id": 29,
    "category": "kid",
    "discount": 0,
    "imgsrc": shoe_2,
    "details": "Stylish casual shoes with a modern design",
    "price": 119.13,
    "status": "out of stock",
    "name": "TrailBlazer Pro",
    "colors": [
      "brown",
      "tan",
      "black"
    ]
  },
  {
    "id": 30,
    "category": "kid",
    "discount": 19,
    "imgsrc": shoe_5,
    "details": "High-performance sports shoes for training",
    "price": 60.28,
    "status": "out of stock",
    "name": "AirFlex Runner",
    "colors": [
      "pink",
      "purple"
    ]
  },
  {
    "id": 31,
    "category": "men",
    "discount": 24,
    "imgsrc": shoe_2,
    "details": "Elegant dress shoes with premium leather",
    "price": 91.62,
    "status": "out of stock",
    "name": "TrailBlazer Pro",
    "colors": [
      "navy",
      "gray",
      "white"
    ]
  },
  {
    "id": 32,
    "category": "kid",
    "discount": 0,
    "imgsrc": shoe_5,
    "details": "Velcro strap shoes for easy wear",
    "price": 150.53,
    "status": "have stock",
    "name": "AirFlex Runner",
    "colors": [
      "navy",
      "gray",
      "white"
    ]
  },
  {
    "id": 33,
    "category": "kid",
    "discount": 0,
    "imgsrc": shoe_5,
    "details": "Durable leather boots for outdoor activities",
    "price": 44.6,
    "status": "out of stock",
    "name": "AirFlex Runner",
    "colors": [
      "navy",
      "gray",
      "white"
    ]
  },
  {
    "id": 34,
    "category": "men",
    "discount": 0,
    "imgsrc": shoe_6,
    "details": "Durable leather boots for outdoor activities",
    "price": 194.14,
    "status": "out of stock",
    "name": "CityStep Classic",
    "colors": [
      "orange",
      "black"
    ]
  },
  {
    "id": 35,
    "category": "women",
    "discount": 0,
    "imgsrc": shoe_8,
    "details": "High-performance sports shoes for training",
    "price": 131.4,
    "status": "have stock",
    "name": "AeroStreet",
    "colors": [
      "red",
      "black",
      "gold"
    ]
  },
  {
    "id": 36,
    "category": "kid",
    "discount": 0,
    "imgsrc": shoe_9,
    "details": "Velcro strap shoes for easy wear",
    "price": 130.86,
    "status": "have stock",
    "name": "CloudStride",
    "colors": [
      "pink",
      "purple"
    ]
  },
  {
    "id": 37,
    "category": "women",
    "discount": 39,
    "imgsrc": shoe_9,
    "details": "Water-resistant hiking shoes with grip soles",
    "price": 131.51,
    "status": "out of stock",
    "name": "CloudStride",
    "colors": [
      "pink",
      "purple"
    ]
  },
  {
    "id": 38,
    "category": "kid",
    "discount": 12,
    "imgsrc": shoe_6,
    "details": "High-performance sports shoes for training",
    "price": 160.05,
    "status": "have stock",
    "name": "CityStep Classic",
    "colors": [
      "multicolor"
    ]
  },
  {
    "id": 39,
    "category": "kid",
    "discount": 16,
    "imgsrc": shoe_8,
    "details": "Stylish casual shoes with a modern design",
    "price": 71.66,
    "status": "have stock",
    "name": "AeroStreet",
    "colors": [
      "red",
      "black",
      "gold"
    ]
  },
  {
    "id": 40,
    "category": "kid",
    "discount": 25,
    "imgsrc": shoe_2,
    "details": "Colorful shoes perfect for kids' activities",
    "price": 182.9,
    "status": "out of stock",
    "name": "TrailBlazer Pro",
    "colors": [
      "pink",
      "purple"
    ]
  },
  {
    "id": 41,
    "category": "kid",
    "discount": 0,
    "imgsrc": shoe_9,
    "details": "Velcro strap shoes for easy wear",
    "price": 62.89,
    "status": "out of stock",
    "name": "CloudStride",
    "colors": [
      "pink",
      "purple"
    ]
  },
  {
    "id": 42,
    "category": "women",
    "discount": 0,
    "imgsrc": shoe_6,
    "details": "Velcro strap shoes for easy wear",
    "price": 36.93,
    "status": "have stock",
    "name": "CityStep Classic",
    "colors": [
      "teal",
      "white"
    ]
  },
  {
    "id": 43,
    "category": "women",
    "discount": 22,
    "imgsrc": shoe_2,
    "details": "Velcro strap shoes for easy wear",
    "price": 40.06,
    "status": "have stock",
    "name": "TrailBlazer Pro",
    "colors": [
      "multicolor"
    ]
  },
  {
    "id": 44,
    "category": "women",
    "discount": 0,
    "imgsrc": shoe_10,
    "details": "Stylish casual shoes with a modern design",
    "price": 196.2,
    "status": "out of stock",
    "name": "PowerKick Max",
    "colors": [
      "navy",
      "gray",
      "white"
    ]
  },
  {
    "id": 45,
    "category": "kid",
    "discount": 0,
    "imgsrc": shoe_10,
    "details": "Water-resistant hiking shoes with grip soles",
    "price": 79.65,
    "status": "have stock",
    "name": "PowerKick Max",
    "colors": [
      "blue",
      "red",
      "white"
    ]
  },
  {
    "id": 46,
    "category": "women",
    "discount": 0,
    "imgsrc": shoe_9,
    "details": "Comfortable sneakers for everyday wear",
    "price": 42.04,
    "status": "have stock",
    "name": "CloudStride",
    "colors": [
      "green",
      "yellow"
    ]
  },
  {
    "id": 47,
    "category": "kid",
    "discount": 0,
    "imgsrc": shoe_8,
    "details": "Durable leather boots for outdoor activities",
    "price": 67.17,
    "status": "have stock",
    "name": "AeroStreet",
    "colors": [
      "black",
      "white",
      "gray"
    ]
  },
  {
    "id": 48,
    "category": "women",
    "discount": 26,
    "imgsrc": shoe_3,
    "details": "Lightweight running shoes with breathable mesh",
    "price": 84.1,
    "status": "out of stock",
    "name": "ZoomLite X",
    "colors": [
      "navy",
      "gray",
      "white"
    ]
  },
  {
    "id": 49,
    "category": "men",
    "discount": 0,
    "imgsrc": shoe_10,
    "details": "Comfortable sneakers for everyday wear",
    "price": 82.39,
    "status": "out of stock",
    "name": "PowerKick Max",
    "colors": [
      "red",
      "black",
      "gold"
    ]
  },
  {
    "id": 50,
    "category": "kid",
    "discount": 25,
    "imgsrc": shoe_3,
    "details": "Water-resistant hiking shoes with grip soles",
    "price": 158.79,
    "status": "have stock",
    "name": "ZoomLite X",
    "colors": [
      "red",
      "black",
      "gold"
    ]
  },
  {
    "id": 51,
    "category": "kid",
    "discount": 0,
    "imgsrc": shoe_4,
    "details": "Colorful shoes perfect for kids' activities",
    "price": 112.79,
    "status": "out of stock",
    "name": "ComfyWalk",
    "colors": [
      "red",
      "black",
      "gold"
    ]
  },
  {
    "id": 52,
    "category": "men",
    "discount": 50,
    "imgsrc": shoe_4,
    "details": "Velcro strap shoes for easy wear",
    "price": 103.36,
    "status": "out of stock",
    "name": "ComfyWalk",
    "colors": [
      "brown",
      "tan",
      "black"
    ]
  },
  {
    "id": 53,
    "category": "kid",
    "discount": 0,
    "imgsrc": shoe_5,
    "details": "Velcro strap shoes for easy wear",
    "price": 21.4,
    "status": "out of stock",
    "name": "AirFlex Runner",
    "colors": [
      "brown",
      "tan",
      "black"
    ]
  },
  {
    "id": 54,
    "category": "men",
    "discount": 34,
    "imgsrc": shoe_9,
    "details": "Lightweight running shoes with breathable mesh",
    "price": 64.42,
    "status": "out of stock",
    "name": "CloudStride",
    "colors": [
      "brown",
      "tan",
      "black"
    ]
  },
  {
    "id": 55,
    "category": "men",
    "discount": 26,
    "imgsrc": shoe_6,
    "details": "Durable leather boots for outdoor activities",
    "price": 20.09,
    "status": "have stock",
    "name": "CityStep Classic",
    "colors": [
      "green",
      "yellow"
    ]
  },
  {
    "id": 56,
    "category": "women",
    "discount": 28,
    "imgsrc": shoe_10,
    "details": "Elegant dress shoes with premium leather",
    "price": 30.33,
    "status": "have stock",
    "name": "PowerKick Max",
    "colors": [
      "blue",
      "red",
      "white"
    ]
  },
  {
    "id": 57,
    "category": "men",
    "discount": 0,
    "imgsrc": shoe_1,
    "details": "Durable leather boots for outdoor activities",
    "price": 187.4,
    "status": "have stock",
    "name": "Fusion Grip",
    "colors": [
      "navy",
      "gray",
      "white"
    ]
  },
  {
    "id": 58,
    "category": "women",
    "discount": 42,
    "imgsrc": shoe_8,
    "details": "Elegant dress shoes with premium leather",
    "price": 190.31,
    "status": "have stock",
    "name": "AeroStreet",
    "colors": [
      "teal",
      "white"
    ]
  },
  {
    "id": 59,
    "category": "men",
    "discount": 35,
    "imgsrc": shoe_9,
    "details": "Durable leather boots for outdoor activities",
    "price": 91.04,
    "status": "have stock",
    "name": "CloudStride",
    "colors": [
      "teal",
      "white"
    ]
  },
  {
    "id": 60,
    "category": "women",
    "discount": 0,
    "imgsrc": shoe_9,
    "details": "Comfortable sneakers for everyday wear",
    "price": 122.26,
    "status": "have stock",
    "name": "CloudStride",
    "colors": [
      "multicolor"
    ]
  },
  {
    "id": 61,
    "category": "men",
    "discount": 35,
    "imgsrc": shoe_3,
    "details": "Colorful shoes perfect for kids' activities",
    "price": 187.08,
    "status": "have stock",
    "name": "ZoomLite X",
    "colors": [
      "black",
      "white",
      "gray"
    ]
  },
  {
    "id": 62,
    "category": "women",
    "discount": 49,
    "imgsrc": shoe_3,
    "details": "Classic slip-on shoes with cushioned soles",
    "price": 38.21,
    "status": "out of stock",
    "name": "ZoomLite X",
    "colors": [
      "multicolor"
    ]
  },
  {
    "id": 63,
    "category": "women",
    "discount": 48,
    "imgsrc": shoe_2,
    "details": "Durable leather boots for outdoor activities",
    "price": 111.08,
    "status": "out of stock",
    "name": "TrailBlazer Pro",
    "colors": [
      "multicolor"
    ]
  },
  {
    "id": 64,
    "category": "men",
    "discount": 0,
    "imgsrc": shoe_5,
    "details": "High-performance sports shoes for training",
    "price": 25.03,
    "status": "have stock",
    "name": "AirFlex Runner",
    "colors": [
      "multicolor"
    ]
  },
  {
    "id": 65,
    "category": "kid",
    "discount": 0,
    "imgsrc": shoe_1,
    "details": "Colorful shoes perfect for kids' activities",
    "price": 72.67,
    "status": "out of stock",
    "name": "Fusion Grip",
    "colors": [
      "red",
      "black",
      "gold"
    ]
  },
  {
    "id": 66,
    "category": "kid",
    "discount": 0,
    "imgsrc": shoe_10,
    "details": "High-performance sports shoes for training",
    "price": 165.62,
    "status": "have stock",
    "name": "PowerKick Max",
    "colors": [
      "orange",
      "black"
    ]
  },
  {
    "id": 67,
    "category": "women",
    "discount": 29,
    "imgsrc": shoe_7,
    "details": "Durable leather boots for outdoor activities",
    "price": 69.37,
    "status": "have stock",
    "name": "Urban Sprint",
    "colors": [
      "multicolor"
    ]
  },
  {
    "id": 68,
    "category": "men",
    "discount": 17,
    "imgsrc": shoe_3,
    "details": "Water-resistant hiking shoes with grip soles",
    "price": 168.48,
    "status": "out of stock",
    "name": "ZoomLite X",
    "colors": [
      "red",
      "black",
      "gold"
    ]
  },
  {
    "id": 69,
    "category": "men",
    "discount": 0,
    "imgsrc": shoe_2,
    "details": "Comfortable sneakers for everyday wear",
    "price": 39.66,
    "status": "out of stock",
    "name": "TrailBlazer Pro",
    "colors": [
      "blue",
      "red",
      "white"
    ]
  },
  {
    "id": 70,
    "category": "men",
    "discount": 36,
    "imgsrc": shoe_9,
    "details": "Comfortable sneakers for everyday wear",
    "price": 35.13,
    "status": "have stock",
    "name": "CloudStride",
    "colors": [
      "pink",
      "purple"
    ]
  },
  {
    "id": 71,
    "category": "kid",
    "discount": 43,
    "imgsrc": shoe_8,
    "details": "High-performance sports shoes for training",
    "price": 141.35,
    "status": "have stock",
    "name": "AeroStreet",
    "colors": [
      "teal",
      "white"
    ]
  },
  {
    "id": 72,
    "category": "kid",
    "discount": 0,
    "imgsrc": shoe_5,
    "details": "Lightweight running shoes with breathable mesh",
    "price": 157.76,
    "status": "have stock",
    "name": "AirFlex Runner",
    "colors": [
      "multicolor"
    ]
  },
  {
    "id": 73,
    "category": "kid",
    "discount": 33,
    "imgsrc": shoe_5,
    "details": "Durable leather boots for outdoor activities",
    "price": 112.21,
    "status": "out of stock",
    "name": "AirFlex Runner",
    "colors": [
      "navy",
      "gray",
      "white"
    ]
  },
  {
    "id": 74,
    "category": "kid",
    "discount": 18,
    "imgsrc": shoe_10,
    "details": "Velcro strap shoes for easy wear",
    "price": 60.27,
    "status": "out of stock",
    "name": "PowerKick Max",
    "colors": [
      "orange",
      "black"
    ]
  },
  {
    "id": 75,
    "category": "women",
    "discount": 0,
    "imgsrc": shoe_3,
    "details": "Water-resistant hiking shoes with grip soles",
    "price": 169.63,
    "status": "out of stock",
    "name": "ZoomLite X",
    "colors": [
      "black",
      "white",
      "gray"
    ]
  },
  {
    "id": 76,
    "category": "men",
    "discount": 0,
    "imgsrc": shoe_1,
    "details": "Comfortable sneakers for everyday wear",
    "price": 21.88,
    "status": "out of stock",
    "name": "Fusion Grip",
    "colors": [
      "black",
      "white",
      "gray"
    ]
  },
  {
    "id": 77,
    "category": "kid",
    "discount": 0,
    "imgsrc": shoe_3,
    "details": "Water-resistant hiking shoes with grip soles",
    "price": 44.02,
    "status": "have stock",
    "name": "ZoomLite X",
    "colors": [
      "navy",
      "gray",
      "white"
    ]
  },
  {
    "id": 78,
    "category": "kid",
    "discount": 0,
    "imgsrc": shoe_2,
    "details": "Colorful shoes perfect for kids' activities",
    "price": 90.41,
    "status": "have stock",
    "name": "TrailBlazer Pro",
    "colors": [
      "orange",
      "black"
    ]
  },
  {
    "id": 79,
    "category": "men",
    "discount": 0,
    "imgsrc": shoe_9,
    "details": "Classic slip-on shoes with cushioned soles",
    "price": 60.81,
    "status": "have stock",
    "name": "CloudStride",
    "colors": [
      "navy",
      "gray",
      "white"
    ]
  },
  {
    "id": 80,
    "category": "kid",
    "discount": 24,
    "imgsrc": shoe_4,
    "details": "Durable leather boots for outdoor activities",
    "price": 86.93,
    "status": "out of stock",
    "name": "ComfyWalk",
    "colors": [
      "green",
      "yellow"
    ]
  },
  {
    "id": 81,
    "category": "kid",
    "discount": 46,
    "imgsrc": shoe_8,
    "details": "Velcro strap shoes for easy wear",
    "price": 37.06,
    "status": "out of stock",
    "name": "AeroStreet",
    "colors": [
      "red",
      "black",
      "gold"
    ]
  },
  {
    "id": 82,
    "category": "women",
    "discount": 42,
    "imgsrc": shoe_2,
    "details": "High-performance sports shoes for training",
    "price": 155.68,
    "status": "have stock",
    "name": "TrailBlazer Pro",
    "colors": [
      "blue",
      "red",
      "white"
    ]
  },
  {
    "id": 83,
    "category": "kid",
    "discount": 22,
    "imgsrc": shoe_4,
    "details": "Lightweight running shoes with breathable mesh",
    "price": 134.76,
    "status": "have stock",
    "name": "ComfyWalk",
    "colors": [
      "black",
      "white",
      "gray"
    ]
  },
  {
    "id": 84,
    "category": "women",
    "discount": 0,
    "imgsrc": shoe_4,
    "details": "High-performance sports shoes for training",
    "price": 30.67,
    "status": "have stock",
    "name": "ComfyWalk",
    "colors": [
      "navy",
      "gray",
      "white"
    ]
  },
  {
    "id": 85,
    "category": "kid",
    "discount": 37,
    "imgsrc": shoe_8,
    "details": "Classic slip-on shoes with cushioned soles",
    "price": 90.31,
    "status": "out of stock",
    "name": "AeroStreet",
    "colors": [
      "teal",
      "white"
    ]
  },
  {
    "id": 86,
    "category": "kid",
    "discount": 50,
    "imgsrc": shoe_3,
    "details": "Comfortable sneakers for everyday wear",
    "price": 64.04,
    "status": "out of stock",
    "name": "ZoomLite X",
    "colors": [
      "navy",
      "gray",
      "white"
    ]
  },
  {
    "id": 87,
    "category": "men",
    "discount": 0,
    "imgsrc": shoe_7,
    "details": "Classic slip-on shoes with cushioned soles",
    "price": 185.05,
    "status": "out of stock",
    "name": "Urban Sprint",
    "colors": [
      "multicolor"
    ]
  },
  {
    "id": 88,
    "category": "women",
    "discount": 0,
    "imgsrc": shoe_2,
    "details": "Lightweight running shoes with breathable mesh",
    "price": 58.67,
    "status": "out of stock",
    "name": "TrailBlazer Pro",
    "colors": [
      "green",
      "yellow"
    ]
  },
  {
    "id": 89,
    "category": "men",
    "discount": 38,
    "imgsrc": shoe_7,
    "details": "Colorful shoes perfect for kids' activities",
    "price": 118.44,
    "status": "out of stock",
    "name": "Urban Sprint",
    "colors": [
      "multicolor"
    ]
  },
  {
    "id": 90,
    "category": "men",
    "discount": 0,
    "imgsrc": shoe_7,
    "details": "Water-resistant hiking shoes with grip soles",
    "price": 116.02,
    "status": "out of stock",
    "name": "Urban Sprint",
    "colors": [
      "black",
      "white",
      "gray"
    ]
  },
  {
    "id": 91,
    "category": "men",
    "discount": 47,
    "imgsrc": shoe_8,
    "details": "Durable leather boots for outdoor activities",
    "price": 80.58,
    "status": "have stock",
    "name": "AeroStreet",
    "colors": [
      "navy",
      "gray",
      "white"
    ]
  },
  {
    "id": 92,
    "category": "women",
    "discount": 12,
    "imgsrc": shoe_3,
    "details": "Lightweight running shoes with breathable mesh",
    "price": 109.76,
    "status": "out of stock",
    "name": "ZoomLite X",
    "colors": [
      "teal",
      "white"
    ]
  },
  {
    "id": 93,
    "category": "women",
    "discount": 0,
    "imgsrc": shoe_5,
    "details": "High-performance sports shoes for training",
    "price": 41.31,
    "status": "have stock",
    "name": "AirFlex Runner",
    "colors": [
      "navy",
      "gray",
      "white"
    ]
  },
  {
    "id": 94,
    "category": "men",
    "discount": 0,
    "imgsrc": shoe_6,
    "details": "Velcro strap shoes for easy wear",
    "price": 104.3,
    "status": "have stock",
    "name": "CityStep Classic",
    "colors": [
      "orange",
      "black"
    ]
  },
  {
    "id": 95,
    "category": "kid",
    "discount": 0,
    "imgsrc": shoe_3,
    "details": "High-performance sports shoes for training",
    "price": 111.99,
    "status": "out of stock",
    "name": "ZoomLite X",
    "colors": [
      "green",
      "yellow"
    ]
  },
  {
    "id": 96,
    "category": "kid",
    "discount": 18,
    "imgsrc": shoe_4,
    "details": "Elegant dress shoes with premium leather",
    "price": 94.78,
    "status": "have stock",
    "name": "ComfyWalk",
    "colors": [
      "brown",
      "tan",
      "black"
    ]
  },
  {
    "id": 97,
    "category": "kid",
    "discount": 33,
    "imgsrc": shoe_10,
    "details": "Comfortable sneakers for everyday wear",
    "price": 70.6,
    "status": "have stock",
    "name": "PowerKick Max",
    "colors": [
      "teal",
      "white"
    ]
  },
  {
    "id": 98,
    "category": "men",
    "discount": 0,
    "imgsrc": shoe_6,
    "details": "Colorful shoes perfect for kids' activities",
    "price": 194.49,
    "status": "have stock",
    "name": "CityStep Classic",
    "colors": [
      "blue",
      "red",
      "white"
    ]
  },
  {
    "id": 99,
    "category": "men",
    "discount": 0,
    "imgsrc": shoe_5,
    "details": "Lightweight running shoes with breathable mesh",
    "price": 183.62,
    "status": "have stock",
    "name": "AirFlex Runner",
    "colors": [
      "orange",
      "black"
    ]
  },
  {
    "id": 100,
    "category": "men",
    "discount": 0,
    "imgsrc": shoe_10,
    "details": "Velcro strap shoes for easy wear",
    "price": 85.79,
    "status": "have stock",
    "name": "PowerKick Max",
    "colors": [
      "pink",
      "purple"
    ]
  }
]

export default shoes;