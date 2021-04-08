import { getCharacter } from './actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { SET_CHARACTER } from './reducers';

const mockStore = configureMockStore([thunk]);

describe('character actions', () => {
  test('getCharacter dispatch correct action', () => {
    const store = mockStore({});

    return store.dispatch(getCharacter(5)).then(() => {
      const actualActions = store.getActions().map((action) => action.type);
      expect(actualActions).toEqual([SET_CHARACTER]);
    });
  });
});
