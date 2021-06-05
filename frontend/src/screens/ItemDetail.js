import {useEffect,useState}from "react";
import {useSelector, useDispatch} from "react-redux";
import {
    detailsProduct
}from "../action/productAction";
import {Link} from "react-router-dom";
import Category from "../components/category";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";



export default function ItemDetails(props){
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDet = useSelector((state)=>state.productDetails);
    const {loading,error,product} = productDet;
    if(product){
        console.log(product.image)
    }
    const [qty, setQty] = useState(1);

    useEffect(()=>{
        dispatch(detailsProduct(productId));
    },[dispatch, productId])

    const addToCartHandler=()=>{
        props.history.push(`/cart/${productId}?qty=${qty}`);
    };

    return(
    <div>
        {
        loading? (<Loading></Loading>)
        :error ? (<MessageBox>{error}</MessageBox>)
        : (
            <div>
            <main className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 ">
                        <div className="product-img-container">
                            <img src={product.image}  alt="1" className="product-img" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="product-details-container">
                            <div className="product-details">
                                <h1>{product.name}</h1>
                                <p>{product.Distributor}</p>
                                <p className="price">₱{product.price}</p>
                                {
                                    product.countInStock > 0 && (
                                        <div classNameName="quantity">
                                            <div>QTY</div>
                                            <input type="number" min="1" max={product.countInStock} value={qty} onChange={(e)=>setQty(e.target.value)}/>
                                        </div>
                                    )
                                }
                                <p className="add-to-cart" onClick={addToCartHandler}> <a class="cart-btn">Add to Cart</a></p>
                                <h2>About Item</h2>
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="table">
                <h1>PRODUCT DETAILS</h1>
                <table id="product-description">
                    <tr>
                        <td><b>Medicine Name</b></td>
                        <td>{product.name}</td>
                    </tr>
                    <tr>
                        <td><b>Generic Name</b></td>
                        <td>{product.generic_name}</td>
                    </tr>
                    <tr>
                        <td><b>Date of Production</b></td>
                        <td>{product.Date_of_Production}</td>
                    </tr>
                    <tr>
                        <td><b>Date of Expiry</b></td>
                        <td>{product.Date_of_Expiry}</td>
                    </tr>
                    <tr>
                        <td><b>Category</b></td>
                        <td> <div classNameName = "category">
                            <Category category={product.Category}></Category>
                            </div></td>
                    </tr>
                    <tr>
                        <td><b> Medicine Purpose</b></td>
                        <td>{product.Purpose}</td>
                    </tr>
                </table>
            </div>
        </div>
        )
        }
        
    </div>
    );
}