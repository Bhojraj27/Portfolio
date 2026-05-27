import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  MailOutline as MailOutlineIcon,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  leftSidebar: {
    marginTop: 0,
    border: "1px solid var(--line)",
    borderRadius: "30px",
    background:
      "linear-gradient(145deg, var(--surface-strong), var(--surface-muted))",
    backdropFilter: "blur(18px)",
    boxShadow: "var(--panel_shadow)",
    boxSizing: "border-box",
    left: "clamp(16px, 1.6vw, 28px)",
    maxWidth: "390px",
    padding: "28px 34px",
    position: "fixed",
    top: "50%",
    overflow: "hidden",
    transform: "translateY(-50%)",
    width: "100%",
    zIndex: 10,
    
    
    [theme.breakpoints.down("lg")]: {
      maxWidth: "350px",
      padding:"26px 30px",
      position: "fixed",
    },
    
    [theme.breakpoints.down("md")]: {
      display: "block",
      left: 0,
      margin: "14px auto 22px",
      maxWidth: "min(680px, calc(100vw - 28px))",
      position: "relative",
      top: 0,
      transform: "translateY(0)",
    },
    '@media (max-width: 425px)':{
      maxWidth:"calc(100vw - 28px) !important",
      padding: "24px 20px",
      position: "relative",
    },
    "@media (max-height: 760px) and (min-width: 960px)": {
      maxWidth: "340px",
      padding: "20px 26px",
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
    margin: "0 auto 34px",
    border: "1px solid var(--line)",
    aspectRatio: "1 / 1.1",
    maxWidth: "255px",
    objectFit: "cover",
    objectPosition: "center",
    width: "100%",
    [theme.breakpoints.down("lg")]: {
      marginBottom: "30px",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "220px",
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "300px",
      width: "100%",
    },
    '@media (max-width: 425px)': {
      maxWidth: "205px",
      marginBottom: "22px",
    },
    "@media (max-height: 760px) and (min-width: 960px)": {
      maxWidth: "190px",
      marginBottom: "20px",
    },
  },
  sidebarHeader: {
    marginBottom: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("xl")]: {
      marginBottom: "22px",
    },
    [theme.breakpoints.down("lg")]: {
      lineHeight: 1.4,
    },
    "@media (max-height: 760px) and (min-width: 960px)": {
      marginBottom: "16px",
    },
  },
  designation: {
    color: "var(--text)",
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
    color: "var(--text)",
    fontFamily:"Inter",
    fontSize: "14px",
    fontWeight: 300,
  },
  email: {

    fontSize: "clamp(22px, 1.7vw, 28px)",
    fontWeight: 300,
    textAlign: "center",
    color: "var(--text)",
    fontFamily:"Inter"
  },
  copyright: {
    fontSize: "13px",
    marginBottom: "18px",
    textAlign: "center",
    marginTop:'22px',
    fontFamily:"Inter",
    "@media (max-height: 760px) and (min-width: 960px)": {
      marginTop: "16px",
      marginBottom: "14px",
    },
  },
  socialProfile: {
    gap: "8px",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "20px",
    "@media (max-height: 760px) and (min-width: 960px)": {
      marginBottom: "16px",
    },
   
  },
  socialProfileLink: {
    border: "1px solid var(--line-strong)",
    background: "var(--surface-muted)",
    borderRadius: "50%",
    color: "var(--muted)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: "44px",
    textAlign: "center",
    transition: ".3s",
    width: "44px",
    '&:hover':{
      borderColor: "var(--primary_color)",
      color: "var(--primary_color)",
      transform: "translateY(-3px)",
    }, 
  },
  socialIcon: {
    color: "currentColor",
    fontSize: 22,
  },
  themeBtn: {
    width: "100%",
    alignItems: "center",
    background: "var(--primary_color)",
    border: "2px solid var(--primary_color)",
    borderRadius: "30px",
    color: "var(--button-text)",
    cursor: "pointer",
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
    color: "currentColor",
  },
}));

export default function Lsb() {
  const classes = useStyles();
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/pdf/bhojraj-chavan-resume.pdf";
    link.download = "Bhojraj-Chavan-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
  <Container>
      <div className={classes.leftSidebar}>
      <div className={classes.sidebarHeader}>
        <img src="images/b.png" alt="Logo" height="40" width="40"/>
        <span className={classes.designation}>Senior Full Stack Developer</span>
      </div>
      <img className={classes.me} src="images/bhojraj.jpg" alt="Me" />
      <Typography className={classes.email}>Bhojraj Chavan</Typography>
      <Typography className={classes.address}>
        Kolhapur, Maharashtra
      </Typography>
      <Typography className={classes.copyright}>
        &copy; 2026 Bhojraj. All Rights Reserved
      </Typography>
      <ul className={classes.socialProfile}>
        <li>
          <a href="https://linkedin.com/in/bhojraj-chavan" className={classes.socialProfileLink}>
            <LinkedInIcon className={classes.socialIcon} />
          </a>
        </li>
        <li>
          <a href="https://github.com/Bhojraj27" className={classes.socialProfileLink}>
            <GitHubIcon className={classes.socialIcon} />
          </a>
        </li>
        <li>
          <a
            href="mailto:bhojrajchavan5@gmail.com"
            className={classes.socialProfileLink}
          >
            <EmailIcon className={classes.socialIcon} />
          </a>
        </li>
      </ul>
      <a href="/" className={classes.themeBtn}  onClick={downloadResume}>
        <MailOutlineIcon className={classes.themeBtnIcon} /> Hire Me!
      </a>
    </div>
  </Container>
  );
}
