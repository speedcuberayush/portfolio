import BarChartIcon from "@mui/icons-material/BarChart";
import PersonIcon from "@mui/icons-material/Person";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import SchoolIcon from "@mui/icons-material/School";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import "./styles/Aboutme.css";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SimpleCard from "./SimpleCard";
import Cnoti from "./Cnoti";
import profile from "../Assets/profile.jpg";
import {
  AccountCircle,
  AttachEmail,
  Cake,
  LocationOn,
  PhoneAndroid,
  TipsAndUpdates,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import SkillsGround from "./SkillsGround";
import Skills from "./Skills";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      sx={{ height: "100%", width: "100%" }}
    >
      {value === index && (
        <Box sx={{ p: 3, height: "100%" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="aboutMEPART">
      <Box
        className="aboutBOX"
        sx={{
          bgcolor: "#171717",
          display: "flex",
          width: "70%",
          height: "30rem",
          borderRadius: "10px",
          alignItems: "center",
          margin: "5em 0",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            width: "6em",
            borderRight: 4,
            borderColor: "#111216",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%", // Set tabs height to full height of parent container
            "& .MuiTabs-indicator": {
              backgroundColor: "#0096ff",
              width: "4px",
              height: "4px",
              borderRadius: "10px",
            },
          }}
        >
          <Tab
            icon={<TipsAndUpdates />}
            {...a11yProps(0)}
            sx={{
              color: value === 0 ? "#0096ff" : "#fff",
            }}
          />
          <Tab
            icon={<PersonIcon />}
            {...a11yProps(1)}
            sx={{
              color: value === 1 ? "#0096ff" : "#fff",
            }}
          />
          <Tab
            icon={<TrackChangesIcon />}
            {...a11yProps(2)}
            sx={{
              color: value === 2 ? "#0096ff" : "#fff",
            }}
          />
          <Tab
            icon={<SchoolIcon />}
            {...a11yProps(3)}
            sx={{
              color: value === 3 ? "#0096ff" : "#fff",
            }}
          />
          <Tab
            icon={<MilitaryTechIcon />}
            {...a11yProps(4)}
            sx={{
              color: value === 4 ? "#0096ff" : "#fff",
            }}
          />
          <Tab
            icon={<WorkHistoryIcon />}
            {...a11yProps(5)}
            sx={{
              color: value === 5 ? "#0096ff" : "#fff",
            }}
          />
          {/* <Tab
            icon={<WorkHistoryIcon />}
            {...a11yProps(6)}
            sx={{
              color: value === 6 ? "#0096ff" : "#fff",
            }}
          /> */}
        </Tabs>
        {/* Adjust width to fill the remaining space */}
        <div
          style={{
            width: "calc(100% - 6em)",
            height: "95%",
            padding: "0px 1px 1px 0px",
            flexWrap: "wrap",
            overflow: "auto",
          }}
        >
          <TabPanel value={value} index={1}>
            <Part2 />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Part1 />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                gap: "1em",
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "space-evenly",
              }}
            >
              <SimpleCard
                edu="CHANDIGARH UNIVERSITY (2025)"
                course="COURSE: B.E"
                score={"SCORE: 8.72/10"}
              />
              <SimpleCard
                edu="KENDRIYA VIDHYALAYA (2020)"
                course="COURSE: XII"
                score={"SCORE: 88.6%"}
              />
              <SimpleCard
                edu="KENDRIYA VIDHYALAYA (2018)"
                course="COURSE: X"
                score={"SCORE: 94%"}
              />
            </div>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                gap: "1em",
                flexWrap: "wrap",
                width: "100%",
                // justifyContent: "space-evenly",
              }}
            >
              <h2 className="ABTtitle ABTH1">ACHIEVEMENTS & CERTIFICATIONS</h2>
              <h2 className="ABTtitle">GENERAL</h2>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: "1em",
                  flexWrap: "wrap",
                  width: "100%",
                  justifyContent: "space-evenly",
                }}
              >
                <Cnoti Cname="GRID 5.0" Cprovider="SEMI-FINALS" />
                <Cnoti Cname="GEEK-A-THON" Cprovider="SEMI-FINALS" />
                {/* <Cnoti Cname="SSB/AFSB" Cprovider="2020" />
                <Cnoti Cname="CBSE MERIT" Cprovider="MATHEMATICS(2018)" />
                <Cnoti Cname="INMO" Cprovider="2019" />
                <Cnoti Cname="RMO" Cprovider="2019" />
                <Cnoti Cname="PRMO" Cprovider="2017, 2018" /> */}
              </div>

              {/* <h2 className="ABTtitle">COURSES</h2> */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: "1em",
                  flexWrap: "wrap",
                  width: "100%",
                  justifyContent: "space-evenly",
                }}
              >
                <Cnoti Cname="ALGORITHMS I" Cprovider="Princeton University" />
                <Cnoti Cname="ALGORITHMS II" Cprovider="Princeton University" />
                <Cnoti Cname="Self paced DSA" Cprovider="GEEKS FOR GEEKS" />
                {/* one  */}
                <Cnoti Cname="Principles of UI/UX" Cprovider="META" />
                <Cnoti Cname="Project Management" Cprovider="GOOGLE" />

                {/* one  */}
                <Cnoti Cname="Front End Developer" Cprovider="META" />
                <Cnoti Cname="React Basics" Cprovider="META" />
                <Cnoti Cname="Advance React" Cprovider="META" />
                {/* one  */}
                <Cnoti Cname="NoSQL & Big Data" Cprovider="IBM" />
                <Cnoti Cname="The Full Stack" Cprovider="META" />
                {/* one  */}
                <Cnoti Cname="Developing AI Python " Cprovider="IBM" />
                <Cnoti Cname="CV & IMG Processing" Cprovider="IBM" />
                <Cnoti Cname="Python Data Analysis" Cprovider="Google Cloud" />
                <Cnoti Cname="Python AI processing" Cprovider="Google Cloud" />
                <Cnoti Cname="ID aware proxy" Cprovider="Google Cloud" />
              </div>
              {/* <h2 className="ABTtitle">SPORTS</h2>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: "1em",
                  flexWrap: "wrap",
                  width: "100%",
                  justifyContent: "space-evenly",
                }}
              >
                <Cnoti Cname="U17 400M" Cprovider="NATIONALS" />
                <Cnoti Cname="U17 BASKETBALL" Cprovider="NATIONALS (SILVER)" />
                <Cnoti Cname="U17 SWIMMING" Cprovider="NATIONALS (GOLD)" />
                <Cnoti Cname="NATIONAL SPEEDUBING" Cprovider="WCA" />
                <Cnoti Cname="LONG JUMP" Cprovider="REGIONALS" />
                <Cnoti Cname="FMSCI" Cprovider="ZX6R" />
              </div> */}
            </div>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                gap: "1em",
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "space-evenly",
              }}
            >
              <h2 className="ABTtitle">PROFESSIONAL EXPERIENCE</h2>
              <SimpleCard
                edu="GEEKS FOR GEEKS (2022 - PRESENT)"
                course=""
                score={"CONTENT WRITER"}
              />
              <SimpleCard
                edu="FREELANCING (2021 - PRESENT)"
                course=""
                score={"NEXTJS | MERN | MOTION GRAPHICS"}
              />
              <SimpleCard
                edu="OPEN SOURCE DEVELOPMENT (2022 - PRESENT)"
                course=""
                score={"PYTHON | JS "}
              />
            </div>
          </TabPanel>
          <TabPanel value={value} index={0}>
            <Part5 />
          </TabPanel>
          <TabPanel value={value} index={6}>
            <Part5 />
          </TabPanel>
        </div>
      </Box>
    </div>
  );
}

function Part3() {
  return (
    <div>
      <Cnoti />
      <Cnoti />
      <Cnoti />
      <Cnoti />
      <Cnoti />
    </div>
  );
}

function Part1() {
  return (
    <div className="IndentAbout">
      <h1 className="ABTtitle">AIM</h1>
      <p>
        I am a curious and driven individual, always seeking new challenges and
        opportunities to grow, fueled by a passion for continuous learning and
        self-improvement. With diverse interests, I thrive on exploring various
        aspects of life, whether it's delving into technology trends, honing my
        track skills, or expanding my knowledge in the classroom; I approach
        each endeavor with enthusiasm and dedication, believing that every
        experience contributes to a richer perspective.
      </p>
      <p>
        My creative spirit is complemented by meticulous attention to detail,
        enabling me to grasp both the big picture and the finer points of each
        project, inspired by the potential to innovate and bring ideas to life,
        striving to surpass expectations and deliver excellence. At my core, I
        am passionate about embracing new challenges and continuously pushing
        boundaries, whether collaborating with others or embarking on solo
        adventures, committed to making a positive impact and leaving a lasting
        impression.
      </p>

      <p>
        Additionally, I provide users with a clear understanding of how to use
        technology by offering Software as a Service, acting as a middleman
        between the user and technology with the latest tools and animations.
      </p>
    </div>
  );
}
function Part2() {
  return (
    <div className="Part2Aboutme">
      <div className="IndentAbout">
        <h1 className="ABTtitle ABTH1">ABOUT ME</h1>
        <div className="ABCCCnT">
          <div className="ABpic">
            {/* <img className="ABIMG" src={profile} alt="" /> */}
            <Avatar
              alt="Remy Sharp"
              src={profile}
              sx={{ width: 195, height: 195 }}
            />
          </div>
          <div className="ABcontee">
            <div className="ABnotification">
              <div className="ABnotiglow" />
              <div className="ABnotiborderglow" />
              <div className="ABnotititle"></div>
              <div className="ABnotibody">
                <div className="ABcont">
                  <AccountCircle />
                  <p>AYUSH YOGANAND MISHRA</p>
                </div>
                <div className="ABcont">
                  <Cake />
                  <p>30.SEP.2002</p>
                </div>
                <div className="ABcont">
                  <LocationOn />
                  <p>AIR FORCE STATION CHABUA, DIBRUGARH, ASSAM</p>
                </div>
                <div className="ABcont">
                  <AttachEmail />
                  <p>msdakm3334@gmail.com, speedcuberayush@gmail.com</p>
                </div>
                <div className="ABcont">
                  <PhoneAndroid />
                  <p>+91 - 9724132257</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Part5() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
      }}
    >
      <h1 className="SkH">SKILLS</h1>

      <Skills />
    </div>
  );
}
