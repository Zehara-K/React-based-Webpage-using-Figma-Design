import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">
        The thinkers and doers were <br />
        <span className="pink">changing</span> the <span className="green">status</span> Quo with
      </h1>
      <p className="hero-description">
        We are a team of strategists, designers, communicators, researchers.
        Together, we believe that progress only happens when you refuse to play things safe.
      </p>

      <div className="violet-ellipse"></div>
      <div className="red-line"></div>
      <div className="black-line"></div>
    </section>
  );
}

export default Hero;