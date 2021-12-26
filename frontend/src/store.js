import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {productListReducer,productDetailsReducer,productDeleteReducer,productUpdateReducer,productCreateReducer} from './reducers/productReducer'

const reducer = combineReducers({
  productList : productListReducer,
  productDetails:productDetailsReducer,
  productdelete:productDeleteReducer,
  productupdate:productUpdateReducer,
  productcreate:productCreateReducer
})
const middleware = [thunk]
const initialState = {}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
export default store
