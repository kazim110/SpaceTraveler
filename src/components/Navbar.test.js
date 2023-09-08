import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Navbar from './Navbar';

test('renders Navbar component', () => {
  render(
    <Router>
      <Navbar />
    </Router>,
  );
});

test('active class changes on link click', async () => {
  const { getByText } = render(
    <Router>
      <Navbar />
    </Router>,
  );
  const link = getByText('Rockets');
  userEvent.click(link);

  await waitFor(() => {
    expect(link.classList.contains('active')).toBe(true);
  });
});
