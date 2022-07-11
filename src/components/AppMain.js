import React from "react";
import Details from "../components/Details/Details";
import Main from "./Main/Main"
import { Grid } from "@material-ui/core";
import useStyles from "../styles"

const AppMain = () => {
    const classes = useStyles();
    return (
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
    )
}

export default AppMain