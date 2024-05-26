import * as React from "react";
import "./styles/Skills.css";
import Avatar from "@mui/material/Avatar";
import useMediaQuery from "@mui/material/useMediaQuery";

const SkillCategory = ({ title, items }) => {
  const isSmallScreen = useMediaQuery("(max-width:700px)");
  const avatarSize = isSmallScreen ? 30 : 55;
  const commonSx = { width: avatarSize, height: avatarSize };
  const popInAnimation = {
    animation: "popIn 0.7s ease-in-out",
  };

  return (
    <div className="Skills">
      <p>{title}</p>
      <div style={{ display: "flex", gap: "1em" }}>
        {items.map((item, index) => (
          <Avatar
            key={index}
            alt={item.alt}
            src={item.src}
            sx={{
              ...commonSx,
              ...item.sx,
              ...popInAnimation,
              color: "white",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    {
      title: "TOOLS:",
      items: [
        {
          src: "https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png",
          alt: "Next.js",
        },
        { src: "https://reactnative.dev/img/logo-og.png", alt: "React Native" },
        {
          src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png",
          alt: "Redux",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Firebase_icon.svg/2048px-Firebase_icon.svg.png",
          alt: "Firebase",
        },
        {
          src: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png",
          alt: "GitHub",
        },
      ],
    },
    {
      title: "TECH STACK:",
      items: [
        {
          src: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3521676-2945120.png?f=webp",
          alt: "MongoDB",
        },
        {
          src: "https://www.nextontop.com/assets/img/services/web/expressjs.svg",
          alt: "Express.js",
          sx: { img: { width: "115%", height: "115%" } },
        },
        {
          src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
          alt: "React.js",
        },
        {
          src: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png?f=webp",
          alt: "Node.js",
        },
      ],
    },
    {
      title: "STYLING:",
      items: [
        {
          src: "https://i0.wp.com/watermargin.net/wp-content/uploads/2022/05/mui-logo.png?fit=820%2C820&ssl=1",
          alt: "Material-UI",
        },
        {
          src: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/sass-5.png",
          alt: "Sass",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png",
          alt: "Tailwind CSS",
          sx: { img: { objectFit: "contain", width: "70%", height: "70%" } },
        },
        {
          src: "https://repository-images.githubusercontent.com/157846876/70574400-9e6a-11e9-8708-22d4bf4c3322",
          alt: "Styled Components",
        },
        {
          src: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_5b35fcb985a6fab33d7799d84e923367/greensock-animation-platform.png",
          alt: "GreenSock",
        },
      ],
    },
    {
      title: "LANGUAGES:",
      items: [
        {
          src: "https://freepngimg.com/thumb/c++/2-2-c++-png-clipart.png",
          alt: "CPP",
          sx: { img: { objectFit: "contain", width: "85%", height: "85%" } },
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
          alt: "JAVAScript",
        },
        {
          src: "https://cdn.iconscout.com/icon/free/png-256/free-typescript-3521774-2945272.png?f=webp",
          alt: "TYPEScript",
        },
        {
          src: "https://logos-world.net/wp-content/uploads/2021/10/Python-Emblem.png",
          alt: "Python",
          sx: { img: { width: "85%", height: "85%" } },
        },
      ],
    },
    {
      title: "EDITING:",
      items: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/788px-Adobe_Photoshop_CC_icon.svg.png",
          alt: "Photoshop",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/2101px-Adobe_After_Effects_CC_icon.svg.png",
          alt: "After Effects",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2101px-Adobe_Premiere_Pro_CC_icon.svg.png",
          alt: "Premiere Pro",
        },
        {
          src: "https://store-images.s-microsoft.com/image/apps.44319.14313484006897525.eefc0650-0226-45e3-bae7-07c4a8b54fb3.c942d295-53e0-41d5-86cf-4ecae9a3bfdb",
          alt: "DaVinci Resolve",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/1/14/Open_Broadcaster_Software_Logo.png",
          alt: "OBS Studio",
        },
      ],
    },
    {
      title: "PRESENTING:",
      items: [
        {
          src: "https://static-00.iconduck.com/assets.00/apps-figma-icon-2048x2048-ctjj5ab7.png",
          alt: "Figma",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/2048px-Canva_icon_2021.svg.png",
          alt: "Canva",
        },
        {
          src: "https://play-lh.googleusercontent.com/kaox1VteLsWAuNxPxhm8t4llaoyFhxzDjo9g4Hdf92bKdT_Sn6Yrdku6rApuc5ktirw",
          alt: "Google Slides",
        },
      ],
    },
    {
      title: "AI TOOLS:",
      items: [
        {
          src: "https://d-cb.jc-cdn.com/sites/crackberry.com/files/styles/large/public/article_images/2023/08/openai-logo.jpg",
          alt: "OpenAI",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png",
          alt: "MidJourney",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8w3klpkdWM9nOtXUpp3m7WSc4d77xQF7tKH-hoUOGmw&s",
          alt: "ChatGPT",
        },
        {
          src: "https://workable-application-form.s3.amazonaws.com/advanced/production/61557f91d9510741dc62e7f8/c3635b59-a3d2-444a-b636-a9d0061dcdde",
          alt: "DALL-E",
        },
      ],
    },
  ];

  return (
    <>
      {skillsData.map((skillCategory, index) => (
        <div key={index}>
          <SkillCategory
            key={index}
            title={skillCategory.title}
            items={skillCategory.items}
          />
          <hr />
        </div>
      ))}
    </>
  );
};

export default Skills;
