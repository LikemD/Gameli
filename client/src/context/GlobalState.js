import React , { useReducer, createContext } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    transactions: [],
    firstName: '',
    userId: '',
    error: null,
    loading: true,
    step: 1
};
// create context
export const GlobalContext = createContext(initialState);

// provider 
export const GlobalProvider = ({ children }) => {
    const [state , dispatch ] = useReducer( AppReducer , initialState);

    async function getTxns(){
            try {
                const res = await axios.get(`/api/v1/txns`);
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
                const res = await axios.post(`/api/v1/txns`, transaction, config);
                dispatch({
                    type: 'ADD_TXN',
                    payload: res.data.data
                });
                console.log(res)
            } catch (err) {
                dispatch({
                    type: 'GET_ERR',
                    payload: console.log(err)
                });
                
            }
    }

    async function login(data){
        try {
            const res = await axios.post('api/v1/users/login' , data)
            dispatch({
                type: 'LOGIN',
                payload: res.data.data
            })
        } catch (error) {
            dispatch({
                type: 'GET_ERR',
                payload: console.log(error)
            })
        }
    }

    async function dateFilter(sDate , eDate){
        const startDate = new Date(sDate)
        const endDate = new Date(eDate)

        try {
           const res = await axios.get('api/v1/txns/sortDate' , {params: {startDate , endDate}})
            dispatch({
                type: 'DATE_FILTER',
                payload: res.data.data
            })      
        } catch (error) {
            console.log(error)
        }
    }

    async function register(data){
        if(data){
            try {
                const res = await axios.post('api/v1/users/register', data);
                if(res) console.log('success')
            } catch (error) {
                console.log(error)
            }
        }
    }


    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            error: state.error,
            loading: state.loading,
            userId: state.userId,
            firstName: state.firstName,
            step: state.step,
            deleteTransaction,
            addTransaction,
            getTxns,
            login,
            register,
            dateFilter
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider;