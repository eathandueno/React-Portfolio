import React from "react";
import "./Education.css"; // Ensure the CSS is linked
import cwiLogo from "./cwiLogo.png"; // Import the logo image directly
import codingDojoLogo from "./codingDojo.png"; // Import the logo image directly
const courses = [
  {
    logo: codingDojoLogo,
    title: "Django/Python Certification",
    institution: "Coding Dojo",
    year: "2022",
    description:
      "A comprehensive course on Django and Python, covering all aspects of web development. Data structures, algorithms, and more.",
  },
  {
    logo: cwiLogo,
    title: "SWDV 105 - Introduction to Programming",
    institution: "College Of Western Idaho",
    year: "2023",
    description:
      "An in-depth look at supervised and unsupervised learning models, including neural networks and decision trees.",
  },
  {
    logo: cwiLogo,
    title: "SWDV 110 - Intermediate Programming",
    institution: "College Of Western Idaho",
    year: "2023",
    description:
      "An in-depth approach to creating and debugging object-oriented applications. Topics include classes, inheritance, exception handling, events, and file access.",
  },
  {
    logo: cwiLogo,
    title: "SWDV 115 - Introduction to Web Application Development",
    institution: "College Of Western Idaho",
    year: "2023",
    description:
      "Essential structures of HTML and CSS, including coding conventions and best practices. Includes an exploration of relationships between HTML and other tagged-text languages.",
  },
  {
    logo: cwiLogo,
    title: "SWDV 140 - Intermediate Web Application Development",
    institution: "College Of Western Idaho",
    year: "2023",
    description:
      "Creating, editing, importing, and exporting CSS based websites using WYSIWYG authoring tools. Designing and implementing websites using images, animations, and client-side scripts",
  },
  {
    logo: cwiLogo,
    title: "SWDV 143 - Client Side Frameworks",
    institution: "College Of Western Idaho",
    year: "2023",
    description:
      "Comprehensive overview and application of client-side scripting technologies and frameworks. Emphasis is placed on adapting and extending traditional markup and client-side scripting languages, creating user interfaces, and connecting software components.",
  },
  {
    logo: cwiLogo,
    title: "SWDV 152 - System Analysis and Design",
    institution: "College Of Western Idaho",
    year: "2023",
    description: "",
  },
  {
    logo: cwiLogo,
    title: "SWDV 210 - Introduction to Server-Side Programming",
    institution: "College Of Western Idaho",
    year: "2024",
    description: "",
  },
  {
    logo: cwiLogo,
    title: "SWDV 220 - Fundamentals of Database Systems",
    institution: "College Of Western Idaho",
    year: "2024",
    description: "",
  },
  {
    logo: cwiLogo,
    title: "SWDV 235 - Advanced Web Application Development",
    institution: "College Of Western Idaho",
    year: "2024",
    description: "",
  },
];

const Education = () => {
  return (
    <div id="Education" className="education">
      <section className="education-container">
        <h1>Education</h1>
        <div className="course-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <img className="edu-logo" src={course.logo} alt="logo" />
              <h3>{course.title}</h3>
              <p>{course.institution}</p>
              <span>{course.year}</span>
              <p className="course-description">{course.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
