import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import MyProfile from './MyProfile';

const mockStore = configureStore([]);

describe('MyProfile Component Tests', () => {
  let initialState;
  let store;

  beforeEach(() => {
    initialState = {
      missions: {
        missions: [
          {
            id: 1,
            mission_name: 'Mission 1',
            reserved: true,
          },
          {
            id: 2,
            mission_name: 'Mission 2',
            reserved: false,
          },
        ],
      },
      rockets: {
        rockets: [
          {
            id: 1,
            name: 'Rocket 1',
            reserved: true,
          },
          {
            id: 2,
            name: 'Rocket 2',
            reserved: false,
          },
        ],
      },
    };
    store = mockStore(initialState);
  });

  test('Renders My Missions table', () => {
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );

    const table = screen.getByText(/My Missions/i);
    expect(table).toBeInTheDocument();
  });

  test('Renders My Rockets table', () => {
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );

    const table = screen.getByText(/My Rockets/i);
    expect(table).toBeInTheDocument();
  });

  test('Displays reserved missions correctly', () => {
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );

    const mission = screen.getByText(/Mission 1/i);
    expect(mission).toBeInTheDocument();
  });

  test('Displays reserved rockets correctly', () => {
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );

    const rocket = screen.getByText(/Rocket 1/i);
    expect(rocket).toBeInTheDocument();
  });
});
