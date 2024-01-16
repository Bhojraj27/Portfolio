
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    servicesArea: {
        paddingTop: '50px',
        paddingBottom:'50px',
    },
    items:{
        border: '1px solid #565656',
        borderRadius: '20px',
        transition: '.3s',
        position: 'relative',
        padding: '44px 48px 41px 48px',
        marginBottom: '10px',
      
         '&:last-child': {
                marginBottom: 0,
            },
            '& h2': {
                fontSize: '24px',
                fontWeight: 300,
                marginBottom: '8px',
                color: '#fff',
                [theme.breakpoints.down("md")]: {
                    fontSize: '20px',
                },
            },
            '& h2 a': {
                color: '#fff',
                transition: '.3s',
            },
            '&:hover': {
                borderColor:'# 28e98c',
            },
            '&:hover h2 a': {
                color:'# 28e98c',
            },
            '& p': {
                fontSize: '14px',
                color: '#999999',
                marginBottom: '30px',
                [theme.breakpoints.down("md")]: {
                    fontSize:'14px'
                }
            },
            '& .projects': {
                fontSize: '12px',
                color: '#fff',
                textTransform: 'uppercase',
                display: 'inline-block',
            },
            '&:hover .projects': {
                textDecoration: 'underline',
            },
            '& i': {
                position: 'absolute',
                fontSize: '30px',
                color: '# 28e98c',
                top: '45px',
                right: '45px',
                [theme.breakpoints.down("sm")]: {
                    top:'45px',
                    right:'24px'
                },
                [theme.breakpoints.down("md")]: {
                    top: '20px',
                    right: '25px',
                    fontSize: '24px',
                },},
    
    },
    items1:{
        border: '1px solid #565656',
        borderRadius: '20px',
        transition: '.3s',
        position: 'relative',
        padding: '44px 48px 41px 48px',
        marginBottom: '10px',
        [theme.breakpoints.down("md")]: {
            padding:" 38px 38px 25px 40px",  
        },
         '&:last-child': {
                marginBottom: 0,
            },
            '& h2': {
                fontSize: '24px',
                fontWeight: 300,
                marginBottom: '8px',
                color: '#fff',
                [theme.breakpoints.down("md")]: {
                    fontSize: '20px',
                },
            },
            '& h2 a': {
                color: '#fff',
                transition: '.3s',
            },
            '&:hover': {
                borderColor:'var(--primary_color)',
            },
            '&:hover h2 a': {
                color: "var(--primary_color)",

            },
            '& p': {
                fontSize: '14px',
                color: '#999999',
                marginBottom: '30px',
                [theme.breakpoints.down("md")]: {
                    fontSize:'14px'
                }
            },
            '& .projects': {
                fontSize: '12px',
                color: '#fff',
                textTransform: 'uppercase',
                display: 'inline-block',
            },
            '&:hover .projects': {
                textDecoration: 'underline',
            },
            '& i': {
                position: 'absolute',
                fontSize: '30px',
                color: "var(--primary_color)",
                top: '45px',
                right: '45px',
                [theme.breakpoints.down("sm")]: {
                    top:'45px',
                    right:'24px'
                },
                [theme.breakpoints.down("md")]: {
                top: '20px',
                right: '25px',
                fontSize: '24px',
            },},
    
    },

    h1: {
        color: "#fff",
        fontSize: 48,
        fontWeight: 300,
        marginBottom: 33,
        fontFamily: "Inter",
        [theme.breakpoints.down("xs")]: {
          fontSize:"38px !important"
        },},

    ContentWidth: {
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
       
           '@media (min-width: 1440px)': {
            marginLeft:"234px",
            maxWidth:"880px",
          },
          '@media (min-width: 2560px)': {
            maxWidth:"2000px",
            alignItems:"center",
        },
      },
    subTitle: {
        fontFamily:"Inter !important",
        color:' #fff',
        border: '1px solid #565656',
        margin: '0 0 53px',
        display: 'inline-flex',
        padding: '9px 20px',
        fontSize: '12px',
        alignItems: 'center',
        fontWeight: 300,
        borderRadius:' 30px',
        textTransform: 'uppercase',
        
    },
    subTitleIcon: {
        fontSize: '14px',
        marginBottom: '1px',
        marginRight: '10px',
    },
    span: {
        color: "var(--primary_color)",
    },
    customContainer: {
        margin: 'auto',
        maxWidth: '1130px',
        padding: '0 15px',
    },
}));
const Services = () => {
    const classes = useStyles();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
       <Container>
         <section className={`${classes.servicesArea} page-section`} id="services">
            <div className={classes.customContainer}>
                <div className={`${classes.servicesContent} ${classes.ContentWidth}`}>
                    <div className={`section-header ${classes.contentWidth}`}>
                    <Grid container spacing={3}>
                     <Grid item sm={12} md={12} lg={12} data-aos="fade-right" >
                        <Typography className={classes.subTitle} data-aos="fade-up">
                            <i className={`las la-stream ${classes.subTitleIcon}`} />
                            Services
                        </Typography>
                        <Typography className={`scroll-animation ${classes.h1}`} data-aos="fade-up">
                            My <span className={classes.span}>Specializations</span>
                        </Typography>

                        </Grid>
                        </Grid>
                    </div>
           
                    <Grid container spacing={2} >
                     <Grid item xs={12} sm={12} md={4} lg={12}  data-aos="fade-up" >
                      <div className={classes.items1} >
                      <i className="las la-bezier-curve" />
                            <h2>Website Development</h2>
                            <p >I created responsive website like admin panels, landing pages, user panels,portfolios by using react, material-ui.</p>
                            <span className="projects">5+ live Projects</span>
                      </div>
                        </Grid>
                        
                     {/* <Grid item xs={12} sm={12} md={4} lg={12} data-aos="fade-up" >
                     <div className={classes.items1} >
                     <i className="las la-code"></i>
                            <h2>Development</h2>
                            <p>I build websites using Framer, Webflow, or WordPress</p>
                            <span className="projects">126 Projects</span>
                            </div>
                        </Grid>
                        <Grid item xs={12}sm={12} md={4} lg={12} data-aos="fade-up" >
                        <div className={classes.items1} >
                            <i className="las la-bezier-curve" />
                            <h2>SEO/Marketing</h2>
                            <p>Increase website traffic with SEO optimization</p>
                            <span className="projects">8 Projects</span>
                            </div>
                        </Grid> */}
                    </Grid>
                </div>
            </div>
        </section>
       </Container>
    );
};

export default Services;
