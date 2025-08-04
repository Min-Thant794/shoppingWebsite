import { Links } from 'react-router-dom'

//Logo Image
import logo from './assests/image/logoBrand.png'

//Login Page
import loginImage from './assests/image/loginImg.svg'

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