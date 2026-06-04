
import "./Picture.css";
import member1 from "./assets/member1.png";
import member2 from "./assets/member2.png";
import member3 from "./assets/member3.png";
import member4 from "./assets/member4.png";
import member5 from "./assets/member5.png";
import member6 from "./assets/member6.png";
import member7 from "./assets/member7.png";
import member8 from "./assets/member8.png";

const Picture = () => {
    return (
        <div className="team-avatars">
            {/* Ellipse 262 */}
            <img src={member7} alt="Team Member 7" className="avatar avatar7" />
            {/* Ellipse 261 */}
            <img src={member8} alt="Team Member 8" className="avatar avatar8 border-avatar" />
            {/* Ellipse 255 */}
            <img src={member1} alt="Team Member 1" className="avatar avatar1" />
            {/* Ellipse 256 */}
            <img src={member2} alt="Team Member 2" className="avatar avatar2" />
            {/* Ellipse 257 */}
            <img src={member4} alt="Team Member 4" className="avatar avatar4" />
            {/* Ellipse 258 */}
            <img src={member6} alt="Team Member 6" className="avatar avatar6 border-avatar" />
            {/* Ellipse 259 */}
            <img src={member3} alt="Team Member 3" className="avatar avatar3" />
            {/* Ellipse 260 */}
            <img src={member5} alt="Team Member 5" className="avatar avatar5" />
            <svg width="73" height="366" viewBox="0 0 73 366" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-0.125563 3.81958C32.8912 14.0867 91.0122 45.1979 59.3623 87.5062C19.8 140.391 -8.5 121.794 -8.5 157.245C-8.5 192.696 44.6348 192.696 44.6348 268.246C44.6348 328.686 2.95478 362.393 -8.5 361.812" stroke="#FF7171" stroke-width="8" />
            </svg>
            <svg width="84" height="355" viewBox="0 0 84 355" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.99996 3.81927C36.9367 14.0704 103.271 45.1331 71.6979 87.3753C32.2314 140.178 4 121.61 4 157.005C4 192.4 57.006 192.4 57.006 267.833C57.006 328.179 15.427 351.389 4 350.809" stroke="#0E0E0E" stroke-width="8" />
            </svg>
            <svg width="117" height="146" className="box" viewBox="0 0 117 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M77.8783 -4.93067e-06C86.7352 5.11355 94.4983 11.9216 100.724 20.0353C106.95 28.149 111.517 37.4095 114.164 47.2882C116.811 57.1668 117.486 67.4701 116.151 77.6097C114.816 87.7494 111.497 97.5268 106.384 106.384C101.27 115.241 94.4622 123.004 86.3484 129.23C78.2347 135.455 68.9742 140.022 59.0955 142.669C49.2169 145.316 38.9136 145.992 28.774 144.657C18.6344 143.322 8.85694 140.003 -7.20974e-06 134.889L38.9391 67.4446L77.8783 -4.93067e-06Z" fill="#934CEC" />
            </svg>
            <div className="light"></div>
        </div>
    );
};

export default Picture;