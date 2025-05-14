import { CHANGE_SERVICE_FIELD, EDIT_SERVICE, UPDATE_SERVICE, CANCEL_EDIT } from '../actions/actionTypes';

const initialState = { name: '', price: '', editId: null };

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {name, value} = action.payload;
      return {
        ...state, 
        [name]: value
      };

    case EDIT_SERVICE:
      const { id } = action.payload;
      return {
        ...state,
        editId: id,
        name: action.payload.name,
        price: action.payload.price
      };

    case UPDATE_SERVICE:
      return initialState;

    case CANCEL_EDIT:
      return initialState;

    default:
      return state;
  }
}