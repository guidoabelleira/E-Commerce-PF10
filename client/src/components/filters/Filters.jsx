import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderAscDesc, orderByPrice, getCategories, getCategoryFiltered, getAllProducts } from '../../redux/actions'

function Filter() {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories)
    const [orden, setOrden] = useState('')

    function handleSortName(e) {
        dispatch(orderAscDesc(e.target.value))
        setOrden(`Ordenado ${e.target.value}`)
    }

    function handleSortPrice(e) {
        dispatch(orderByPrice(e.target.value))
        setOrden(`Ordenado ${e.target.value}`)
    }

    function handleCategoryFilter(e) {
        dispatch(getCategoryFiltered(e.target.value))
    }

    function handleButton() {
        dispatch(getAllProducts())
    }

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getAllProducts())

    },[dispatch])

//facu trata de dejar esta estructura, debes re pensar las actions y las categorias deben sacarse del mapeo del array del backend (cuando puedas)
    return (
        <div>
            <select onChange={handleCategoryFilter}>
                <option value={null}>Category</option>
                {
                    categories.map(el => {
                        return (
                            <option value={el.name}>{el.name}</option>
                        )
                    })
                }
            </select>
            <select onChange={handleSortName}>
            <option>Filter by</option>
                <option value="asc">A - Z</option>
                <option value="desc">Z - A</option>
            </select>
            <select onChange={handleSortPrice}>
            <option>Order</option>
                <option value="lowest">Barato</option>
                <option value="highest">Caro</option>
            </select>
            <a href="" onClick={handleButton}>Quitar filtros</a>
        </div>
    )
}

export default Filter