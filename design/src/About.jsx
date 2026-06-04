import "./About.css";
import SnakeLine from "./components/SnakeLine";
import member9 from "./assets/member9.png";
import member10 from "./assets/member10.png";

const About = () => {
  return (
    <section className="about-wrapper" aria-label="About us">
      <SnakeLine className="about-snake" filterId="about-snake-shadow" />
      <div className="middle-orange-blur" aria-hidden="true" />

      <div className="upper-part">
        <div className="text-block">
          <h1>
            <span className="orange-highlight">Tomorrow</span> should be better than{" "}
            <span className="green-highlight">today</span>
          </h1>
          <p className="small-text">
            We are a team of strategists, designers communicators, researchers.
            Togeather, we belive that progress only happens when you refuse
            to play things safe.
          </p>
          <a href="#" className="read-more btn-interactive">
            Read more
            <span className="read-more-line" aria-hidden="true" />
            <span className="read-more-arrow" aria-hidden="true">→</span>
          </a>
        </div>
        <div className="red-blur" aria-hidden="true" />
        <div className="image-block image-block--upper">
          <div className="image-frame">
            <img src={member9} alt="Team in meeting" className="circle-photo" />
            <svg
              className="frame-triangle frame-triangle--upper"
              width="238"
              height="201"
              viewBox="0 0 238 201"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M118.645 0L237.291 200.25H0L118.645 0Z" fill="#FF7171" />
            </svg>
          </div>
        </div>
      </div>

      <div className="lower-part">
        <div className="image-block image-block--lower">
          <div className="image-frame">
            <img src={member10} alt="Team working" className="circle-photo circle-photo--bordered" />
            <svg
              className="frame-triangle frame-triangle--lower-tl"
              width="238"
              height="201"
              viewBox="0 0 238 201"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M118.645 0L237.291 200.25H0L118.645 0Z" fill="#FF7171" />
            </svg>
            <svg
              className="frame-triangle frame-triangle--lower-br"
              width="238"
              height="201"
              viewBox="0 0 238 201"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M118.645 0L237.291 200.25H0L118.645 0Z" fill="#FF7171" />
            </svg>
          </div>
        </div>

        <div className="text-block text-block--lower">
          <h1 className="text-b">
            <span className="green-highlight">See</span> how we can
            <br /> help you <span className="orange-highlight">progress</span>
          </h1>
          <p className="small-t">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>
          <a href="#" className="read-more btn-interactive">
            Read more
            <span className="read-more-line" aria-hidden="true" />
            <span className="read-more-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
