import React from 'react';

import Logo from "./components/logo.js";
import Title from "./components/title.js";
import Navigation from "./components/navigation.js";
import DataView from "./components/dataView.js";



import "./css/main.css";


class App extends React.Component 
{
	render()
	{
		return(
			<>	
				<div>
					<Logo />
					<Title />
					<Navigation />
					<DataView />
				</div>
			</>
		);

	};
}

export default App;
