import axios from "axios";

// const TRANSACTION_API_BASE_URL = "http://localhost:8080/transactions";
const TRANSACTION_API_BASE_URL = "https://xpense-tracker-spring-api.herokuapp.com/transactions";


class ApiDataService {
    saveTransaction(transaction) {
        return axios.post(TRANSACTION_API_BASE_URL, transaction);
    }
    getTransaction(transaction) {
        return axios.get(TRANSACTION_API_BASE_URL);
    }
    deleteTransaction(id) {
        return axios.delete(TRANSACTION_API_BASE_URL + "/" + id);
    }
    getTransactionByID(id) {
        return axios.get(TRANSACTION_API_BASE_URL + "/" + id);
    }
}

export default new ApiDataService();
