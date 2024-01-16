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
  '@media (max-width: 768px)':{
    maxWidth:"748px",
    left:"10px",
    right:"10px",},
     [theme.breakpoints.down("xs")]: {
width:"100%"
  },
       '@media (min-width: 1440px)': {
        marginLeft:"234px",
        maxWidth:"880px",
      },
  },
  h1: {
    color: "#fff",
    fontSize: 48,
    fontWeight: 300,
    marginBottom: 33,
    fontFamily: "Inter",
    [theme.breakpoints.down("xs")]: {
      fontSize: "38px !important",
    },
  },
  subTitle: {
    color: " #fff",
    border: "1px solid #565656",
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
    fontFamily:"Inter !important"
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
        <div className={`${classes.aboutContent} ${classes.ContentWidth}`}>
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
              Every great design begins with <br />
              an even <span className={classes.span}>better story</span>
            </Typography>
          </div>
          <Typography className={classes.p} data-aos="fade-up">
          I'm the kind of person who approaches life with a positive outlook. I find joy in a multitude of things – reading, writing, deep thinking, and letting my imagination run wild. I'm equally fond of engaging in conversations and being a good listener.
Life, for me, is a canvas, and I'm here to paint it with vibrant experiences and endless curiosity. I hope the impression I have of myself aligns with the one you're forming as you read this. Thanks for stopping by!
          </Typography>
        </div>
      </div>
    </section>
 </Container>
  );
}
