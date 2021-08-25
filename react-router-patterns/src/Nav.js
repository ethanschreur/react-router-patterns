import { NavLink } from 'react-router-dom';
function Nav() {
	return (
		<div className="Nav">
			<NavLink to="/dogs/duke">Duke</NavLink>
			<NavLink to="/dogs/perry">Perry</NavLink>
			<NavLink to="/dogs/tubby">Tubby</NavLink>
			<NavLink to="/dogs/whiskey">Whiskey</NavLink>
		</div>
	);
}

export default Nav;
