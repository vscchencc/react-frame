import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import combineReducers from './reducers.js'

// import promiseMiddleware from './middleware/promiseMiddleware'
// let store = createStore(combineReducers, applyMiddleware(promiseMiddleware))
let store

if(!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)){
    store = createStore(
        combineReducers,
        applyMiddleware(thunkMiddleware)
    );
}else{
    store = createStore(
        combineReducers,
        compose(applyMiddleware(thunkMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //插件调试，未安装会报错
    );
}

export default store;