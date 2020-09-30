import { GET_TOKEN, FETCH_DATA, CLOSE_MODAL, SUBMIT_MODAL, INPUT_CHANGE } from "../actions/types";

const initialState = {
  showModal : true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TOKEN :
        console.log("::",payload)
        return {
          ...state,
          showModal : false,
          AuthKey : payload.data.access_token
        };

    case FETCH_DATA :
        console.log("::",payload)
        return {
          ...state,
          data : payload 
        };
        
    case CLOSE_MODAL :
      return {
        ...state,
        showModal : false 
      };

    case SUBMIT_MODAL :
      console.log(';;;',payload)
      return {
        ...state,
        showModal : false,
      };

    case INPUT_CHANGE:
      return {
        ...state,
        user_textChange: action.payload
      }

    default:
      return state;
  }
}