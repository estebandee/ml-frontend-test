import React from 'react';
import { createMemoryHistory } from 'history';
import { Router, MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Header from './header';

describe('Header', () => {
  test('renders searchbox text', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const searchBox = screen.getByTestId('input-test');
    expect(searchBox).toBeInTheDocument();
  });

  test('typing works inside input', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const testValue = 'Prueba control busqueda';
    const searchBox = screen.getByTestId('input-test');
    userEvent.type(searchBox, testValue);
    expect(searchBox).toHaveValue(testValue);
  });

  test('goes to route when logo is clicked', () => {
    const history = createMemoryHistory({ initialEntries: ['/items'] });
    render(
      <Router history={history}>
        <Header />
      </Router>,
    );
    const homeLink = screen.getByTestId('home-test');
    userEvent.click(homeLink);
    expect(history.location.pathname).toBe('/');
  });
});
