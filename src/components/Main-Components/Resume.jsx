import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  resumeArea: {
    paddingTop: "90px",
    paddingBottom: "90px",
  },
  resumeContent: {
    "& .resume-timeline .item": {
      paddingBottom: 68,
      paddingLeft: "74px",
      position: "relative",
      "&:last-child": {
        paddingBottom: 0,
        "&:after": {
          height: "calc(100% - 10px)",
        },
      },
      "&:after": {
        background: "#333",
        content: '""',
        height: "100%",
        left: 0,
        position: "absolute",
        top: 10,
        width: 1,
        zIndex: -1,
      },
      "&:before": {
        background: "#656565",
        borderRadius: "50%",
        content: '""',
        height: 12,
        left: -6,
        position: "absolute",
        top: 7,
        transition: "0.3s",
        width: 12,
      },
      "& .date": {
        display: "block",
        marginBottom: 28,
        transition: "0.3s",
      },
      "& h2": {
        color: "#fff",
        fontSize: "24px",
        fontWeight: 300,
        marginBottom: 5,
        [theme.breakpoints.down("xs")]: {
          fontSize:"21px"
        },
  
      },
      "& h2 a": {
        color: "#fff",
        display: "block",
      },
      "& p": {
        color: "#999",
        fontSize: 13,
        marginBottom: 18,
        "&:last-child": {
          marginBottom: 0,
        },
      },
      "&:hover": {
        "&:before": {
          background: "# 28e98c",
        },
        "& .date": {
          color: "# 28e98c",
        },
      },
    },
  },
  ContentWidth: {
    maxWidth: "770px",
    width: "100%",
    marginLeft: "auto",
    [theme.breakpoints.down("md")]: {
      display: "block",
      left: 0,
      margin: "20px auto auto",
      maxWidth: "767px",
      position: "relative",
      top: 0,
      transform: "translateY(0)",
    },
       '@media (min-width: 1440px)': {
        marginLeft:"234px",
        maxWidth:"880px",
      },
     
  }, customContainer: {
        margin: 'auto',
        maxWidth: '1130px',
        padding: '0 15px',
        [theme.breakpoints.down("xs")]: {
            maxWidth:"none"
        },
    },
   
  h1: {
    color: "#fff",
    fontSize: 48,
    fontWeight: 300,
    marginBottom: 33,
    fontFamily: "Inter",
    [theme.breakpoints.down("xs")]: {
      fontSize:"38px !important"
    },
   
  },
  subTitle: {
    fontFamily:"Inter !important",
    color: "#fff",
    border: "1px solid #565656",
    margin: "0 0 53px",
    display: "inline-flex",
    padding: "9px 20px",
    fontSize: "12px",
    alignItems: "center",
    fontWeight: 300,
    borderRadius: "30px",
    textTransform: "uppercase",
  },
  subTitleIcon: {
    fontSize: 14,
    marginBottom: 1,
    marginRight: 10,
  },
  span: {
    color: "var(--primary_color)",
  },

  pageSection: {
    overflow: "hidden",
  },
}));

export default function Resume() {
  const classes = useStyles();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
  <Container>
      <section
      className={`${classes.resumeArea} page-section`}
      id="resume"
    >
      <div className={classes.customContainer}>
        <div
          className={`${classes.resumeContent} resume-content ${classes.ContentWidth}`}
        >
          <div className={`section-header ${classes.contentWidth}`}>
            <Typography className={classes.subTitle} data-aos="fade-up">
              <i className={`las la-briefcase ${classes.subTitleIcon}`}></i>{" "}
              Resume
            </Typography>
            <Typography className={classes.h1} data-aos="fade-up">
              Education &amp; <span className={classes.span}>Experience</span>
            </Typography>
          </div>

          <div className="resume-timeline">
            <div className={`item scroll-animation`} data-aos="fade-right">
              <span className={`${classes.span} date`}>April 2024 - Present</span>
              <h2>Sr. Software Developer</h2>
              <p>Walstar Technologies</p>
              <h2>Bynaus SaaS Platform</h2>
              <p>Lead full-stack development for 500+ users, integrated OpenAI, Google Gemini, LiteLLM, and Ragie, and built GPS workforce, cron, and PDF vector workflows.</p>
            </div>
            <div className={`item scroll-animation`} data-aos="fade-left">
              <span className={`${classes.span} date`}>March 2023 - October 2023</span>
              <h2>Software Developer Trainee</h2>
              <p>Mobiloitte Technologies</p>
              <h2>React.js Development</h2>
              <p>Built React interfaces, integrated RESTful APIs, contributed to sprint planning, and introduced shared UI component libraries.</p>
            </div>
            <div className={`item scroll-animation`} data-aos="fade-right">
              <span className={`${classes.span} date`}>2020 - 2023</span>
              <h2>Bachelors of Engineering </h2>
              <p>Computer Engineering</p>
              <h2>College</h2>
              <p>Dr D Y Patil College, Pune</p>
              <h2>Percentage</h2>
              <p>78.44%</p>
            </div>
            <div className={`item scroll-animation`} data-aos="fade-left">
              <span className={`${classes.span} date`}>2017 - 2020</span>
              <h2>Diploma </h2>
                <p>Computer Engineering</p>
              <h2>College</h2>
              <p>Sharad Institute, Ichalkaranji</p>
              <h2>Percentage</h2>
                <p>85.94%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Container>
  );
}
