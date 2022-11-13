import axios from "axios";

const BACKEND_URL = 'https://expensetraker-84c4b-default-rtdb.firebaseio.com'

export function storeExpense(expenseData){
    axios.post(BACKEND_URL+'/expenses.json', expenseData);
}

export async function fetchExpenses(){
    const response = await axios.get(BACKEND_URL+'/expenses.json');
    const expense = [];
    for(key in response.data){
        const expenseObj = {
            key : id,
            amount : response.data[key].amount,
            date : new Date(response.data[key].date),
            description : response.data[key].description
        };
        expense.push(expenseObj);
    }
    return expense;
}