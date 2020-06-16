import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

const RoomCreator = () => {
	const history = useHistory();

	useEffect(() => {
		fetch('http://localhost:3001/room/create', {
			method: 'POST',
			credentials: 'include'
		})
		.then(res => res.json())
		.then(json => history.push(`/${json.roomname}`))
	});

	return null;
}

export default RoomCreator
