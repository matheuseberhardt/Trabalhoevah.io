import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Home/login";
import Header from "./components/header";
import Footer from "./components/header/footer";
import Cards from "./pages/Home/personagens";


export default function Routers() {
  return (
    
      <div>

        <Switch>
          <Route path="/login">
            <Header />
            <Login />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
           
            <Cards/>
            <Footer />
          </Route>
          <Route exact path="/personagens/:id">
            <Header />
            <Home />
            <Cards/>
            <Footer/>
          </Route>
        </Switch>
      </div>
      );
}
