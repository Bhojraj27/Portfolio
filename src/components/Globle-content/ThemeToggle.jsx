import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Brightness2 as MoonIcon, WbSunny as SunIcon } from "@material-ui/icons";
import { useThemeMode } from "../../theme/ThemeContext";

const useStyles = makeStyles((theme) => ({
  toggle: {
    position: "fixed",
    left: 14,
    top: 108,
    zIndex: 120,
    width: 48,
    height: 48,
    border: "1px solid var(--line-strong)",
    borderRadius: "50%",
    color: "var(--text)",
    background: "var(--floating-surface-hover)",
    backdropFilter: "blur(16px)",
    boxShadow: "0 14px 34px rgba(0, 0, 0, 0.18)",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .25s ease",
    "&:hover": {
      color: "var(--primary_color)",
      borderColor: "var(--primary_color)",
      transform: "translateX(3px)",
    },
    [theme.breakpoints.down("md")]: {
      left: 10,
      top: 114,
    },
  },
  icon: {
    color: "currentColor",
    fontSize: 22,
  },
}));

export default function ThemeToggle() {
  const classes = useStyles();
  const { mode, toggleMode } = useThemeMode();

  return (
    <button
      type="button"
      className={classes.toggle}
      onClick={toggleMode}
      aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
    >
      {mode === "dark" ? <SunIcon className={classes.icon} /> : <MoonIcon className={classes.icon} />}
    </button>
  );
}
