import { combineReducers } from 'redux'
import { productReducer, selectedProductReducder } from './productReducer'

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducder,
})

export default reducers
