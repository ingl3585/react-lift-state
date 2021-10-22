import React from 'react';

function MyShoppingCart(props) {
	let chosenItems;
	if (props.cart.length) {
		chosenItems = props.cart.map((product, index) => {
			return (
				<li key={index}>
					{product.name} {product.price}
				</li>
			);
		});
	} else {
		return <h2>Empty Cart</h2>;
	}
	return (
		<div className='MyShoppingCart'>
			<h2>Your Cart!</h2>
			<ul>{chosenItems}</ul>
		</div>
	);
}

export default MyShoppingCart;
