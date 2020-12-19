import React, { useEffect } from 'react'
import {
	BrowserRouter as Router,
	Switch, Route

} from 'react-router-dom';
import './App.css';

import Home from './Home'
export const CartInc = React.createContext()



function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact={true} path="/" component={Home} />
					<Route exact={true} path="/*">
						<div className="container">
							<h1>404 not Found!</h1>
						</div>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
