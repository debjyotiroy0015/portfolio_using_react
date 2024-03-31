import React from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";
import "../../src/assets/css/herosection.css";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="text-part">
        <h1>
          Hi, I am{" "}
          <span style={{ color: "#E1AA74", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["Debjyoti", " a FullStack Developer"]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p>
          Proficient in building dynamic web applications using the MERN
          (MongoDB, Express.js, React.js, Node.js) stack. Experienced in
          developing both front-end and back-end components, including database
          management, server-side logic implementation, and user interface
          design. Skilled in writing clean, efficient code and ensuring seamless
          integration between different layers of the application. Strong
          problem-solving abilities and a passion for staying updated on the
          latest technologies in web development.
        </p>
        <div className="download-cv">Download CV</div>
      </div>
      <div className="image-part">
        <div className="image"></div>
      </div>
    </div>
  );
};

export default HeroSection;
