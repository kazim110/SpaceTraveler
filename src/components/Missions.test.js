import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import Missions from './Missions';
import { joinMission, leaveMission } from '../features/missions/missionsSlice';

const mockStore = configureStore([]);

describe('Add Test', () => {
  let initialState;
  let store;

  beforeEach(() => {
    initialState = {
      missions: {
        missions: [
          {
            id: 1,
            mission_name: 'Mission 1',
            description: 'Mission description 1',
            reserved: false,
          },
          {
            id: 2,
            mission_name: 'Mission 2',
            description: 'Mission description 2',
            reserved: true,
          },
        ],
      },
    };
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  test('dispatches joinMission when "Join Mission" button is clicked', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const joinBtn = screen.getByTestId('joinMissionBtn');
    fireEvent.click(joinBtn);
    expect(store.dispatch).toHaveBeenCalledWith(joinMission(1));
  });

  test('dispatches leaveMission when "Leave Mission" button is clicked', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    const leaveBtn = screen.getByTestId('leaveMissionBtn');
    fireEvent.click(leaveBtn);
    expect(store.dispatch).toHaveBeenCalledWith(leaveMission(2));
  });

  test('Mission has table', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });

  test('Mission has description', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const description = screen.getByText(/Mission description 1/i);
    expect(description).toBeInTheDocument();
  });

  test('Mission has name', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const name = screen.getByText(/Mission 1/i);
    expect(name).toBeInTheDocument();
  });
});
