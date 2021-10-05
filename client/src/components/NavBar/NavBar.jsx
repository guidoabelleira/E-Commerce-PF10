import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
// import AboutUs from "../img/AboutUs.png";
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
                   {/* <img src={Home} alt="home"/>  */}
                    <i><FontAwesomeIcon icon={faHouseUser}/></i>
                    <p>
                        Home
                    </p>
                </Link>
            </div>
            <div className={style.mainBttn}>
                <Link className={style.mainBttn} to="/Profile">
                    <img src={Profile} alt="profile"/> 
                    <p>
                        Mi cuenta
                    </p>
                </Link>
            </div>
            <div className={style.mainBttn}>
                <Link className={style.mainBttn}to="/products">
                    <img src={Products} alt="Products"/> 
                    <p>
                        Catalogo
                    </p>
                </Link>
            </div>
            <div className={style.mainBttn}>
                <Link className={style.mainBttn} to="/addProduct">
                    <img src={Profile} alt="add Product"/> 
                    <p>
                        Agregar Productos
                    </p>
                </Link>
            </div>
            <div className={style.mainBttn}>
                <Link className={style.mainBttn} to="/ContactUs">
                    <img src={ContactUs} alt="contactUs"/> 
                    <p>
                        Contactenos
                    </p>
                </Link>
            </div>
            <div className={style.mainBttn}>
                <Link className={style.mainBttn} to="/AboutUs">
                    {/* <img src={faBookmark} alt="aboutUs"/>  */}
                    {/* Prueba Guido */}
                    <i><FontAwesomeIcon icon={faBookmark}/></i>
                    <p>
                        Sobre Nosotros
                    </p>
                </Link>
            </div>
        </div>
    )
}