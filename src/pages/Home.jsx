import React from 'react'
import Footer from '../components/Footer'
import Herosection from '../components/Herosection'
import FeatureProduct from '../components/FeatureProduct'
import Services from '../components/Services'
import Trusted from '../components/Trusted'
const Home = () => {
  return (
    <div className='home'>


<Herosection   title={"Web Store"}/>
<FeatureProduct/>
<Services/>
<Trusted/>
<div className='popup'>

  <div> <h3>ready to get started ?</h3><h3>Talk to us today</h3></div>

<button>Get Started</button>
</div>
{/* <Footer/> */}
    </div>
  )
}

export default Home