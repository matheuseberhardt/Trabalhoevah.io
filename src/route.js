import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Home/login";
import Header from "./components/header";
import Footer from "./components/header/footer";

export default function Routers() {
  return (
    <>
      <div>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            
          <Route path="/login">
            <Header/>
            <Login/>
            <Footer/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </>
  );
}




