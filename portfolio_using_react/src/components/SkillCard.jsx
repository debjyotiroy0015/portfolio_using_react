import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
const SkillCard = ({ item, key }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="card" ref={ref} key={key}>
      <div className="skill-image">
        <i className={`${item.logo} skill-logo`}></i>
        <div className="skill-name">{item.name}</div>
      </div>
      <div className="exp-prof">
        <div className="Proficiency-level">
          <div className="proficincy-level-text">
            Proficincy Lavel : {item.proficiency}
          </div>
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
          <div className="experience-text">Experience : {item.experience}</div>
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
