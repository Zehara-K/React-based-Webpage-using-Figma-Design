import "./Review.css";
import member11 from "./assets/member11.png";
import member12 from "./assets/member12.png";
import member13 from "./assets/member13.png";
import member14 from "./assets/member14.png";
import member15 from "./assets/member15.png";
import member16 from "./assets/member16.png";
import member17 from "./assets/member17.png";
import member18 from "./assets/member18.png";

function Review() {
  return (
    <section className="review-section" aria-label="Customer reviews">
      <div className="review-stage">
        <h2 className="review-heading">
          <span className="green-highlight">What</span> our customer says{" "}
          <span className="orange-highlight">About</span> Us
        </h2>

        <div className="review-avatars" aria-hidden="true">
          <img src={member11} alt="" className="review-avatar mem11" />
          <img src={member12} alt="" className="review-avatar mem12" />
          <img src={member13} alt="" className="review-avatar mem13" />
          <img src={member14} alt="" className="review-avatar mem14" />
          <img src={member15} alt="" className="review-avatar mem15" />
          <img src={member16} alt="" className="review-avatar mem16" />
          <img src={member17} alt="" className="review-avatar mem17" />
          <img src={member18} alt="" className="review-avatar mem18" />
        </div>

        <div className="review-quote">
          <svg
            className="quote-mark quote-mark--open"
            width="69"
            height="49"
            viewBox="0 0 69 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect x="37" width="32" height="49" fill="#E8E8E8" />
            <rect width="32" height="49" fill="#E8E8E8" />
          </svg>

          <p className="element">
            Elementum delivered the site with inthe timeline as they requested. Inthe
            end, the client found a 50% increase in traffic with in days since its
            launch. They also had an impressive ability to use technologies that the
            company hasn&apos;t used, which have also proved to be easy to use and
            reliable
          </p>

          <svg
            className="quote-mark quote-mark--close"
            width="69"
            height="49"
            viewBox="0 0 69 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect x="32" y="49" width="32" height="49" transform="rotate(180 32 49)" fill="#E8E8E8" />
            <rect x="69" y="49" width="32" height="49" transform="rotate(180 69 49)" fill="#E8E8E8" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Review;
