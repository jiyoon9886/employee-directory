import React from 'react';

function Search() {
	return (
		<nav style={styles.search} className="navbar navbar-light bg-light">
			<form className="form-inline">
				<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
			</form>
		</nav>
	);
}

const styles = {
	search: {
		display: "flex",
		justifyContent: "center"
	}
}

export default Search;