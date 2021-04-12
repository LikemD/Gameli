import React , { useContext } from 'react';
import { numberWithCommas } from '../utils/formats';
import '../App.css';


import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const { transactions , firstName} = useContext(GlobalContext);
    const amounts  = transactions.map( transaction => transaction.amount );
    const total = amounts.reduce((acc,item) => (acc += item),0).toFixed(2); 

    return (
        <div className='container'>
            <h4>Hi {firstName}, Your Account Balance</h4>
            <h1 id='balance'>${numberWithCommas(total)}</h1>
        </div>
        
    )
}

export default Balance;