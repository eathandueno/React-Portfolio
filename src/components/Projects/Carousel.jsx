import React, { useState } from "react";
import "./Carousel.css"; // Ensure the CSS file is imported
import debateitShowcase from "./images/debateitShowcase.mp4";
import draiShowCase from "./images/drai.mp4";
import PDFReader from "./images/PDFReader.mp4";
import nodejsIcon from "./images/nodejs.svg";
import reactjsIcon from "./images/react.svg";
import langchainIcon from "./images/langchain.svg";
import pythonIcon from "./images/python.svg";
import openaiIcon from "./images/openai.svg";
import AlphaSEO from "./images/alphaSEO.mp4";
import djangoIcon from "./images/django.svg";
import arbitrageTrade from "./images/arbitrageTrade.png";
const projects = [
  // {
  //   title: "NASM Certified Personal Trainer  \n (in-progress)",
  //   description:
  //     "A testament to my commitment towards physical fitness. My time in the Military provided me a strong foundation and passion with fitness. I am currently studying the course work provided by NASM to pursue a higher education in fitness, health and well-being.",
  //   image: fakeCPT,
  //   type: "Personal",
  // },
  {
    title: "Alpha SEO",
    description:
      "AI-driven tool designed to enhance search engine optimization by utilizing advanced functionalities such as segmenting website screenshots for design quality assessment through image-to-text models, providing marketing optimization suggestions based on algorithmic analysis of case studies, and managing meta and HTML tags with Reinforced Learning Augmented Generation (RAG). It incorporates sectional sentiment analysis to refine content suggestions, and leverages Langchain’s RAG for a supportive chatbot service.",
    tech: [
      { label: "React", icon: reactjsIcon },
      { label: "Node.js", icon: nodejsIcon },
      { label: "Langchain", icon: langchainIcon },
      { label: "Python", icon: pythonIcon },
    ],
    image: AlphaSEO,
    type: "Professional",
  },
  {
    title: "AI-Graded Debate Game",
    description:
      "Designed to educate on logical fallacies, logic and reasoning, and formal debate.",
    tech: [
      { label: "React", icon: reactjsIcon },
      { label: "Node.js", icon: nodejsIcon },
      { label: "OpenAI", icon: openaiIcon },
    ],
    image: debateitShowcase,
    type: "Personal",
  },
  {
    title: "RAG Reader",
    description:
      "A tool that leverages Reality Augmented Generation methodology to generate and read text from uploaded files.",
    tech: [
      { label: "React", icon: reactjsIcon },
      { label: "Node.js", icon: nodejsIcon },
      { label: "Langchain", icon: langchainIcon },
      { label: "Python", icon: pythonIcon },
    ],
    image: PDFReader,
    type: "Professional",
  },
  {
    title: "DR. A.I.",
    description:
      "A Fine tuned Chatbot of GPT-3.5 that disallows the user to delineate from non-orthopedic or health related topics. ",
    tech: [
      {
        label: "OpenAI",
        icon: openaiIcon,
      },
      {
        label: "Node.js",
        icon: nodejsIcon,
      },
      {
        label: "React",
        icon: reactjsIcon,
      },
    ],
    image: draiShowCase,
    type: "Professional",
  },

  {
    title: "Crypto Calculator",
    description:
      "A tool that quickly calculates the value of a triangle arbitrage trade between multiple cryptocurrencies. The tool pulled from the Kraken API to get the most up-to-date prices for the selected cryptocurrencies.",
    tech: [
      { label: "Python", icon: pythonIcon },
      {
        label: "Django",
        icon: djangoIcon,
      },
    ],
    type: "Personal",
    image: arbitrageTrade,
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flipped, setFlipped] = useState(
    new Array(projects.length).fill(false)
  );

  const goLeft = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    setFlipped(new Array(projects.length).fill(false));
  };

  const goRight = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setFlipped(new Array(projects.length).fill(false));
  };

  const toggleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  const getDisplayedProjects = () => {
    const totalProjects = projects.length;
    let prevIndex = (activeIndex - 1 + totalProjects) % totalProjects;
    let nextIndex = (activeIndex + 1) % totalProjects;
    return [prevIndex, activeIndex, nextIndex];
  };

  const displayedProjects = getDisplayedProjects();

  return (
    <div className="carousel-container">
      <button onClick={goLeft}>{"<"}</button>
      <div className="carousel">
        {displayedProjects.map((index) => (
          <div
            key={index}
            className={`card ${index === activeIndex ? "active" : ""}`}>
            {flipped[index] ? (
              <>
                <p>{projects[index].description}</p>
                <div className="tech-icons">
                  {projects[index].tech?.map((tech, i) => (
                    <div
                      key={i}
                      className="tech-icon"
                      style={{ display: "flex", flexDirection: "row" }}>
                      <img
                        src={tech.icon}
                        alt={tech.label}
                        title={tech.label}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                  ))}
                </div>
                <p>{projects[index].type}</p>
                <svg
                  onClick={() => toggleFlip(index)}
                  style={{ position: "absolute", bottom: "10px" }}
                  width={20}
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
                    fill-rule="nonzero"
                  />
                </svg>
              </>
            ) : (
              <>
                {projects[index].image.endsWith(".mp4") ? (
                  <video
                    controls
                    autoPlay={false}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "300px",
                      objectFit: "contain",
                    }}>
                    <source src={projects[index].image} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={projects[index].image}
                    alt={projects[index].title}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "300px",
                      objectFit: "contain",
                    }}
                  />
                )}
                <h3>{projects[index].title}</h3>
                <svg
                  onClick={() => toggleFlip(index)}
                  style={{ position: "absolute", bottom: "10px" }}
                  width={20}
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
                    fill-rule="nonzero"
                  />
                </svg>
                {projects[index].link && (
                  <a
                    href={projects[index].link}
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn More
                  </a>
                )}
              </>
            )}
          </div>
        ))}
      </div>
      <button onClick={goRight}>{">"}</button>
    </div>
  );
};

export default Carousel;
