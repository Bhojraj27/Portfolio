import React, { useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Bynaus AI",
    company: "Walstar Technologies",
    type: "Construction SaaS",
    description:
      "Led full-stack development for a construction SaaS platform used by 500+ users, including AI companion features, workforce tracking, scheduled workflows, and document intelligence capabilities.",
    contribution:
      "Built scalable React and Node.js flows, integrated OpenAI, Gemini, LiteLLM, and Ragie, and delivered GPS workforce management, cron pipelines, and a PDF vector engine.",
    stack: ["React", "TypeScript", "Node.js", "AWS", "OpenAI", "Gemini"],
    links: [
      { label: "Landing page", href: "http://bynaus.ai" },
      { label: "Product app", href: "https://app.bynaus.ai" },
    ],
    featured: true,
  },
  {
    title: "YAU TeamUp",
    company: "Walstar Technologies",
    type: "Sports Management Platform",
    description:
      "Worked on a multi-portal sports management product designed for coordinated team, player, and administration workflows across different user roles.",
    contribution:
      "Contributed to modern frontend architecture, portal experiences, reusable UI patterns, and product flows for a responsive React-based application.",
    stack: ["React", "Tailwind CSS", "Firebase", "Responsive UI"],
  },
  {
    title: "Jeff Music Therapy Admin Panel",
    company: "Mobiloitte Technologies",
    type: "Admin Dashboard",
    description:
      "Built an operational admin interface for managing application workflows, records, and business-facing tasks in a structured dashboard environment.",
    contribution:
      "Developed React screens, integrated REST APIs, and supported reusable component patterns for a maintainable admin experience.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
];

const useStyles = makeStyles((theme) => ({
  portfolioArea: {
    paddingTop: "90px",
  },
  customContainer: {
    maxWidth: 1130,
    padding: "0 15px",
    margin: "auto",
  },
  subtitle: {
    fontFamily: "Inter !important",
    color: "var(--text)",
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
  },
  sectionHeader: {
    marginBottom: "53px",
    "& h1": {
      color: "var(--text)",
      fontSize: "clamp(2rem, 4vw, 3rem)",
      fontWeight: 300,
      fontFamily: "Inter",
      marginBottom: "16px",
      "& span": {
        color: "var(--primary_color)",
        marginLeft: "20px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "38px",
      },
    },
  },
  intro: {
    maxWidth: 620,
    color: "var(--muted)",
    fontSize: 15,
    lineHeight: "28px",
    fontFamily: "Inter",
  },
  ContentWidth: {
    maxWidth: 770,
    width: "100%",
    marginLeft: "auto",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "475px",
    },
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
  projectCard: {
    height: "100%",
    border: "1px solid var(--line)",
    borderRadius: 24,
    background: "linear-gradient(145deg, var(--surface), var(--surface-muted))",
    padding: "28px",
    position: "relative",
    overflow: "hidden",
    backdropFilter: "blur(18px)",
    transition: "all .3s ease",
    "&:hover": {
      transform: "translateY(-6px)",
      borderColor: "rgba(40,233,140,0.38)",
      boxShadow: "var(--panel_shadow)",
    },
  },
  featuredCard: {
    borderColor: "rgba(40,233,140,0.28)",
    "&:before": {
      content: '""',
      position: "absolute",
      inset: "0 0 auto 0",
      height: 3,
      background: "var(--primary_color)",
    },
  },
  projectMeta: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 18,
  },
  metaPill: {
    color: "var(--text-soft)",
    fontFamily: "Inter",
    fontSize: 12,
    lineHeight: 1,
    borderRadius: 999,
    padding: "9px 12px",
    border: "1px solid var(--line)",
    background: "var(--surface-chip)",
  },
  projectTitle: {
    color: "var(--text)",
    fontSize: 28,
    fontWeight: 300,
    fontFamily: "Inter",
    marginBottom: 12,
    [theme.breakpoints.down("xs")]: {
      fontSize: 24,
    },
  },
  projectDescription: {
    color: "var(--muted)",
    fontSize: 15,
    lineHeight: "28px",
    fontFamily: "Inter",
    marginBottom: 18,
  },
  contributionLabel: {
    color: "var(--primary_color)",
    fontSize: 12,
    lineHeight: 1,
    textTransform: "uppercase",
    fontFamily: "Inter",
    marginBottom: 10,
  },
  contribution: {
    color: "var(--text-soft)",
    fontSize: 15,
    lineHeight: "28px",
    fontFamily: "Inter",
    marginBottom: 22,
  },
  stackList: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 22,
  },
  stackItem: {
    color: "var(--text)",
    fontSize: 13,
    lineHeight: 1,
    borderRadius: 999,
    padding: "10px 13px",
    border: "1px solid var(--line)",
    background: "var(--surface-chip)",
    fontFamily: "Inter",
  },
  liveLink: {
    color: "var(--text)",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontSize: 13,
    textTransform: "uppercase",
    fontFamily: "Inter",
    transition: ".3s",
    "&:hover": {
      color: "var(--primary_color)",
    },
  },
  projectLinks: {
    display: "flex",
    flexWrap: "wrap",
    gap: 18,
  },
}));

export default function Portfolio() {
  const classes = useStyles();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container>
      <section className={`${classes.portfolioArea} page-section`} id="portfolio">
        <div className={classes.customContainer}>
          <div className={classes.ContentWidth}>
            <div>
              <Typography className={classes.subtitle} data-aos="fade-up">
                <i className={`las la-grip-vertical ${classes.subtitleIcon}`}></i>
                Portfolio
              </Typography>
              <div className={classes.sectionHeader}>
                <Typography variant="h1" data-aos="fade-up">
                  Featured<span>Projects</span>
                </Typography>
                <Typography className={classes.intro} data-aos="fade-up">
                  Selected product work across SaaS, sports management, and admin systems,
                  presented by impact, responsibility, and stack rather than screenshots.
                </Typography>
              </div>
            </div>

            <Grid container spacing={3}>
              {projects.map((project, index) => (
                <Grid
                  item
                  xs={12}
                  key={project.title}
                  data-aos={index % 2 === 0 ? "fade-up" : "fade-right"}
                >
                  <div
                    className={`${classes.projectCard} ${
                      project.featured ? classes.featuredCard : ""
                    }`}
                  >
                    <div className={classes.projectMeta}>
                      <span className={classes.metaPill}>{project.company}</span>
                      <span className={classes.metaPill}>{project.type}</span>
                    </div>

                    <Typography className={classes.projectTitle}>{project.title}</Typography>
                    <Typography className={classes.projectDescription}>
                      {project.description}
                    </Typography>

                    <Typography className={classes.contributionLabel}>Contribution</Typography>
                    <Typography className={classes.contribution}>
                      {project.contribution}
                    </Typography>

                    <div className={classes.stackList}>
                      {project.stack.map((skill) => (
                        <span key={skill} className={classes.stackItem}>
                          {skill}
                        </span>
                      ))}
                    </div>

                    {project.links && (
                      <div className={classes.projectLinks}>
                        {project.links.map((link) => (
                          <a key={link.label} href={link.href} className={classes.liveLink}>
                            {link.label} <i className="las la-arrow-right"></i>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </section>
    </Container>
  );
}
