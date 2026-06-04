import React from 'react';
import "./Services.css";

function Services() {
  return (
    <div className='whole'>
          <div className='what'>What we can
              offer you!</div>
          <svg className="snake" width="864" height="654" viewBox="0 0 864 654" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_1_158)">
                  <path d="M1488.65 134.467C1446.64 22.3687 1055.93 -89.3365 963 120.86C835.832 408.503 777.269 398.935 693.689 397.279C610.11 395.623 306.809 225.312 181.153 337.967C41.357 463.299 144.653 654.467 12.6534 618.727" stroke="#FF6D6D" stroke-width="5" />
              </g>
              <defs>
                  <filter id="filter0_d_1_158" x="0" y="0" width="1502.99" height="653.604" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="16" />
                      <feGaussianBlur stdDeviation="6" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_158" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_158" result="shape" />
                  </filter>
              </defs>
          </svg>

          <div className='office'>
            <div className='line'/>
            <p className='off'>Office of multiple
              interest content</p>

              <p className='collab'>Colaborative & partnership</p>
              <p className='err'></p>
              <div className='line'/>
              </div>
              <div className='thehanger'>
              <p className='the'>The hanger US Air force
                  digital experimental</p>
              <p className='we'>We talk about our weight</p>
                <p className='err'></p>
                <div className='line'/>
              </div>
              <div className='delta'>
              <p className='del'>Delta faucet content,
                  social, digital</p>
              <p className='pilot'>Piloting digital confidence</p>
              <p className='err'></p>
              <div className='line' />
              </div>

    </div>
  )
}

export default Services