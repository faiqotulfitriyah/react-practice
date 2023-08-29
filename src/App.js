import React from 'react';
import { Routes, Route,	 Link } from 'react-router-dom';
import BMICalculator from './components/BMICalcu';
import ToDoList from './components/ToDoList';
import './App.css';

export default function App() {
	return (
		<div>
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
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/bmi" element={<BMICalculator/>}/>
					<Route path="/todo" element={<ToDoList/>}/>
				</Routes>
			</div>
		</div>
		
	);	
}

function Home() {
	return <h1>React Best Practices</h1>;
}


