import React from 'react';
//import './App.css';
import Header from "./components/Header";
import Search from "./components/Search";

//main container (flex-direction: column)
//header
//search


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Header />
			</header>
			<div>
				<Search />
			</div>
		</div>
	);
}


//table
//columns titles

export default App;
