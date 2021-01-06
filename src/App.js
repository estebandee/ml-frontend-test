import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import ProductDetail from './components/product-detail/product-detail';
import SearchResults from './components/search-results/search-results';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/items" component={SearchResults} exact />
      <Route path="/items/:id" component={ProductDetail} exact />
    </Switch>
  </Router>
);

export default App;
