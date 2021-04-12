export default (state , action) => {
        switch (action.type) {
                case 'GET_TXNS':
                        return{
                                ...state,
                                loading: false,
                                transactions: action.payload.filter(item=>item.userId === state.userId)
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
                case 'LOGIN':
                        return{
                                ...state,
                                step: 4,
                                userId: action.payload._id,
                                firstName: action.payload.firstName
                        }
                case 'DATE_FILTER':
                        return{
                                ...state,
                                transactions: action.payload.filter(item => item.userId === state.userId)
                                
                        }
                default:
                return state;
        }
}