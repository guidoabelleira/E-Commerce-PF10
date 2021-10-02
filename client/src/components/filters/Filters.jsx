import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { orderAscDesc, orderByPrice } from '../../redux/actions'

function Filter() {
    const dispatch = useDispatch()
    const [orden, setOrden] = useState('')

    function handleSortName(e) {
        dispatch(orderAscDesc(e.target.value))
        setOrden(`Ordenado ${e.target.value}`)
    }

    function handleSortPrice(e) {
        dispatch(orderByPrice(e.target.value))
        setOrden(`Ordenado ${e.target.value}`)
    }
//facu trata de dejar esta estructura, debes re pensar las actions y las categorias deben sacarse del mapeo del array del backend (cuando puedas)
    return (
        <div>
            <select>
            <option>Category</option>
                <option>Azucareras</option>
                <option>Yerberas</option>
                <option>Mates</option>
                <option>Tablas</option>
                <option>Posapavas</option>
            </select>
            <select onChange={handleSortName}>
            <option>by</option>
                <option value="asc">nombre</option>
                <option value="desc">precio</option>
            </select>
            <select onChange={handleSortPrice}>
            <option>Order</option>
                <option value="lowest">Ascendenteo</option>
                <option value="highest">Descendente</option>
            </select>
        </div>
    )
}

export default Filter