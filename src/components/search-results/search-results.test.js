import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import SearchResults from './search-results';
import store from '../../store';

describe('SearchResults', () => {
  test('show search results', async () => {
    const history = createMemoryHistory({
      initialEntries: ['/items?search=consola%20xbox'],
    });
    render(
      <Provider store={store}>
        <Router history={history}>
          <SearchResults />
        </Router>
      </Provider>,
    );
    const products = await screen.findAllByTestId('item-title');
    expect(products.length).toBeGreaterThanOrEqual(1);
  });
});
