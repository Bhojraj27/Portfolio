import React, { useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import Lightbox from "lightbox2";
import "lightbox2/dist/css/lightbox.min.css";
import "lightbox2/dist/js/lightbox.js";

const useStyles = makeStyles((theme) => ({
  portfolioArea: {
    paddingTop: "90px",
  },
  portfolioItem: {
    marginBottom: "52px",
  },
  lastPortfolioItem: {
    marginBottom: "0",
  },
  portfolioItemInner: {
    height: "390px",
    overflow: "hidden",
    borderRadius: "13px",
    position: "relative",
    marginBottom: "30px",
    [theme.breakpoints.down("xs")]: {
      height:"100%",
    }
  },
  portfolioFull: {
    height: "410px",
  },
  portfolioItemImage: {
    display: "block",
    width: "100% !important",
    height: "100% !important",
    objectFit: "cover",
  },
  portfolioCategories: {
    position: "absolute",
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    alignItems: "center",
    bottom: "20px",
    left: "20px",
  },
  portfolioCategoriesLink: {
    display: "block",
    fontSize: "14px",
    background: "#fff",
    color: "#000",
    padding: "7px 20px",
    borderRadius: "19px",
    transition: ".3s",
    "&:hover": {
      background: "#1f1f1f",
      color: "#fff",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0px 10px",
    fontSize: "10px",
    }
  },
  portfolioItemTitle: {
    fontSize: "24px",
    fontWeight: "300",
    margin: "0",
    [theme.breakpoints.down("xs")]: {
      fontSize: "21px",
    },
    "& a": {
      color: "#fff",
      display: "inline-block",
      borderBottom: "1px solid transparent",
      transition: ".3s",
      "&:hover": {
        borderColor: "#ffffff",
      },
    },
  },
  customContainer: {
    maxWidth: 1130,
    padding: "0 15px",
    margin: "auto",
  },
  subtitle: {
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
  subtitleIcon: {
    marginBottom: 1,
    fontSize: 14,
    marginRight: 10,
  },

  sectionHeader: {
    marginBottom: "53px",
    "& h1": {
      color: "#fff",
      fontSize: 48,
      fontWeight: 300,
      fontFamily: "Inter",
      marginBottom: "33px",
      
      "& span": {
        color: "var(--primary_color)",
        marginLeft:"20px"
      },
     
    [theme.breakpoints.down("xs")]: {
      fontSize:"38px"
    },
  
    },
  },
  ContentWidth: {
    maxWidth: 770,
    width: "100%",
    marginLeft: "auto",
    [theme.breakpoints.down("xs")]: {
 
      maxWidth: "475px",
    },
   
    
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
}));

export default function Portfolio() {
  const classes = useStyles();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    Lightbox.option({
      resizeDuration: 200,
      fadeDuration: 600,
      imageFadeDuration: 600,
      wrapAround: true,
    });
  }, []);

  return (
 <Container>
    <section className={`${classes.portfolioArea} page-section`} id="portfolio">
      <div className={classes.customContainer}>
        <div className={classes.ContentWidth}>
          <div>
            <Typography className={classes.subtitle} data-aos="fade-up">
              <i className={`las la-grip-vertical ${classes.subTitleIcon}`}></i>{" "}
              Portfolio
            </Typography>
            <div className={classes.sectionHeader}>
              <Typography variant="h1" data-aos="fade-up">
                Featured<span>Projects</span>
              </Typography>
            </div>
          </div>
          <Grid container spacing={3} className={`${classes.portfolioItems}`}>
            <Grid item xs={12} sm={12} md={12} lg={12} data-aos="fade-up">
              <div
                className={`${classes.portfolioItem} ${classes.portfolioFull}`}
              >
                <div className={`${classes.portfolioItemInner}`}>
                  <a href="images/projects/project11.png"  data-lightbox="example-1">
                    <img
                      src="images/projects/project11.png"
                      alt="Portfolio"
                      className={classes.portfolioItemImage}
                    />
                  </a>

                  <ul className={`${classes.portfolioCategories}`}>
                    <li>
                      <a
                        href="https://www.react.com"
                        className={classes.portfolioCategoriesLink}
                      >
                        React
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.html5.com"
                        className={classes.portfolioCategoriesLink}
                      >
                        Html
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.css.com"
                        className={classes.portfolioCategoriesLink}
                      >
                        Css
                      </a>
                    </li>
                  </ul>
                </div>
                <h2 className={classes.portfolioItemTitle}>
                  <a href="https://www.Bureau - Architecture Studio Website.com">
                    Personal - Portfolio Website
                  </a>
                </h2>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}  data-aos="fade-right">
              <div className={`${classes.portfolioItem}`}>
                <div className={`${classes.portfolioItemInner}`}>
                  <a href="images/projects/project22.png" data-lightbox="example-1">
                    <img
                      src="images/projects/project22.png"
                      alt="Portfolio"
                      className={classes.portfolioItemImage}
                    />
                  </a>

                  <ul className={`${classes.portfolioCategories}`}>
                    <li>
                      <a
                        href="https://www.wordpress.com"
                        className={classes.portfolioCategoriesLink}
                      >
                        WordPress
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.larevel.com"
                        className={classes.portfolioCategoriesLink}
                      >
                        Laravel/PHP
                      </a>
                    </li>
                  </ul>
                </div>
                <h2 className={classes.portfolioItemTitle}>
                  <a href="https://bhojrajchavan-portfolio.netlify.app/">
                  Personal - Portfolio Website 2</a>
                </h2>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} data-aos="fade-left">
              <div className={`${classes.portfolioItem}`}>
                <div className={`${classes.portfolioItemInner}`}>
                  <a href="images/projects/project33.png" data-lightbox="example-1">
                    <img
                      src="images/projects/project33.png"
                      alt="Portfolio"
                      className={classes.portfolioItemImage}
                    />
                  </a>

                  <ul className={`${classes.portfolioCategories}`}>
                    <li>
                      <a
                        href="https://www.figma.com"
                        className={classes.portfolioCategoriesLink}
                      >
                        React JS
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.webflow.com"
                        className={classes.portfolioCategoriesLink}
                      >
                        Material UI 4
                      </a>
                    </li>
                  </ul>
                </div>
                <h2 className={classes.portfolioItemTitle}>
                  <a href="https://frolicking-choux-55b922.netlify.app/">
                  Landing Page
                  </a>
                </h2>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} data-aos="fade-up">
              <div className={`${classes.portfolioItem}`}>
                <div className={`${classes.portfolioItemInner}`}>
                  <a href="images/projects/project44.png" data-lightbox="example-1">
                    <img
                      src="images/projects/project44.png"
                      alt="Portfolio"
                      className={classes.portfolioItemImage}
                    />
                  </a>

                  <ul className={`${classes.portfolioCategories}`}>
                    <li>
                      <a
                        href="https://www.figma.com"
                        className={classes.portfolioCategoriesLink}
                      >
                        React JS
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.materialui.com"
                        className={classes.portfolioCategoriesLink}
                      >
                        Material UI
                      </a>
                    </li>
                  </ul>
                </div>
                <h2 className={classes.portfolioItemTitle}>
                  <a href="/">
                    JeffMusic Therapy -Admin Panel
                  </a>
                </h2>
              </div>
            </Grid>

            {/* <Grid item xs={12} sm={12} md={12} lg={12} data-aos="fade-up">
              <div className={`${classes.portfolioItem}`}>
                <div className={`${classes.portfolioItemInner}`}>
                  <a href="images/portfolio5.jpg" data-lightbox="example-1">
                    <img
                      src="images/portfolio5.jpg"
                      alt="Portfolio"
                      className={classes.portfolioItemImage}
                    />
                  </a>

                  <ul className={`${classes.portfolioCategories}`}>
                    <li>
                      <a
                        href="https://www.framer.com"
                        className={classes.portfolioCategoriesLink}
                      >
                        Framer
                      </a>
                    </li>
                  </ul>
                </div>
                <h2 className={classes.portfolioItemTitle}>
                  <a href="https://www.lewis.com">
                    Lewis Portfolio Framer Template
                  </a>
                </h2>
              </div>
            </Grid> */}
          </Grid>
        </div>
      </div>
    </section>
    </Container>
    
  );
}
