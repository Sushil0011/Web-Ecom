import React from 'react'
import '../styles/footer.scss'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (

    <>
{/* <div className='footer_container'> */}
    {/*  */}
    
    <div className='footer'>

<div className='section1'>
<div className='first'>
    <h3>Web Store</h3>
    <h4>Welcome to web store <br></br>
        <span>
        shop whtaevevr you want</span>
    </h4>
</div>

<div className='notification'>
    <h3>Subscribe to get importnant <br></br>updates</h3>
    <input type="email" placeholder='Your Email' />
    <button>Subscribe</button>
</div>

<div className='social'>
    <h3>Follow Us</h3>
    <div className='icon'>
<div><YouTubeIcon/></div>
<div><FacebookIcon/></div>
<div><InstagramIcon/></div>

    </div>

</div>
<div className='contact'>
    <h3>Call Us</h3>
    <h3>+91 1234567892</h3>
</div>


</div>
<div className='horigentle'></div>
<div className='section2'>
    <div className='copyrights'><h3>@2023 All RIghts Reserved </h3></div>
    <div className='policy'><h3>Privacy Policy</h3>
    <h3>Terms & Conditions</h3></div>
</div>


    </div>
    {/* </div> */}
    </>
  )
}

export default Footer