import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './Navbar';

test('renders Navbar component', () => {
  render(<Navbar />);
});

test('active class changes on link click', () => {
  const { getByText } = render(<Router><Navbar /></Router>);
  const link = getByText('Rockets');
  userEvent.click(link);
  expect(link.classList.contains('active')).toBe(true);
});
