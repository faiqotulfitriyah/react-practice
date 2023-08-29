import React from 'react';
import { BrowserRouter as Routes, Route, Switch, Link } from 'react-router-dom';
import BMICalculator from './components/BMICalcu';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
	return (
		<Routes>
			<Switch>
			<Route exact path="/">
				<h1>React Best Practices</h1>
			</Route>
			<Route path="/bmi">
				<BMICalculator />
			</Route>
			<Route path="/todo">
				<ToDoList />
			</Route>
			</Switch>
		<div className='Route-container'>
			<nav className='Navbar-nav'>
				<ul className='list-ul'>
					<li>
					<Link to="/">Home</Link>
					</li>
					<li>
					<Link to="/bmi">BMI Calculator</Link>
					</li>
					<li>
					<Link to="/todo">To-Do List</Link>
					</li>
				</ul>
			</nav>

		</div>
		</Routes>
	);	
}

export default App;
