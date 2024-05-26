import React, { useState } from "react";
import "./ProjectSlider.css";
import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Newton from "../Assets/newton.jpg";
import Studify from "../Assets/studify.jpg";
import Leo from "../Assets/leo.jpg";
import SOMU from "../Assets/somu.png";
import Albert from "../Assets/albert.jpg";

function ProjectSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "NEWTON.AI",
      body: "Unlock the Future with Newton AI! Dive into a world where artificial intelligence meets creativity and efficiency. Whether you’re generating stunning images, composing music, or interacting with virtual companions like Einstein, Newton AI is your gateway to endless possibilities. Experience AI-based news personalization, advanced image editing, and insightful quiz analysis—all designed to empower and inspire. Discover the most intuitive and powerful AI platform today and transform the way you create, learn, and innovate. Join Newton AI and embrace the future of AI technology!",
      backgroundImage: Newton,
    },
    {
      title: "LEO DA VINCI AI",
      body: "Transform Your Images with AI on Our Platform! Experience cutting-edge image generation and editing powered by artificial intelligence. Expand, replace, or remove objects; create anything your imagination envisions; recolor and remove backgrounds with ease. Our platform offers a comprehensive suite of Photoshop-like features, including resizing, enlarging, and more, all while ensuring your privacy with tokenized data. Discover a new world of creative possibilities and secure image editing today!",
      backgroundImage: Leo, // Add background image URL
    },
    {
      title: "STUDIFY",
      body: "Studify is an innovative platform designed to cater to individuals seeking personalized content and opportunities in their areas of interest. By leveraging user specifications, Studify curates a tailored feed featuring relevant news, educational resources, and career opportunities. In addition to this personalized content delivery, the platform offers interactive chat functionalities similar to Discord or Slack, allowing users to engage in topic-based discussions and collaborative learning. Studify also empowers its users with practical tips and guidance on effectively utilizing various technologies, making it an invaluable tool for personal and professional growth.",
      backgroundImage: Studify, // Add background image URL
    },
    {
      title: "SOMU",
      body: "SOMU is a sophisticated personal assistant for desktop environments, developed using Python. It integrates advanced technologies such as motion gesture recognition, predictive analytics, voice recognition, and sentiment analysis to offer a seamless and intuitive user experience. Additionally, SOMU leverages generative capabilities and a response-based model to provide intelligent and contextually relevant assistance, making it a powerful tool for enhancing productivity and user interaction.",
      backgroundImage: SOMU, // Add background image URL
    },
    {
      title: "ALBERT AI",
      body: "Revolutionize Your Learning with Our AI-Powered Platform! Our innovative platform leverages artificial intelligence to make learning effortless and engaging. Assess your answer strengths, take dynamic quizzes, and interact with PDFs, whether handwritten or text. Generate live content tailored to your syllabus and enjoy the benefits of generative AI, predictive analytics, and semantic analysis. Elevate your educational experience with personalized and interactive tools designed to help you excel!",
      backgroundImage: Albert, // Add background image URL
    },
    // Add more slides as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="ProjectSlider">
      <div
        className="PPPPPPPP"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          // padding: "0 3em",
          fontFamily: "Passion One",
          fontSize: "2em",
          width: "100%",
        }}
      >
        <h1 style={{ width: "60%" }}>LATEST PROJECTS...</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <IconButton
            onClick={prevSlide}
            style={{
              color: "white",
              visibility: currentSlide === 0 ? "hidden" : "visible",
            }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            onClick={nextSlide}
            style={{
              color: "white",
              visibility:
                currentSlide === slides.length - 1 ? "hidden" : "visible",
            }}
          >
            <ChevronRight />
          </IconButton>
        </div>
      </div>

      <div className="MainSlider">
        <Slide {...slides[currentSlide]} />
      </div>
    </div>
  );
}

const Slide = ({ title, body, backgroundImage }) => (
  <div
    className="PSAnotification"
    style={{ backgroundImage: `url(${backgroundImage})` }} // Set background image dynamically
  >
    <div className="PSAnotiglow" />
    <div className="PSAnotiborderglow" />
    <div style={{ position: "absolute", left: "1em", bottom: "4em" }}>
      <div className="PSAnotititle">{title} </div>
      <div className="PSAnotibody">{body}</div>
    </div>
  </div>
);

export default ProjectSlider;
