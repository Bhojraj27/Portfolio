import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Typography, Drawer } from "@material-ui/core";
import {
  Settings as SettingsIcon,
  Close as CloseIcon,
} from "@material-ui/icons";

const drawerWidth = 800;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: 350,
    },
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    color: "var(--text)",
    backgroundColor: "var(--bg-soft)",
    backdropFilter: "blur(18px)",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: 350,
    },
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
    },
  },
  toolbar: theme.mixins.toolbar,

  globalColorOptionHeading: {
    fontFamily: "Inter",
    color: "var(--text)",
    fontSize: "34px",
    fontWeight: 200,
    lineHeight: 1.2,
    marginBottom: "80px",
  },
  colorBoxed: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  colorBox: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    borderRadius: "50%",
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    cursor: "pointer",
  },
  activeColorBox: {
    border: `2px solid ${theme.palette.primary.main}`,
  },
  closeIcon: {
    position: "absolute",
    top:"50px",
    right:"20px"
  },
  iconbutton: {
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    cursor: "pointer",
    background: "var(--floating-surface-hover)",
    backdropFilter: "blur(16px)",
    border: "1px solid var(--line-strong)",
    boxShadow: "0 14px 34px rgba(0, 0, 0, 0.18)",
    color: "var(--text)",
    position: "fixed",
    left: 14,
    top: 52,
    zIndex: 120,
    transition: "all .25s ease",
    "&:hover": {
      color: "var(--primary_color)",
      borderColor: "var(--primary_color)",
      transform: "translateX(3px)",
    },
    "& svg, & i": {
      color: "currentColor",
      fontSize: 22,
    },
    [theme.breakpoints.down("xs")]: {
      left: 10,
      top: 58,
    },
    [theme.breakpoints.down("md")]: {
      left: 10,
      top: 58,
    },
    
  },
closeSettings:{
  color:"var(--text)",
    fontSize: '20px',
    position: "absolute",
    right: "20px",
    top: "20px",
},
  h4: {
    fontFamily: "Inter",
    fontWeight: 200,
    marginBottom: "60px",
    textTransform: "capitalize",
  },
}));

const Settings = (props) => {
  const classes = useStyles();
  const [activeColor, setActiveColor] = useState("#28e98c");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const colorOptions = [
    "#28e98c",
    "#e4af12",
    "#fe6f1d",
    "#14c5fd",
    "#c0c0c0",
    "#1338f3",
    "#f31313",
    "#ff99cc",
  ];

  const handleColorClick = (color) => {
    setActiveColor(color);
    setIsSettingsOpen(false);
    document.documentElement.style.setProperty("--primary_color", color);
  };
  return (
    <div className={classes.root}>
      <IconButton
        className={classes.iconbutton}
        onClick={() => setIsSettingsOpen(true)}
        aria-label="Open color settings"
      >
        <SettingsIcon />
      </IconButton>
      <Drawer
        className={classes.drawer}
        anchor="right"
        open={isSettingsOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
        onClose={() => setIsSettingsOpen(false)}
      >
        <div className={classes.toolbar} />
        <div className={classes.toolbar}>
          <IconButton
            className={`${classes.closeSettings}`}
            onClick={() => setIsSettingsOpen(false)} // Close the drawer when clicked
          >
            <CloseIcon /> {/* Close icon */}
          </IconButton>
        </div>
        <div className={classes.content}>
          <Typography className={classes.globalColorOptionHeading}>
            Configuration
          </Typography>
          <Typography className={classes.h4}>Colors</Typography>
          <div className={classes.colorBoxed}>
            {colorOptions.map((color) => (
              <div
                key={color}
                className={`${classes.colorBox} ${
                  activeColor === color ? classes.activeColorBox : ""
                }`}
                style={{ background: color }}
                onClick={() => handleColorClick(color)}
              />
            ))}
          </div>
        </div>
        
      </Drawer>
    </div>
  );
};

export default Settings;
