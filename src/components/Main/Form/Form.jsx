import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

// import { useNavigate } from "react-router-dom";
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/categories";
// import formatDate from "../../../utils/formatDate";
import ApiDataService from "../../../context/ApiDataService";

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: "",
};

const Form = () => {
  // const redirect = useNavigate();

  // const classes = useStyles();
  // import { ExpenseTrackerContext } from "../../../context/context";
  // const { addTransaction } = useContext(ExpenseTrackerContext);
  //addTransaction(transaction);
  // console.log(formData);

  const [formData, setFormData] = useState(initialState);
  const createTransaction = (e) => {
    e.preventDefault();
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      categories: formData.category,
      createdAt:formData.date,
      id: uuidv4(),
    };
    console.log(transaction);
    ApiDataService.saveTransaction(transaction)
      .then((res) => {
        // console.log(res);
        window.location.reload(false);
        // redirect("/main")
      })
      .catch((err) => {
        console.log(err);
      });
    setFormData(initialState);
    
  };

  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={2} item={true}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          {/* gutterBottom is margin-bottom */}
         * * *
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            {selectedCategories.map((c) => (
              <MenuItem key={c.type} value={c.type}>
                {c.type}
              </MenuItem>
            ))}
            {/* <MenuItem value="home">Home</MenuItem>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="salary">Salary</MenuItem> */}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="number"
          label="Amount"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="date"
          label="Date"
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date:e.target.value })
          }
          fullWidth
        />
      </Grid>
      <Button
        className="classes.button"
        variant="outlined"
        color="primary"
        fullWidth
        onClick={createTransaction}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
