import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Brightness2 as MoonIcon, WbSunny as SunIcon } from "@material-ui/icons";
import { useThemeMode } from "../../theme/ThemeContext";

const useStyles = makeStyles((theme) => ({
  toggle: {
    position: "fixed",
    left: 18,
    top: "calc(50% + 30px)",
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
    transform: "translateY(-50%)",
    transition: "all .25s ease",
    "&:hover": {
      color: "var(--primary_color)",
      borderColor: "var(--primary_color)",
      transform: "translate(3px, -50%)",
    },
    [theme.breakpoints.down("md")]: {
      left: 12,
      top: "calc(50% + 30px)",
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
