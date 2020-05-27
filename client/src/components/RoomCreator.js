import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {setRoom, setUsername} from '../actions/sessionActions';

const RoomCreator = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	fetch('http://localhost:3001/room/create', {
    	method: 'POST',
    	credentials: 'include'
	})
	.then(res => res.json())
	.then(json => {
		history.push(`/${json.room.id}`)
    	dispatch(setRoom(json.room));
    	dispatch(setUsername(json.username));
	});

	return null;
}

export default RoomCreator
