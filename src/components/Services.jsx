import React from 'react'
import '../styles/services.scss';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
const Services = () => {
  return (
    <>
<div className='services_container'>

<div className='service-1'><LocalShippingIcon  className='truckdelivery'/> 
<h3>Super fast and free delivery</h3>
</div>
<div className='twoThree'>
<div className='service-2'>
    <SecurityIcon  className='security'/>
    <h3>Non contact shipping</h3></div>
<div className='service-3'>
    <AccountBalanceIcon  className='payment'/>
    <h3>Money back garanteed</h3></div>
</div>
<div className='service-4'>
<AssuredWorkloadIcon  className='secure'/>
<h3>Super secure payment system</h3>

</div>

</div>
    
    </>
  )
}

export default Services