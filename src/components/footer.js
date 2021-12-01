import React from "react"
import { FaFacebook,FaTwitter,FaLinkedinIn} from 'react-icons/fa'
const footer = () => {
  return (
    <div className="container-fluid bg-primary text-light pt-3 pb-3">
      <div className="row m-2">
        <div className="col-md-3 d-flex flex-column  justify-content-start">
          <h2>About US</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, ac,
            leo adipiscing lorem ultrices eget gravida lorem. Sed rutrum eget
            nisl viverra tincidunt.
          </p>
        </div>
        <div className="col-md-3 d-flex flex-column  justify-content-start">
          <h2>Follow US</h2>
          <div className="d-flex flex-row justify-content-between">
          
            <FaFacebook/>
            <FaTwitter/>
            <FaLinkedinIn/>

          </div>
        </div>
        <div className="col-md-3 d-flex flex-column  justify-content-start">
          <h2>Resource</h2>
          <ul className="d-flex flex-column" style={{ listStyle: "none" }}>
            <li>
              <a>Case Study</a>
            </li>
            <li>
              <a>Process</a>
            </li>
            <li>
              <a>Insight</a>
            </li>
            <li>
              <a>Capabilities</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Request a Quote</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Private Policy</a>
            </li>
            <li>
              <a>Terms of Conditions</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 d-flex flex-column  justify-content-start">
          <h2>Get in touch</h2>
          <a href="mailto@info@loremipsum.com" className='text-light'>info@loremipsum.com</a>
        </div>
      </div>
      <hr />
      <h3 className='text-center'>© 2021 Legit Bytes</h3>
    </div>
  )
}
export default footer
