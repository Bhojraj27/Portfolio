import React, { useEffect } from "react";
import AOS from "aos";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  Button,
  Typography,
  FormControl,
  Container,
} from "@material-ui/core";
import "aos/dist/aos.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
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
    "@media (min-width: 1440px)": {
      marginLeft: "234px",
      maxWidth: "880px",
    },
    "@media (min-width: 2560px)": {
      maxWidth: "2000px",
      alignItems: "center",
    },
  },
  contactArea: {
    marginTop: "90px !important",
    marginBottom: "90px",
  },
  sup: {
    color: "red",
  },
  i: {
    fontSize: 18,
    marginBottom: 2,
    color: "#fff",
  },
  input: {
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0,
  },
  ulabel: {
    color: "#fff",
    fontSize: "12px",
    textTransform: "uppercase",
    fontFamily: "Inter",
  },
  label: {
    color: "#fff",
    fontSize: "12px",
    marginBottom: "2px",
    textTransform: "uppercase",
    overflow: "hidden",
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    fontFamily: "Inter",
  },
  themeBtn: {
    background: "var(--primary_color)",
    color: "#000000",
    display: "inline-flex",
    alignItems: "center",
    textAlign: "center",
    padding: "11px 58px 10px 58px",
    borderRadius: "30px",
    fontFamily: "Inter !important",
    fontWeight: 400,
    justifyContent: "center",
    textTransform: "uppercase",
    ".& border": "none",
    transition: ".3s",
    cursor: "pointer",
    border: `2px solid var(--primary_color)`,
    "& i": {
      fontSize: "24px",
      marginRight: "10px",
      display: "block",
      marginBottom: "3px",
    },
    "&:hover": {
      background: "none",
      color: "#28e98c",
    },
    [theme.breakpoints.down("md")]: {
      padding: "11px 40px 10px 40px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "13px 20px",
      width: "100%",
    },
    marginTop: "30px",
    marginBottom: "30px",
  },
  error: {
    color: "red",
    fontSize: "12px",
    padding: 0,
  },
  successMsg: {
    display: "none",
    color: "green",
    fontSize: "14px",
    marginBottom: "10px",
  },
  h3: {
    fontSize: "24px",
    color: "#fff",
    fontWeight: 300,
    marginBottom: "50px",
  },
  placeholder: {
    color: "#666",
    "& .MuiOutlinedInput-input": {
      paddingLeft: 0,
      paddingTop: "10px",
    },
    ".& border": "none",
    "& .MuiInputBase-root": {
      color: "#999999",
      fontSize: "18px",
      fontFamily: "Inter",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "white",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottomColor: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
        border: "none",
      },
    },
  },
  span: {
    color: "#999999",
    textTransform: "none",
  },
  ilabel: {
    color: "gray !important",
  },

  select: {
    color: "#666",

    "&:focus": {
      background: "transparent",
    },
    "& .MuiOutlinedInput-input": {
      padding: "none",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
  inputLabel: {
    "&.MuiInputLabel-shrink": {
      transform: "translate(0)",
    },
  },
  h1: {
    fontSize: 48,
    color: "#fff",
    fontWeight: 300,
    marginBottom: 33,
    [theme.breakpoints.down("xs")]: {
      fontSize: "38px !important",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "48px !important",
    },
  },
  subtitle: {
    fontFamily: "Inter !important",
    color: "#fff",
    border: "1px solid #565656",
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
      color: "#fff",
      fontSize: 48,
      fontWeight: 300,
      fontFamily: "Inter",
      marginBottom: "33px",

      "& span": {
        color: "var(--primary_color)",
        marginLeft: "20px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "38px !important",
      },
    },
  },
}));

const Schema = yup.object().shape({
  fullName: yup
    .string()
    .matches(`^[A-Za-z]+(?: [A-Za-z]+)*$`, "Invalid fullname format")
    .min(2, "Please enter at least 1 character")
    .max(256)
    .required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  subject: yup.string().required("Subject is required"),
  budget: yup.string().matches(/^[0-9]+$/, "Budget must be a number"),
  message: yup.string().required("Message is required"),
});
const CustomSelect = (props) => {
  const classes = useStyles();

  return <Select className={classes.select} {...props} />;
};
export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  const classes = useStyles();
  const selectFontStyle = {
    fontFamily: "Inter !important",
    color: "#999",
    fontSize: "18px",
  };
  return (
    <Container>
      <section className={classes.contactArea}>
        <div className="custom-container">
          <div className={classes.ContentWidth}>
            <div>
              <Typography className={classes.subtitle} data-aos="fade-up">
                <i
                  className={`las la-grip-vertical ${classes.subTitleIcon}`}
                ></i>{" "}
                Portfolio
              </Typography>
              <div className={classes.sectionHeader}>
                <Typography variant="h1" data-aos="fade-up">
                  Let's Work<span>Together!</span>
                </Typography>
              </div>
            </div>
            <h3 className={classes.h3} data-aos="fade-up">
              hello@drake.design
            </h3>
            <ToastContainer />
            <Formik
              initialValues={{
                fullName: "",
                email: "",
                phoneNumber: "",
                subject: "",
                budget: "",
                message: "",
                file: null,
              }}
              validationSchema={Schema}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                toast.success("Your message was sent successfully.");
                resetForm();
              }}
            >
              {({ errors, touched }) => (
                <Form data-aos="fade-up">
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} lg={6}>
                      <Typography className={classes.ulabel}>
                        Full Name<sup className={classes.sup}>*</sup>
                      </Typography>
                      <Field
                        name="fullName"
                        className={classes.placeholder}
                        as={TextField}
                        id="full-name"
                        variant="outlined"
                        placeholder="Your Full Name"
                        fullWidth
                        error={touched.fullName && !!errors.fullName}
                      />
                      <div style={{ height: "10px" }}>
                        <ErrorMessage
                          name="fullName"
                          component="div"
                          className={classes.error}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                      <Typography className={classes.ulabel}>
                        Email <sup className={classes.sup}>*</sup>
                      </Typography>
                      <Field
                        sx={{ marginBottom: "10px" }}
                        type="email"
                        name="email"
                        variant="outlined"
                        className={classes.placeholder}
                        as={TextField}
                        id="email"
                        placeholder="Your email address"
                        fullWidth
                        error={touched.email && !!errors.email}
                      />
                      <div style={{ height: "10px" }}>
                        <ErrorMessage
                          name="email"
                          component="div"
                          className={classes.error}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                      <label className={classes.ulabel}>
                        Phone<span className={classes.span}>(Optional)</span>
                      </label>
                      <Field
                        type="text"
                        name="phoneNumber"
                        variant="outlined"
                        className={classes.placeholder}
                        as={TextField}
                        id="phone-number"
                        placeholder="Your phone number"
                        fullWidth
                        error={touched.phoneNumber && !!errors.phoneNumber}
                      />
                      <div style={{ height: "10px" }}>
                        <ErrorMessage
                          name="phoneNumber"
                          component="div"
                          className={classes.error}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                      <label className={classes.ulabel}>
                        Subject <sup className={classes.sup}>*</sup>
                      </label>
                      <FormControl variant="outlined" fullWidth>
                        <Field
                          name="subject"
                          className={`${classes.select}`}
                          as={CustomSelect}
                          displayEmpty
                          inputProps={{
                            "aria-label": "Select a subject",
                            style: selectFontStyle,
                          }}
                          fullWidth
                          error={touched.subject && !!errors.subject}
                        >
                          <MenuItem value="">Select a subject</MenuItem>
                          <MenuItem value="subject1">Subject 1</MenuItem>
                          <MenuItem value="subject2">Subject 2</MenuItem>
                          <MenuItem value="subject3">Subject 3</MenuItem>
                        </Field>
                        <div style={{ height: "10px" }}>
                          <ErrorMessage
                            name="subject"
                            component="div"
                            className={classes.error}
                          />
                        </div>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} lg={12} sm={12}>
                      <label className={classes.ulabel}>
                        Your budget
                        <span className={classes.span}>(Optional)</span>
                      </label>
                      <Field
                        type="number"
                        name="budget"
                        className={classes.placeholder}
                        as={TextField}
                        variant="outlined"
                        id="budget"
                        placeholder="A range budget for your project"
                        fullWidth
                        error={touched.budget && !!errors.budget}
                      />
                      <div style={{ height: "10px" }}>
                        <ErrorMessage
                          name="budget"
                          component="div"
                          className={classes.error}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <label className={classes.ulabel}>Message</label>
                      <Field
                        name="message"
                        className={classes.placeholder}
                        as={TextField}
                        id="message"
                        placeholder="Write your message here ..."
                        multiline
                        rows={6}
                        fullWidth
                        error={touched.message && !!errors.message}
                      />
                      <div style={{ height: "10px" }}>
                        <ErrorMessage
                          name="message"
                          component="div"
                          className={classes.error}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className={classes.label}>
                        <i
                          className={`las la-cloud-upload-alt ${classes.i}`}
                        ></i>
                        Add an attachment
                        <input
                          className={classes.input}
                          type="file"
                          name="file"
                        />
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        className={classes.themeBtn}
                        type="submit"
                        id="submit-form"
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </Container>
  );
}
