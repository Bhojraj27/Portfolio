import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

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

  h1: {
    fontSize: "78px",
    fontWeight: 300,
    letterSpacing: "-.2px",
    lineHeight: "90px",
    marginBottom: "43px",
    fontFamily: "Inter",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: "50px",
      lineHeight: "70px",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "50px",
    },
  },
  span: {
    color: "var(--primary_color)",

  },
  p: {
    marginBottom: 31,
    maxWidth: 480,
    fontFamily: "Inter",
  },

  goToPropsBtn: {
    alignItems: "center",
    border: "1px solid #575757",
    borderRadius: "50%",
    display: "flex",
    height: 175,
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: 15,
    overflow: "hidden",
    position: "relative",
    width: 175,
  },
  rotatingImg: {
    animation: "$rotating 6s linear infinite",
    display: "block",
  },
  icon: {
    color: "#fff",
    display: "block",
    fontSize: 40,
    position: "absolute",
  },
  facts: {
    gap: 100,
    marginTop: 55,
    display: "flex",
    marginBottom: "90px",
    [theme.breakpoints.down("sm")]: {
      gap: 60,
    },
  },
  factsH1: {
    color: "var(--primary_color)",
    fontSize: 72,
    lineHeight: "56px",
    fontWeight: 300,
    marginBottom: 38,
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
  },
  subTitle: {
    alignItems: "center",
    border: "1px solid #565656",
    color: "#fff",
    display: "inline-flex",
    fontSize: "12px",
    fontWeight: 300,
    margin: "0 0 53px",
    padding: "9px 20px",
    textTransform: "uppercase",
    borderRadius: "30px",
    fontFamily: "Inter !important",
  },
  subTitleIcon: {
    fontSize: 14,
    marginBottom: 1,
    marginRight: 10,
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
        <div className={`${classes.heroContent}${classes.heroContent1} page-section`}>
          <div className={`${classes.ContentWidth}`}>
              <div>
                <Typography className={classes.subTitle} data-aos="fade-up">
                  <i className={`${classes.subTitleIcon} las la-home`}></i>{" "}
                  Introduce
                </Typography>

                <Typography className={classes.h1} data-aos="fade-up">
                  Say Hi from <span className={classes.span}>Bhojraj</span>,
                  Frontend Developer
                </Typography>
              </div>
              <Typography
                variant="p"
                component="p"
                className={classes.p}
                data-aos="fade-up"
              >
                I design and code beautifully simple things and I love what I
                do. Just simple like that!
              </Typography>
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
                  <h1 className={classes.factsH1}>6+</h1>
                  <p className={classes.factsP}>
                    Months Of <br></br>
                    Experience
                  </p>
                </div>
                <div className="right " data-aos="fade-left">
                  <h1 className={classes.factsH1}>4+</h1>
                  <p className={classes.factsP}>
                    projects completed on <br />
                   FrontEnd Development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Container>
  );
}
