import { useContext } from "react"
import Card from './Card'
import styles from '../Components/UserList.module.css'
import { GlobalContext } from "../Context/globalContext"

function UserList (){

    const { dentistState}= useContext(GlobalContext)
    console.log(dentistState)
    const dentist = dentistState.dentistList

    return(
        <>
        <h2>Lista de Dentistas</h2>
        <div className={styles.container}>
            {
                dentist.map(user=>(<Card key={user.id} user={user}/>))
            }
        </div>
        </>
    )
}

export default UserList