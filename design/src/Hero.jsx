import "./Hero.css";

function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <h1 className="hero-title">
        The <span className="thinkers-mark">thinkers and</span>
        <br />
        doers were ch<span className="pink">anging</span> the{" "}
        <span className="ddd">status</span> Quo with
      </h1>

      <p className="hero-description">
        We are a team of strategists, designers communicators, researchers. Togeather,
        we belive that progress only hghappens when you refuse to play things safe.
      </p>

      <svg
        className="hero-vector hero-vector--red"
        width="358"
        height="77"
        viewBox="0 0 84 355"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M3.99996 3.81927C36.9367 14.0704 103.271 45.1331 71.6979 87.3753C32.2314 140.178 4 121.61 4 157.005C4 192.4 57.006 192.4 57.006 267.833C57.006 328.179 15.427 351.389 4 350.809"
          stroke="#FF7171"
          strokeWidth="8"
        />
      </svg>

      <svg
        className="hero-vector hero-vector--black"
        width="347"
        height="76"
        viewBox="0 0 73 366"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M-0.125563 3.81958C32.8912 14.0867 91.0122 45.1979 59.3623 87.5062C19.8 140.391 -8.5 121.794 -8.5 157.245C-8.5 192.696 44.6348 192.696 44.6348 268.246C44.6348 328.686 2.95478 362.393 -8.5 361.812"
          stroke="#0E0E0E"
          strokeWidth="8"
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
    </section>
  );
}

export default Hero;
