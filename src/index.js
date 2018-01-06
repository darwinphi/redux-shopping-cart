import store from './store'
import { addToCart } from './actions/cart-actions'

let unsubscribe = store.subscribe(() => {
	console.log(store.getState())
})

store.dispatch(addToCart('Cheese', 2, 10))
store.dispatch(addToCart('Mayonnaise', 1, 15))
store.dispatch(addToCart('Butter', 3, 20))

unsubscribe()
