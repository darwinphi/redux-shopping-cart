import store from './store'
import { addToCart, updateCart, deleteFromCart } from './actions/cart-actions'

let unsubscribe = store.subscribe(() => {
	console.log(store.getState())
})

store.dispatch(addToCart('Cheese', 2, 10))
store.dispatch(updateCart('Cheese', 3, 30))
store.dispatch(deleteFromCart('Cheese'))

unsubscribe()
