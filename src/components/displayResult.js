import React from 'react';
import { useSelector } from 'react-redux';
import './CSS/table.css';

export default function DisplayResult() {

    const data = useSelector(state => state.data);

    function tableData(data) {
        return data.map((data, index) => {
            return (
               <tr key={index}>
                  <td>{index}</td>
                  <td>{data.number}</td>
                  <td>{data.category}</td>
                  <td>{data.priority}</td>
                  <td>{data.approval}</td>
                  <td>{data.opened_at}</td>
                  <td>{data.closed_at}</td>
                  <td>{data.description}</td>
               </tr>
            )
         })
    }

    return (
    <div>
        <table className = "dataContainer">
            
            <tbody>
            <tr className = "head">
                <th> Serial NO.</th>
                <th> Issue NO.</th>
                <th> Category</th>
                <th> Priority</th>
                <th> Approval Status</th>
                <th> Open Time </th>
                <th> Close Time</th>
                <th> Description</th>
            </tr>
                {tableData(data)}
            </tbody>
        </table>
    </div>
    )


}
  
  
  