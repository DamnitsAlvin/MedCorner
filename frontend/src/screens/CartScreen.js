import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {
    addToCart, 
    removeFromCart
}from "../action/cartActions";
import MessageBox from "../components/MessageBox";


export default function CartScreen(props){
    const productId = props.match.params.id;
    const qty = props.location.search
      ? Number(props.location.search.split('=')[1])
      : 1;
      const cart = useSelector((state) => state.cart);
      const { cartItems } = cart;
      const dispatch = useDispatch();
    console.log("productId: " + productId); 
    console.log("qty: "+qty);
    useEffect(() => {             
      if (productId) {
        dispatch(addToCart(productId, qty));            //dispatch after being redirected 
      }
    }, [dispatch, productId, qty]);
  
    const removeFromCartHandler = (id) => {
      dispatch(removeFromCart(id));
    };
    const proceedToCheckout = () =>{
     
        props.history.push('/login?redirect=shipping');
    
    }
    return(
    <main>
        <div class="row">
          <div class="col-lg-8">
            <div class="basket">
                <div class="basket-header">
                    <h1>SHOPPING CART</h1>
                </div>
                <div class="basket-labels">
                    <ul>
                        <li class="item item-heading">Item</li>
                        <li class="price">Price</li>
                    </ul>
                </div>
                {
                    cartItems.length === 0 ? (
                        <MessageBox>Cart is Empty.<Link to="/">Go to Shopping</Link></MessageBox>
                    ):(
                        <div>
                            {cartItems.map((item) => (
                                <div class="basket-product">
                                <div class="item">
                                  <div class="product-image">
                                    <img src={item.image}  class="product-frame"/>
                                  </div>
                                  <div class="product-details">
                                    <h1><strong> {item.name}</strong></h1>
                                    <p>{item.distributor}</p>
                                    <select value={item.qty} onChange={(e)=>dispatch(addToCart(item.product, Number(e.target.value)))}>
                                      {[...Array(Number(item.countInStock)).keys()].map((x)=>(
                                        <option key={x + 1} value ={x+1}> {x+1} </option>
                                      )

                                      )}
                                    </select>
                                  </div>
                                </div>
                                <div class="price">₱{item.price}</div>       
                                <div class="remove">
                                  <button onClick={()=>removeFromCartHandler(item.product)}>Remove</button>
                                </div>
                              </div>
                            ))}
                        </div>
                    )
                }
                
            </div>
          </div>

          <div class="col-lg-4">
              <div class="summary-container">

                <h1>ORDER SUMMARY</h1> 
                
                <div class="summary-total">
                  <div class="total-title">Order Total: ({cartItems.reduce((a, c) => a + c.qty, 0)} items)</div>
                  <div class="total-value">₱ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</div>
                </div>
                

                <div class="summary-checkout">
                  <p class="check-out"><a href="#" className="cart-btn" disabled ={cartItems.length === 0}onClick={proceedToCheckout}>PROCEED TO CHECKOUT</a></p>
                </div>
              </div>
          </div>
        </div>    
    </main>
    );
}