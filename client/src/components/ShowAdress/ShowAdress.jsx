import style from "./ShowAdress.module.css"
export default function ShowAdress(){
    return(
        <div className={style.container}>
            <button type="button" className={style.button}><p>Calle S.V 123</p><h2>      ○</h2></button>
        </div>
    )
}