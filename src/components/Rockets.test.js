import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import Rockets from './Rockets';
import { bookRocket, cancelRocketBooking } from '../features/rockets/rocketsSlice';

const mockStore = configureStore([]);
let initialState;
let store;

beforeEach(() => {
  initialState = {
    rockets: {
      rockets: [
        {
          id: 1,
          name: 'Rocket 1',
          description: 'Rocket description 1',
          reserved: false,
          flickr_images: ['https://example.com/image1.jpg'], // Add this line
        },
        {
          id: 2,
          name: 'Rocket 2',
          description: 'Rocket description 2',
          reserved: true,
          flickr_images: ['https://example.com/image2.jpg'], // Add this line
        },
      ],
    },
  };
  store = mockStore(initialState);
  store.dispatch = jest.fn();
});

describe('Rockets Component Tests', () => {
  test('dispatches bookRocket when "Reserve Rocket" button is clicked', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    const reserveBtn = screen.getByText('Reserve Rocket');
    fireEvent.click(reserveBtn);
    expect(store.dispatch).toHaveBeenCalledWith(bookRocket(1));
  });

  test('dispatches cancelRocketBooking when "Cancel Reservation" button is clicked', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    const cancelBtn = screen.getByText('Cancel Reservation');
    fireEvent.click(cancelBtn);
    expect(store.dispatch).toHaveBeenCalledWith(cancelRocketBooking(2));
  });

  test('Rocket has description', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    const description = screen.getByText(/Rocket description 1/i);
    expect(description).toBeInTheDocument();
  });

  test('Rocket has name', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    const name = screen.getByText(/Rocket 1/i);
    expect(name).toBeInTheDocument();
  });

  test('Rocket has reservation badge when reserved', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    const badge = screen.getByText('Reserved');
    expect(badge).toBeInTheDocument();
  });
});
