import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import App from './App';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const linkElement = screen.getByText(/Rockets/i);
  expect(linkElement).toBeInTheDocument();
});
