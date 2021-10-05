import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, getCategoryFiltered, getAllProducts, setAscDesc } from '../../redux/actions'

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
        <div>
            <select onChange={handleCategoryFilter}>
                <option value={false}>Categorias</option>
                {
                    categories.map(el => {
                        return (
                            <option key={el.value} value={el.name}>{el.name}</option>
                        )
                    })
                }
            </select>
            <span>Filtrar por</span>
            <select onChange={handleSortChange}>
                <option value={false}>---</option>
                <option key={1} value="price">Precio</option>
                <option key={2} value="name">Nombre</option>
            </select>
            <span>Orden</span>
            <select onChange={handleOrdChange}>
                <option value={false}>---</option>
                <option key={1} value="asc">Ascendente</option>
                <option key={2}value="desc">Descendente</option>
            </select>

            <button onClick={handleButton}>Quitar filtros</button>
        </div>
    )
}

export default Filter