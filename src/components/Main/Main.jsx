import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";

import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";

const Main = () => {
  const classes = useStyles();
  return (
    <Card className="classes.root">
      <CardHeader title="Expense Tracker" subheader="Powered by Xpense" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance <br/>
          "<i>will be here soon!</i>"
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          {/* InfoCard component */}
          Try Adding income in Salary Category 
        </Typography>
        <Divider />
        {/* form */}
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2} >
          <Grid item={true} xs={12}>
            {/* <List /> */}
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
