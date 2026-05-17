import React, {  useEffect  } from "react";
import { makeStyles } from "@material-ui/core/styles";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Typography from "@material-ui/core/Typography";
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
    '@media (min-width: 1440px)': {
      marginLeft: "234px",
      maxWidth: "880px",
    },
    '@media (min-width: 2560px)': {
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
  sectionHeader: {
    fontSize: 48,
    color: "#fff",
    fontWeight: 300,
    marginBottom: 33,
    [theme.breakpoints.down("xs")]: {
      fontSize: "38px !important",
    },

  },
  sectionHeaderSpan: {
    color: "var(--primary_color)",
  },
  testimonialFooterNav: {
    marginTop: 10,
  },
  testimonialItemInner: {
    border: "2px solid #565656",
    borderRadius: 30,
    padding: "50px 50px 43px 50px",
  },
  author: {
    gap: 16,
    marginBottom: 45,
    alignItems: "center",
    display: "flex",
  },
  img:{
     height:"100%",
    objectFit: "cover",
    textAlign: "center",
    borderRadius:"10px"  },
  authorInfo: {
    fontSize: 18,
    fontWeight: 300,
    color: "#fff",
    marginBottom: 6,
    fontFamily: "Inter",
  },
  p: {
    fontSize: "24px",
    color: "#fff",
    fontWeight: 300,
    lineHeight: "36px",
    marginBottom: "27px",
    fontFamily: "Inter",
    [theme.breakpoints.down("xs")]: {
      fontSize: 23,
    },
  },
  designation: {
    color: "#999999",
    fontSize: 13,
    margin: 0,
    lineHeight: 1.3,
    fontFamily: "Inter",
  },
  projectBtn: {
    fontSize: 12,
    color: "#fff",
    textTransform: "uppercase",
    display: "inline-block",
    fontFamily: "Inter",
  },
  testimonialNav: {
    gap: 15,
    display: "flex",
    alignItems: "center",
  },
  testimonialNavButton: {
    height: 45,
    width: 45,
    display: "block",
    background: "none",
    borderRadius: "50%",
    textAlign: "center",
    border: "2px solid #565656",
    fontSize: 18,
    color: "#fff",
    transition: "0.3s",
    "&:hover": {
      borderColor: "#28e98c",
      color: "#28e98c",
    },
  },
  testimonialSlideCount: {
    fontSize: 13,
    color: "#666666",
    fontWeight: 300,
  },
  left: {
    color: "#fff",
  },
  h1: {
    color: "#fff",
    fontSize: 48,
    fontWeight: 300,
    marginBottom: 33,
    fontFamily: "Inter",
    [theme.breakpoints.down("xs")]: {
      fontSize: "38px !important"
    },
  },
}));

export default function Gallery() {
  const classes = useStyles();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const CustomPrevButton = ({ onClick }) => (
    <button className={classes.testimonialNavButton } onClick={onClick}>
      <i className="las la-angle-left"></i>
    </button>
  );
  const CustomNextButton = ({ onClick }) => (
    <button className={classes.testimonialNavButton } onClick={onClick}>
      <i className="las la-angle-right"></i>
    </button>
  );
  const options = {
    items: 1,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: [<CustomPrevButton />, <CustomNextButton />],
  };
  return (
    <Container>
      <div className={classes.customContainer} id="Testimonial">
        <div className={classes.ContentWidth}>
          <div className={classes.sectionHeader}>
            <Typography className={classes.subtitle} data-aos="fade-up">
              <i className={classes.subtitleIcon + " lar la-comment"}></i>
              Gallery
            </Typography>
            <Typography className={classes.h1} data-aos="fade-up">
            Achievements and 
              <span className={classes.sectionHeaderSpan}> Certifications</span>
            </Typography>
          </div>
          <div className="testimonial-slider-wrap" data-aos="fade-up">
            <OwlCarousel className="owl-theme" {...options}>
              <div className="item">
                <img className={classes.img}  src="images/awards/11.jpg" alt="carousel" />
              </div>
              <div className="item">
                <img className={classes.img} src="images/awards/12.jpg" alt="carousel" />

              </div>
              <div className="item">
                <img className={classes.img} src="images/awards/13.jpg" alt="carousel" />
              </div>
              <div className="item">
                <img className={classes.img} src="images/awards/3.jpg" alt="carousel" />
              </div>
            </OwlCarousel>

          </div>
        </div>
      </div>
    </Container>
  );
}
