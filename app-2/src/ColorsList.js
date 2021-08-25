import { NavLink } from 'react-router-dom';

function ColorsList({ colors }) {
	return (
		<div className="ColorsList">
			{colors.map((color) => {
				return (
					<div>
						<NavLink to={`colors/${color}`}>{color}</NavLink>
					</div>
				);
			})}
		</div>
	);
}

export default ColorsList;
