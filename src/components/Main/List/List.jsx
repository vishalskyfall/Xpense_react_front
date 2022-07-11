import React, { useState, useEffect } from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
// import formatDate from "../../../utils/formatDate";
import useStyles from "./styles";
import ApiDataService from "../../../context/ApiDataService";
// import { useNavigate } from "react-router-dom";

const List = () => {
  const classes = useStyles();
  // import { ExpenseTrackerContext } from "../../../context/context";

  // const { deleteTransaction, trans } = useContext(ExpenseTrackerContext);

  // const transactions = [
  //   {
  //     id: 1,
  //     type: "Income",
  //     category: "Salary",
  //     amount: 1000,
  //     date: "Sun Jun 05",
  //   },
  //   {
  //       id: 1,
  //       type: "Expense",
  //       category: "Home",
  //       amount: 100,
  //       date: "Sun Jun 03",
  //     }
  // ];
      //   if (transactions) {
    //     setTransaction((prevE) => {
    //       return prevE.filter((transaction) => transaction.id !== id);
    //     });
    //   }
    // });

  // const redirect = useNavigate();
  const [loading, setLoading] = useState(true);
  const [transactions, setTransaction] = useState(null);
  useEffect(() => {
    const fetchedTransactions = async () => {
      setLoading(true);
      try {
        const res = await ApiDataService.getTransaction();
        // console.log(res);
        setTransaction(res.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchedTransactions();
  }, []);

  const deleteTransaction = async (e,id) => {
   e.preventDefault(); 
    try {
      const result = await ApiDataService.deleteTransaction(id);
      // console.log(result);
      setTransaction(result.data);
    } catch (error) {
      console.log(error);
    }
    // redirect("/");
    window.location.reload(false);

  };



  return (
    <>
      {" "}
      {!loading && (
        <MUIList dense={false} className={classes.list}>
          {transactions.map((transaction) => (
            <Slide
              direction="down"
              in
              mountOnEnter
              unmountOnExit
              key={transaction.id}
            >
              {/* slide is for animation */}
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    className={
                      transaction.type === "Income"
                        ? classes.avatarIncome
                        : classes.avatarExpense
                    }
                  >
                    <MoneyOff />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={transaction.categories}
                  secondary={`$${transaction.amount} - ${transaction.createdAt}`}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={(e,id) => deleteTransaction(e,transaction.id)}
                  >
                    {/* because function of deleteTransaction takes id in context js  */}
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </Slide>
          ))}
        </MUIList>
      )}
    </>
  );
};

export default List;
