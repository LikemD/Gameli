import { FormControl, TextField , Button } from '@material-ui/core';
import React , { useContext , useEffect , useState } from 'react';
import '../App.css';

import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

const TransactionList = () => {

    const [startDate , setStartDate] = useState('')
    const [endDate , setEndDate] = useState('')
    const { transactions , getTxns, dateFilter }  = useContext(GlobalContext);

    const handleStart = (e) => {
        setStartDate(e.target.value);
        if((startDate === '')&(endDate === '')) getTxns();
    }

    const handleEnd = (e) => {
        setEndDate(e.target.value);
        if((startDate === '')&(endDate === '')) getTxns();
    }

    const handleSubmit = ()=>{
        if(!((startDate === '')&(endDate === ''))) dateFilter(startDate , endDate)
        else getTxns()
    }

  useEffect(() => {
    getTxns();
        },[ ]) ; 


    return (
        <div className='container'>
            {/*<div className='container' style={{display:"flex" ,flexDirection: "row"}}>*/}
                <h3>History</h3>
                <FormControl>
                    <label>Start Date</label>
                    <TextField
                    id="date"
                    type="date"
                    style={{width:"350px"}}
                    InputLabelProps={{shrink: true}}
                    value={startDate}
                    onChange={handleStart}
                    ></TextField>

                    <label>End Date</label>
                    <TextField
                    id="date"
                    type="date"
                    style={{width:"350px"}}
                    InputLabelProps={{shrink: true}}
                    value={endDate}
                    onChange={handleEnd}
                    ></TextField>
                    <br />
                    <Button onClick={()=> handleSubmit()}>Filter</Button>
                </FormControl>
               {/* <div style={{marginLeft: "100px"}}>
                    
                    
    </div> 
    </div>*/}
            <ul id='list' className='list'>
                {transactions.map((transaction) => (<Transaction key={transaction._id} transaction={transaction}/>))}
            </ul>
        </div>
    )
}

export default TransactionList;