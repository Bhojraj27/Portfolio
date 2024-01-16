import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  leftSidebar: {
    marginTop: '30px',
    border: "1px solid #565656",
    borderRadius: "30px",
    left: "20px",
    maxWidth: "485px",
    padding: "50px",
    position: "fixed",
    top: "50%",
    overflow:"hidden",
    transform: "translateY(-55%)",
    width: "100%",
    zIndex: 10,
    
    
    [theme.breakpoints.down("lg")]: {
      maxWidth: "350px",
      padding:"30px",
      display:"fixed",
      position: "fixed",
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
    '@media (max-width: 425px)':{
     
      maxWidth:"370px !important",
      position: "relative",
    },
  
    
   

  },
  drakeMain: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  me: {
    borderRadius: "30px",
    display: "block",
    marginBottom: "56px",
    [theme.breakpoints.down("lg")]: {
      marginBottom: "36px",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "250px",
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
  },
  sidebarHeader: {
    marginBottom: "65px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("xl")]: {
      marginBottom: "30px",
    },
    [theme.breakpoints.down("lg")]: {
      lineHeight: 1.4,
    },
  },
  designation: {
    color: "#fff",
    fontFamily:"Inter !important",
    fontSize: "10px",
    fontWeight: 500,
    maxWidth: "110px",
    textAlign: "right",
    [theme.breakpoints.down("lg")]: {
      lineHeight: 1.4,
    },
  },
  address: {
    textAlign: "center",
    color: "#fff",
    fontFamily:"Inter",
    fontSize: "14px",
    fontWeight: 300,
  },
  email: {

    fontSize: "24px",
    fontWeight: 300,
    textAlign: "center",
    color: "#fff",
    fontFamily:"Inter"
  },
  copyright: {
    fontSize: "14px",
    marginBottom: "25px",
    textAlign: "center",
    marginTop:'30px',
    fontFamily:"Inter"
  },
  socialProfile: {
    gap: "8px",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
   
  },
  socialProfileLink: {
    border: "2px solid #565656",
    borderRadius: "50%",
    color: "#999",
    display: "block",
    fontSize: "20px",
    height: "50px",
    lineHeight: "46px",
    textAlign: "center",
    transition: ".3s",
    width: "50px",
    '&:hover':{
      borderColor: "var(--primary_color)"
    }, 
    [theme.breakpoints.down("xl")]: {
      marginBottom: "30px",
    },
    "& i": {
      '&:hover':{
        borderColor: "var(--primary_color)"
      }, }
  },
  themeBtn: {
    width: "100%",
    alignItems: "center",
    background: "var(--primary_color)",
    border: "2px solid var(--primary_color)",
    borderRadius: "30px",
    color: "#000",
    cursor: "pointer",
    '& display': "block",
    display: "inline-flex",
    justifyContent: "center",
    padding: "11px 58px 10px",
    textAlign: "center",
    textTransform: "uppercase",
    transition: ".3s",
    fontFamily:"Inter !important",
    "&:hover": {
      background: "none",
      color: "var(--primary_color)",
    },
    [theme.breakpoints.down("md")]: {
      padding: "11px 40px 10px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "13px 20px",
      width: "100%",
    },
  },
  themeBtnIcon: {
    display: "block",
    fontSize: "24px",
    marginBottom: "3px",
    marginRight: "10px",
  },
}));

export default function Lsb() {
  const classes = useStyles();
  const downloadResume = () => {
    // Create a link element
    const link = document.createElement("a");
    // Set the href attribute to the path of your resume PDF file
    link.href = "pdf/bhojraj-chavan-resume.pdf";
    // Set the download attribute with the desired file name
    link.download = "pdf/bhojraj-chavan-resume.pdf";
    // Append the link to the document
    document.body.appendChild(link);
    // Trigger a click on the link to start the download
    link.click();
    // Remove the link from the document
    document.body.removeChild(link);
  };
  return (
  <Container>
      <div className={classes.leftSidebar}>
      <div className={classes.sidebarHeader}>
        <img src="images/b.png" alt="Logo" height="40" width="40"/>
        <span className={classes.designation}>Software & Frontend Developer</span>
      </div>
      <img className={classes.me} src="images/bhojraj.jpg" alt="Me" />
      <Typography className={classes.email}>Bhojraj Chavan</Typography>
      <Typography className={classes.address}>
        Base in Pune
      </Typography>
      <Typography className={classes.copyright}>
        &copy; 2023 Bhorjaj. All Rights Reserved
      </Typography>
      <ul className={classes.socialProfile}>
        <li>
          <a href="https://twitter.com/" className={classes.socialProfileLink}>
            <i className={`lab la-twitter`}></i>
          </a>
        </li>
        <li>
          <a href="https://dribble.com/" className={classes.socialProfileLink}>
            <i className="lab la-dribbble"></i>
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/"
            className={classes.socialProfileLink}
          >
            <i className="lab la-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Bhojraj27" className={classes.socialProfileLink}>
            <i className="lab la-github"></i>
          </a>
        </li>
      </ul>
      <a href="/" className={classes.themeBtn}  onClick={downloadResume}>
        <i className={classes.themeBtnIcon + " las la-envelope"}></i> Hire Me!
      </a>
    </div>
  </Container>
  );
}
