import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import {useDispatch, useSelector} from 'react-redux'
import LogoProvi from "../img/LogoProvi.png";


// FONT AWEASOME
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouseUser, faUser, faAddressCard, faBookmark, faBoxOpen, faPlusSquare} from '@fortawesome/free-solid-svg-icons';

//auth0
import {useAuth0} from "@auth0/auth0-react"
import LoginButton from "../LoginButton/LoginButton"
import { useEffect } from "react";
import { getUser } from "../../redux/actions";

export default function NavBar() {
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.user[0]);

    const id = localStorage.getItem('idUser')
    const {isAuthenticated} = useAuth0();

    useEffect(() => {
        async function getters(){
            await dispatch(getUser(id))
        }
        getters();
    },[dispatch, id]);

    if(isAuthenticated){
        return (
            <div className={style.container}>
                <img className={style.logo} src={LogoProvi} alt="Logo"/>
                <div className={style.column}>
                    <div className={style.mainBttn}>
                        <Link className={style.mainBttn} to="/home">
                            <i><FontAwesomeIcon icon={faHouseUser}/></i>
                            <p>Home</p>
                        </Link>
                    </div>

                    <div className={style.mainBttn}>
                        <Link className={style.mainBttn} to="/Profile">
                            <i><FontAwesomeIcon icon={faUser}/></i>
                            <p>Mi cuenta</p>
                        </Link>
                    </div>

                    <div className={style.mainBttn}>
                        <Link className={style.mainBttn}to="/products">
                            <i><FontAwesomeIcon icon={faBoxOpen}/></i>
                            <p>Catálogo</p>
                        </Link>
                    </div>
                    
                    {userLogin?.isAdmin === true ? (
                        <div className={style.mainBttn}>
                            <Link className={style.mainBttn} to="/adminproducts">
                                <i><FontAwesomeIcon icon={faPlusSquare}/></i>
                                <p>Mis Productos</p>
                            </Link>
                        </div>
                    ) : (<></>)}
                    
                    {userLogin?.isAdmin === true ? (
                        <div className={style.mainBttn}>
                        <Link className={style.mainBttn} to="/orderadmin">
                            <i><FontAwesomeIcon icon={faPlusSquare}/></i>
                            <p>Pedidos</p>
                        </Link>
                    </div>
                    ) : (
                        <div className={style.mainBttn}>
                            <Link className={style.mainBttn} to="/order">
                                <i><FontAwesomeIcon icon={faPlusSquare}/></i>
                                <p>Mis Pedidos</p>
                            </Link>
                        </div>
                    )}
                    

                    <div className={style.mainBttn}>
                        <Link className={style.mainBttn} to="/contact">
                            <i><FontAwesomeIcon icon={faAddressCard}/></i>
                            <p>Contactanos</p>
                        </Link>
                    </div>

                    <div className={style.mainBttn}>
                        <Link className={style.mainBttn} to="/about">
                            <i><FontAwesomeIcon icon={faBookmark}/></i>
                            <p>Sobre Nosotros</p>
                        </Link>
                    </div>

                </div>

                <div className={style.login}>
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
                        <i><FontAwesomeIcon icon={faHouseUser}/></i>
                        <p>Home</p>
                    </Link>
                </div>
                
                <div className={style.mainBttn}>
                    <Link className={style.mainBttn}to="/products">
                        <i><FontAwesomeIcon icon={faBoxOpen}/></i>
                        <p>Catalogo</p>
                    </Link>
                </div>
                <div className={style.mainBttn}>
                    <Link className={style.mainBttn} to="/contact">
                        <i><FontAwesomeIcon icon={faAddressCard}/></i>
                        <p>Contactenos</p>
                    </Link>
                </div>
                <div className={style.mainBttn}>
                    <Link className={style.mainBttn} to="/about">
                        <i><FontAwesomeIcon icon={faBookmark}/></i>
                        <p>Sobre Nosotros</p>
                    </Link>
                </div>
                <div>
                <LoginButton/>
                </div>
            </div>
        )
    }
    
}