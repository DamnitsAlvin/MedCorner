import React from "react"; 
import {Link} from "react-router-dom";


export default function ProductCard(props){
    
    
    const  {product} = props; 
    return(
        <li  className="card" key={product._id}>
            <div className="box">
                <div className="slide-img">
                <img alt="1" src={product.image}/>
                    <div className="overlay">
                        <Link to={`/cart/${product._id}?qty=1`} className="buy-btn">Buy Now</Link>	
                    </div>
                </div>

                <div className="detail-box"></div>   
                <div className="type">
                <Link to={`/products/${product._id}`}>{product.name}</Link>
                <span>{product.Distributor}</span>
                </div>
                <Link to={`/products/${product._id}`} className="price">P{product.price}</Link>
            </div>		
        </li> 
    );
}