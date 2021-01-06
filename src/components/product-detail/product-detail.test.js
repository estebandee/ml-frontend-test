import React from 'react';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../../store';
import ProductDetail from './product-detail';

describe('ProductDetails', () => {
  test('show product details', async () => {
    const history = createMemoryHistory({
      initialEntries: ['/items/MLA901606571'],
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route path="/items/:id" component={ProductDetail} />
        </Router>
      </Provider>,
    );
    const productDetail = await screen.findByTestId('product-description');
    expect(productDetail).toBeInTheDocument();
  });
});
