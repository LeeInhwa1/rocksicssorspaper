import { render, screen } from '@testing-library/react';
import App from './App';
import AppClass from './AppClass';

test('renders learn react link', () => {
  render(<AppClass />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
