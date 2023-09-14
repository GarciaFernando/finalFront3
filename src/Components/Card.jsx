import styles from '../Components/Card.module.css'
import { useState } from 'react'

function Card ({user}){

    const [isFavorite,setIsFavorite]=useState(false)
    const handleFav=()=>{
        setIsFavorite(!isFavorite)
        if(!isFavorite){
            addFavorite(user)
        }else{
            deleteFavorite(user)
        }
    }
    const [favs, setFavs] = useState([])

    const addFavorite=(user)=>{
        setFavs([...favs,user])
        console.log("Agregando Fav")
        console.log(user)
    }
    const deleteFavorite=(user)=>{
        const updatedFavs = favs.filter(u=>u.id!==user.id)
        setFavs(updatedFavs)
        console.log("Eliminando Fav")

    }

    return(
        <>
        <div className={styles.container}>
            <img src="..\src\assets\doctor-male-default.png"></img>
            <h2>{user.name}</h2>
            <p>{user.username}</p>
            <button onClick={handleFav}>
                {isFavorite? 'Quitar de fav':'Agregar a Fav'}
            </button>
            
        </div>
        </>
    )
}

export default Card