import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
const SkillCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="card" ref={ref}>
      <div className="skill-image">
        <i class="fa-brands fa-html5 skill-logo"></i>
        <div className="skill-name">HTML 5</div>
      </div>
      <div className="exp-prof">
        <div className="Proficiency-level">
          <div className="proficincy-level-text">Proficincy Lavel : 100%</div>
          <div className="progress-bar">
            <motion.div
              variants={{
                hidden: { width: 0 },
                visible: { width: "100%" },
              }}
              initial="hidden"
              animate={controls}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
              className="proficincy-progress-bar"
            ></motion.div>
          </div>
        </div>
        <div className="experience">
          <div className="experience-text">Experience : 5yrs</div>
          <div className="progress-bar">
            <motion.div
              variants={{
                hidden: { width: 0 },
                visible: { width: "100%" },
              }}
              initial="hidden"
              animate={controls}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
              className="proficincy-progress-bar"
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
