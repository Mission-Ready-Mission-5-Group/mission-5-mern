import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Rentals from './pages/Properties'
import SelectedProperty from './pages/SelectedProperty'
import Apply from './pages/Apply'
import Testing from './pages/Testing'

function App() {
	return (
		<>
		{/* <img src={viteLogo} className="logo" alt="Vite logo" />
	<img src={reactLogo} className="logo react" alt="React logo" /> */}
			{/* <Navbar /> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/properties" element={<Rentals />} />
				<Route path="/properties/:id" element={<h1><SelectedProperty /></h1>} />
				<Route path="/apply/:id" element={<Apply />} />
				<Route path="/testing" element={<Testing />} />
			</Routes>
		</>
	);
}


export default App
