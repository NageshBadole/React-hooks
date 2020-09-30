import React , {useEffect} from 'react';
import { useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
import DataContainer from './dataContainer';
import Modal from './modal';
import './CSS/App.css';
import { submit } from '../redux/actions/action';


function App() {
  
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2> Service Now API </h2>
      <DataContainer />
      <Modal />
    </div>
  );
}

export default App;
