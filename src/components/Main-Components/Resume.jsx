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
      padding: "28px 28px 28px 74px",
      position: "relative",
      border: "1px solid var(--line)",
      borderRadius: 24,
      background: "linear-gradient(145deg, var(--surface), var(--surface-muted))",
      marginBottom: 18,
      transition: "all .3s ease",
      "&:last-child": {
        marginBottom: 0,
        "&:after": {
          height: "calc(100% - 10px)",
        },
      },
      "&:after": {
        background: "var(--line-strong)",
        content: '""',
        height: "100%",
        left: 30,
        position: "absolute",
        top: 10,
        width: 1,
        zIndex: -1,
      },
      "&:before": {
        background: "var(--muted-strong)",
        borderRadius: "50%",
        content: '""',
        height: 12,
        left: 24,
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
        color: "var(--text)",
        fontSize: "24px",
        fontWeight: 300,
        marginBottom: 5,
        [theme.breakpoints.down("xs")]: {
          fontSize:"21px"
        },
  
      },
      "& h2 a": {
        color: "var(--text)",
        display: "block",
      },
      "& p": {
        color: "var(--muted)",
        fontSize: 13,
        marginBottom: 18,
        "&:last-child": {
          marginBottom: 0,
        },
      },
      "&:hover": {
        transform: "translateY(-4px)",
        borderColor: "rgba(40,233,140,0.34)",
        boxShadow: "var(--panel_shadow)",
        "&:before": {
          background: "var(--primary_color)",
        },
        "& .date": {
          color: "var(--primary_color)",
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
    color: "var(--text)",
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: 300,
    marginBottom: 33,
    fontFamily: "Inter",
    [theme.breakpoints.down("xs")]: {
      fontSize:"38px !important"
    },
   
  },
  subTitle: {
    fontFamily:"Inter !important",
    color: "var(--text)",
    border: "1px solid var(--line-strong)",
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
              <h2>Bynaus AI</h2>
              <p>Lead full-stack development for 500+ users, integrated OpenAI, Google Gemini, LiteLLM, and Ragie, and built GPS workforce, cron, and PDF vector workflows.</p>
              <h2>YAU TeamUp</h2>
              <p>Worked on the multi-portal sports management platform with modern React-based interfaces and product workflows.</p>
            </div>
            <div className={`item scroll-animation`} data-aos="fade-left">
              <span className={`${classes.span} date`}>March 2023 - October 2023</span>
              <h2>Software Developer Trainee</h2>
              <p>Mobiloitte Technologies</p>
              <h2>Jeff Music Therapy Admin Panel</h2>
              <p>Built React interfaces, integrated RESTful APIs, contributed to sprint planning, and helped create shared UI component libraries.</p>
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
