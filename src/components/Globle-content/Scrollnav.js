import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  menu: {
    background: "#1f1f1f",
    border: "1px solid #575757",
    borderRadius: "30px",
    flexDirection: "column",
    gap: "20px",
    fontSize:"20px !important",
    padding: "15px 0",
    position: "fixed",
    right: "65px",
    textAlign: "center",
    top: "157px",
    zIndex: 20,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    
  },
  menuItem: {
    color: "#999",
    cursor: "pointer",
    display: "block",
    position: "relative",
    transition: ".3s",
    gap: "5px",
    marginTop: "5px",
    width: "55px",
    "&.active, &:hover": {
      color: "var(--primary_color)",
    },
    "&:hover span": {
      opacity: 1,
      visibility: "visible",
    },
  },
  menuItemIcon: {
       fontSize: "40px !important",
  },
  menuItemText: {
    background: "#404042",
    borderRadius: "5px",
    color: "#fff",
    display: "block",
    fontSize: "12px",
    opacity: 0,
    padding: "3px 8px",
    position: "absolute",
    right: "100%",
    transition: ".3s",
    visibility: "hidden",
    "&:before": {
      background: "#404042",
      content: '""',
      height: "10px",
      marginTop: "-5px",
      position: "absolute",
      right: "-3px",
      top: "50%",
      transform: "rotate(54deg) skew(-8deg,-39deg)",
      width: "10px",
      zIndex: "-1",
    },
  },
}));

export default function Scrollnav() {
  const classes = useStyles();
 
  return (
    <ul className={classes.menu}>
      <li>
        <Link className={`${classes.menuItem}`} to="/">
        
          <span className={classes.menuItemText}>Home</span>{" "}
          <i className="las la-home"></i>
        </Link>
      </li>
      <li>
        <Link className={`${classes.menuItem}`} to="/About">
          <span className={classes.menuItemText}>About</span>{" "}
          <i className="lar la-user"></i>
        </Link>
      </li>
      <li>
        <Link className={`${classes.menuItem}`} to="/Resume">
          <span className={classes.menuItemText}>Resume</span>{" "}
          <i className="las la-briefcase"></i>
        </Link>
      </li>
      <li>
        <Link className={`${classes.menuItem}`} to="/Services">
          <span className={classes.menuItemText}>Services</span>{" "}
          <i className="las la-stream"></i>
        </Link>
      </li>
      <li>
        <Link className={`${classes.menuItem}`} to="/Skills">
          <span className={classes.menuItemText}>Skills</span>{" "}
          <i className="las la-shapes"></i>
        </Link>
      </li>
      <li>
        <Link className={`${classes.menuItem}`} to="/Portfolio">
          <span className={classes.menuItemText}>Portfolios</span>{" "}
          <i className="las la-grip-vertical"></i>
        </Link>
      </li>
      <li>
        <Link className={`${classes.menuItem} scroll-to`} to="/Gallery">
          <span className={classes.menuItemText}>Gallery</span>{" "}
          <i className="lar la-images"></i>
        </Link>
      </li>
      <li>
        <Link className={`${classes.menuItem} scroll-to`} to="/Contact">
          <span className={classes.menuItemText}>Contact</span>{" "}
          <i className="las la-envelope"></i>
        </Link>
      </li>
    </ul>
  );
}
