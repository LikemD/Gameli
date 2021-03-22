import React , { useContext }from 'react';
import { numberWithCommas } from '../utils/formats';
import '../App.css';

import {GlobalContext} from '../context/GlobalState';

export const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const clname = transaction.amount < 0 ? 'minus' : 'plus';

    const { deleteTransaction } = useContext(GlobalContext);

    return(
        <li className={clname} key={transaction._id}> {transaction.text} 
            <span>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span><button className='delete-btn' onClick={()=> deleteTransaction(transaction._id)}>&times;</button>
        </li>
    )
}

export default Transaction;