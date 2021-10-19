import style from "./ShowAdress.module.css"
export default function ShowAdress({state}){
    let spliter = state?.split("").slice(0,22).join("");
    return(
        <div className={style.container}>
            <button type="button" className={style.button}><p>{spliter}</p></button>
        </div>
    )
}