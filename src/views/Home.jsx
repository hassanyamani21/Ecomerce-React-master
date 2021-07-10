import React, { lazy, Component } from "react";


import Cookies from 'universal-cookie';
import { CookiesProvider } from "react-cookie";

import { Link } from "react-router-dom";
// import { link45, file, check2all } from "../npm/icon";
import { data } from "../data";
import { ReactComponent as IconLaptop } from "bootstrap-icons/icons/laptop.svg";
import { ReactComponent as IconHeadset } from "bootstrap-icons/icons/headset.svg";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconTv } from "bootstrap-icons/icons/tv.svg";
import { ReactComponent as IconDisplay } from "bootstrap-icons/icons/display.svg";
import { ReactComponent as IconHdd } from "bootstrap-icons/icons/hdd.svg";
import { ReactComponent as IconUpcScan } from "bootstrap-icons/icons/upc-scan.svg";
import { ReactComponent as IconTools } from "bootstrap-icons/icons/tools.svg";

const Support = lazy(() => import("../components/Support"));
const Banner = lazy(() => import("../components/carousel/Banner"));
const Carousel = lazy(() => import("../components/carousel/Carousel"));
const CardIcon = lazy(() => import("../components/card/CardIcon"));
const CardLogin = lazy(() => import("../components/card/CardLogin"));
const CardImage = lazy(() => import("../components/card/CardImage"));
const CardDealsOfTheDay = lazy(() =>
  import("../components/card/CardDealsOfTheDay")
);

const mydata = lazy(() => import("../data/index"));






class HomeView extends Component {
  components = {
    IconLaptop: IconLaptop,
    IconHeadset: IconHeadset,
    IconPhone: IconPhone,
    IconTv: IconTv,
    IconDisplay: IconDisplay,
    IconHdd: IconHdd,
    IconUpcScan: IconUpcScan,
    IconTools: IconTools,
  };
   
 
  render() {

    function setFilter(){
      cookies.set("title",  document.getElementById("ptitle").value)
      cookies.set("max",  document.getElementById("pmax").value)
      cookies.set("min",  document.getElementById("pmin").value)
      cookies.set("type",  document.getElementById("ptype").value)
      window.location.href = '/'
    }
    
    const cookies = new Cookies();
    if (cookies.get('title')==undefined){
      cookies.set('title','')
    }
    const loggedin = cookies.get('loggedin');    
      if(loggedin == "false"){
      window.location.href = "/account/signin/"
    } else{
    const iconProducts = data.iconProducts;
    const rows = [...Array(Math.ceil(iconProducts.length / 4))];
    // chunk the products into the array of rows
    const productRows = rows.map((row, idx) =>
      iconProducts.slice(idx * 4, idx * 4 + 4)
    );
    // map the rows as div.row
    const carouselContent = productRows.map((row, idx) => (
      <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
        <div className="row g-3">
          {row.map((product, idx) => {
            const ProductImage = this.components[product.img];
            console.log(product)

            if(product.title.includes(cookies.get("title"))){
             
            return (
              <div key={idx} className="col-md-3">
                <CardIcon
                  title={product.title}
                  text={product.text}
                  tips={product.tips}
                  to={product.to}
                >
                  <ProductImage className={product.cssClass} />
                </CardIcon>
              </div>
            );
            }
          })}
        </div>
      </div>
    ));
   

  

    return (

      
     
        <React.Fragment>

      
    
        <div className="container-fluid bg-light mb-3" style={{minHeight : "100vh"}}>
          <div className="row">
            <div className='col-sm-10 mx-auto  mb-3 col-md-2 border rounded card nbg-light p-4'>
              <p>Welcome <b> {cookies.get('user')}</b> </p>
              <h3 className='text-muter'>
                Filters
              </h3>
              <input className='form-control' id='ptitle' defaultValue={cookies.get('title')} placeholder='Product Name'  onkeyup='alert(1)'/> 

              <div>
              <br />  
              <label>
                  Min Price
                </label>
                <input  type='number' id='pmin'  defaultValue={cookies.get('min')}  className='form-control' /><br />
             
                <label>
                  Max Price
                </label>
                <input  type='number' id='pmax' defaultValue={cookies.get('max')}  className='form-control'  />
                <br />
                <select className='form-control' id='ptype'  defaultValue={cookies.get('type')}  >
                  <option>Phone</option>
                  <option>Laptop</option>
                  <option>TV</option>
                  <option>Electronics</option>
                </select>

              
                <br />
                <button onClick={setFilter}  className='btn  btn-primary'>Save</button>
              </div>  


            </div>
            <div className="col-md-8">
            <renderdata />
            <Carousel id="elect-product-category1">
                  {carouselContent}
                </Carousel>
            </div>
          </div>
        </div>

        
      </React.Fragment>
      
      
    );
  }
}
}

export default HomeView;
