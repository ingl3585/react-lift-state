import React from 'react';

function AllTheThings(props) {
	console.log(props);
	const groceries = props.products.map((product, index) => {
		return (
			<div key={index}>
				<button onClick={() => props.addToCart(product)}>
					{' '}
					{product.name} {product.price}
				</button>
			</div>
		);
	});
	return (
		<div className='AllTheThings'>
			<h2>Put these in your cart!</h2>
			<ul>{groceries}</ul>
		</div>
	);
}

export default AllTheThings;
