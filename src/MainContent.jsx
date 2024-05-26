import "./Components/styles/MainContent.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SkillsGround from "./Components/SkillsGround";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BannerContent from "./Components/BannerContent";
import Aboutme from "./Components/Aboutme";
import React, { useEffect, useState } from "react";
import ProjectSlider from "./Components/ProjectSlider";
import { Code, Instagram } from "@mui/icons-material";
import ProjectCategory from "./Components/ProjectCategory";
import LastPart from "./Components/LastPart";
import { SvgIcon } from "@mui/material";

const BannerText = () => {
  const text =
    "🌟 I am a curious and driven individual, always on the lookout for new challenges and opportunities to grow. My journey is fueled by a passion for continuous learning and self-improvement. ✨";
  const [words, setWords] = useState([]);

  useEffect(() => {
    const wordsArray = text.split(" ").map((word, index) => (
      <span
        key={index}
        className="word"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {word}&nbsp;
      </span>
    ));
    setWords(wordsArray);
  }, [text]);

  return <p className="BannerText">{words}</p>;
};

function MainContent() {
  return (
    <div className="MainContent">
      <div className="Bannar">
        {/* <BannerContent />f */}
        <BannerText />
        <div>
          <BannerContent />
          <div className="socialBanner">
            <a href="https://github.com/speedcuberayush" target="_blank">
              <IconButton aria-label="delete" size="large">
                <GitHubIcon style={{ color: "#fff" }} />
              </IconButton>
            </a>
            <a
              href="https://www.linkedin.com/in/speedcuberayush/"
              target="_blank"
            >
              <IconButton aria-label="delete" size="large">
                <LinkedInIcon style={{ color: "#fff" }} />
              </IconButton>
            </a>

            <a href="https://leetcode.com/u/speedcuberayush/" target="_blank">
              <IconButton aria-label="delete" size="large">
                {/* <Code style={{ color: "#fff" }} /> */}
                <SvgIcon style={{ fontSize: "0.8em" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    // strokeWidth={1.5}
                    // stroke="#fff"
                  >
                    <path
                      fill="#fff"
                      d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"
                    ></path>
                    <path
                      fill="#fff"
                      d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"
                    ></path>
                  </svg>
                </SvgIcon>
              </IconButton>
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/speedcuberayush/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton size="large" sx={{ color: "#fff" }}>
                <SvgIcon style={{ fontSize: "1em" }}>
                  {/* credit: plus icon from https://heroicons.com/ */}
                  <svg
                    fill="#fff"
                    viewBox="0 0 24 24"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368 1.008zm-11.99-.654a3.793 3.793 0 0 1-2.134 2.078 4.51 4.51 0 0 1-3.117.016 3.7 3.7 0 0 1-1.104-.695 2.652 2.652 0 0 1-.564-.745 4.221 4.221 0 0 1-.368-1.006H9.59c-.038.12-.08.238-.13.352zm14.501-1.758a3.849 3.849 0 0 0-.082-.475l-9.634-.008a3.932 3.932 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357 6.283 6.283 0 0 0-2.544-.49 6.35 6.35 0 0 0-2.405.457 6.007 6.007 0 0 0-1.963 1.276 6.142 6.142 0 0 0-1.325 1.94 5.862 5.862 0 0 0-.466 1.864h-.063a5.857 5.857 0 0 0-.467-1.865 6.13 6.13 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.698 6.698 0 0 0-4.949.031A5.708 5.708 0 0 0 1.34 7.73l1.52 1.49a4.166 4.166 0 0 1 4.484-.958c.47.184.898.46 1.26.81.368.36.66.792.859 1.268.146.344.242.708.285 1.08l-9.635.008A4.714 4.714 0 0 0 0 12.457a6.493 6.493 0 0 0 .345 2.127 4.927 4.927 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.454 6.454 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a5.986 5.986 0 0 0 1.964-1.277 6.116 6.116 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077 5.99 5.99 0 0 0 1.964 1.276 6.345 6.345 0 0 0 2.405.457 6.45 6.45 0 0 0 2.502-.457 5.42 5.42 0 0 0 1.882-1.293 4.928 4.928 0 0 0 1.08-1.783A6.52 6.52 0 0 0 24 12.457a4.757 4.757 0 0 0-.039-.554z" />
                  </svg>
                </SvgIcon>
              </IconButton>
            </a>
            <a
              href="https://www.instagram.com/speedcuberayush/"
              target="_blank"
            >
              <IconButton aria-label="delete" size="large">
                <Instagram style={{ color: "#fff" }} />
              </IconButton>
            </a>
          </div>
        </div>
      </div>

      <Aboutme />
      <ProjectSlider />
      <ProjectCategory />
      {/* <LastPart /> */}
    </div>
  );
}

export default MainContent;
