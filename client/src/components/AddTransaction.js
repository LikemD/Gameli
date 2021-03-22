import React , { useState , useContext } from 'react';
import {v4 as uuid} from 'uuid';
import '../App.css';


import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const [text , setText] = useState('');
    const [amount , setAmount ] = useState(0);

    const { addTransaction , userId } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: uuid(),
            userId,
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    }

    return (
        <div className='container'>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor='text'>Text</label>
                    <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter Text' />
                </div>
                <div className='form-control'>
                    <label htmlFor='amount'>Amount <br/>
                    (Negative - expense , positive - income)
                    </label>
                    <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter Amount' />
                </div>
                <button className='btn'>Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction;