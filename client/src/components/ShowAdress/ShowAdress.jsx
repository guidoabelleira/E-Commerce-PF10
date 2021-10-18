import style from "./ShowAdress.module.css"
export default function ShowAdress({state}){
    return(
        <div className={style.container}>
            <button type="button" className={style.button}><p>{state}</p></button>
        </div>
    )
}