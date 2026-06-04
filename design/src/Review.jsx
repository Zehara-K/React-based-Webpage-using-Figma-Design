import React from 'react'
import "./Review.css";
import member11 from "./assets/member11.png"
import member12 from "./assets/member12.png"
import member13 from "./assets/member13.png"
import member14 from "./assets/member14.png"
import member15 from "./assets/member15.png"
import member16 from "./assets/member16.png"
import member17 from "./assets/member17.png"
import member18 from "./assets/member18.png"

function Review() {
  return (
    <div className='rev'>
          <p className='what'>What our customer
              says About Us</p>
              <div className='color'>
              <svg width="69" height="49" viewBox="0 0 69 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="37" width="32" height="49" />
                  <rect width="32" height="49" />
              </svg>

                <div className='element'>
                   Elementum  delivered the site with inthe timeline
                      as they requested. Inthe end, the client found a 50%
                      increase in traffic with in days since its launch. They
                      also had an impressive ability to use technologies that
                      the company hasn`t used, which have also proved to
                      be easy to use and reliable     
                </div>
              <svg width="69" height="49" viewBox="0 0 69 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="32" y="49" width="32" height="49" transform="rotate(180 32 49)" />
                  <rect x="69" y="49" width="32" height="49" transform="rotate(180 69 49)" />
              </svg>

                </div>
                <div className='rev'>
<img src={member11} alt='customer' className='a mem11'/>
          <img src={member12} alt='customer' className='a mem12' />
          <img src={member13} alt='customer' className='a mem13' />
          <img src={member14} alt='customer' className='a mem14' />
          <img src={member15} alt='customer' className='a mem15' />
          <img src={member16} alt='customer' className='a mem16' />
          <img src={member17} alt='customer' className='a mem17' />
          <img src={member18} alt='customer' className='a mem18' />
</div>
    </div>
  )
}

export default Review