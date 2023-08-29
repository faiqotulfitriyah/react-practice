import React from 'react';
import { BrowserRouter as Routes, Route, Router, Link } from 'react-router-dom';
import BMICalculator from './components/BMICalcu';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
	return (
		<Router>
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
			<Routes>
				<Route path="/" element={<h1>React Best Practices</h1>}/>
				<Route path="/bmi" element={<BMICalculator/>}/>
				<Route path="/todo" element={<ToDoList/>}/>
			</Routes>
		</Router>
	);	
}

export default App;
