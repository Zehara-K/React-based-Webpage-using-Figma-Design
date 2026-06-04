import "./Services.css";
import serviceBadge from "./assets/member13.png";
import SnakeLine from "./components/SnakeLine";
function Services() {
  return (
    <section className="services-section" aria-label="Services">
      <h2 className="services-heading">
        What we <span className="ddd">can</span>
        <br />
        offer you!
      </h2>
      <SnakeLine className="ab" filterId="about-snake-shadow" />
      <div className="service-rows">
        <div className="service-row">
          <div className="line" aria-hidden="true" />
          <p className="service-label">Office of multiple interest content</p>
          <p className="service-title">Colaborative &amp; partnership</p>
          <span className="service-arrow" aria-hidden="true">→</span>
          <div className="line" aria-hidden="true" />
        </div>

        <div className="service-row">
          <p className="service-label">The hanger US Air force digital experimental</p>
          <p className="service-title">We talk about our weight</p>
          <span className="service-arrow" aria-hidden="true">→</span>
          <div className="line" aria-hidden="true" />
        </div>

        <div className="service-row">
          <p className="service-label">Delta faucet content, social, digital</p>
          <p className="service-title service-title--badge">
            Piloting digital{" "}

              confidence
              <span className="service-badge" aria-hidden="true">
                
            </span>
          </p>
          <span className="service-arrow" aria-hidden="true">→</span>
          <div className="line" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default Services;
