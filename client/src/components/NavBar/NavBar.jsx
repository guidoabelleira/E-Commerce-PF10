import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import AboutUs from "../img/aboutUs.png";
import ContactUs from "../img/ContacUs.png";
import Home from "../img/Home.png";
import LogoProvi from "../img/LogoProvi.png";
import Products from "../img/Products.png";
import Profile from "../img/Profile.svg";

// FONT AWEASOME
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouseUser, faWarehouse, faAddressCard, faEnvelopeSquare, faBookmark, faBoxOpen} from '@fortawesome/free-solid-svg-icons';


export default function NavBar() {
    return(
        // <div>
        //   <img src={LogoProvi} alt="Logo"/>
        //     <div className={style.mainBttn}>
        //         <Link className={style.mainLink} to="/home">
        //            <img src={Home} alt="home"/> 
        //             <button>
        //                 Home
        //             </button>
        //         </Link>
        //     </div>
        // <div className={style.mainBttn}>
        //     <Link className={style.mainLink} to="/products">
        //          <img src={Products} alt="Products"/> 
        //         <button>
        //             Products
        //         </button>
        //     </Link>
        // </div>
        // <div className={style.mainBttn}>
        //     <Link to="/ContactUs">
        //       <img src={ContactUs} alt="contactUs"/> 
        //         <button>
        //             Contact Us
        //         </button>
        //     </Link>
        // </div>
        // <div className={style.mainBttn}>
        //     <Link to="/AboutUs">
        //         <img src={AboutUs} alt="aboutUs"/> 
        //         <button>
        //            About Us
        //         </button>
        //     </Link>
        // </div>
        // <div className={style.mainBttn}>
        //     <Link to="/Profile">
        //       {/* <img src={Profile} alt="profile"/>  */}
        //         <button>
        //              Profile
        //         </button>
        //     </Link>
        // </div>
        // </div>
        <div className={style.navBar}>
            <img src={LogoProvi} alt="Logo"/>
            <ul className={style.ul}>
                <li className={style.li}>
                    <a>
                        <Link  to="/home">
                            {/* <img src={Home} alt="home"/>  */}
                            <FontAwesomeIcon icon={faHouseUser}/>
                            <button>
                                Home
                            </button>
                        </Link>
                    </a>
                </li>
                <li className={style.li}>
                    <a>
                        <Link  to="/products">
                            {/* <img src={Products} alt="Products"/>  */}
                            <FontAwesomeIcon icon={faWarehouse}/>
                            <button>
                                Products
                            </button>
                        </Link>
                    </a>
                </li>
                <li className={style.li}>
                    <a>
                        <Link to="/Profile">
                            {/* <img src={Profile} alt="profile"/>  */}
                            <FontAwesomeIcon icon={faBoxOpen}/>
                            <button>
                                Profile
                            </button>
                        </Link>
                    </a>
                </li>
                <li className={style.li}>
                    <a>
                        <Link to="/Profile">
                            {/* <img src={Profile} alt="profile"/>  */}
                            <FontAwesomeIcon icon={faAddressCard}/>
                            <button>
                                Profile
                            </button>
                        </Link>
                    </a>
                </li>
                <li className={style.li}>
                    <a>
                        <Link to="/ContactUs">
                            {/* <img src={ContactUs} alt="contactUs"/>  */}
                            <FontAwesomeIcon icon={faEnvelopeSquare}/>
                            <button>
                                Contact Us
                            </button>
                        </Link>
                    </a>
                </li>
                <li className={style.li}>
                    <a>
                        <Link to="/AboutUs">
                            {/* <img src={AboutUs} alt="aboutUs"/>  */}
                            <FontAwesomeIcon icon={faBookmark}/>
                            <button>
                                About Us
                            </button>
                        </Link>
                    </a>
                </li>
            </ul>
        
        </div>
    )
}