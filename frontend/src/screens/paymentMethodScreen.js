import React ,{useState} from "react"; 
import {useSelector, useDispatch} from "react-redux"; 
import {savePaymentMethod} from "../action/cartActions"; 
import CheckoutSteps from "../components/checkOut"; 

export default function PaymentMethodScreen(props){
    const cart = useSelector(x => x.cart); 
    const {shippingAddress} = cart; 
    if(!shippingAddress){
        props.history.push("/shipping"); 
    }
    const [paymentMethod, setPaymentMethod] = useState('Paypal'); 
    const dispatch = useDispatch(); 
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push("/placeorder");
    }
    return(
        <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="paypal">PayPal</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="stripe">Stripe</label>
          </div>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
    );

}