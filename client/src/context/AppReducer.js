export default (state , action) => {
        switch (action.type) {
                case 'GET_TXNS':
                        return{
                                ...state,
                                loading: false,
                                transactions: action.payload
                        }
                case 'DELETE_TXN':
                        return{
                                ...state,
                                transactions: state.transactions.filter(txn => txn._id !== action.payload)
                        }
                case 'ADD_TXN':
                        return{
                                ...state,
                                transactions: [...state.transactions , action.payload]
                        }
                case 'GET_ERR':
                        return{
                                ...state,
                                error: action.payload
                        }
            default:
                return state;
        }
}