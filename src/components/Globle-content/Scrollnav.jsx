import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  Category as CategoryIcon,
  Collections as CollectionsIcon,
  Dashboard as DashboardIcon,
  Home as HomeIcon,
  MailOutline as MailOutlineIcon,
  PersonOutline as PersonOutlineIcon,
  ViewStream as ViewStreamIcon,
  WorkOutline as WorkOutlineIcon,
} from "@material-ui/icons";

const menuItems = [
  { text: "Home", icon: HomeIcon, to: "/" },
  { text: "About", icon: PersonOutlineIcon, to: "/About" },
  { text: "Resume", icon: WorkOutlineIcon, to: "/Resume" },
  { text: "Services", icon: ViewStreamIcon, to: "/Services" },
  { text: "Skills", icon: CategoryIcon, to: "/Skills" },
  { text: "Portfolios", icon: DashboardIcon, to: "/Portfolio" },
  { text: "Gallery", icon: CollectionsIcon, to: "/Gallery" },
  { text: "Contact", icon: MailOutlineIcon, to: "/Contact" },
];


const useStyles = makeStyles((theme) => ({
  menu: {
    background: "var(--floating-surface)",
    border: "1px solid var(--line)",
    borderRadius: "30px",
    backdropFilter: "blur(18px)",
    boxShadow: "0 18px 40px rgba(0,0,0,0.2)",
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
    color: "var(--muted)",
    cursor: "pointer",
    display: "block",
    position: "relative",
    transition: ".3s",
    gap: "5px",
    marginTop: "5px",
    width: "55px",
    "&.active, &:hover": {
      color: "var(--primary_color)",
      transform: "translateY(-2px)",
    },
    "&:hover span": {
      opacity: 1,
      visibility: "visible",
    },
  },
  menuItemIcon: {
    color: "currentColor",
    fontSize: "22px !important",
  },
  menuItemText: {
    background: "var(--surface-strong)",
    borderRadius: "5px",
    color: "var(--text)",
    display: "block",
    fontSize: "12px",
    opacity: 0,
    padding: "3px 8px",
    position: "absolute",
    right: "100%",
    transition: ".3s",
    visibility: "hidden",
    "&:before": {
      background: "var(--surface-strong)",
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
      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <li key={item.text}>
            <Link className={classes.menuItem} to={item.to}>
              <span className={classes.menuItemText}>{item.text}</span>
              <Icon className={classes.menuItemIcon} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
