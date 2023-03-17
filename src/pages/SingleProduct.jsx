import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/productcontext";
import '../styles/singlepage.scss'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import SecurityIcon from '@mui/icons-material/Security';
const SingleProduct = () => {

  const {isSingleLoading,singleProduct,singleProductDataFunction}= useContext(AppContext);
  const {id}=useParams();
const {id:alias,company,price,name,description,category,stock,stars,reviews,image}=singleProduct;
console.log(image)
console.log(singleProduct)
const api="https://api.pujakaitem.com/api/products"


useEffect(()=>{
  singleProductDataFunction(`${api}?id=${id}`)
  console.log(`${api}?id=${id}`)

},[])


  if(isSingleLoading===true){

    return (
    <div className="loadingWrapper">
    <div className='loading'></div>


    </div>
    )
  }



  return(

<>

<div className="path"><h2><span>Home </span> / {name} </h2></div>
  <div className="container">

<div className="imageWrapper">
<div className="left">
  {
    image.map((elem,index)=>{
      return(
        <img src={elem.url} alt="" key={index}/>
      )
    })
  }

</div>
    <div className="center">
      3
    </div>
</div>
   
    <div className="right">

      <h2>{name}</h2>
      <p>{stars}</p>

      <h3>MRP : <del>{price}</del></h3>

      <p>Deal of the day :{price-10000}</p>

      <p>{description}</p>

      <div className="deliveryWrapper">

        <div className="delivery">
          <LocalShippingIcon/>
          <p>Free Delivery</p>
        </div>

       
        
          <div className="delivery">
            <PublishedWithChangesIcon/>
          <p>30 days Replacmenet</p>
        </div>

        <div className="delivery">
          <LocalShippingIcon/>
          <p>super fast Delivery</p>
        </div>
        <div className="delivery">

          <SecurityIcon/>
          <p> 2 Year Warrenty</p>
        </div>

      </div>


      <p>Available : {stock>0 ? "In Stock":"Not Available"}</p>
      <p>Id : {id}</p>
      <p>Brand : {company}</p>

      <hr></hr>

      <p>color : </p>
    </div>
  </div>
  </>
    

  

  )



};

export default SingleProduct;
