import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
// import AboutUs from "../img/AboutUs.png";
// import ContactUs from "../img/ContacUs.png";
// import Home from "../img/Home.png";
import LogoProvi from "../img/LogoProvi.png";
// import Products from "../img/Products.png";
// import Profile from "../img/Profile.png";

// FONT AWEASOME
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouseUser, faUser, faAddressCard, faEnvelopeSquare, faBookmark, faBoxOpen, faPlusSquare} from '@fortawesome/free-solid-svg-icons';

//auth0
import {useAuth0} from "@auth0/auth0-react"
import LoginButton from "../LoginButton/LoginButton"

export default function NavBar() {
 const {isAuthenticated} = useAuth0();
 if(isAuthenticated){
    return(
        <div className={style.container}>
            <img className={style.logo} src={LogoProvi} alt="Logo"/>
         
            <div className={style.mainBttn}>
                <Link className={style.mainBttn} to="/home">
                   {/* <img src={Home} alt="home"/>  */}
                    <i><FontAwesomeIcon icon={faHouseUser}/></i>
                    <p>
                        Home
                    </p>
                </Link>
            </div>
            <div className={style.mainBttn}>
                <Link className={style.mainBttn} to="/Profile">
                    {/* <img src={Profile} alt="profile"/>  */}
                    <i><FontAwesomeIcon icon={faUser}/></i>
                    <p>
                        Mi cuenta
                    </p>
                </Link>
            </div>
            <div className={style.mainBttn}>
                <Link className={style.mainBttn}to="/products">
                    {/* <img src={Products} alt="Products"/>  */}
                    <i><FontAwesomeIcon icon={faBoxOpen}/></i>
                    <p>
                        Catalogo
                    </p>
                </Link>
            </div>
            <div className={style.mainBttn}>
                <Link className={style.mainBttn} to="/addProduct">
                    {/* <img src={Profile} alt="add Product"/>  */}
                    <i><FontAwesomeIcon icon={faPlusSquare}/></i>
                    <p>
                        Agregar Productos
                    </p>
                </Link>
            </div>
            <div className={style.mainBttn}>
                <Link className={style.mainBttn} to="/ContactUs">
                    {/* <img src={ContactUs} alt="contactUs"/>  */}
                    <i><FontAwesomeIcon icon={faAddressCard}/></i>
                    <p>
                        Contactenos
                    </p>
                </Link>
            </div>
            <div className={style.mainBttn}>
                <Link className={style.mainBttn} to="/about">
                    {/* <img src={faBookmark} alt="aboutUs"/>  */}
                    {/* Prueba Guido */}
                    <i><FontAwesomeIcon icon={faBookmark}/></i>
                    <p>
                        Sobre Nosotros
                    </p>
                </Link>
            </div>
            <div>
                <LoginButton/>
            </div>
        </div>
    )
 }else {
    return(
        <div className={style.container}>
            <img className={style.logo} src={LogoProvi} alt="Logo"/>
         
            <div className={style.mainBttn}>
                <Link className={style.mainBttn} to="/home">
                   {/* <img src={Home} alt="home"/>  */}
                    <i><FontAwesomeIcon icon={faHouseUser}/></i>
                    <p>
                        Home
                    </p>
                </Link>
            </div>
            
            <div className={style.mainBttn}>
                <Link className={style.mainBttn}to="/products">
                    <i><FontAwesomeIcon icon={faBoxOpen}/></i>
                    <p>
                        Catalogo
                    </p>
                </Link>
            </div>
            <div className={style.mainBttn}>
                <Link className={style.mainBttn} to="/ContactUs">
                    <i><FontAwesomeIcon icon={faAddressCard}/></i>
                    <p>
                        Contactenos
                    </p>
                </Link>
            </div>
            <div className={style.mainBttn}>
                <Link className={style.mainBttn} to="/about">
                    <i><FontAwesomeIcon icon={faBookmark}/></i>
                    <p>
                        Sobre Nosotros
                    </p>
                </Link>
            </div>
            <div>
            <LoginButton/>
            </div>
        </div>
    )
 }
  
}