//Logo Image
import logo from './assests/image/logoBrand.png'

//Login Page
import loginImage from './assests/image/loginImg.svg'

//Home Page
import image1 from './assests/image/homePage.png'
import image2 from './assests/image/homePage1.png'
import image3 from './assests/image/homePage2.png'
import image4 from './assests/image/homePage3.png'
import image5 from './assests/image/slide1.png'
import image6 from './assests/image/slide2.png'
import image7 from './assests/image/slide3.png'
import image8 from './assests/image/slide4.png'
import image9 from './assests/image/slide5.png'

//Carousel Images
import carousel1 from './assests/image/carouselImg1.png'
import carousel2 from './assests/image/carouselImg2.png'
import carousel3 from './assests/image/carouselImg3.png'

export const navItems = [
    {name: "Home", path: "/"},
    {name: "Deals", path: "/deals"},
    {name: "New Arrival", path: "/new-arrival"},
    {name: "Products", path: "/products"},
    {name: "Log In", path: "/login"},
  ]

export const LoginImages = [logo, loginImage]

export const homeImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9]

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

export const products = [{
  id: 1,
  name: "Product 1",
  price: 100,
}]