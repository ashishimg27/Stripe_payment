import { useState } from 'react';
import './App.css';
import shovel from './assets/shovel.jpg';
import StripeContainer from './components/StripeContainer';

function App() {
	const [showItem, setShowItem] = useState(false);
	return (
		<div className='App'>
			<h1> Store</h1>
			{showItem ? (
				<StripeContainer />
			) : (
				<>
					<h3>$10.00</h3>
					<img src={shovel} alt='Shovel' />
					<button onClick={() => setShowItem(true)}>Buy</button>
				</>
			)}
		</div>
	);
}

export default App;
