import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase.js";
import { useStateValue } from "./components/StateProvider.js";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the components load ...

    auth.onAuthStateChanged(authUser => {
      console.log("the user is >>>", authUser);

      if (authUser) {
        //the user is logged in..

        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //the user is logged out..
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, []);

  

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>

        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
