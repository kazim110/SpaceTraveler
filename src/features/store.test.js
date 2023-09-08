import store from './store';
import missionsReducer from './missions/missionsSlice';
import rocketsReducer from './rockets/rocketsSlice';

describe('Store', () => {
  test('should initialize with default states', () => {
    const state = store.getState();
    expect(state.missions).toEqual(missionsReducer(undefined, {}));
    expect(state.rockets).toEqual(rocketsReducer(undefined, {}));
  });

  test('should have missions and rockets as keys', () => {
    const stateKeys = Object.keys(store.getState());
    expect(stateKeys.includes('missions')).toBe(true);
    expect(stateKeys.includes('rockets')).toBe(true);
  });
});
