import {React, useEffect, useState} from "react";
import {Switch, Route} from 'react-router-dom';
import './components/App.css';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import HogPost from "./components/HogPost";
import HogCardDetails from "./components/HogCardDetails";

function App() {

    const addHog = (newHog) => {setHogs([...hogs, newHog])};
	
    
	const [change, setChange] = useState(true)
	const [hogs, setHogs] = useState([]);
	
	useEffect( () => {
		fetch("http://localhost:9292/posts")
		.then ( r => r.json() )
		.then ( data => setHogs(data) )
	}, [change])

	return (
		<div className = 'App'>
			<NavBar />
			<Switch>
				<Route exact path = "/">
					<Home hogs = {hogs} setChange={setChange} />
				</Route>
				<Route exact path = "/post">
					<HogPost addHog = {addHog} />
				</Route>
				<Route exact path = "/hog/:id">
					<HogCardDetails />
				</Route>
			</Switch>
		</div>
	)
}

export default App;
