import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  skillsArea: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  customContainer: {
    maxWidth: 1130,
    padding: "0 15px",
    margin: "auto",

  },
  subtitle: {
    color: " #fff",
    fontFamily: "Inter !important",
    border: "1px solid #565656",
    margin: "0 0 53px",
    display: "inline-flex",
    padding: "9px 20px",
    fontSize: "12px",
    alignItems: "center",
    fontWeight: 300,
    borderRadius: " 30px",
    textTransform: "uppercase",
  },
  subtitleIcon: {
    marginBottom: 1,
    fontSize: 14,
    marginRight: 10,
  },
  skillsContent: {
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
      marginLeft: "234px",
      maxWidth: "880px",
    },
    '@media (min-width: 2560px)': {
      maxWidth: "2000px",
      alignItems: "center",
    },
  },
  skill: {
    marginBottom: 50,
  },
  skillInner: {
    border: "2px solid #565656",
    borderRadius: 85,
    padding: "54px 0 48px 0",
    marginBottom: 20,
    transition: ".3s",
    "&:hover": {
      borderColor: "var(--primary_color)",
    },
  },
  skillImage: {
    display: "block",
    width:70,
    margin: "auto auto 29px auto",
  },
  skillPercent: {
    fontSize: 30,
    color: "var(--primary_color)",
    fontWeight: 300,
    margin: 0,
    textAlign: "center",
  },
  skillName: {
    fontSize: 14,
    color: "#fff",
    margin: 0,
    textAlign: "center",
  },
  h1: {

    color: '#fff',
    fontSize: 48,
    fontWeight: 300,
    marginBottom: 33,
    fontFamily: 'Inter',
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      fontSize: "38px !important",
    },

    "& span": {
      color: "var(--primary_color)",
      marginLeft: "10px",
    },

  },
}));

export default function Skills() {
  const classes = useStyles();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container>
      <section className={classes.skillsArea} id="skills">
        <Container className={classes.customContainer}>
          <div className={classes.skillsContent}>
            <div>
              <Typography className={classes.subtitle} data-aos="fade-up">
                <i className={classes.subtitleIcon + " las la-shapes"}></i> my
                skills
              </Typography>
              <div >
                <Typography className={`scroll-animation ${classes.h1}`} data-aos="fade-up">
                  My <span className={classes.span}>Advantages</span>
                </Typography>
              </div>
            </div>
            <Grid container spacing={3}>
              <Grid item xs={4} md={6} lg={3} xl={3} data-aos="fade-right" >
                <div className={classes.skill}>
                  <Box className={classes.skillInner}>
                    <img
                      src="images/html.png"
                      alt="Figma"
                      className={classes.skillImage}
                    />
                    <Typography variant="h1" className={classes.skillPercent}>
                      70%
                    </Typography>
                  </Box>
                  <Typography className={classes.skillName}>HTML</Typography>
                </div>
              </Grid>
              <Grid item xs={4} md={6} lg={3} xl={3} data-aos="fade-up">
                <div className={classes.skill}>
                  <Box className={classes.skillInner}>
                    <img
                      src="images/Css.png"
                      alt="Figma"
                      className={classes.skillImage}
                    />
                    <Typography variant="h1" className={classes.skillPercent}>
                      65%
                    </Typography>
                  </Box>
                  <Typography className={classes.skillName}>CSS</Typography>
                </div>
              </Grid>
              <Grid item xs={4} md={6} lg={3} xl={3} data-aos="fade-down">
                <div className={classes.skill}>
                  <Box className={classes.skillInner}>
                    <img
                      src="images/Javasscript.png"
                      alt="Figma"
                      className={classes.skillImage}
                    />
                    <Typography variant="h1" className={classes.skillPercent}>
                      60%
                    </Typography>
                  </Box>
                  <Typography className={classes.skillName}>Javascript</Typography>
                </div>
              </Grid>
              <Grid item xs={4} md={6} lg={3} xl={3} data-aos="fade-left">
                <div className={classes.skill}>
                  <Box className={classes.skillInner}>
                    <img
                      src="images/react.png"
                      alt="Figma"
                      className={classes.skillImage}
                    />
                    <Typography variant="h1" className={classes.skillPercent}>
                      70%
                    </Typography>
                  </Box>
                  <Typography className={classes.skillName}>React</Typography>
                </div>
              </Grid>
              <Grid item xs={4} md={6} lg={3} xl={3} data-aos="fade-right" >
                <div className={classes.skill}>
                  <Box className={classes.skillInner}>
                    <img
                      src="images/Bootstrap.png"
                      alt="Figma"
                      className={classes.skillImage}
                    />
                    <Typography variant="h1" className={classes.skillPercent}>
                      65%
                    </Typography>
                  </Box>
                  <Typography className={classes.skillName}>Bootstrap</Typography>
                </div>
              </Grid>
              <Grid item xs={4} md={6} lg={3} xl={3} data-aos="fade-up">
                <div className={classes.skill}>
                  <Box className={classes.skillInner}>
                    <img
                      src="images/nodejs.png"
                      alt="Figma"
                      className={classes.skillImage}
                    />
                    <Typography variant="h1" className={classes.skillPercent}>
                      70%
                    </Typography>
                  </Box>
                  <Typography className={classes.skillName}>
                    Node JS
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
    </Container>
  );
}
