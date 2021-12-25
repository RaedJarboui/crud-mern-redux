import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {productListReducer,productDetailsReducer,productDeleteReducer} from './reducers/productReducer'

const reducer = combineReducers({
  productList : productListReducer,
  productDetails:productDetailsReducer,
  productdelete:productDeleteReducer
})
const middleware = [thunk]
const initialState = {}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
export default store
