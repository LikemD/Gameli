import React , { useContext , useEffect} from 'react';
import '../App.css';

import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

const TransactionList = () => {

    const { transactions , getTxns }  = useContext(GlobalContext);

  useEffect(() => {
    getTxns();
        },[ ]) ;


    return (
        <div className='container'>
            <h3>History</h3>
            <ul id='list' className='list'>
                {transactions.map((transaction) => (<Transaction key={transaction._id} transaction={transaction}/>))}
            </ul>
        </div>
    )
}

export default TransactionList;