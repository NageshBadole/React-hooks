import React , {useState}from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { submit } from '../redux/actions/action';
import './CSS/modal.css'

export default function Modal () {

	const [username , setUserName] = useState('');
	const [password , setPassword] = useState('');
	const [clientID , setId] = useState('');
	const showModal = useSelector(state => state.showModal);
	const dispatch = useDispatch();

	function handleClose() {
		dispatch({type : "CLOSE_MODAL"});
	}

	// function handleSubmit() {
	// 	const data = {
	// 		uname : username,
	// 		pswd : password,
	// 		id : clientID
	// 	}
	// 	console.log('calling action creator');
	// 	// dispatch({type : "SUBMIT_MODAL", payload : data})
	// 	submit();
	// }


	return (
		<div className = 'modal'>
			{showModal && (
				<div>
					<div className="modal-main">
						<h1>Enter Details</h1>
						<form onSubmit = {dispatch(submit)}>
							<p><input 
								type="text" 
								value={clientID} 
								placeholder="Client ID"
								onChange={e => setId(e.target.value)}
							/></p>
							<p><input 
								type="text" 
								value={username} 
								placeholder="Username" 
								onChange={e => {
									setUserName(e.target.value)
								}}
							/></p>
							<p><input 
								type="password"
								value={password} 
								placeholder="Password"
								onChange={e => setPassword(e.target.value)}
							/></p>
							<a className="close"><button type ="button" onClick={() => handleClose()}>Close</button></a>
							<a className="submit"><button type="button" onClick={() => dispatch(submit(clientID,username,password))}>Submit</button></a>
						</form>
					</div>
				</div>
			)}
		</div>
	)


}
  
  
  