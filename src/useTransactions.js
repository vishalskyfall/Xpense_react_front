import {  useEffect, useState } from "react";
// import { ExpenseTrackerContext } from './context/context';
import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';
import ApiDataService from "./context/ApiDataService";

const useTransactions = (title) => {

    resetCategories();
    // const { trans } = useContext(ExpenseTrackerContext);
    const [loading, setLoading] = useState(true);
    const [transactions, setTransaction] = useState([]);
  
    useEffect(() => {
      const fetchedTransactions = async () => {
        setLoading(true);
        try {
          const res = await ApiDataService.getTransaction();
        //   console.log(res);
          setTransaction(res.data);
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      };
  
      fetchedTransactions();
  }, []);

  // console.log(transactions,"yo");
    
    const transactionPerType = transactions.filter((t) => t.type === title); 
    // console.log(transactionPerType);
    // console.log(transactionPerType,"type");
    const total = transactionPerType.reduce((acc, currVal) => acc += currVal.amount, 0);
    // for sum and + it's better to use reduce
    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    transactionPerType.forEach((t) => {
        const category = categories.find(c => c.type === t.categories)
        if (category) category.amount += t.amount;
    })

    const filteredCategories = categories.filter(c =>c.amount>0)
    // console.log(categories);
    const chartData = {
        datasets: [{
             data: filteredCategories.map((c)=>c.amount),
             backgroundColor: filteredCategories.map((c)=>c.color)
        }],
        labels: filteredCategories.map((c)=>c.type)
    }

    return {filteredCategories, total, chartData}
} 

export default useTransactions