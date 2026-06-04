import "./Details.css";

function Details() {
  return (
    <footer className="details-section" aria-label="Footer">
      <div className="newsletter-block">
        <div className="deco-arrows" aria-hidden="true">
          <svg width="178" height="123" viewBox="0 0 178 123" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.5435 122.809C13.2662 123.214 14.1804 122.956 14.5854 122.233L21.1855 110.457C21.5905 109.734 21.333 108.82 20.6103 108.415C19.8876 108.01 18.9735 108.267 18.5684 108.99L12.7017 119.458L2.23359 113.591C1.51092 113.186 0.596747 113.444 0.191733 114.167C-0.213281 114.889 0.0442324 115.803 0.766905 116.208L12.5435 122.809ZM13.2769 121.5L14.7207 121.093C13.2467 115.861 14.7418 106.161 25.4135 94.9465C36.0671 83.7509 55.7637 71.1882 90.2238 60.4319L89.7769 59L89.3299 57.5681C54.59 68.4118 34.37 81.1824 23.2402 92.8785C12.1286 104.555 9.97373 115.306 11.8331 121.907L13.2769 121.5ZM89.7769 59L90.2238 60.4319C124.946 49.5938 146.763 37.4335 159.932 26.5565C173.03 15.7387 177.777 6.00587 177.777 1.64509e-05L176.277 0L174.777 -1.64509e-05C174.777 4.6608 170.874 13.628 158.022 24.2435C145.241 34.7998 123.808 46.8062 89.3299 57.5681L89.7769 59Z"
              fill="#FF6D6D"
            />
          </svg>
          <svg width="178" height="123" viewBox="0 0 178 123" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.5435 122.809C13.2662 123.214 14.1804 122.956 14.5854 122.233L21.1855 110.457C21.5905 109.734 21.333 108.82 20.6103 108.415C19.8876 108.01 18.9735 108.267 18.5684 108.99L12.7017 119.458L2.23359 113.591C1.51092 113.186 0.596747 113.444 0.191733 114.167C-0.213281 114.889 0.0442324 115.803 0.766905 116.208L12.5435 122.809ZM13.2769 121.5L14.7207 121.093C13.2467 115.861 14.7418 106.161 25.4135 94.9465C36.0671 83.7509 55.7637 71.1882 90.2238 60.4319L89.7769 59L89.3299 57.5681C54.59 68.4118 34.37 81.1824 23.2402 92.8785C12.1286 104.555 9.97373 115.306 11.8331 121.907L13.2769 121.5ZM89.7769 59L90.2238 60.4319C124.946 49.5938 146.763 37.4335 159.932 26.5565C173.03 15.7387 177.777 6.00587 177.777 1.64509e-05L176.277 0L174.777 -1.64509e-05C174.777 4.6608 170.874 13.628 158.022 24.2435C145.241 34.7998 123.808 46.8062 89.3299 57.5681L89.7769 59Z"
              fill="#FF6D6D"
            />
          </svg>
          <svg
            className="hero-violet-shape"
            width="117"
            height="146"
            viewBox="0 0 117 146"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M77.8783 0C86.7352 5.11355 94.4983 11.9216 100.724 20.0353C106.95 28.149 111.517 37.4095 114.164 47.2882C116.811 57.1668 117.486 67.4701 116.151 77.6097C114.816 87.7494 111.497 97.5268 106.384 106.384C101.27 115.241 94.4622 123.004 86.3484 129.23C78.2347 135.455 68.9742 140.022 59.0955 142.669C49.2169 145.316 38.9136 145.992 28.774 144.657C18.6344 143.322 8.85694 140.003 0 134.889L38.9391 67.4446L77.8783 0Z"
              fill="#934CEC"
            />
          </svg>
        </div>

        <h2 className="subscribe-title">Subscribe to our newsletter</h2>
        <p className="subscribe-subtitle">
          To make your stay special and even more memorable
        </p>
        <button type="button" className="subscribe-btn btn-interactive">
          Subscribe Now
        </button>

        <div className="footer-violet-arc" aria-hidden="true" />
      </div>

      <hr className="footer-divider" />

      <div className="footer-links-grid">
        <div className="footer-col">
          <h4 className="footer-title">Company</h4>
          <div className="footer-links">
            <a href="#" className="footer-link btn-interactive">Home</a>
            <a href="#" className="footer-link btn-interactive">Studio</a>
            <a href="#" className="footer-link btn-interactive">Service</a>
            <a href="#" className="footer-link btn-interactive">Blog</a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Terms &amp; Policies</h4>
          <div className="footer-links">
            <a href="#" className="footer-link btn-interactive">Privacy Policy</a>
            <a href="#" className="footer-link btn-interactive">Terms &amp; Conditions</a>
            <a href="#" className="footer-link btn-interactive">Explore</a>
            <a href="#" className="footer-link btn-interactive">Accesibility</a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Follow Us</h4>
          <div className="footer-links">
            <a href="#" className="footer-link btn-interactive">Instagram</a>
            <a href="#" className="footer-link btn-interactive">LinkedIn</a>
            <a href="#" className="footer-link btn-interactive">Youtube</a>
            <a href="#" className="footer-link btn-interactive">Twitter</a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Contact</h4>
          <div className="footer-links">
            <p className="footer-text">1498w Fluton ste, STE 2D Chicgo, IL 63867.</p>
            <p className="footer-text">(123) 456789000</p>
            <p className="footer-text">info@elementum.com</p>
          </div>
        </div>
      </div>

      <p className="copyright">©2023 Elementum. All rights reserved</p>
    </footer>
  );
}

export default Details;
