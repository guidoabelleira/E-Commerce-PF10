import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getProductByName } from "../../redux/actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

//Hook localStore
// import {useLocalStorage} from '../Hooks/useLocalStorage';
import {useSessionStorage} from '../Hooks/useSessionStorage';

import style from './Searchbar.module.css';

// se corrije ruta de redux/actions

function Searchbar() {
    const dispatch = useDispatch()
    const [input, setInput] = useSessionStorage('text', '')

    function handleInputChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getProductByName(input))
    }
    useEffect(() => {
        async function getters(){
            await getProductByName(input)
        }
        getters()
    }, [input]);
    
    return (
        <div className={style.container}>
            <div className={style.search}>
                <input type="text" 
                className={style.searchTerm} 
                placeholder="Buscar..." 
                onChange={(handleInputChange)}/>
                <button type="submit" className={style.searchButton}onClick={handleSubmit}>
                    <i className={style.i}>
                        <FontAwesomeIcon icon={faSearch}/>
                    </i>
                </button>
            </div>
        </div>
    )
}

export default Searchbar

