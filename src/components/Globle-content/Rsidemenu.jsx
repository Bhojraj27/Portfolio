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
  Category as CategoryIcon,
  Close as CloseIcon,
  Collections as CollectionsIcon,
  Dashboard as DashboardIcon,
  Email as EmailIcon,
  GitHub as GitHubIcon,
  Home as HomeIcon,
  LinkedIn as LinkedInIcon,
  MailOutline as MailOutlineIcon,
  PersonOutline as PersonOutlineIcon,
  ViewStream as ViewStreamIcon,
  WorkOutline as WorkOutlineIcon,
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
    "& svg": {
      color: "currentColor",
      fontSize: 19,
    },
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
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      color: "var(--primary_color)",
    },
    "& svg": {
      color: "currentColor",
      fontSize: 19,
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
    { text: "Home", Icon: HomeIcon, href: "/" },
    { text: "About", Icon: PersonOutlineIcon, href: "/About" },
    {
      text: "Resume",
      Icon: WorkOutlineIcon,
      href: "/Resume",
    },
    {
      text: "Services",
      Icon: ViewStreamIcon,
      href: "/Services",
    },
    {
      text: "Skills",
      Icon: CategoryIcon,
      href: "/Skills",
    },
    {
      text: "Portfolios",
      Icon: DashboardIcon,
      href: "/Portfolio",
    },
    {
      text: "Gallery",
      Icon: CollectionsIcon,
      href: "/Gallery",
    },
    {
      text: "Contact",
      Icon: MailOutlineIcon,
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
              {menuItems.map((item) => {
                const Icon = item.Icon;

                return (
                  <ListItem
                    button
                    component="a"
                    href={item.href}
                    onClick={toggleDrawer(false)}
                    key={item.text}
                    className={classes.listItem}
                  >
                    <ListItemIcon className={classes.listItemIcon}>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText className={classes.listItemText}>
                      {item.text}
                    </ListItemText>
                  </ListItem>
                );
              })}
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
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Bhojraj27"
                  className={classes.sidebarSocialLink}
                >
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a
                  href="mailto:bhojrajchavan5@gmail.com"
                  className={classes.sidebarSocialLink}
                >
                  <EmailIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
