import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the page title "fantastic fetch"', () => {
  render(<App />);
  const linkElement = screen.getByText(/fantastic fetch/i);
  expect(linkElement).toBeInTheDocument();
});
