import * as ACTION_TYPES from "./types";
import axios from "axios";
import qs from 'qs';
import { useEffect } from "react";



export const GET_TOKEN = (data) => ({

  type: ACTION_TYPES.GET_TOKEN,
  payload: data
  
});

export const FETCH_DATA = (data) => ({
    type: ACTION_TYPES.FETCH_DATA,
    payload: data,
});

export const CLOSE_MODAL = (data) => ({
  type: ACTION_TYPES.CLOSE_MODAL
});

export const SUBMIT_MODAL = (data) => ({
  type: ACTION_TYPES.SUBMIT_MODAL
});



 export const inputChange = (text) => {
  return {
    type: ACTION_TYPES.INPUT_CHANGE,
    payload: text
  }
}

export const submit =  (client_id, username ,password) => {

  const data = qs.stringify({

    'client_id': client_id,
    'grant_type': 'password',
    'client_secret': ',#L{,{dC,]',
    'username': username,
    'password': password
  })

const config ={
      method: 'post',
      url: 'https://dev104173.service-now.com/oauth_token.do', 
      headers: { 
                'Content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'gzip'
              },
      data: data
      
}
  
  return (dispatch) => {
    axios(config)
          .then(response =>{  
          dispatch ({type: "GET_TOKEN" , payload : response})})
          .catch(error => {console.log('error = ', error)})
  }
}

