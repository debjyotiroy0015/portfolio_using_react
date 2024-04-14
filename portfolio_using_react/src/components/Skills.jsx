import React, { useState } from "react";
import "../assets/css/skills.css";
import SkillCard from "./SkillCard";
const Skills = () => {
  const skillDetails = [
    {
      logo: "fa-brands fa-html5",
      name: "HTML 5",
      proficiency: "100%",
      experience: "5 Years",
    },
    {
      logo: "fa-brands fa-html5",
      name: "HTML 5",
      proficiency: "100%",
      experience: "5 Years",
    },
    {
      logo: "fa-brands fa-html5",
      name: "HTML 5",
      proficiency: "100%",
      experience: "5 Years",
    },
    {
      logo: "fa-brands fa-html5",
      name: "HTML 5",
      proficiency: "100%",
      experience: "5 Years",
    },
    {
      logo: "fa-brands fa-html5",
      name: "HTML 5",
      proficiency: "100%",
      experience: "5 Years",
    },
    {
      logo: "fa-brands fa-html5",
      name: "HTML 5",
      proficiency: "100%",
      experience: "5 Years",
    },
    {
      logo: "fa-brands fa-html5",
      name: "HTML 5",
      proficiency: "100%",
      experience: "5 Years",
    },
    {
      logo: "fa-brands fa-html5",
      name: "HTML 5",
      proficiency: "100%",
      experience: "5 Years",
    },
    {
      logo: "fa-brands fa-html5",
      name: "HTML 5",
      proficiency: "100%",
      experience: "5 Years",
    },
  ];
  return (
    <div className="skills" id="skills">
      <h1 className="skills-text">Skills</h1>
      <div className="cards">
        {skillDetails.map((item, key) => (
          <SkillCard item={item} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
