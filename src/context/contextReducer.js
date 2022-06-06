//Reducer -> a function that takes in the old state, and actions => return the new state

const contextReducer = (state, action) => {

    let transactions;

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((transaction) => transaction.id !== action.payload);
            // because in payload we have id

            // localStorage.setItem('transactions', JSON.stringify(transactions));

            return transactions;
        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state];
            // new will be at first and other at back 

            // localStorage.setItem('transactions', JSON.stringify(transactions));

            return transactions;
        default:
            return state;
    }
}

export default contextReducer;