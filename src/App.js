import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Category from "./pages/Category";
import About from "./pages/About";
import {Redirect, Route,Switch } from "react-router-dom";

function App() {
  return (
    <>
    <Switch>
      <Route exact path='/home' component = {Home} />
      <Route exact path='/about' component = {About} />
      <Route exact path='/category' component = {Category} />
      <Redirect to="/home"/>
    </Switch>
    </>
  );
}

export default App;
