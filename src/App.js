import React from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Grid } from "@material-ui/core";
import Details from "./components/Details/Details";

import useStyles from "./styles"
import Main from "./components/Main/Main";

function App() {
  const classes = useStyles();
  return (
    <>
      {/* <Login /> */}
      {/* <SignUp /> */}
      <Grid
      className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
        item={true}
      >
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}>
        <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
