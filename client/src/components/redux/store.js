import { legacy_createStore as createStore, combineReducers , applyMiddleware } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';

const reducers = combineReducers({
    getProducts : getProductsReducer,
    getProductDetails : getProductDetailsReducer,
    cart : cartReducer,
    

});

const middleware = [thunk];


const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;    