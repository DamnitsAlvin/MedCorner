import React from "react"; 
import promoinfo from "../data";

export default function Slides(){
    return(
      <div className="container-fluid promo">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">  
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            {
                promoinfo.promos.map(promDet=>(
                    <li data-target="#myCarousel" data-slide-to={promDet.slide_number}></li>
                ))
            }
        </ol>
        <div className="carousel-inner">
          <img src="./banner/banner4.jpg" className="carousel-item active"/>
        {
            promoinfo.promos.map(promImg=>(
                <img src={promImg.slide_image}  className="carousel-item"/> 
            ))
        }
            
        </div>
      
        <a href="#myCarousel" className="carousel-control-prev" role="button" data-slide-to="prev">
          <span className="sr-only">Previous</span>
          <span aria-hidden="true"></span>
        </a>
      
        <a href="#myCarousel" className="carousel-control-next"  role="button" data-slide="next">
          <span className="sr-only">Next</span>
          <span  aria-hidden="true"></span>
        </a>
      </div>
    </div>
    );

}