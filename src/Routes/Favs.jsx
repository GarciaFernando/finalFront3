//import { useState } from "react"
import { useContext } from "react"
import { GlobalContext } from "../Context/globalContext"
import Card from '../Components/Card'
import styles from '../Components/UserList.module.css'

function Favs(){
    const { dentistState }= useContext(GlobalContext)
    const favList = dentistState.favList

    function backButton(){
        window.history.back();
    }
    return (
        <>
        <h1>Lista de Favoritos</h1>
        <button onClick={backButton}>Back</button>
        <div className={styles.container}>
            {favList.map(user=>(<Card key={user.id} user={user}/>))}             
        </div>
        </>
    )
}

export default Favs