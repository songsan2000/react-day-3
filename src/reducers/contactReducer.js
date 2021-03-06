import {CREATE_CONTACT_SUCCESS} from '../types'

export default (state={}, action) => {
  switch(action.type){
    case CREATE_CONTACT_SUCCESS:
      console.info(action.contact);
      return {...state, ...action.contact};
    default:
      return state;
  }
};