import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import "lightbox2/dist/css/lightbox.min.css";
import "lightbox2/dist/js/lightbox.js";
const useStyles = makeStyles((theme) => ({
  customContainer: {
    maxWidth: "1130px",
    padding: "0 15px",
    margin: "auto",
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
       '@media (min-width: 1440px)': {
        marginLeft:"234px",
        maxWidth:"880px",
      },
      '@media (min-width: 2560px)': {
        maxWidth:"2000px",
        alignItems:"center",
    },
  },
  clientsLogos: {
    paddingTop: "100px",
  },
  scrollAnimation: {
    animationDuration: "1s", // Adjust the animation duration as needed
  },
  logoContainer: {
    marginBottom: "74px",
    "& img": {
      display: "block",
      opacity: 0.3,
      transition: "0.3s",
    },
    "& img:hover": {
      opacity: 1,
    },
  },
  h4: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: "14px",
    fontWeight: 300,
    marginBottom: "57px",
  },
}));

export default function ClientLogos() {
  const classes = useStyles();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container>
      <div className={classes.customContainer}>
        <div className={classes.ContentWidth}>
          <div className={classes.clientsLogos}>
            <h4 className={classes.h4} data-aos="fade-up">
              Certifications
            </h4>
            <Grid container spacing={3}>
              <Grid
                item
                xs={4}
                sm={3}
                md={3}
                lg={3}
                className={classes.scrollAnimation}
                data-aos="fade-right"
              >
                <div className={classes.logoContainer}>
                <a href="images/certifications/7.jpg" data-lightbox="example-1">
                  <img src="images/certifications/7.jpg" alt="Client" />
                  </a>
                </div>
              </Grid>
              <Grid
                item
                xs={4}
                sm={3}
                md={3}
                lg={3}
                className={classes.scrollAnimation}
                data-aos="fade-up"
              >
                <div className={classes.logoContainer}>
                <a href="images/certifications/3.jpg" data-lightbox="example-1">
                  <img src="images/certifications/3.png" alt="Client"  />
                  </a>
                </div>
              </Grid>
              <Grid
                item
                xs={4}
                sm={3}
                md={3}
                lg={3}
                className={classes.scrollAnimation}
                data-aos="fade-down"
              >
                <div className={classes.logoContainer}>
                <a href="images/certifications/2.png" data-lightbox="example-1">
                  <img src="images/certifications/2.png" alt="Client"/>
                  </a>
                </div>
              </Grid>
              <Grid
                item
                xs={4}
                sm={3}
                md={3}
                lg={3}
                className={classes.scrollAnimation}
                data-aos="fade-left"
              >
                <div className={classes.logoContainer}>
                <a href="images/certifications/1.jpg" data-lightbox="example-1">
                  <img src="images/certifications/1.jpg" alt="Client"  />
                  </a>
                </div>
              </Grid>
              <Grid
                item
                xs={4}
                sm={3}
                md={3}
                lg={3}
                className={classes.scrollAnimation}
                data-aos="fade-right"
              >
                <div className={classes.logoContainer}>
                <a href="images/certifications/4.png" data-lightbox="example-1">
                  <img src="images/certifications/4.png" alt="Client" />
                  </a>
                </div>
              </Grid>
              <Grid
                item
                xs={4}
                sm={3}
                md={3}
                lg={3}
                className={classes.scrollAnimation}
                data-aos="fade-up"
              >
                <div className={classes.logoContainer}>
                <a href="images/certifications/5.jpg" data-lightbox="example-1">
                  <img src="images/certifications/5.jpg" alt="Client"/>
                  </a>
                </div>
              </Grid>
              <Grid
                item
                xs={4}
                sm={3}
                md={3}
                lg={3}
                className={classes.scrollAnimation}
                data-aos="fade-down"
              >
                <div className={classes.logoContainer}>
                <a href="images/certifications/6.jpg" data-lightbox="example-1">
                  <img src="images/certifications/6.jpg" alt="Client"/>
                  </a>
                </div>
              </Grid>
              <Grid
                item
                xs={4}
                sm={3}
                md={3}
                lg={3}
                className={classes.scrollAnimation}
                data-aos="fade-left"
              >
                <div className={classes.logoContainer}>
                <a href="images/certifications/7.jpg" data-lightbox="example-1">
                  <img src="images/certifications/7.jpg" alt="Client"/>
                  </a>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Container>
  );
}
