import React , { useState , useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import {v4 as uuid} from 'uuid';
import '../App.css';


import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const [text , setText] = useState('');
    const [amount , setAmount ] = useState(0);
    const [date , setDate] = useState('');

    const { addTransaction , userId } = useContext(GlobalContext);

    const handleDateChange = (e) => {
        setDate(e.target.value)
        console.log(date);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: uuid(),
            userId,
            text,
            amount: +amount ,
            transactionDate: date
        }

        addTransaction(newTransaction);
        setText('');
        setDate('');
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
                <div className="form-control">
                    <label htmlFor='date'>Transaction Date</label>
                    <br />
                    <TextField
                    id="date"
                    type="date"
                    style={{width:"350px"}}
                    InputLabelProps={{shrink: true}}
                    value={date}
                    onChange={handleDateChange}
                    ></TextField>
                </div>
                <button className='btn'>Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction;