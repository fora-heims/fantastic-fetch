import {
  screen,
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './Home.jsx';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const server = setupServer(
  rest.get(
    'https://zoo-animal-api.herokuapp.com/animals/rand/',
    (req, res, ctx) => {
      console.log(req.params);

      return res(ctx.json({}));
    }
  )
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

test('user behavior - select change', async () => {
  render(<Home />);
  const select = await screen.findByRole('combobox');
  userEvent.selectOptions(select, '4');

  expect(await screen.findAllByRole('heading')).toHaveLength(25);
});

test.only('user behavior - select change with click', async () => {
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
