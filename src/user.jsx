import { Component } from "react";
import api from "./http/github";

export default class User extends Component {
	constructor(props) {
		super(props);
		let { account } = props;
		this.state = {
			account,
			repos: [],
		};
		this.requestContent();
	}
	async requestContent() {
		try {
			let res = await api.getRepos(this.state.account);
			let repos = res.data.map(item => {
				return { name: item.name };
			});
			this.setState({
				repos: [...repos],
			});
		} catch (error) {
			console.log(error);
		}
	}
	render() {
		return (
			<div>
				<ul>
					{this.state.repos.map((item, index) => (
						<li key={index}>{item.name}</li>
					))}
				</ul>
			</div>
		);
	}
}
