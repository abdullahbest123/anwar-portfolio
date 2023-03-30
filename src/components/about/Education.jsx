import React from "react";

const educationContent = [
  {
    year: "2016",
    degree: "Matric",
    institute: "FG Boys High School",
    details: `I did Matric from FG Boys High School and got 1st division`,
  },
  {
    year: "2020",
    degree: "DAE Civil",
    institute: "Swedish Institute of Technology",
    details: `Completed DAE Civil from Swedish Institute of Technology`,
  },
  {
    year: "2023",
    degree: "BACHELOR DEGREE ",
    institute: "Arid Agriculture University",
    details: `Currently Doing Bachelor Degree in Computer Science and doing Final Year Project`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
