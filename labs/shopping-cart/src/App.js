import React, { useState } from 'react';
import './styles.css';
import AllTheThings from './components/AllTheThings';
import MyShoppingCart from './components/MyShoppingCart';
import productsArr from './products';

// Not working. A lot of this just isn't sticking. Going to keep practicing,
// but this is all I have for now...

export default function App() {
	const [products, setProducts] = useState(productsArr);
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		setCart([...cart, product]);
	};

	return (
		<div className='App'>
			<h1>Big Time Shopping</h1>
			<div className='products'>
				<AllTheThings addtoCart={addToCart} products={products} />

				<MyShoppingCart cart={cart} />
			</div>
		</div>
	);
}
