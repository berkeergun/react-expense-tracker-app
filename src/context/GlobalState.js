import React , {createContext , useReducer} from "react";
import AppReducer from "./AppReducer"

// Initial State

const initialState = {
    transactions: [
        //   { id: 1, text: 'Örnek', amount: -50 },
        //   { id: 2, text: 'Örnek2', amount: 300 },
        //   { id: 3, text: 'Örnek3', amount: 20 }
        ]
}

// Create Context 
export const GlobalContext = createContext(initialState)

// Provider Component -    diğer componentler stateye ulaşması için yapıyoruz
export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,initialState);

    // Actions
    function deleteTransaction(id){
        dispatch({
            type:"DELETE_TRANSACTION",
            payload: id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type:"ADD_TRANSACTION",
            payload: transaction
        })
    }

    function deleteAllTransaction(){
        dispatch({
            type:"DELETE_ALL_TRANSACTION",
            payload: []
        })
    }

    // bu işleme göre app.jsdeki componentlerin hepsi statede transactiona ulaşıyor
    return(<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction,
        deleteAllTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}
