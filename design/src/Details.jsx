import React from 'react'

function Details() {
  return (
    <div className='dev'>
          <svg className="a1" width="178" height="123" viewBox="0 0 178 123" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5435 122.809C13.2662 123.214 14.1804 122.956 14.5854 122.233L21.1855 110.457C21.5905 109.734 21.333 108.82 20.6103 108.415C19.8876 108.01 18.9735 108.267 18.5684 108.99L12.7017 119.458L2.23359 113.591C1.51092 113.186 0.596747 113.444 0.191733 114.167C-0.213281 114.889 0.0442324 115.803 0.766905 116.208L12.5435 122.809ZM13.2769 121.5L14.7207 121.093C13.2467 115.861 14.7418 106.161 25.4135 94.9465C36.0671 83.7509 55.7637 71.1882 90.2238 60.4319L89.7769 59L89.3299 57.5681C54.59 68.4118 34.37 81.1824 23.2402 92.8785C12.1286 104.555 9.97373 115.306 11.8331 121.907L13.2769 121.5ZM89.7769 59L90.2238 60.4319C124.946 49.5938 146.763 37.4335 159.932 26.5565C173.03 15.7387 177.777 6.00587 177.777 1.64509e-05L176.277 0L174.777 -1.64509e-05C174.777 4.6608 170.874 13.628 158.022 24.2435C145.241 34.7998 123.808 46.8062 89.3299 57.5681L89.7769 59Z" fill="#FF6D6D" />
          </svg>
          <svg className='a2' width="178" height="123" viewBox="0 0 178 123" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5435 122.809C13.2662 123.214 14.1804 122.956 14.5854 122.233L21.1855 110.457C21.5905 109.734 21.333 108.82 20.6103 108.415C19.8876 108.01 18.9735 108.267 18.5684 108.99L12.7017 119.458L2.23359 113.591C1.51092 113.186 0.596747 113.444 0.191733 114.167C-0.213281 114.889 0.0442324 115.803 0.766905 116.208L12.5435 122.809ZM13.2769 121.5L14.7207 121.093C13.2467 115.861 14.7418 106.161 25.4135 94.9465C36.0671 83.7509 55.7637 71.1882 90.2238 60.4319L89.7769 59L89.3299 57.5681C54.59 68.4118 34.37 81.1824 23.2402 92.8785C12.1286 104.555 9.97373 115.306 11.8331 121.907L13.2769 121.5ZM89.7769 59L90.2238 60.4319C124.946 49.5938 146.763 37.4335 159.932 26.5565C173.03 15.7387 177.777 6.00587 177.777 1.64509e-05L176.277 0L174.777 -1.64509e-05C174.777 4.6608 170.874 13.628 158.022 24.2435C145.241 34.7998 123.808 46.8062 89.3299 57.5681L89.7769 59Z" fill="#FF6D6D" />
          </svg>
         // JSX / HTML
          <div className='subscribe-section'>
              {/* Column 1: Company */}
              <div className='footer-col company-col'>
                  <h4 className='footer-title'>Company</h4>
                  <div className='footer-links'>
                      <a href="#" className='footer-link'>Home</a>
                      <a href="#" className='footer-link'>Studio</a>
                      <a href="#" className='footer-link'>Service</a>
                      <a href="#" className='footer-link'>Blog</a>
                  </div>
              </div>

              {/* Column 2: Terms & Policies */}
              <div className='footer-col terms-col'>
                  <h4 className='footer-title'>Terms & Policies</h4>
                  <div className='footer-links'>
                      <a href="#" className='footer-link'>Privacy Policy</a>
                      <a href="#" className='footer-link'>Terms & Conditions</a>
                      <a href="#" className='footer-link'>Explore</a>
                      <a href="#" className='footer-link'>Accessibility</a>
                  </div>
              </div>

              {/* Column 3: Follow Us */}
              <div className='footer-col follow-col'>
                  <h4 className='footer-title'>Follow Us</h4>
                  <div className='footer-links'>
                      <a href="#" className='footer-link'>Instagram</a>
                      <a href="#" className='footer-link'>LinkedIn</a>
                      <a href="#" className='footer-link'>YouTube</a>
                      <a href="#" className='footer-link'>Twitter</a>
                  </div>
              </div>

              {/* Column 4: Contact */}
              <div className='footer-col contact-col'>
                  <h4 className='footer-title'>Contact</h4>
                  <div className='footer-links'>
                      <p className='footer-text'>1498w Fluton ste, STE 2D Chicgo, IL 63867.</p>
                      <p className='footer-text'>(123) 456789000</p>
                      <p className='footer-text'>info@elementum.com</p>
                  </div>
              </div>
                  <p className='copyright'>©2023 Elementum. All rights reserved</p>
              
          </div>

          </div>
  )
}

export default Details

