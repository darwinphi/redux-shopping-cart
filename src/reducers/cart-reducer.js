import { ADD_TO_CART } from '../actions/cart-actions'

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

export default function(state = initialState, action) {
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