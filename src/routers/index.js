import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, NavLink } from 'react-router-dom';
import history from '@commons/history';

import Home from '../containers/home';
import Demo from '../containers/demo';

import classes from './style.less';

export default class Routers extends React.Component {
	render() {
		return (
			<Router history={history}>
				<main className={classes.main}>
					<nav className={classes.nav}>
						<h1>NASA-DEMO</h1>
						<NavLink to="/home" activeClassName={classes.active}>HOME</NavLink>
						<NavLink to="/demo" activeClassName={classes.active}>DEMO</NavLink>
					</nav>

					<section className={classes.content}>
						<Switch>
							<Route path="/home" component={Home} />
							<Route path="/demo" component={Demo} />
							<Redirect form="/" to="/home" />
						</Switch>
					</section>
				</main>
			</Router>
		);
	}
}
