import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the loading element', () => {
  render(<App />);
  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();
});

test('renders the controls button', async () => {
  render(<App />);
  const button = await screen.findByRole('button');
  expect(button).toBeInTheDocument();
});
