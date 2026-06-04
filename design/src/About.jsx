import "./About.css";
import member9 from "./assets/member9.png";
import member10 from "./assets/member10.png";

const AboutSection = () => {
    return (
        <div className="about-wrapper">

            {/* UPPER PART */}
            <div className="upper-part">
                <div className="text-block">
                    <h1>
                        <span className="yellow-highlight">Tomorrow</span> should be better than <span className="green-highlight">today</span>
                    </h1>
                    <p className="small-text">
                        We are a team of strategists, designers communicators, researchers.
                        Togeather, we belive that progress only happens when you refuse
                        to play things safe.
                    </p>
                    <a href="#" className="read-more">Read more <span className="arr">→</span></a>
                </div>

                <div className="image-block">
                    <img src={member9} alt="Boy sitting" className="circle-photo" />
                </div>

                <svg width="233" className="uppernew" height="227" viewBox="0 0 233 227" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.3254 -2.02656e-06L232.277 40.5018L186.952 226.343L4.78625e-05 185.841L45.3254 -2.02656e-06Z" fill="#FF7171" />
                </svg>


            </div>

            {/* MIDDLE ORANGE BLUR CIRCLE */}
            <div className="middle-orange-blur"></div>

            {/* LOWER PART */}
            <div className="lower-part">
                <div className="image-block">
                    <img src={member10} alt="Team working" className="circle-photo" />
                </div>

                <div className="t">
                    <h1 className="text-b">
                        <span className="green-highlight">See</span> how we can<br /> help you progress
                    </h1>
                    <p className="small-t">We add a layer of fearless insights and action that allows change
                        makers to accelerate their progress in areas such as brand, design
                        digital, comms and social research.
                    </p>
                    <a href="#" className="read-m">Read more <span className="a">→</span></a>
                </div>
            </div>
            <svg className="new" width="238" height="201" viewBox="0 0 238 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M118.645 0L237.291 200.25H0L118.645 0Z" fill="#FF7171" />
            </svg>

            <svg className="sna" width="864" height="654" viewBox="0 0 864 654" fill="none" xmlns="http://www.w3.org/2000/svg">
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

        </div>

    );
};

export default AboutSection;