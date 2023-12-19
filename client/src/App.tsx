import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Rentals from './pages/Properties'
import SelectedProperty from './pages/SelectedProperty'
import Apply from './pages/Apply'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';

function App() {
	return (
		<div>
			<div className='App'>
				<header id='header'>
					<Header/>
				</header>
			</div>
			<main>
			{/* <img src={viteLogo} className="logo" alt="Vite logo" />
			<img src={reactLogo} className="logo react" alt="React logo" /> */}
			{/* <Navbar /> */}
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/properties" element={<Rentals />} />
					<Route path="/properties/:id" element={<SelectedProperty />} />
					<Route path="/apply/:id" element={<Apply />} />
				</Routes>
			</BrowserRouter>
			</main>
			<footer id='footer'>
				<Footer/>	
			</footer>
		</div>

		
	);
}

export default App
