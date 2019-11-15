import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './components/containers/BurgerBuilder/BurgerBuilder'
import Checkout from './components/containers/Checkout/Checkout';
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Layout>
        <Route exact path='/' component={BurgerBuilder} />
        <Route path='/checkout' component={Checkout} />
      </Layout>
    </div>
  );
}

export default App;
