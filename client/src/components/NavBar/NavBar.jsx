import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import AboutUs from "../img/AboutUs.png";
import ContactUs from "../img/ContacUs.png";
import Home from "../img/Home.png";
import LogoProvi from "../img/LogoProvi.png";
import Products from "../img/Products.png";
import Profile from "../img/Profile.png";

// FONT AWEASOME
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouseUser, faWarehouse, faAddressCard, faEnvelopeSquare, faBookmark, faBoxOpen, faPlusSquare} from '@fortawesome/free-solid-svg-icons';


export default function NavBar() {
    return(
        <div className={style.container}>
          <img className={style.logo} src={LogoProvi} alt="Logo"/>
         
            <div className={style.mainBttn}>
                <Link className={style.mainBttn} to="/home">
                   <img src={Home} alt="home"/> 
                    <p>
                        Home
                    </p>
                </Link>
            </div>
        <div className={style.mainBttn}>
            <Link className={style.mainBttn}to="/products">
                 <img src={Products} alt="Products"/> 
                <p>
                    Products
                </p>
            </Link>
        </div>
        <div className={style.mainBttn}>
            <Link className={style.mainBttn} to="/ContactUs">
              <img src={ContactUs} alt="contactUs"/> 
                <p>
                    Contact Us
                </p>
            </Link>
        </div>
        <div className={style.mainBttn}>
            <Link className={style.mainBttn} to="/AboutUs">
                <img src={AboutUs} alt="aboutUs"/> 
                <p>
                   About Us
                </p>
            </Link>
        </div>
        <div className={style.mainBttn}>
            <Link className={style.mainBttn} to="/Profile">
               <img src={Profile} alt="profile"/> 
                <p>
                     Profile
                </p>
            </Link>
            </div>
       
        </div>
        // <div className={style.navBar}>
        //     {/* <img src={LogoProvi} alt="Logo"/> */}
        //     <ul className={style.ul}>
        //         <li className={style.li}>
        //             <a>
        //                 <Link  to="/home">
        //                     {/* <img src={Home} alt="home"/>  */}
        //                     <FontAwesomeIcon icon={faHouseUser}/>
        //                     <button>
        //                         Home
        //                     </button>
        //                 </Link>
        //             </a>
        //         </li>
        //         <li className={style.li}>
        //             <a>
        //                 <Link  to="/products">
        //                     {/* <img src={Products} alt="Products"/>  */}
        //                     <FontAwesomeIcon icon={faWarehouse}/>
        //                     <button>
        //                         Products
        //                     </button>
        //                 </Link>
        //             </a>
        //         </li>
        //         <li className={style.li}>
        //             <a>
        //                 <Link  to="/addproducts">
        //                     {/* <img src={Products} alt="Products"/>  */}
        //                     <FontAwesomeIcon icon={faPlusSquare}/>
        //                     <button>
        //                         New
        //                     </button>
        //                 </Link>
        //             </a>
        //         </li>
        //         <li className={style.li}>
        //             <a>
        //                 <Link to="/shopcart">
        //                     {/* <img src={Profile} alt="profile"/>  */}
        //                     <FontAwesomeIcon icon={faBoxOpen}/>
        //                     <button>
        //                         Shop
        //                     </button>
        //                 </Link>
        //             </a>
        //         </li>
        //         <li className={style.li}>
        //             <a>
        //                 <Link to="/Profile">
        //                     {/* <img src={Profile} alt="profile"/>  */}
        //                     <FontAwesomeIcon icon={faAddressCard}/>
        //                     <button>
        //                         Profile
        //                     </button>
        //                 </Link>
        //             </a>
        //         </li>
        //         <li className={style.li}>
        //             <a>
        //                 <Link to="/ContactUs">
        //                     {/* <img src={ContactUs} alt="contactUs"/>  */}
        //                     <FontAwesomeIcon icon={faEnvelopeSquare}/>
        //                     <button>
        //                         Contact Us
        //                     </button>
        //                 </Link>
        //             </a>
        //         </li>
        //         <li className={style.li}>
        //             <a>
        //                 <Link to="/AboutUs">
        //                     {/* <img src={AboutUs} alt="aboutUs"/>  */}
        //                     <FontAwesomeIcon icon={faBookmark}/>
        //                     <button>
        //                         About Us
        //                     </button>
        //                 </Link>
        //             </a>
        //         </li>
        //     </ul>
        
        // </div>
    )
}