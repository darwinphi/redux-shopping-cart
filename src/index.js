import { createStore, combineReducers } from 'redux'

const initialState = {
	cart: [
		{
			product: 'Bread',
			quantity: 2,
			unitCost: 90
		},
		{
			product: 'Milk',
			quantity: 1,
			unitCost: 47
		}
	]
}

const productReducer = (state = [], action) => {
	return state
}

const ADD_TO_CART = 'ADD_TO_CART'

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART: {
			return {
				...state,
				cart: [...state.cart, action.payload]
			}
		}
		default: 
			return state
	}
}

const allReducers = {
	products: productReducer,
	shoppingCart: cartReducer
}

const rootReducer = combineReducers(allReducers)

const store = createStore(rootReducer)

const addToCart = (product, quantity, unitCost) => {
	return {
		type: ADD_TO_CART,
		payload: { product, quantity, unitCost }
	}
}

let unsubscribe = store.subscribe(() => {
	console.log(store.getState())
})

store.dispatch(addToCart('Cheese', 2, 10))
store.dispatch(addToCart('Mayonnaise', 1, 15))
store.dispatch(addToCart('Butter', 3, 20))

unsubscribe()
