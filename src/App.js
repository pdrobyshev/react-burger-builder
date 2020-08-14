import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import CheckOut from './containers/CheckOut/CheckOut';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Layout>
				<Switch>
					<Route path="/checkout" component={CheckOut} />
					<Route path="/" exact component={BurgerBuilder} />
				</Switch>a
			</Layout>
		);
	}
}

export default App;
