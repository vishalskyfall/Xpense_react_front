import React from "react";
// import Login from "./components/Login";
// import SignUp from "./components/SignUp";
// import { Grid } from "@material-ui/core";
// import Details from "./components/Details/Details";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppMain from "./components/AppMain";
// import useStyles from "./styles"
// import Main from "./components/Main/Main";

function App() {
  // const classes = useStyles();
  return (
    <>
      <BrowserRouter forceRefresh={true}>
        {/* <Login /> */}
        {/* <SignUp /> */}
        <Routes>
        <Route index element={<AppMain />} />
        <Route path="/main" element={<AppMain />}></Route>
        <Route path="/" element={<AppMain />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
