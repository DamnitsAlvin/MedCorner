import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder } from '../action/orderAction';
import CheckoutSteps from '../components/checkOut';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import Loading from '../components/Loading';
import MessageBox from '../components/MessageBox';




export default function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push('/payment');
  }

  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
  const dispatch = useDispatch();

  const placeOrderHandler = () => {
    // TODO: dispatch place order action
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  };
  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);




  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="top">
        <div className="order-top">
          <ul>
            <li>
              <div className="order-card">
                <h2>Order Items</h2>
                <ul>
                  {cart.cartItems.map((item) => (
                    <li key={item.product}>
                      <div className="item">
                          <div>
                            <img
                              src={item.image}
                              alt={item.name}
                              className="small"></img>
                          </div>
                          <div className="order-desc">
                              <Link to={`/product/${item.product}`} >
                                {item.name}
                              </Link>     
                              <div>
                                {item.qty} x ${item.price} = ${item.qty * item.price}
                              </div>
                          </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li >
            <div className="order-card">
              <ul>
                <li>
                  <h2>Order Summary</h2>
                </li>
                <li>
                  <div className="row">
                    <div>Items: &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </div>
                    <div> ${cart.itemsPrice.toFixed(2)}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Shipping: &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</div>
                    <div>${cart.shippingPrice.toFixed(2)}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Tax: &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;   </div>
                    <div>${cart.taxPrice.toFixed(2)}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>
                      <strong>Order Total: &nbsp;  </strong>
                    </div>
                    <div>
                      <strong>${cart.totalPrice.toFixed(2)}</strong>
                    </div>
                  </div>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={placeOrderHandler}
                    className="primary"
                    disabled={cart.cartItems.length === 0}
                  >
                    Place Order
                  </button>
                </li>
                {loading && <Loading></Loading>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
              </ul>
          </div>
            </li>

            <li>
                <div className="order-card">
                  <h2>Shipping</h2>
                  <p>
                    <strong>Name:</strong> {cart.shippingAddress.fullName} <br/>
                    <strong>Address: </strong> {cart.shippingAddress.address},
                    {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
                    ,{cart.shippingAddress.country}
                  </p>
                </div>
              </li>
              <li>
                <div className="order-card">
                  <h2>Payment</h2>
                  <p>
                    <strong>Method:</strong> {cart.paymentMethod}
                  </p>
                </div>
              </li>
          </ul>
        </div>
      

      </div>
    </div>
  );
}