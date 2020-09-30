import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import DisplayResult from './displayResult'

export default function DataContainer () {

    const key = useSelector(state => state.AuthKey);
    const data = useSelector(state => state.data);
    const dispatch = useDispatch();

    function handleClick () {  
        var config ={
    
          method: 'get',
          url: 'https://dev104173.service-now.com/api/now/table/incident', 
          headers: { 
                    'Content-type': 'application/x-www-form-urlencoded',
                    'Accept-Encoding': 'gzip',
                    'Authorization': 'Bearer ' +key
                  }
        } 
        axios(config).then(response => dispatch ({type: "FETCH_DATA" , payload : response.data.result}))
      }

      return (
        <div>
        <button onClick = {() => handleClick()}>Get Data</button>
        {
            data && (
                <div>
                    <DisplayResult />
                </div>
            ) 
        }
      </div>
      )


}
  
  
  