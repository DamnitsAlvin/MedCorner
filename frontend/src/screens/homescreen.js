import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../action/productAction";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";
import ProductCard from "../components/productCard";

import Slides from "../components/slides";



export default function Homepage(){
    const dispatch = useDispatch();
    const productList = useSelector((x)=>x.productList);
    const {loading, error,products} =productList;
   
    useEffect(()=>{
        dispatch(listProducts());
    },[dispatch]);

    return(
    <div>
         <Slides/>
            <main id="main">
            <div className="container_category">
            <div className="row">
                <div className="col-lg-7 col-md-6 col-sm-12" >
                <div className="collection_box" >

                    <div className="img_container">
                    <img src="./icons/ebookorange.png" alt="" className="collection_01"/>
                    </div>

                    <div className="collection_content">
                    <div className="collection_data">
                    <span>Medicine</span>
                    <h1>Over the Counter</h1>
                        <a href="/">Click here</a>
                    </div>
                    </div>

                </div>
                
                <div className="collection_box" >
                    <div className="img_container">
                    <img src="./icons/pdforange.png" alt="" className="collection_02"/>
                    </div>
                    <div className="collection_content">
                    <div className="collection_data">
                    <span>Medicine</span>
                    <h1>Prescription</h1>
                    <a href="/">Click here</a>
                    </div>
                    </div>
                </div>
            
                </div>
            
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <div className="bestseller_box" >
                    <div className="collection_content">
                        <div className="collection_data"></div>
                    </div>
                    </div>
                </div>
            
            </div>
            </div>  
        </main>
            
        
        <div className="latest-product-header">
            <h1>Featured Items</h1>
        </div>
        {loading ? (<Loading></Loading>)
            :error ? (<MessageBox>{error}</MessageBox>)
            :(
                <section className="slider">
                   
                    
                    {
                        products.map(product=>(
                            <ProductCard key={product._id} product = {product}></ProductCard>
                        ))
                    }
                
                   
                </section>
            )
        }
       
       
 
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box-div">
                <img className="guideicon" src="./icons/search.png"/>
                <h1>Search</h1>
                <p>
                Search and browse for your needed medicine.
                </p>
            </div>
            </div>
            
            <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box-div">
                <img  className="guideicon" src="./icons/add-to-cart.png"/>
                <h1>Upload Prescription</h1>
                <p>
                Upload an image of your prescription for easy verification of orders.
                </p>
            </div>
            </div>
            
            <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box-div">
                <img  className="guideicon" src="./icons/confirm.png"/>
                <h1>Check out</h1>
                <p>
                Click check out and fill out the billing details to complete the purchase.
                </p>
            </div>
            </div>
            
            <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box-div">
                <img  className="guideicon" src="./icons/mail.png"/>
                <h1>Delivery</h1>
                <p>
                Wait for your order to be delivered at your doorsteps.
                </p>
            </div>
            </div>
        </div>
    </div>
    );
}