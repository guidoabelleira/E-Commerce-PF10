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

    return (
        <div>
            <select>
                <option>Azucareras</option>
                <option>Yerberas</option>
                <option>Mates</option>
                <option>Tablas</option>
                <option>Posapavas</option>
            </select>
            <select onChange={handleSortName}>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>
            <select onChange={handleSortPrice}>
                <option value="lowest">Precio bajo</option>
                <option value="highest">Precio alto</option>
            </select>
        </div>
    )
}

export default Filter