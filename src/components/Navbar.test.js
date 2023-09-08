import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './Navbar';

test('renders Navbar component', () => {
  render(<Navbar />);
});

test('active class changes on link click', () => {
  const { getByText } = render(<Navbar />);
  const link = getByText('Rockets'); // Assuming 'Rockets' is one of the NavLink texts
  userEvent.click(link);
  expect(link.classList.contains('active')).toBe(true); // Replace 'active' with whatever your active class is
});
