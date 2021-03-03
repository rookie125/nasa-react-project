import React from 'react';
import ViewModel from './view-model';
import classes from './style.less';

export default class Home extends React.Component {

	vm = new ViewModel()

	componentDidMount() {
		this.vm.fetchContent()
	}

	render() {
		const { content } = this.vm;

		return (
			<div className={classes.home}>
				<h2>NASA</h2>
				<p>从根本上改善开发调试效率的可视化工具</p>
			</div>
		)
	}
}
