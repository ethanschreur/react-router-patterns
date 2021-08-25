import { useParams } from 'react-router-dom';
import AddColor from './AddColor';
function Color({ add }) {
	const { color } = useParams();
	return <div className="Color">{color === 'new' ? <AddColor add={add} /> : <h1 style={{ color }}>{color}</h1>}</div>;
}

export default Color;
