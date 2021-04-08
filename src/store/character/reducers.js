export const SET_CHARACTER = 'SET_CHARACTER';

const initialState = null;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CHARACTER:
      return payload;

    default:
      return state;
  }
};
