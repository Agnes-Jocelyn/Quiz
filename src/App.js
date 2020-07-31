import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar';
import List from './Components/List'
import Details from './Components/Details'
import Footer from './Components/Footer';


function App() {
  return (
    <BrowserRouter>
      <div >
      <Navbar/>
        <Switch>
          <Route path="/" exact component={List}/>
          <Route path="/details" exact component={Details}/>
        </Switch>
      
      <Footer/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
