import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import 'chart.js/auto'; 
// add above line as in v3 char js/react-chartjs-2 have issues
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../useTransactions";

import useStyles from "./styles";

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);
  // console.log(chartData);
  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
