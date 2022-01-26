import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './Home.jsx';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { mockResponse } from '../../mock/mock-response.js';

const server = setupServer(
  rest.get(
    'https://zoo-animal-api.herokuapp.com/animals/rand/10',
    (req, res, ctx) => {
      return res(ctx.json(mockResponse));
    }
  )
);

test('user behavior', async () => {
  render(<Home />);
  const select = await screen.findByRole('combobox');
  userEvent.selectOptions(select, '4');
  expect(screen.getAllByRole('heading')).toHaveLength(60);
});
