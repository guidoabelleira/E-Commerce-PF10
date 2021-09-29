import { Link } from "react-router-dom";
import style from "./NavBar.module.css"
import AboutUs from "./img/AboutUs"
import ContactUs from "./img/ContactUs"
import Home from "./img/Home"
import LogoProvi from "./img/LogoProvi"
import Products from "./img/Products"
import Profile from "./img/Profile"
export default function NavBar() {
    return(
        <div>
            <img src={LogoProvi} alt="Logo"/>
            <div className={style.mainBttn}>
        <Link className={style.mainLink} to="/">
        <img src={Home} alt="Home"/>
        <button>
        Home
        </button>
        </Link>
        </div>
        <div className={style.mainBttn}>
        <Link className={style.mainLink} to="/Products">
            <img src={Products} alt="Products"/>
            <button>
                Products
            </button>
        </Link>
        </div>
        <div className={style.mainBttn}>
            <Link to="/ContactUs">
                <img src={ContactUs} alt="ContactUs"/>
                <button>
                    Contact Us
                </button>
            </Link>
        </div>
        <div className={style.mainBttn}>
            <Link to="/AboutUs">
                <img src={AboutUs} alt="AboutUs"/>
                <button>
                   About Us
                </button>
            </Link>
        </div>
        <div className={style.mainBttn}>
            <Link to="/Profile">
                <img src={Profile} alt="Profile"/>
                <button>
                     Profile
                </button>
            </Link>
        </div>
        </div>
    )
}