import './App.css';
import {Route, BrowserRouter,Link} from "react-router-dom"; 
import {useSelector, useDispatch} from "react-redux";
import Homepage from "./screens/homescreen";
import ItemDetails from "./screens/ItemDetail";
import Login from "./screens/login";
import CartScreen from './screens/CartScreen';
import Register from "./screens/register";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentMethodScreen from "./screens/paymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import {signout} from "./action/userAction";

function App() {
  const cart = useSelector(x => x.cart); 
  const {cartItems} = cart; 

  const userSignIn = useSelector((x) => x.userSignin);
  const { userInfo } = userSignIn;

  if(userInfo){
    console.log(userInfo)
  }

  const dispatch = useDispatch(); 
  const signOutHandler = () =>{
    dispatch(signout());
  }
  return (
    <BrowserRouter>
    <div>
      <nav>
        <div className="logo"><a href="/"><img src="./logo/LOGO.png" alt=""/></a></div>  
        <div className="search-box">
        <div className="search">
          <form>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search"/>
              <div className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        </div>
        <div className="cart-icon"><a href="/cart"><i className="fas fa-shopping-cart">{cartItems.length > 0 && (<span className = "badge">{cartItems.length}</span>)}</i></a></div>
      </nav>

      

      <div className="nav-items">
        <li><a href="#">Prescription</a></li>
        <li><a href="#">Over the Counter</a></li>
        <li className="nav-item ">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Self Care
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Vitamins</a>
            <a className="dropdown-item" href="#">Food Supplements</a>
          </div>
        </li>
        {
            userInfo ? (
            <li className="nav-item ">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {userInfo.name}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/" onClick={signOutHandler}>Sign Out</a>
              </div>
          </li>
            ):(<li><Link to="/login">Login</Link></li>)
        }
        
      </div>

      <Route path ='/products/:id' component={ItemDetails}></Route>
      <Route path= "/order/:id" component={OrderScreen}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/payment" component={PaymentMethodScreen}/>

      <Route path="/shipping" component={ShippingAddressScreen}/>
      <Route path="/placeorder" component={PlaceOrderScreen}/>
      <Route path ="/cart/:id" component ={CartScreen}></Route>
      <Route path="/cart" exact component={CartScreen}/>
      <Route path="/" exact component={Homepage}/>

        
    <footer id="main-footer">  
        <div className="container-1">
          <div className="row">
            <div className="col-lg-4 col-mg-6">
              <h1>What is MedCorner?</h1>
              <p>MedCorner is an online store that was created to help people buy their medical needs during the COVID. It is an easy, safe and trusted store that will help you in buying your medicine. </p>
            </div>
        
            <div className="col-lg-4 col-md-6">
              <a href=""> <h2>Work with us</h2> </a>
              <p>Sell your Medical stuff here at MedCorner for easier distribution of your products and goods.</p>
            </div>
        
            <div className="col-lg-4 col-md-4">
              <ul className="list-unstyled">
                <li>
                  <a href="#!">About Us</a>
                </li>
                <li>
                  <a href="#!">Contact Us</a>
                </li>
                <li>
                  <a href="#!">Terms of Use</a>
                </li>
                <li>
                  <a href="#!">Privacy and Policy</a>
                </li>
                </ul>
            </div>
          </div>
        </div>
        <div className="end">
          <p>© 2020 Copyright: MedCorner</p>
        </div>
    </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
