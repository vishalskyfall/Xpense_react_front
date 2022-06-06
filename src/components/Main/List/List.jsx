import React, { useContext } from "react";
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

import useStyles from "./styles";
import { ExpenseTrackerContext } from "../../../context/context";

const List = () => {
  const classes = useStyles();
  const { deleteTransaction, trans } = useContext(ExpenseTrackerContext);
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
  return (
    <MUIList dense={false} className={classes.list}>
      {trans.map((transaction) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
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
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={()=>deleteTransaction(transaction.id)}>
                {/* because function of deleteTransaction takes id in context js  */}
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
