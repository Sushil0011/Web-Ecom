import React  from 'react'
import { AppContext } from '../context/productcontext'
import { useContext } from 'react'
import '../styles/product.scss'
import Product from '../pages/Product'


const FratureProduct = () => {
const  {isLoading,featurProducts}=useContext(AppContext)
// console.log(featurProducts)
if(isLoading){
 return <div className='loading'></div>
 }




  return (

    <div className='product_container'>
      <div className='info'>
      <h3>Check now</h3>
      <h2>Our Feature Services</h2> 
      </div>
      <div className='Productwrapper'>
{
  featurProducts.map((elem)=>{

return <Product  key={elem.id} elem={elem} />
})
}
      </div>

    </div>
  )
}


export default FratureProduct