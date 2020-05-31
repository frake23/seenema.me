import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {setRoomname, setUsername} from '../actions/sessionActions';

const RoomCreator = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		fetch('http://localhost:3001/room/create', {
			method: 'POST',
			credentials: 'include'
		})
		.then(res => res.json())
		.then(json => {
			dispatch(setRoomname(json.roomname));
			dispatch(setUsername(json.username));
			history.push(`/${json.roomname}`);
		})
	});

	return null;
}

export default RoomCreator
