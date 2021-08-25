import './App.css';
import { useState } from 'react';
import { Switch, Redirect, Route, BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import ColorsList from './ColorsList';
import Color from './Color';

function App() {
	const [ colors, setColors ] = useState([ 'Red', 'Green', 'Blue' ]);
	const addColor = (color) => {
		const colorsCopy = [ ...colors ];
		colorsCopy.unshift(color);
		console.log(colorsCopy);
		setColors(colorsCopy);
	};

	return (
		<div className="App">
			<BrowserRouter>
				<Nav />
				<Switch>
					<Route exact path="/colors">
						<ColorsList colors={colors} />
					</Route>
					<Route path="/colors/:color">
						<Color add={addColor} colors={colors} />
					</Route>
					<Redirect to="/colors" />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
