import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route,Switch } from "react-router-dom";
import Home from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";
import DefaultPage from "./pages/DefaultPage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Sidecart from "./components/Sidecart";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return(
       <>
       <Navbar/>
       <Sidebar/>
       <Sidecart />
       <Switch>
         <Route path="/" exact  component={Home} />
         <Route path="/about" exact  component={AboutPage} />
         <Route path="/contact" exact  component={ContactPage} />
         <Route path="/products" exact  component={ProductsPage} />
         <Route path="/products/:id" exact  component={SingleProductPage} />
         <Route path="/cart" exact  component={CartPage} />
         <Route path="*" exact  component={DefaultPage} />
       </Switch>
       <Footer/>
       </>
      );
  }
}

export default App;
