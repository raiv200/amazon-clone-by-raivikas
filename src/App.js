import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase.js";
import { useStateValue } from "./components/StateProvider.js";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";


function App() {
  const [{}, dispatch] = useStateValue();

  const promise = loadStripe(
    "pk_test_51I01DGGmUCum14StDnOztfFmeSsYo5ejcAiYJhYMxiZKww2dUUgdxodfJGcVMpOqnUYF0UAdXqObkgEVJTe2L3R800ZNMClSeX"
  );

  useEffect(() => {
    // will only run once when the components load ...

    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>", authUser);

      if (authUser) {
        //the user is logged in..

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out..
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/orders">
         <Header />
          <Orders />
        </Route>

        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>

        <Route path="/payment">
          <Header />

          <Elements stripe={promise}>
            <Payment />
          </Elements>
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
