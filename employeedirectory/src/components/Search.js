import React, { Component } from 'react';
import Table from "./Table";

class Search extends Component {
	state = {
		userInput: ""
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};


	render() {
		return (
			<nav style={styles.search} className="navbar navbar-light bg-light">
				<form className="form-inline">
					<input
						className="form-control mr-sm-2"
						type="search"
						name="userInput"
						onChange={this.handleInputChange}
						placeholder="Search"
						aria-label="Search"
					/>
				</form>
				<Table />
			</nav>
		);
	}
}

const styles = {
	search: {
		display: "flex",
		justifyContent: "center"
	}
}

export default Search;