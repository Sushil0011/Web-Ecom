import React from 'react'
import '../styles/contact.scss'
const Contact = () => {
  return (
    <div className='container-contact'>

      <h2>Contact Page</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14249.98337734227!2d83.35563987493515!3d26.760459953874708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145c8e38fdc61%3A0x6739f57e2c17b39d!2sGorkhpur%20City%20mall!5e0!3m2!1sen!2sin!4v1676784998417!5m2!1sen!2sin"

        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>


      <div className='form_container'>
        <form action='https://formspree.io/f/mrgvqejw' method='POST' >


          <input type="text" placeholder='user name' name='name' required autoComplete='off' />
          <input type="email" placeholder='email' name='email' required
            autoComplete='off' />
            <textarea placeholder='Meassage' name='meassage'  required autoComplete='off'/>
<button>Send</button>

        </form>
      </div>
    </div>
  )
}

export default Contact