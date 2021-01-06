import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import store from './store';
import App from './App';

describe('App', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  test('search works', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const searchBox = screen.getByTestId('input-test');
    const submitButton = screen.getByTestId('submit-button');
    userEvent.type(searchBox, 'Consola Xbox One');
    userEvent.click(submitButton);

    const result = await screen.findAllByText(/^microsoft xbox one.*$/im);
    expect(result.length).toBeGreaterThanOrEqual(1);
  });

  test('clicking on a item brings up the details page', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const searchBox = screen.getByTestId('input-test');
    const submitButton = screen.getByTestId('submit-button');
    userEvent.type(searchBox, 'Consola Xbox One');
    userEvent.click(submitButton);

    const result = await screen.findAllByText(/^microsoft xbox one.*$/im);
    userEvent.click(result[0]);
    const lineaDescripcion = await screen.findByText('Descripcion del producto');

    expect(lineaDescripcion).toBeInTheDocument();
  });
});
