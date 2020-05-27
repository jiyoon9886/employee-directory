import React from 'react';

function Header() {
	return (
		<div style={styles.header} className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-4">Employee Directory</h1>
				<p className="lead">Search for your teammates by name.</p>
			</div>
		</div>
	)
}

const styles = {
	header: {
		backgroundColor: "navy",
		color: "white",
		display: "flex",
		textAlign: "center",
		margin: 0
	}
}

export default Header;