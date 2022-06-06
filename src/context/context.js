import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer'
const initialState = []


export const ExpenseTrackerContext = createContext();

export const Provider = ({ children }) => {
    const [trans, dispatch] = useReducer(contextReducer, initialState);

    //Actions Creators
    const deleteTransaction = (id)=>{
        dispatch({type:'DELETE_TRANSACTION',payload:id})
    }
    const addTransaction = (trans)=>{
        dispatch({type:'ADD_TRANSACTION',payload:trans})
    }

    // console.log(trans);
     return (
        <ExpenseTrackerContext.Provider value={{deleteTransaction, addTransaction, trans}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}