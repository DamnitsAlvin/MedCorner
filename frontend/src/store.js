import {productListReducer, productDetailsReducer,productCreateReducer,productUpdateReducer,productDeleteReducer,} from "./reducer/productReducer";
import {cartReducer} from "./reducer/cartReducer";
import { userListReducer,userRegisterReducer, userSignInReducer,userDetailsReducer,userUpdateProfileReducer,userDeleteReducer,userUpdateReducer,} from "./reducer/userReducers";
import { orderCreateReducer, orderDetailsReducer,  orderPayReducer,orderMineListReducer,orderListReducer,orderDeliverReducer,orderDeleteReducer,} from './reducer/orderReducers';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from "redux-thunk";

const initialState={
    userSignin:{
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    },
    cart:{
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')): [],
        shippingAddress: localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {},
        paymentMethod: 'PayPal',
    },
    //productList:{}
    //productDetails:{}
}; 

const reducer = combineReducers({ 
    productList:productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSignInReducer, 
    userRegister: userRegisterReducer, 
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMineList: orderMineListReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userUpdate: userUpdateReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
    orderDeliver: orderDeliverReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
});

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||  compose; 
const store = createStore(reducer, initialState, composeEnchancer(applyMiddleware(thunk)));
export default store; 
