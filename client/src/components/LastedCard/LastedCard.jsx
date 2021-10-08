import { NavLink as Link } from 'react-router-dom';
import style from './LastedCard.module.css'
 
export default function LastedCard ({image, name, categories,id, index}){
    let duplicate = name.split(" ")
    name = [];
     name.push(duplicate[0])
     name.push(" ")
     name.push(duplicate[1])
     name.push(" ")
     name.push(duplicate[2])
     console.log(name)
     name.join("")
    return(
        <div className={style.container} key={index}>
            <Link to={`/products/${id}`}> <img className={style.img}src={image} alt={name} height="300px" width="350px" />
            </Link>
        <div className={style.subContainer}>
            <h4 className={style.h4}>{name}</h4>
            {categories.map((e, i)=> {
            return <p className={style.p} key={i}>{e.name}</p>
            })}
            <div className={style.buttons}>
            <Link to={`/products/${id}`}> <button>
            <p>Ver</p></button>
            </Link>
            <Link className={style.bttn}to={`/products/${id}`}>  <button>
            <p>Comprar</p></button>
            </Link>
            </div>
            </div>
        </div>
)
}