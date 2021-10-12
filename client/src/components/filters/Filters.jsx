import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, getCategoryFiltered, getAllProducts, setAscDesc } from '../../redux/actions'
import style from "./Filters.module.css"
function Filter() {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories)
    const [orden, setOrden] = useState({
        ord: ""
    })

    function handleCategoryFilter(e) {
        dispatch(getCategoryFiltered(e.target.value))
    }

    function handleButton() {
        dispatch(getAllProducts())
    }

    function handleSortChange(e) {
        setOrden({ord: e.target.value})
    }

    function handleOrdChange(e) {
        if(orden.ord) {
            let option = {
                asc: e.target.value,
            }
            dispatch(setAscDesc(orden, option))
        } else {
            alert("Primero selecciona el tipo de filtrado")
        }
    }

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getAllProducts())

    },[dispatch])

    return (
        <div className={style.container}>
            <p className={style.p}>Categorias: </p>
            <select className={style.selects} onChange={handleCategoryFilter}>
                <option value={false}>----- </option>
                {
                    categories.map(el => {
                        return (
                            <option key={el.value} value={el.name}>{el.name}</option>
                        )
                    })
                }
            </select>
            <span className={style.p}> Filtrar por: </span>
            <select className={style.selects} onChange={handleSortChange}>
                <option value={false} selected>---</option>
                <option key={1} value="price">Precio</option>
                <option key={2} value="name">Nombre</option>
            </select>
            <span className={style.p}>Orden: </span>
            <select className={style.selects} onChange={handleOrdChange}>
                <option value={false} selected>---</option>
                <option key={1} value="asc">Ascendente</option>
                <option key={2} value="desc">Descendente</option>
            </select>

            <button className={style.bttn} onClick={handleButton}>Quitar</button>
        </div>
    )
}

export default Filter