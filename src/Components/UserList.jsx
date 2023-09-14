import { useContext } from "react"
import Card from './Card'
import styles from '../Components/UserList.module.css'
import { GlobalContext } from "../Context/globalContext"

function UserList (){

    const dentist = useContext(GlobalContext)
    console.log(dentist)
    return(
        <>
        <h2>Lista de Dentistas</h2>
        <div className={styles.container}>
            {
                dentist.map(user=>(<Card key={user.id} user={user}/>))
            }
        </div>
        <div className="Favoritos">
            
                <h1>Aca van a ir los Favoritos</h1>
                
            
        </div>
        </>
    )
}

export default UserList