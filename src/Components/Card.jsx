import { useContext } from 'react'
import styles from '../Components/Card.module.css'
import { GlobalContext } from "../Context/globalContext"

function Card ({user}){
    const { dentistState, dentistDispatch } = useContext(GlobalContext)
    const dispatch = dentistDispatch
    const isFav = dentistState.favList.find((e)=>e.id==user.id)

    function handleFav(user){

        if(isFav){
            dispatch({type:"DEL_FAV",payload:user.id})
        }else{
            dispatch({type:"ADD_FAV",payload:user})
        }

    }

    return(
        <>
        <div className={styles.container}>
            <img src="..\src\assets\doctor-male-default.png"></img>
            <h2>{user.name}</h2>
            <p>{user.username}</p>
            <button onClick={()=>handleFav(user)}>
                {isFav? 'Quitar de fav':'Agregar a Fav'}
            </button>
            
        </div>
        </>
    )
}

export default Card