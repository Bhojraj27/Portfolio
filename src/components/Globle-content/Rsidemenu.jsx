import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import {
 
  Close as CloseIcon,
} from "@material-ui/icons";
const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  iconMenu: {
    position: "absolute",
    right: "68px",
    top: "60px",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    border: "1px solid var(--line-strong)",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    cursor: "pointer",
    transition: ".3s",
    background: "var(--floating-surface)",
    backdropFilter: "blur(16px)",
    zIndex: 99,
    [theme.breakpoints.down("xs")]: {
      position:"fixed !important",
      top:"30px",
      right:"30px"
    },
    [theme.breakpoints.down("md")]: {
    position:"fixed !important"
    },
    "&:hover": {
      borderColor: "var(--primary_color)",
      "& span": {
        background: "var(--primary_color)",
      },
    },
  },
  iconMenuSpan: {
    width: "20px",
    display: "block",
    height: "2px",
    background: "var(--text)",
    transition: ".3s",
  },

  drawer: {
    width: drawerWidth,
    position: "absolute",
    left: 0,
    top: 0,

    height: "100%",
    zIndex: -1,
    background: "rgba(15, 23, 42, 0.45)",
    opacity: 0.5,
  },
  overRelay: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    background: "rgba(15, 23, 42, 0.45)",
    opacity: 0.5,
  },
  p: {
    fontSize: "18px",
    fontFamily: "Inter",
    color: "var(--muted)",
    width: "46%",
    marginTop: "15%",
    paddingLeft: "24%",
    marginBottom: "10%",
  },
  drawerPaper: {
    width: drawerWidth,
    background: "var(--bg-soft)",
    backdropFilter: "blur(18px)",

    [theme.breakpoints.down("sm")]: {
      menuButton: {
        right: "5px",
        top: "5px",
      },
    },
  },
  listItem: {
    width: "46%",
    paddingLeft: "24%",
    marginTop:"7px",
    transition: ".3s",
    "&:hover": {
      color: "var(--primary_color)",
      backgroundColor: "transparent",
    },
    "&:hover $listItemIcon": {
      color: "var(--primary_color)",
    },
    "&:hover $listItemText": {
      color: "var(--text)",
      
    },
  },
  responsive: {
    maxWidth: "354px",
  },
  listItemIcon: {
    color: "var(--muted)",
    fontSize: "16px",
    minWidth: '30px',
  },
  listItemText: {
    position: "relative",
    right: 0,
    opacity: 1,
    visibility: "visible",
    color: "var(--muted)",
    background: "none",
    margin: 0,
    padding: 0,
    borderRadius: 0,
    fontFamily: "Inter !important",
    fontSize: "12px !important",
    "::before": {
      display: "none",
    },
    '& .MuiTypography-body1':{
      fontFamily: "Inter !important",
      fontSize: "12px !important",color: "var(--muted)",
    },
  },
  sidebarSocial: {
    width: "46%",
    margin: "auto",
  },
  sidebarSocialUl: {
    marginTop: "10px",
    gap: "15px",
    display: "flex", // Center-align the social links
  },
  sidebarSocialLink: {
    color: "var(--muted)",
    transition: ".3s",
    fontSize: "16px",
    "&:hover": {
      color: "var(--primary_color)",
    },
  },
  activeSocialLink: {
    color: "red",
  },
  [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
    listItem: {
      marginLeft: "0",
    },
  },
  socialText: {
    marginTop:"23px",
    color: "var(--muted)",
    fontSize: "16px",
    fontFamily:"Inter !important"
  },
  closeSettings:{
    color:"var(--text)",
      fontSize: '20px',
      position: "absolute",
      right: "20px",
      top: "20px",
  },
}));

export default function Rsidemenu() {
  const [isActive, setIsActive] = useState(false);
  const classes = useStyles();

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsActive(open);
  };

  const menuItems = [
    { text: "Home", icon: <i className="las la-home"></i>, href: "/" },
    { text: "About", icon: <i className="lar la-user"></i>, href: "/About" },
    {
      text: "Resume",
      icon: <i className="las la-briefcase"></i>,
      href: "/Resume",
    },
    {
      text: "Services",
      icon: <i className="las la-stream"></i>,
      href: "/Services",
    },
    {
      text: "Skills",
      icon: <i className="las la-shapes"></i>,
      href: "/Skills",
    },
    {
      text: "Portfolios",
      icon: <i className="las la-grip-vertical"></i>,
      href: "/Portfolio",
    },
    {
      text: "Gallery",
      icon: <i className="lar la-images"></i>,
      href: "/Gallery",
    },
    {
      text: "Contact",
      icon: <i className="las la-envelope"></i>,
      href: "/Contact",
    },
  ];
  return (
    <div className={classes.responsive}>
      <div className={classes.iconMenu} onClick={toggleDrawer(true)}>
        <span className={classes.iconMenuSpan}></span>
        <span className={classes.iconMenuSpan}></span>
      </div>
      <Drawer
        className={`${classes.drawer}${classes.overRelay}`}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
        open={isActive}
        onClose={toggleDrawer(false)}
      >
      <div className={classes.toolbar}>
          <IconButton
            className={`${classes.closeSettings}`}
            onClick={toggleDrawer(false)}
          >
            <CloseIcon /> 
          </IconButton>
        </div>
        <div>
          <div>
            <p className={classes.p}>Menu</p>
           
            <List>
              {menuItems.map((item, index) => (
                <ListItem
                  button
                  component="a"
                  href={item.href}
                  onClick={toggleDrawer(false)}
                  key={index}
                  className={classes.listItem}
                >
                  <ListItemIcon className={classes.listItemIcon}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText className={classes.listItemText}>
                    {item.text}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </div>
          <div className={classes.sidebarSocial}>
            <p className={classes.socialText}>Social</p>{" "}
            {/* Center-align the "Social" text */}
            <ul className={classes.sidebarSocialUl}>
              <li>
                <a
                  href="https://linkedin.com/in/bhojraj-chavan"
                  className={classes.sidebarSocialLink}
                >
                  <i className="lab la-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Bhojraj27"
                  className={classes.sidebarSocialLink}
                >
                  <i className="lab la-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:bhojrajchavan5@gmail.com"
                  className={classes.sidebarSocialLink}
                >
                  <i className="las la-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
