import React from 'react'
import {NavLink} from "react-router-dom"
import Price from '../components/Price';
const Product = ({elem}) => {
  // console.log(elem);
  const {id,name,image,price,category}=elem;
// console.log(id)

  return (
<>
<NavLink  to = {`/singlproduct/${id}`}>
<figure>
<img src={image} alt=""/>
<figcaption className='caption'>{category}</figcaption>

<div className='info'>

  <Price price={price}  name={name}> </Price>
 
 

</div>
</figure>
</NavLink>

</>

    
  )
}

export default Product;