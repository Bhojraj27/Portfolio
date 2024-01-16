import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Typography, Drawer, Grid } from "@material-ui/core";
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
    color: "white",
    backgroundColor: "black",
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
    color: "#fff",
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
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    cursor: "pointer",
    background: "#1f1f1f",
    color: "#999",
    position: "fixed",
    left: 0,
    top: 50,
    zIndex: 100,
    [theme.breakpoints.down("xs")]: {
      left: 0,
      top: 60,
    },
    [theme.breakpoints.down("md")]: {
      left: 0,
      top: 60,
    },
    
  },
closeSettings:{
  color:" #fff",
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
      >
     <i className={`las la-cog ${classes.subTitleIcon}`}></i>
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
        <div className={classes.toolbar}>
          <IconButton
            className={`${classes.settingToggle} ${classes.iconbutton}`}
            onClick={() => setIsSettingsOpen(true)}
          >
            <SettingsIcon />
          </IconButton>
        </div>
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
          <Typography variant="h6" className={classes.globalColorOptionHeading}>
            Three Dimensional Shapes
          </Typography>
         
            
          <Grid container spacing={4} classNme={classes.themeGrid}>
            <Grid item xs={3} sm={3} md={3} lg={3}>
            <a href="#" onClick={() => { 
  document.querySelector('body').style.backgroundColor = 'black'; 
  if (props.clickEvent) {
    props.clickEvent('videos/video2.mp4');
  }
  setIsSettingsOpen(false);
}}> Earth Lines Sphere</a>
 </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3}>
            <a href="#" onClick={() => {document.querySelector('body').style.backgroundColor='black';props.clickEvent('videos/video2.mp4');setIsSettingsOpen(false);}}> 3D Abstract Ball</a>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3}>
            <a href="#" onClick={() => {document.querySelector('body').style.backgroundColor='#1f1f1f';props.clickEvent('videos/video3.mp4');setIsSettingsOpen(false);}}>
              Water Waves</a>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3}>
            <a href="#" onClick={() => {document.querySelector('body').style.backgroundColor='#1f1f1f';props.clickEvent('videos/video4.mp4');setIsSettingsOpen(false);}}>
              Liquids Wavy</a>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3}>
            <a href="#" onClick={() => {document.querySelector('body').style.backgroundColor='#1f1f1f';props.clickEvent('videos/video5.mp4');setIsSettingsOpen(false);}}>
              Simple Strings</a>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3}>
              Solid Color
            </Grid>
          </Grid>
        </div>
        
      </Drawer>
    </div>
  );
};

export default Settings;
