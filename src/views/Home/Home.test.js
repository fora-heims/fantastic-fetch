import {
  screen,
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './Home.jsx';

test('user behavior - select change', async () => {
  render(<Home />);
  const select = await screen.findByRole('combobox');
  userEvent.selectOptions(select, '4');

  expect(await screen.findAllByRole('heading')).toHaveLength(25);
});

test('user behavior - select change with click', async () => {
  render(<Home />);

  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

  const select = await screen.findByRole('combobox');
  userEvent.selectOptions(select, '5');
  expect(await screen.findByText(/loading/i)).toBeInTheDocument();
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

  const button = await screen.findByRole('button');
  userEvent.click(button);
  expect(await screen.findByText(/loading/i)).toBeInTheDocument();
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

  const heading = await screen.findAllByRole('heading');
  expect(heading).toHaveLength(31);
});
