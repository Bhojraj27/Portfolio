import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";

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
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "10px",
      maxWidth: "475px",
    },

    "@media (min-width: 1440px)": {
      marginLeft: "234px",
      maxWidth: "880px",
    },
    "@media (min-width: 2560px)": {
      maxWidth: "2000px",
      alignItems: "center",
    },
  },
  subtitle: {
    fontFamily: "Inter !important",
    fontSize: 12,
    color: "#ffffff",
    textTransform: "uppercase",
    fontWeight: 300,
    margin: 0,
    border: "1px solid #565656",
    padding: "9px 20px",
    borderRadius: 30,
    marginBottom: 53,
    display: "inline-flex",
    alignItems: "center",
  },
  subtitleIcon: {
    marginBottom: 1,
    fontSize: 14,
    marginRight: 10,
  },
  h1: {
    color: "#fff",
    fontSize: "48px",
    fontWeight: 300,
    marginBottom: 33,
    fontFamily: "Inter",
    [theme.breakpoints.down("xs")]: {
      fontSize: "38px !important",
    },
   
  },
  pricingArea: {
    paddingTop: "90px",
    paddingBottom: "90px",
  },
  pricingTable: {
    border: "1px solid #565656",
    borderRadius: "30px",
    padding: "37px 40px 40px 40px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: ".3s",
    "&:hover": {
      borderColor: "# 28e98c",
    },
  }, 
  top: {
    marginBottom: "30px",
    display:"flex",
    justifyContent:"space-between !important",
    alignItem:"start !important",
    textAlign:"right"
  },
  pricingTableHeader: {
    borderBottom: "1px solid #555555",
    paddingBottom: "20px",
    marginBottom: "34px",
    
    "& h4": {
      fontSize: "18px",
      textTransform: "uppercase",
      fontWeight: 300,
      color: "#fff",
      margin: 0,
      fontFamily: "Inter",
      
    },
    "& p": {
      fontSize: "13px",
      lineHeight: "20px",
      color: "#999999",
      margin: 0,
      fontFamily: "Inter",
      
    },
    "& h1": {
      fontSize: "48px",
      color: "# 28e98c",
      fontWeight: 300,
      margin: 0,
      "& span": {
        fontSize: "24px",
        color: "#999999",
      },
      fontFamily: "Inter",
      
    },
  },
  featureLists: {
    marginBottom: "80px",
    "& li": {
      fontSize: "14px",
      color: "#fff",
      lineHeight: "24px",
      fontWeight: 300,
      marginBottom: "10px",
      "&:last-child": {
        marginBottom: 0,
      },
      fontFamily: "Inter",
    },
  },
  info: {
    fontWeight: 500,
    fontSize: "14px",
    color: "#fff",
    lineHeight: "24px",
    margin: "60px 0 0 0",
    "& a": {
      color: "# 28e98c",
      textDecoration: "underline",
    },
    fontFamily: "Inter",
  },
  themeBtn: {
    background: "var(--primary_color)",
    color: "#000000",
    display: "inline-flex",
    alignItems: "center",
    textAlign: "center",
    padding: "11px 58px 10px 58px",
    borderRadius: "30px",
    justifyContent: "center",
    textTransform: "uppercase",
    border: "none",
    transition: ".3s",
    cursor: "pointer",
    border: `2px solid var(--primary_color)`,
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
    "& i": {
      fontSize: "24px",
      marginRight: "10px",
      display: "block",
      marginBottom: "3px",
    },
    "&:hover": {
      background: "none",
      color: "var(--primary_color)",
    },
  },
  span: {
    color: "#28e98c",
  },
}));

export default function Pricing() {
  const classes = useStyles();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
  <Container>
    <section className={`${classes.pricingArea} page-section pricing`}>
      <div className={classes.customContainer}>
        <div className={classes.ContentWidth}>
          <div className="section-header">
            <Typography className={classes.subtitle} data-aos="fade-up">
              <i className={`las la-dollar-sign ${classes.subTitleIcon}`}></i>{" "}
              pricing
            </Typography>
            <Typography variant="h1" className={classes.h1} data-aos="fade-up">
              My <span className={classes.span}>Pricing</span>
            </Typography>
          </div>

          <div className="pricing-table-items">
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                md={6}
                className="scroll-animation"
                data-aos="fade-up"
              >
                <div className={classes.pricingTable}>
                  <div className={classes.pricingTableHeader}>
                    <div className={classes.top}>
                      <Typography variant="h4">basic</Typography>
                      <Typography>
                        Have design ready to build?
                        <br />
                        or small budget
                      </Typography>
                    </div>
                    <Typography variant="h1">
                      $49 <span>/ hours</span>
                    </Typography>
                  </div>
                  <ul className={classes.featureLists}>
                    <li>Need your wireframe</li>
                    <li>Design with Figma, Framer</li>
                    <li>
                      Implement with Webflow, React, WordPress, Laravel/PHP
                    </li>
                    <li>Remote/Online</li>
                    <li>Work in business days, no weekend.</li>
                    <li>Support 6 months</li>
                  </ul>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.themeBtn}
                  >
                    pick this package
                  </Button>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="scroll-animation"
                data-aos="fade-left"
              >
                <div className={classes.pricingTable}>
                  <div className={classes.pricingTableHeader}>
                    <div className={classes.top} >
                      <Typography variant="h4">premium</Typography>
                      <Typography>
                        Not have any design?
                        <br />
                        Leave its for me
                      </Typography>
                    </div>
                    <Typography variant="h1">
                      $99 <span>/ hours</span>
                    </Typography>
                  </div>
                  <ul className={classes.featureLists}>
                    <li>Don't need wireframe or anything</li>
                    <li>Design with Figma, Framer from scratch</li>
                    <li>
                      Implement with Webflow, React, WordPress, Laravel/PHP
                    </li>
                    <li>Remote/Online</li>
                    <li>Work with both weekend</li>
                    <li>Support 12 months</li>
                    <li>Your project always be priority</li>
                    <li>Customer care gifts</li>
                  </ul>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.themeBtn}
                  >
                    pick this package
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Typography
              variant="body2"
              className={`${classes.info} scroll-animation`}
              data-aos="fade-up"
            >
              Don't find any package match with your plan!
              <br />
              Want to setup a new tailor-made package for only you?{" "}
              <a href="">Contact Us</a>
            </Typography>
          </div>
        </div>
      </div>
    </section></Container>
  );
}
