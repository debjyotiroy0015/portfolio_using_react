import React from "react";
import "../assets/css/skills.css";
import { IoLogoHtml5 } from "react-icons/io5";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skills-text">Skills</h1>
      <div className="cards">
        <SkillCard />
      </div>
    </div>
  );
};

export default Skills;
