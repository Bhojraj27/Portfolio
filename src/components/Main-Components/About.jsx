import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
    "@media (max-width: 768px)": {
      maxWidth: "748px",
      left: "10px",
      right: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    "@media (min-width: 1440px)": {
      marginLeft: "234px",
      maxWidth: "880px",
    },
  },
  aboutCard: {
    border: "1px solid var(--line)",
    borderRadius: 28,
    background: "linear-gradient(145deg, var(--surface), var(--surface-muted))",
    boxShadow: "var(--panel_shadow)",
    padding: "38px 40px",
    backdropFilter: "blur(18px)",
    [theme.breakpoints.down("xs")]: {
      padding: "28px 24px",
    },
  },
  h1: {
    color: "var(--text)",
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: 300,
    marginBottom: 33,
    fontFamily: "Inter",
    [theme.breakpoints.down("xs")]: {
      fontSize: "32px !important",
    },
  },
  subTitle: {
    color: "var(--text)",
    border: "1px solid var(--line-strong)",
    margin: "0 0 53px",
    display: "inline-flex",
    padding: "9px 20px",
    fontSize: "12px",
    alignItems: "center",
    fontWeight: 300,
    borderRadius: " 30px",
    textTransform: "uppercase",
    fontFamily:"Inter !important"
  },
  
  subTitleIcon: {
    fontSize: 14,
    marginBottom: 1,
    marginRight: 10,
  },
  span: {
    color: "var(--primary_color)",
  },

  customContainer: {
    margin: "auto",
    maxWidth: "1130px",
    padding: "0 15px",
    [theme.breakpoints.down("xs")]: {
      maxwidth: "375px",
  },
  },
  aboutArea: {
    paddingBottom: " 90px",
  },
  p: {
    lineHeight: "30px",
    color: "var(--muted)",
    fontFamily: "Inter !important",
  },
}));

export default function About() {
  const classes = useStyles();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
 <Container>
     <section className={classes.aboutArea} id="about">
      <div className={classes.customContainer}>
        <div className={`${classes.aboutContent} ${classes.ContentWidth} ${classes.aboutCard}`}>
          <div>
            <Typography
              variant="h4"
              component="h4"
              className={classes.subTitle}
              data-aos="fade-up"
            >
              <i className={`${classes.subTitleIcon} lar la-user`}></i> About
            </Typography>
            <Typography variant="h1" className={classes.h1} data-aos="fade-up">
              Building scalable products with <br />
              a strong <span className={classes.span}>engineering story</span>
            </Typography>
          </div>
          <Typography className={classes.p} data-aos="fade-up">
            Senior Full Stack Developer with expertise in architecting and delivering
            high-performance SaaS web applications. I build scalable React.js PWAs,
            engineer robust Node.js and Express backend systems, and integrate complex
            third-party APIs including Auth0, Stripe, OpenAI, and Gemini.
          </Typography>
        </div>
      </div>
    </section>
 </Container>
  );
}
