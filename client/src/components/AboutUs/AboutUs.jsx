import Loading from "../Loading/Loading";
import ReactLoading from 'react-loading';
import { useLocalStorage } from "../Hooks/useLocalStorage";

import style from './aboutUs.module.css';

export default function AboutUs(){
    const [text, setText] = useLocalStorage('text', '')
    return (
        <div>
            <Loading />
        </div>
        
        
    )
}