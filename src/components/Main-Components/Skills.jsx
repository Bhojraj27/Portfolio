import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import {
  Build as BuildIcon,
  Category as CategoryIcon,
  CloudQueue as CloudQueueIcon,
  Code as CodeIcon,
  Memory as MemoryIcon,
  Storage as StorageIcon,
} from "@material-ui/icons";

const skillGroups = [
  {
    title: "Frontend",
    Icon: CodeIcon,
    accent: "#28e98c",
    description: "Interfaces, data flows, routing, forms, motion, and dashboards.",
    skills: [
      "React.js",
      "Vite",
      "TypeScript",
      "Redux",
      "TanStack Query",
      "Tailwind CSS",
      "MUI X",
      "Framer Motion",
      "React Router v7",
      "Formik",
      "Recharts",
      "D3",
    ],
  },
  {
    title: "Backend",
    Icon: StorageIcon,
    accent: "#38bdf8",
    description: "APIs and realtime systems for product-grade applications.",
    skills: ["Node.js", "Express.js", "RESTful APIs", "WebSocket", "SSE", "JWT"],
  },
  {
    title: "AI & Integrations",
    Icon: MemoryIcon,
    accent: "#a78bfa",
    description: "AI workflows plus the external services that ship real product features.",
    skills: [
      "OpenAI",
      "Google Gemini",
      "LiteLLM",
      "Ragie",
      "Stripe",
      "Auth0",
      "Mailgun",
      "Firebase Admin",
    ],
  },
  {
    title: "Cloud & Databases",
    Icon: CloudQueueIcon,
    accent: "#fbbf24",
    description: "Storage, queues, caching, and persistence for scalable systems.",
    skills: ["MongoDB", "Redis", "Firebase Firestore", "AWS S3", "AWS SQS"],
  },
  {
    title: "Tools",
    Icon: BuildIcon,
    accent: "#fb7185",
    description: "Daily engineering workflow, delivery, monitoring, and collaboration.",
    skills: ["Git", "GitHub", "Sentry", "Postman", "Jira"],
  },
];

const useStyles = makeStyles((theme) => ({
  skillsArea: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  customContainer: {
    maxWidth: 1130,
    padding: "0 15px",
    margin: "auto",
  },
  subtitle: {
    color: "var(--text)",
    fontFamily: "Inter !important",
    border: "1px solid var(--line-strong)",
    margin: "0 0 53px",
    display: "inline-flex",
    padding: "9px 20px",
    fontSize: "12px",
    alignItems: "center",
    fontWeight: 300,
    borderRadius: "30px",
    textTransform: "uppercase",
  },
  subtitleIcon: {
    marginBottom: 1,
    fontSize: 14,
    marginRight: 10,
    color: "currentColor",
  },
  skillsContent: {
    maxWidth: 770,
    width: "100%",
    marginLeft: "auto",
    [theme.breakpoints.down("md")]: {
      display: "block",
      left: 0,
      margin: "20px auto auto",
      maxWidth: "767px",
      position: "relative",
      top: 0,
      transform: "translateY(0)",
    },
    "@media (min-width: 1440px)": {
      marginLeft: "234px",
      maxWidth: "880px",
    },
    "@media (min-width: 2560px)": {
      maxWidth: "2000px",
      alignItems: "center",
    },
  },
  h1: {
    color: "var(--text)",
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: 300,
    marginBottom: 18,
    fontFamily: "Inter",
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      fontSize: "38px !important",
    },
    "& span": {
      color: "var(--primary_color)",
      marginLeft: "10px",
    },
  },
  intro: {
    maxWidth: 620,
    color: "var(--muted)",
    fontSize: 15,
    lineHeight: "28px",
    fontFamily: "Inter",
    marginBottom: 34,
  },
  groupCard: {
    height: "100%",
    border: "1px solid var(--line)",
    borderRadius: 20,
    background: "linear-gradient(145deg, var(--surface), var(--surface-muted))",
    padding: "26px 24px 24px",
    position: "relative",
    overflow: "hidden",
    backdropFilter: "blur(18px)",
    transition: "all .3s ease",
    "&:before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "3px",
      background: "var(--accent)",
    },
    "&:hover": {
      transform: "translateY(-5px)",
      borderColor: "var(--accent)",
      boxShadow: "var(--panel_shadow)",
    },
  },
  groupHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: 14,
    marginBottom: 18,
  },
  groupIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--accent)",
    background: "var(--surface-chip)",
    border: "1px solid var(--line)",
    flexShrink: 0,
    fontSize: 23,
    padding: 8,
  },
  groupTitle: {
    color: "var(--text)",
    fontFamily: "Inter",
    fontSize: 21,
    fontWeight: 400,
    marginBottom: 4,
  },
  groupDescription: {
    color: "var(--muted)",
    fontFamily: "Inter",
    fontSize: 13,
    lineHeight: "22px",
  },
  skillTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
  },
  skillTag: {
    color: "var(--text)",
    fontFamily: "Inter",
    fontSize: 13,
    lineHeight: 1,
    borderRadius: 999,
    padding: "10px 13px",
    border: "1px solid var(--line)",
    background: "var(--surface-chip)",
    transition: "all .25s ease",
    "&:hover": {
      color: "var(--accent)",
      borderColor: "var(--accent)",
      background: "var(--surface-strong)",
    },
  },
}));

export default function Skills() {
  const classes = useStyles();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container>
      <section className={classes.skillsArea} id="skills">
        <Container className={classes.customContainer}>
          <div className={classes.skillsContent}>
            <div>
              <Typography className={classes.subtitle} data-aos="fade-up">
                <CategoryIcon className={classes.subtitleIcon} />
                my skills
              </Typography>
              <Typography className={`scroll-animation ${classes.h1}`} data-aos="fade-up">
                My <span>Technology Stack</span>
              </Typography>
              <Typography className={classes.intro} data-aos="fade-up">
                A full-stack toolkit built around modern React products, reliable backend
                systems, AI integrations, and cloud services.
              </Typography>
            </div>

            <Grid container spacing={3}>
              {skillGroups.map((group, index) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  key={group.title}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                >
                  <div className={classes.groupCard} style={{ "--accent": group.accent }}>
                    <div className={classes.groupHeader}>
                      <group.Icon className={classes.groupIcon} />
                      <div>
                        <Typography className={classes.groupTitle}>{group.title}</Typography>
                        <Typography className={classes.groupDescription}>
                          {group.description}
                        </Typography>
                      </div>
                    </div>

                    <div className={classes.skillTags}>
                      {group.skills.map((skill) => (
                        <span key={skill} className={classes.skillTag}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </Container>
      </section>
    </Container>
  );
}
