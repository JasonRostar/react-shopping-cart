import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext, CartContext } from './contexts'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([
			...cart, 
			item
		])
	};
	const removeItem = item => {
		setCart(cart.filter(i => {return i.id !== item.id}))
	}

	return (
		<ProductContext.Provider value={{products, addItem}}>
		<CartContext.Provider value={{ cart, removeItem } }>
			<div className="App">
				<Navigation />

				{/* Routes */}
				<Route exact path="/">
					<Products />
				</Route>

				<Route path="/cart">
					<ShoppingCart />
				</Route>
			</div>
		</CartContext.Provider>
	</ProductContext.Provider>
	);
}

export default App;
