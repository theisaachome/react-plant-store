import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route,Switch } from "react-router-dom";
import {  FaHome} from "react-icons/fa";
import Home from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Products from "./pages/Products";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";
import DefaultPage from "./pages/DefaultPage";
class App extends Component {
  render() {
    return(
       <>
       <Switch>
         <Route path="/" exact  component={Home} />
         <Route path="/about" exact  component={AboutPage} />
         <Route path="/contact" exact  component={ContactPage} />
         <Route path="/products" exact  component={Products} />
         <Route path="/products/:id" exact  component={SingleProductPage} />
         <Route path="/cart" exact  component={CartPage} />
         <Route path="*" exact  component={DefaultPage} />
       </Switch>
       </>
      );
  }
}

export default App;
