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
    <section className="team-avatars" aria-label="Team members">
      {/* 1 — left 38px */}
      <img src={member7} alt="Team member 1" className="avatar avatar-1" />
      {/* 2 — left 199px, white border */}
      <img src={member8} alt="Team member 2" className="avatar avatar-2 border-avatar" />
      {/* 3 — left 553px */}
      <img src={member1} alt="Team member 3" className="avatar avatar-3" />
      {/* 4 — left 677px */}
      <img src={member6} alt="Team member 4" className="avatar avatar-4" />
      {/* 5 — left 977px */}
      <img src={member2} alt="Team member 5" className="avatar avatar-5" />
      {/* 6 — left 1144px, white border */}
      <img src={member3} alt="Team member 6" className="avatar avatar-6 border-avatar" />
      {/* 7 — left 1414px */}
      <img src={member4} alt="Team member 7" className="avatar avatar-7" />
      {/* 8 — left 1656px */}
      <img src={member5} alt="Team member 8" className="avatar avatar-8" />
    </section>
  );
};

export default Picture;
