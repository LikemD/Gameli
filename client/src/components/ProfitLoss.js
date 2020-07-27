import React, {useContext} from 'react';
import { numberWithCommas } from '../utils/formats';


import { GlobalContext } from '../context/GlobalState';

const ProfitLoss = () => {
    const { transactions } = useContext(GlobalContext);
    const amount = transactions.map(transaction => transaction.amount);
    
    const income = amount
        .filter(item => item > 0)
        .reduce((acc,item) => (acc += item),0)
        .toFixed(2);


    const expenses = ( amount
        .filter(item => item < 0)
        .reduce((acc,item) => (acc += item),0) * -1
    ).toFixed(2);

    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className='money plus' id='money-plus'> +${numberWithCommas(income)} </p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className='money minus' id='money-minus'> -${numberWithCommas(expenses)} </p>
            </div>
        </div>
    )
};

export default ProfitLoss;