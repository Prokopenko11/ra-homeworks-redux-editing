import { SET_FILTER } from '../actions/actionTypes';

const initialState = '';

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
}