import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<div className='App'>
				<header id='header'>
					<Header/>
				</header>
			</div>
			<main>

			</main>
			<footer id='footer'>
				<Footer/>	
			</footer>
		</div>
	);
}

export default App
