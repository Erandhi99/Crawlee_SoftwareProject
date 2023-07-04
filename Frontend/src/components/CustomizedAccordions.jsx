import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { SubmitButton } from "../styles/pageStyles/CreateCourseStyles";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions({
  topic,
  description,
  disable,
  video,
  courseId,
  toggle,
  setToggle,
  buttonVisibility,
  isFinalStage,
}) {
  const [expanded, setExpanded] = React.useState("");
  const { user } = React.useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleClick = () => {
    axios
      .get(`http://localhost:8800/api/users/${user._id}`)
      .then(({ data }) => {
        for (let index = 0; index < data.enrolledCourses.length; index++) {
          if (data.enrolledCourses[index].courseId == courseId) {
            console.log("Found");
            data.enrolledCourses[index].progress =
              parseInt(data.enrolledCourses[index].progress) + 1;
            console.log("Updated Object", data);

            axios
              .put(`http://localhost:8800/api/users/${user._id}`, data)
              .then(({ response }) => {
                setToggle(!toggle);
                return;
              })
              .catch((e) => {
                console.log(e);
                return;
              });
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleFinish = () => {
    axios
      .get(`http://localhost:8800/api/users/${user._id}`)
      .then(({ data }) => {
        for (let index = 0; index < data.enrolledCourses.length; index++) {
          if (data.enrolledCourses[index].courseId == courseId) {
            console.log("Found");
            data.enrolledCourses[index].progress =
              parseInt(data.enrolledCourses[index].progress) + 1;
            data.enrolledCourses[index].status = "Complete";

            console.log("Updated Object", data);

            axios
              .put(`http://localhost:8800/api/users/${user._id}`, data)
              .then(({ response }) => {
                setToggle(!toggle);
                navigate("/dashboard");
                return;
              })
              .catch((e) => {
                console.log(e);
                return;
              });
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={{ backgroundColor: "white" }}
        disabled={disable}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{ color: "black" }} variant="h6">
            {topic}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: "black" }}>{description}</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <video
            width="640"
            height="480"
            controls
            style={{ borderRadius: "10px" }}
          >
            <source src={video} type="video/mp4" />
          </video>
        </AccordionDetails>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "0px 40px",
          }}
        >
          {isFinalStage ? (
            <SubmitButton hidden={buttonVisibility} onClick={handleFinish}>
              Finish
            </SubmitButton>
          ) : (
            <SubmitButton hidden={buttonVisibility} onClick={handleClick}>
              Next
            </SubmitButton>
          )}
        </div>
      </Accordion>
    </div>
  );
}
