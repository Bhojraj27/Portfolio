import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  bodyOverlay: {
    height: "100%",
    left: "0",
    objectFit: "cover",
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: "-1",
  },
  pageSection: {
    overflow: "hidden",
  },
  heroContent: {
    position: "relative",
    zIndex: 3,
  },
  heroShell: {
    minHeight: "calc(100vh - 80px)",
    position: "relative",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      minHeight: "auto",
    },
  },
  heroPanel: {
    position: "relative",
    zIndex: 3,
    maxWidth: 610,
    padding: "28px 0",
  },
  heroEyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    color: "var(--text-soft)",
    fontSize: 13,
    marginBottom: 18,
    fontFamily: "Inter",
    "&:before": {
      content: '""',
      width: 34,
      height: 1,
      background: "var(--primary_color)",
    },
  },

  h1: {
    fontSize: "clamp(2.6rem, 4.8vw, 4.45rem)",
    fontWeight: 300,
    letterSpacing: 0,
    lineHeight: 1.08,
    marginBottom: "26px",
    fontFamily: "Inter",
    color: "var(--text)",
    [theme.breakpoints.down("xs")]: {
      fontSize: "clamp(2rem, 10vw, 2.75rem)",
    },
  },
  span: {
    color: "var(--primary_color)",

  },
  p: {
    marginBottom: 24,
    maxWidth: 480,
    fontFamily: "Inter",
    color: "var(--muted)",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: 14,
    alignItems: "center",
    marginBottom: 18,
  },
  primaryAction: {
    background: "var(--primary_color)",
    border: "1px solid var(--primary_color)",
    borderRadius: 999,
    color: "var(--button-text)",
    fontFamily: "Inter",
    fontSize: 13,
    letterSpacing: 0,
    padding: "12px 22px",
    textTransform: "uppercase",
    transition: "all .25s ease",
    "&:hover": {
      background: "transparent",
      color: "var(--primary_color)",
    },
  },
  secondaryAction: {
    border: "1px solid var(--line-strong)",
    borderRadius: 999,
    color: "var(--text)",
    fontFamily: "Inter",
    fontSize: 13,
    letterSpacing: 0,
    padding: "12px 22px",
    textTransform: "uppercase",
    transition: "all .25s ease",
    "&:hover": {
      borderColor: "var(--primary_color)",
      color: "var(--primary_color)",
    },
  },

  goToPropsBtn: {
    alignItems: "center",
    border: "1px solid var(--line-strong)",
    borderRadius: "50%",
    display: "flex",
    bottom: 10,
    height: 132,
    justifyContent: "center",
    marginLeft: 0,
    marginRight: 0,
    overflow: "hidden",
    position: "absolute",
    right: 10,
    width: 132,
    transition: "all .3s ease",
    "&:hover": {
      borderColor: "var(--primary_color)",
      transform: "translateY(-4px)",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  rotatingImg: {
    animation: "$rotating 6s linear infinite",
    display: "block",
  },
  icon: {
    color: "var(--text)",
    display: "block",
    fontSize: 40,
    position: "absolute",
  },
  facts: {
    gap: 72,
    marginTop: 26,
    display: "flex",
    marginBottom: 0,
    [theme.breakpoints.down("sm")]: {
      gap: 60,
    },
    [theme.breakpoints.down("xs")]: {
      gap: 28,
      flexWrap: "wrap",
      marginBottom: "35px",
    },
  },
  factsH1: {
    color: "var(--primary_color)",
    fontSize: 58,
    lineHeight: "56px",
    fontWeight: 300,
    marginBottom: 22,
    fontFamily: "Inter",
    gap: 100,
    [theme.breakpoints.down("sm")]: {
      fontSize: "50px !important",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "50px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "50px",
    },
  },
  factsP: {
    fontSize: 14,
    lineHeight: "24px",
    textTransform: "uppercase",
    color: "var(--muted)",
  },
  subTitle: {
    alignItems: "center",
    border: "1px solid var(--line-strong)",
    color: "var(--text)",
    display: "inline-flex",
    fontSize: "12px",
    fontWeight: 300,
    margin: "0 0 24px",
    padding: "9px 20px",
    textTransform: "uppercase",
    borderRadius: "30px",
    fontFamily: "Inter !important",
  },
  subTitleIcon: {
    fontSize: 14,
    marginBottom: 1,
    marginRight: 10,
    color: "currentColor",
  },
  "@keyframes rotating": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },

  ContentWidth: {
    maxWidth: 770,
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

    "@media (min-width: 1440px)": {
      marginLeft: "234px",
      maxWidth: "880px",
    },
  },
  customContainer: {
    maxWidth: 1130,
    padding: "0 15px",
  },
  right: {
    display: "flex",
  },
}));

export default function Herosec() {
  const classes = useStyles();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container>
      <section className="hero-section">
        <Container className={classes.customContainer}>
          <div className={`${classes.heroShell} page-section`}>
            <div className={`${classes.heroContent} ${classes.ContentWidth}`}>
              <div className={classes.heroPanel}>
                <Typography className={classes.subTitle} data-aos="fade-up">
                  <HomeIcon className={classes.subTitleIcon} />{" "}
                  Introduce
                </Typography>

                <Typography className={classes.heroEyebrow} data-aos="fade-up">
                  React, Node.js, AI, SaaS systems
                </Typography>

                <Typography className={classes.h1} data-aos="fade-up">
                  Say Hi from <span className={classes.span}>Bhojraj</span>,
                  Senior Full Stack Developer
                </Typography>

                <Typography
                  variant="p"
                  component="p"
                  className={classes.p}
                  data-aos="fade-up"
                >
                  I architect high-performance SaaS applications with scalable React
                  frontends, robust Node.js backends, and practical AI integrations.
                </Typography>

                <div className={classes.actions} data-aos="fade-up">
                  <Button href="#portfolio" className={classes.primaryAction}>
                    View Projects
                  </Button>
                  <Button href="/pdf/bhojraj-chavan-resume.pdf" className={classes.secondaryAction}>
                    Download Resume
                  </Button>
                </div>

                <Button
                  href="#portfolio"
                  className={classes.goToPropsBtn}
                  data-aos="fade-up"
                >
                  <img
                    src="images/round-text.png"
                    alt="Rounded Text"
                    className={classes.rotatingImg}
                  />
                  <ArrowDownwardIcon className={classes.icon} />
                </Button>

                <div className={classes.facts}>
                  <div className="left" data-aos="fade-right">
                    <h1 className={classes.factsH1}>2+</h1>
                    <p className={classes.factsP}>
                      Years Of <br></br>
                      Experience
                    </p>
                  </div>
                  <div className="right " data-aos="fade-left">
                    <h1 className={classes.factsH1}>500+</h1>
                    <p className={classes.factsP}>
                      Users Served On <br />
                      SaaS Platforms
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Container>
  );
}
