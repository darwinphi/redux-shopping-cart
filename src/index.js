import store from './store'
import { addToCart, updateCart, deleteFromCart } from './actions/cart-actions'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

const App = <h1>Redux Shopping Cart</h1>

ReactDOM.render(
	<Provider store={store}>
		{ App }
	</Provider>,
	document.getElementById('root')
)

let unsubscribe = store.subscribe(() => {
	console.log(store.getState())
})

store.dispatch(addToCart('Cheese', 2, 10))
store.dispatch(updateCart('Cheese', 3, 30))
store.dispatch(deleteFromCart('Cheese'))

unsubscribe()
