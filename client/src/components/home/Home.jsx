import {useEffect, useState} from 'react';
import NavBar from '../NavBar';

import style from './home.module.css';


function Home(props) {

    return (
        <div className={style.body}>
            <NavBar />
            {/* <Search /> */}
           
        </div>
    )
};

export default Home;