import React from 'react';
import ReactLoading from 'react-loading';

import style from '../Loading/Loading.module.css';

const Loading = () => (
    <div className={style.loading}>
        <ReactLoading type={'spinningBubbles'} color="#0E6655" height={667} width={375} />
    </div>
    
);
 
export default Loading;