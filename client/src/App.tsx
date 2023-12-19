import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Rentals from './pages/Rentals'

function App() {
	return (
		<>
		{/* <img src={viteLogo} className="logo" alt="Vite logo" />
	<img src={reactLogo} className="logo react" alt="React logo" /> */}
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Rentals" element={<Rentals />} />
				{/* <Route path="/SelectedProperty" element={<SelectedProperty />} /> */}
			</Routes>
		</>
	);
}


export default App
