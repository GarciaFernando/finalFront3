import { createContext, useEffect, useReducer} from "react";
export const GlobalContext = createContext()

const dentistReducer = (state, action) =>{
    switch(action.type){
        case "GET_DENTIST":
            return{
                dentistList: action.payload,
                favList: state.favList
            }
        case "ADD_FAV":
            return{
                dentistList: state.dentistList,
                favList: [...state.favList,action.payload]
            }
        case "DEL_FAV":
            return{
                dentistList: state.dentistList,
                favList: state.favList.filter((fav)=>fav.id!==action.payload)
            }
    }
}

const initState =  JSON.parse(localStorage.getItem("dentist")) || {
    dentistList: [],
    favList: []
}


export function DentistProvider({ children }){

    const [dentistState, dentistDispatch] = useReducer( dentistReducer, initState )

    
    const url = "https://jsonplaceholder.typicode.com/users"

    useEffect(()=>{
        fetch(url)
        .then(res=>{
            if(!res.ok){
                throw new Error('No se pudo obtener la lista de Odontologos')
            }
            return res.json();
        })
        .then(data=>{
            console.log("ESTOY DENTRO DEL getData")
            dentistDispatch({type:"GET_DENTIST",payload: data})})
    },[])

    useEffect(() => {
        localStorage.setItem("dentist", JSON.stringify(dentistState));
      }, [dentistState]);

    return(
        <GlobalContext.Provider value={{
            dentistState,
            dentistDispatch
        }}>
            { children }
        </GlobalContext.Provider>
    )
}