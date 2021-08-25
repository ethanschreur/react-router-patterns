import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddColor({ add }) {
	const history = useHistory();

	const [ color, setColor ] = useState('');
	const handleChange = (e) => {
		setColor(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		add(color);
		console.log(color);
		history.push('/colors');
	};
	return (
		<div className="AddColor">
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="color" onChange={handleChange} />
				<button>Submit</button>
			</form>
		</div>
	);
}

export default AddColor;
