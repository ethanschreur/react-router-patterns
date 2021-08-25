import { NavLink } from 'react-router-dom';
function Nav() {
	return (
		<div className="Nav">
			<NavLink to="/colors">Colors</NavLink>
			<br />
			<NavLink to="/colors/new">Add a Color</NavLink>
		</div>
	);
}

export default Nav;
