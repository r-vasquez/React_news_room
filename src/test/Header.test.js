import '@testing-library/jest-dom';

import * as React from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import Header from '../components/Header.jsx';
import { activeItem } from '../redux/reducers/activeItemReducer';
import { BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialReducerState = { state: 'home' };

const render = (
  ui,
  {
    initialState = initialReducerState,
    store = createStore(activeItem, initialState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

test('home is active by default', () => {
  render(<Header />);

  expect(screen.getByText('Home')).toBeInTheDocument();
});
