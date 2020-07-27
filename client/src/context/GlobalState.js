import React , { useReducer, createContext } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    transactions: [],
    error: null,
    loading: true
};
// create context
export const GlobalContext = createContext(initialState);

// provider 
export const GlobalProvider = ({ children }) => {
    const [state , dispatch ] = useReducer( AppReducer , initialState);

    async function getTxns(){
        try {
            const res = await axios.get('/api/v1/txns');
            dispatch({
                type: 'GET_TXNS',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'GET_ERR',
                payload: console.log(err)
            });
        }
    }

    async function deleteTransaction(id){
        try {
            await axios.delete(`/api/v1/txns/${id}`);
            dispatch({
                type: 'DELETE_TXN',
                payload: id
            });
            
        } catch (err) {
            dispatch({
                type: 'GET_ERR',
                payload: console.log(err)
            });
        }
    }

    async function addTransaction(transaction){
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        try {
            const res = await axios.post('/api/v1/txns', transaction, config);
            dispatch({
                type: 'ADD_TXN',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'GET_ERR',
                payload: console.log(err)
            });
            
        }
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            error: state.error,
            loading: state.loading,
            deleteTransaction,
            addTransaction,
            getTxns
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider;