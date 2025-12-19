import { Links } from 'react-router-dom'

//Logo Image
import logo from './assests/image/logoBrand.png'

//Login Page
import loginImage from './assests/image/LoginImage.png'

//Home Page
import image1 from './assests/image/homePage.png'
import image2 from './assests/image/homePage1.png'
import image3 from './assests/image/homePage2.png'
import image9 from './assests/image/homePage3.png'

//Logo Brands
import logo1 from './assests/image/slide5.png'
import logo2 from './assests/image/slide1.png'
import logo3 from './assests/image/slide2.png'
import logo4 from './assests/image/slide3.png'
import logo5 from './assests/image/slide4.png'

//Carousel Images
import carousel1 from './assests/image/carouselImg1.png'
import carousel2 from './assests/image/carouselImg2.png'
import carousel3 from './assests/image/carouselImg3.png'

//Social Media Icons
import { FaFacebook, FaInstagram, FaViber, FaTelegram } from "react-icons/fa";

//new arrival images
import NAimg1 from './assests/image/4NewArrivalPage/NAimg1.png'
import NAimg2 from './assests/image/4NewArrivalPage/NAimg2.png'
import NAimg3 from './assests/image/4NewArrivalPage/NAimg3.png'
import NAimg4 from './assests/image/4NewArrivalPage/NAimg4.png'
import NAimg5 from './assests/image/4NewArrivalPage/NAimg5.png'
import NAimg6 from './assests/image/4NewArrivalPage/NAimg6.png'
import NAimg7 from './assests/image/4NewArrivalPage/NAimg7.png'
import NAimg8 from './assests/image/4NewArrivalPage/NAimg8.png'
import NAimg9 from './assests/image/4NewArrivalPage/NAimg9.png'
import NAimg10 from './assests/image/4NewArrivalPage/NAimg10.png'
import NAimg11 from './assests/image/4NewArrivalPage/NAimg11.png'
import NAimg12 from './assests/image/4NewArrivalPage/NAimg12.png'

//React Icons
import { FaStar } from "react-icons/fa6";

//Images of Follow Us Section
import followUsImage1 from './assests/image/FollowUsImg1.png'
import followUsImage2 from './assests/image/FollowUsImg2.png'
import followUsImage3 from './assests/image/FollowUsImg3.png'
import followUsImage4 from './assests/image/FollowUsImg4.png'
import followUsImage5 from './assests/image/FollowUsImg5.png'
import followUsImage6 from './assests/image/FollowUsImg6.png'
import followUsImage7 from './assests/image/FollowUsImg7.png'

//Deals Images
import DealsImg1 from './assests/image/shoes.png'
import DealsImg2 from './assests/image/shoes1.png'
import DealsImg3 from './assests/image/accessories.png'

const Facebook = FaFacebook;
const Instagram = FaInstagram;
const Viber = FaViber;
const Telegram = FaTelegram;

export const navItems = [
    {name: "Home", path: "/"},
    {name: "Deals", path: "/deals"},
    {name: "New Arrival", path: "/new-arrival"},
    {name: "Products", path: "/products"},
    {name: "Log In", path: "/login"},
    {name: "Cart", path: "/cart"}
  ]

export const footerLinks = [
  {name: "Support Center", path: "/support-center"},
  {name: "Invoicing", path: "/invoicing"},
  {name: "Contract", path: "/contract"},
  {name: "Careers", path: "/careers"},
  {name: "Blog", path: "/blog"},
  {name: "FAQs", path: "/faqs"}
]

export const LoginImages = [logo, loginImage]

export const homeImages = [image1, image2, image3, image9]

export const logoImages = [
  {name: logo1, alt: "brand logo 1", link: "/products"},
  {name: logo2, alt: "brand logo 2", link: "/products"},
  {name: logo3, alt: "brand logo 3", link: "/products"},
  {name: logo4, alt: "brand logo 4", link: "/products"},
  {name: logo5, alt: "brand logo 5", link: "/products"},
]

export const carouselImages = [carousel1, carousel2, carousel3]

//password validation
export const passwordRules = [
    {
      regex: /^.{8,15}$/,
      message: "Password must be between 8 and 15 characters!"
    },
    {
      regex: /(?=.*[A-Z])/,
      message: "Password must have at least one uppercase letter!"
    },
    {
      regex: /(?=.*[a-z])/,
      message: "Password must have at least one lowercase letter!"
    },
    {
      regex: /(?=.*[^a-zA-Z0-9])/,
      message: "Password must have at least one special character!"
    },
  ]

export const SocialMediaIcons = [
  {name: "Facebook", icon: Facebook, link: "https://www.facebook.com"},
  {name: "Instagram", icon: Instagram, link: "https://www.instagram.com"},
  {name: "Viber", icon: Viber, link: "https://www.viber.com"},
  {name: "Telegram", icon: Telegram, link: "https://www.telegram.org"},
]

export const products = [
  {id: 1,
  name: "Shoes",
  price: 100,},
  {id: 2,
  name: "Clothes",
  price: 150,},
  {id: 3,
  name: "Pants",
  price: 100,},
  {id: 4,
  name: "Shirts",
  price: 100,},
  {id: 5,
  name: "Hoodies",
  price: 100,},
  {id: 6,
  name: "Accessories",
  price: 100,},
]

//Deals Images
export const dealsImgs = [DealsImg1, DealsImg2, DealsImg3]

//All Categories
export const allCategories = [
  {
    id: 'cat1', 
    category: "Men's Fashion",
  },
  {
    id: 'cat2', 
    category: "Women's Fashion",
  },
  {
    id: 'cat3', 
    category: "Men's Accessories",
  },
  {
    id: 'cat4', 
    category: "Women's Accessories",
  }
]


//new arrival categories
export const newArrivalProducts = [
  { id: 1, categories: "Women's Fashion", img: NAimg1, title: "Shiny Dress", tag: "AI Karam", rating: 4, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 2, categories: "Men's Fashion", img: NAimg2, title: "Shiny Dress", tag: "AI Karam", rating: 5, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 3, categories: "Women's Accessories", img: NAimg3, title: "Shiny Dress", tag: "AI Karam", rating: 3, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 4, categories: "Men's Accessories", img: NAimg4, title: "Shiny Dress", tag: "AI Karam", rating: 2, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 5, categories: "Women's Fashion", img: NAimg5, title: "Shiny Dress", tag: "AI Karam", rating: 5, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 6, categories: "Men's Fashion", img: NAimg6, title: "Shiny Dress", tag: "AI Karam", rating: 4, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 7, categories: "Women's Accessories", img: NAimg7, title: "Shiny Dress", tag: "AI Karam", rating: 1, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 8, categories: "Men's Accessories", img: NAimg8, title: "Shiny Dress", tag: "AI Karam", rating: 5, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 9, categories: "Women's Fashion", img: NAimg9, title: "Shiny Dress", tag: "AI Karam", rating: 3, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 10, categories: "Men's Fashion", img: NAimg10, title: "Shiny Dress", tag: "AI Karam", rating: 5, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 11, categories: "Women's Accessories", img: NAimg11, title: "Shiny Dress", tag: "AI Karam", rating: 4, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 12, categories: "Men's Accessories", img: NAimg12, title: "Shiny Dress", tag: "AI Karam", rating: 3, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 13, categories: "Women's Fashion", img: NAimg1, title: "Shiny Dress", tag: "AI Karam", rating: 2, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 14, categories: "Men's Fashion", img: NAimg2, title: "Shiny Dress", tag: "AI Karam", rating: 5, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 15, categories: "Women's Accessories", img: NAimg3, title: "Shiny Dress", tag: "AI Karam", rating: 4, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 16, categories: "Men's Accessories", img: NAimg4, title: "Shiny Dress", tag: "AI Karam", rating: 2, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 17, categories: "Women's Fashion", img: NAimg5, title: "Shiny Dress", tag: "AI Karam", rating: 4, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 18, categories: "Men's Fashion", img: NAimg6, title: "Shiny Dress", tag: "AI Karam", rating: 3, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 19, categories: "Women's Accessories", img: NAimg7, title: "Shiny Dress", tag: "AI Karam", rating: 1, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 20, categories: "Men's Accessories", img: NAimg8, title: "Shiny Dress", tag: "AI Karam", rating: 4, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 21, categories: "Women's Fashion", img: NAimg9, title: "Shiny Dress", tag: "AI Karam", rating: 3, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 22, categories: "Men's Fashion", img: NAimg10, title: "Shiny Dress", tag: "AI Karam", rating: 4, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 23, categories: "Women's Accessories", img: NAimg11, title: "Shiny Dress", tag: "AI Karam", rating: 2, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 24, categories: "Men's Accessories", img: NAimg12, title: "Shiny Dress", tag: "AI Karam", rating: 5, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 25, categories: "Women's Fashion", img: NAimg1, title: "Shiny Dress", tag: "AI Karam", rating: 5, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 26, categories: "Men's Fashion", img: NAimg2, title: "Shiny Dress", tag: "AI Karam", rating: 3, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 27, categories: "Women's Accessories", img: NAimg3, title: "Shiny Dress", tag: "AI Karam", rating: 4, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 28, categories: "Men's Accessories", img: NAimg4, title: "Shiny Dress", tag: "AI Karam", rating: 2, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 29, categories: "Women's Fashion", img: NAimg5, title: "Shiny Dress", tag: "AI Karam", rating: 5, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 30, categories: "Men's Fashion", img: NAimg6, title: "Shiny Dress", tag: "AI Karam", rating: 2, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 31, categories: "Women's Accessories", img: NAimg7, title: "Shiny Dress", tag: "AI Karam", rating: 3, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 32, categories: "Men's Accessories", img: NAimg8, title: "Shiny Dress", tag: "AI Karam", rating: 5, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 33, categories: "Women's Fashion", img: NAimg9, title: "Shiny Dress", tag: "AI Karam", rating: 1, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 34, categories: "Men's Fashion", img: NAimg10, title: "Shiny Dress", tag: "AI Karam", rating: 4, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 35, categories: "Women's Accessories", img: NAimg11, title: "Shiny Dress", tag: "AI Karam", rating: 3, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 36, categories: "Men's Accessories", img: NAimg12, title: "Shiny Dress", tag: "AI Karam", rating: 2, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 37, categories: "Women's Fashion", img: NAimg1, title: "Shiny Dress", tag: "AI Karam", rating: 5, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 38, categories: "Men's Fashion", img: NAimg2, title: "Shiny Dress", tag: "AI Karam", rating: 3, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 39, categories: "Women's Accessories", img: NAimg3, title: "Shiny Dress", tag: "AI Karam", rating: 4, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 40, categories: "Men's Accessories", img: NAimg4, title: "Shiny Dress", tag: "AI Karam", rating: 2, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 41, categories: "Women's Fashion", img: NAimg5, title: "Shiny Dress", tag: "AI Karam", rating: 4, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 42, categories: "Men's Fashion", img: NAimg6, title: "Shiny Dress", tag: "AI Karam", rating: 5, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 43, categories: "Women's Accessories", img: NAimg7, title: "Shiny Dress", tag: "AI Karam", rating: 3, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 44, categories: "Men's Accessories", img: NAimg8, title: "Shiny Dress", tag: "AI Karam", rating: 1, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 45, categories: "Women's Fashion", img: NAimg8, title: "Shiny Dress", tag: "AI Karam", rating: 2, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 46, categories: "Men's Fashion", img: NAimg9, title: "Shiny Dress", tag: "AI Karam", rating: 4, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 47, categories: "Women's Accessories", img: NAimg10, title: "Shiny Dress", tag: "AI Karam", rating: 5, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 48, categories: "Men's Accessories", img: NAimg11, title: "Shiny Dress", tag: "AI Karam", rating: 3, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 49, categories: "Women's Fashion", img: NAimg12, title: "Shiny Dress", tag: "AI Karam", rating: 4, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" },
  { id: 50, categories: "Men's Fashion", img: NAimg1, title: "Shiny Dress", tag: "AI Karam", rating: 2, review: "(4.1k) Customer Reviews", price: "$95.50", discount: 0, itemLeft: "Almost Sold Out" }
];


export const dealsDiscount = [
  {id: "dis1", discount: 15},
  {id: "dis2", discount: 20},
  {id: "dis3", discount: 30},
  {id: "dis4", discount: 40}
]

export const ProductCategories = [
  {id: "cat1", categories: "Men's Fashion"},
  {id: "cat2", categories: "Women's Fashion"},
  {id: "cat3", categories: "Men's Accessories"},
  {id: "cat4", categories: "Women's Accessories"},
]

export const allProducts = [
  { id: 1, name: "T-Shirt", tag: "AI Karam" , rating: 4, categories: "Women's Fashion", review: "(4.1k) Customer Reviews", price: 800, img: DealsImg1, discount: 0, itemLeft: "Almost Sold Out" },
]

export const dealsProducts = [
  { id: 1, name: "T-Shirt", tag: "AI Karam" , rating: 4, categories: "Women's Fashion", review: "(4.1k) Customer Reviews", price: 800, img: DealsImg1, discount: 30, itemLeft: "Almost Sold Out" },
  { id: 2, name: "Jeans", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 1600, img: DealsImg2, discount: 20, categories: "Men's Fashion", itemLeft: "Almost Sold Out" },
  { id: 3, name: "Hoodie", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 1900, img: DealsImg3, discount: 40 , categories: "Men's Accessories", itemLeft: "Almost Sold Out" },
  { id: 4, name: "Sweatpants", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 1200, img: DealsImg2, discount: 15 , categories: "Women's Accessories", itemLeft: "Almost Sold Out" },
  { id: 5, name: "Jacket", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 2500, img: DealsImg3, discount: 30 , categories: "Women's Fashion", itemLeft: "Almost Sold Out" },
  { id: 6, name: "Shorts", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 1000, img: DealsImg1, discount: 20 , categories: "Men's Fashion", itemLeft: "Almost Sold Out" },
  { id: 7, name: "Polo Shirt", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 1100, img: DealsImg2, discount: 30 , categories: "Women's Accessories", itemLeft: "Almost Sold Out" },
  { id: 8, name: "Dress Shirt", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 1400, img: DealsImg3, discount: 40 , categories: "Women's Fashion", itemLeft: "Almost Sold Out" },
  { id: 9, name: "Tank Top", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 600, img: DealsImg1, discount: 15 , categories: "Men's Accessories", itemLeft: "Almost Sold Out" },
  { id: 10, name: "Denim Jacket", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 2200, img: DealsImg2, discount: 20 , categories: "Men's Fashion", itemLeft: "Almost Sold Out" },
  { id: 11, name: "Tracksuit", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 1800, img: DealsImg3, discount: 30 , categories: "Women's Fashion", itemLeft: "Almost Sold Out" },
  { id: 12, name: "Skirt", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 1300, img: DealsImg1, discount: 40, categories: "Men's Accessories", itemLeft: "Almost Sold Out" },
  { id: 13, name: "Blazer", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 2700, img: DealsImg2, discount: 15, categories: "Women's Accessories", itemLeft: "Almost Sold Out" },
  { id: 14, name: "Sweater", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 1600, img: DealsImg3, discount: 20, categories: "Men's Fashion", itemLeft: "Almost Sold Out" },
  { id: 15, name: "Leggings", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 900, img: DealsImg1, discount: 30, categories: "Women's Fashion", itemLeft: "Almost Sold Out" },
  { id: 16, name: "Overcoat", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 3200, img: DealsImg2, discount: 40, categories: "Men's Accessories", itemLeft: "Almost Sold Out" },
  { id: 17, name: "Raincoat", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 2300, img: DealsImg3, discount: 20, categories: "Women's Accessories", itemLeft: "Almost Sold Out" },
  { id: 18, name: "V-Neck Shirt", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 950, img: DealsImg1, discount: 15, categories: "Women's Fashion", itemLeft: "Almost Sold Out" },
  { id: 19, name: "Cargo Pants", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 1500, img: DealsImg2, discount: 30, categories: "Men's Fashion", itemLeft: "Almost Sold Out" },
  { id: 20, name: "Trench Coat", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 2900, img: DealsImg3, discount: 40, categories: "Women's Accessories", itemLeft: "Almost Sold Out" },
  { id: 21, name: "Cardigan", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 1700, img: DealsImg1, discount: 20, categories: "Men's Accessories", itemLeft: "Almost Sold Out" },
  { id: 22, name: "Baseball Cap", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 500, img: DealsImg2, discount: 30, categories: "Women's Fashion", itemLeft: "Almost Sold Out" },
  { id: 23, name: "Belt", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 450, img: DealsImg3, discount: 15, categories: "Men's Fashion", itemLeft: "Almost Sold Out" },
  { id: 24, name: "Scarf", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 600, img: DealsImg1, discount: 30, categories: "Women's Accessories", itemLeft: "Almost Sold Out" },
  { id: 25, name: "Gloves", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 750, img: DealsImg2, discount: 20, categories: "Men's Accessories", itemLeft: "Almost Sold Out" },
  { id: 26, name: "Socks", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 300, img: DealsImg3, discount: 15, categories: "Women's Fashion", itemLeft: "Almost Sold Out" },
  { id: 27, name: "Wool Hat", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 400, img: DealsImg1, discount: 30, categories: "Men's Fashion", itemLeft: "Almost Sold Out" },
  { id: 28, name: "Bow Tie", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 350, img: DealsImg2, discount: 40, categories: "Women's Accessories", itemLeft: "Almost Sold Out" },
  { id: 29, name: "Necktie", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 380, img: DealsImg3, discount: 20, categories: "Men's Accessories", itemLeft: "Almost Sold Out" },
  { id: 30, name: "Shoes", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 2000, img: DealsImg1, discount: 30, categories: "Women's Fashion", itemLeft: "Almost Sold Out" },
  { id: 31, name: "Flip Flops", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 700, img: DealsImg2, discount: 15, categories: "Men's Accessories", itemLeft: "Almost Sold Out" },
  { id: 32, name: "Boots", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 2700, img: DealsImg3, discount: 20, categories: "Women's Accessories", itemLeft: "Almost Sold Out" },
  { id: 33, name: "Sneakers", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 2100, img: DealsImg1, discount: 30, categories: "Women's Fashion", itemLeft: "Almost Sold Out" },
  { id: 34, name: "Formal Pants", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 1900, img: DealsImg2, discount: 40, categories: "Men's Fashion", itemLeft: "Almost Sold Out" },
  { id: 35, name: "Vest", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 1200, img: DealsImg3, discount: 20, categories: "Women's Accessories", itemLeft: "Almost Sold Out" },
  { id: 36, name: "Kimono", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 2500, img: DealsImg1, discount: 15, categories: "Men's Accessories", itemLeft: "Almost Sold Out" },
  { id: 37, name: "Blouse", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 1400, img: DealsImg2, discount: 30, categories: "Women's Fashion", itemLeft: "Almost Sold Out" },
  { id: 38, name: "Crop Top", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 950, img: DealsImg3, discount: 20, categories: "Men's Fashion", itemLeft: "Almost Sold Out" },
  { id: 39, name: "Tracksuit Top", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 1600, img: DealsImg1, discount: 40, categories: "Women's Accessories", itemLeft: "Almost Sold Out" },
  { id: 40, name: "Tunic", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 1350, img: DealsImg2, discount: 30, categories: "Men's Accessories", itemLeft: "Almost Sold Out" },
  { id: 41, name: "Sweatshirt", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 1800, img: DealsImg3, discount: 20, categories: "Women's Fashion", itemLeft: "Almost Sold Out" },
  { id: 42, name: "Cargo Shorts", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 1250, img: DealsImg1, discount: 15, categories: "Men's Fashion", itemLeft: "Almost Sold Out" },
  { id: 43, name: "Overalls", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 2400, img: DealsImg2, discount: 30, categories: "Women's Accessories", itemLeft: "Almost Sold Out" },
  { id: 44, name: "Windbreaker", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 2000, img: DealsImg3, discount: 20, categories: "Men's Accessories", itemLeft: "Almost Sold Out" },
  { id: 45, name: "Shawl", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 800, img: DealsImg1, discount: 15, categories: "Women's Fashion", itemLeft: "Almost Sold Out" },
  { id: 46, name: "Sports Bra", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 1000, img: DealsImg2, discount: 40, categories: "Men's Fashion", itemLeft: "Almost Sold Out" },
  { id: 47, name: "Gym Shorts", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 1100, img: DealsImg3, discount: 30, categories: "Women's Accessories", itemLeft: "Almost Sold Out" },
  { id: 48, name: "Yoga Pants", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 1500, img: DealsImg1, discount: 20, categories: "Men's Accessories", itemLeft: "Almost Sold Out" },
  { id: 49, name: "Winter Hat", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 450, img: DealsImg2, discount: 15, categories: "Women's Fashion", itemLeft: "Almost Sold Out" },
  { id: 50, name: "Leather Jacket", tag: "AI Karam" , rating: 4, review: "(4.1k) Customer Reviews", price: 3000, img: DealsImg3, discount: 40, categories: "Men's Fashion", itemLeft: "Almost Sold Out" }
];


//Follow Us Images
export const followUsImages = [
  {name: followUsImage1, alt: "follow us image 1"},
  {name: followUsImage2, alt: "follow us image 2"},
  {name: followUsImage3, alt: "follow us image 3"},
  {name: followUsImage4, alt: "follow us image 4"},
  {name: followUsImage5, alt: "follow us image 5"},
  {name: followUsImage6, alt: "follow us image 6"},
  {name: followUsImage7, alt: "follow us image 7"}
]

//priceAndText

export const priceAndText = [
  {
      price: '$444B+',
      text: "Global economic activity in USD",
      icon: "📉"
  },
  {
      price: '$644M+',
      text: "Customers worldwide from millions of Shomyn stores",
      icon: "🌐"
  },
  {
      price: '175',
      text: "Countries where Shopify brands operate",
      icon: "🗾"
  },
]