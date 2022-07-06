import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/all.min.css';
import Routes from './Routes';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		);
	}
}

export default App;
