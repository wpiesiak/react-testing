import axios from 'axios';
import { SET_CHARACTER } from './reducers';

export const getCharacter = (id) => async (dispatch) => {
  const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);

  dispatch({ type: SET_CHARACTER, payload: response.data });
};
