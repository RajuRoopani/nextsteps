import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "../assets/fonts/SFCompactDisplay-Light.ttf";
import "../assets/fonts/SFCompactDisplay-Medium.ttf";
import "../assets/fonts/SFCompactDisplay-Regular.ttf";
import "../assets/fonts/SFCompactDisplay-SemiBold.ttf";
// import JobCard from './jobfilter';

const useStyles = makeStyles(theme => ({
  card_ongoing_job: {
    boxShadow: "none",
    border: "2px solid #E5E5E5",
    borderRadius: "10px",
    padding: "20px",
    margin: "0 ",
  },
  card_ongoing_job_head_h1: {
    color: "#0D0D0D",
    fontSize: "22px",
    fontFamily: "SFCompactDisplay-Medium",
    margin: "0",
    padding: "5px 0",
    textAlign: "left",
  },
  card_ongoing_job_head_job_id: {
    color: "#DC9646",
    fontSize: "20px",
    fontFamily: "SFCompactDisplay-Regular",
    padding: "5px 0",
    textAlign: "left",
  },
  location: {
    display: "flex",
    margin: "20px 0px",
  },
  location_icon: {
    "& img": {
      width: "20px",
      height: "20px",
    },
    display: "flex",
    alignItems: "center",
    width: "20px",
    height: "20px",
    border: "1px solid #E5E5E5",
    borderRadius: "50%",
    padding: "10px",
  },
  location_icon_h3: {
    margin: "0",
    padding: "0px 0px 0px 20px",
    color: "#757575",
    fontSize: "18px",
    fontFamily: "SFCompactDisplay-Regular",
  },
  location_icon_typo: {
    margin: "0",
    padding: "0px 0px 0px 20px",
    color: "#0D0D0D",
    fontSize: "20px",
    fontFamily: "SFCompactDisplay-Regular",
  },

  position_icon: {
    display: "flex",
    margin: "20px 0px",
  },
  position_icon_img: {
    "& img": {
      width: "20px",
      height: "20px",
    },
    display: "flex",
    alignItems: "center",
    width: "20px",
    height: "20px",
    border: "1px solid #E5E5E5",
    borderRadius: "50%",
    padding: "10px",
  },
  position_icon_h3: {
    margin: "0",
    padding: "0px 0px 0px 20px",
    color: "#757575",
    fontSize: "18px",
    fontFamily: "SFCompactDisplay-Regular",
  },
  position_icon_typo: {
    margin: "0",
    padding: "0px 0px 0px 20px",
    color: "#0D0D0D",
    fontSize: "20px",
    fontFamily: "SFCompactDisplay-Regular",
  },

  experience_icon: {
    display: "flex",
    margin: "20px 0px",
  },
  experience_icon_img: {
    "& img": {
      width: "18px",
      height: "16px",
    },
    display: "flex",
    alignItems: "center",
    width: "20px",
    height: "20px",
    border: "1px solid #E5E5E5",
    borderRadius: "50%",
    padding: "10px",
  },
  experience_icon_h3: {
    margin: "0",
    padding: "0px 0px 0px 20px",
    color: "#757575",
    fontSize: "18px",
    fontFamily: "SFCompactDisplay-Regular",
  },
  experience_icon_typo: {
    margin: "0",
    padding: "0px 0px 0px 20px",
    color: "#0D0D0D",
    fontSize: "20px",
    fontFamily: "SFCompactDisplay-Regular",
  },
  card_ongoing_job_footer: {
    fontFamily: "SFCompactDisplay-Regular",
    color: "#1861C0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  card_ongoing_job_footer_applied: {
    "& h3": {
      margin: "5px",
    },
    "& p": {
      margin: "5px",
    },
    fontSize: "20px",
    width: "33%",
    textAlign: "center",
    borderRight: "1px solid #E5E5E5",
  },
  card_ongoing_job_footer_viewed: {
    "& h3": {
      margin: "5px",
    },
    "& p": {
      margin: "5px",
    },
    fontSize: "20px",
    width: "33%",
    textAlign: "center",
    borderRight: "1px solid #E5E5E5",
  },
  card_ongoing_job_footer_saved: {
    "& h3": {
      margin: "5px",
    },
    "& p": {
      margin: "5px",
    },
    width: "33%",
    textAlign: "center",
    fontSize: "20px",
  },
}));

export default function JobCard() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card_ongoing_job}>
        <div className={classes.card_ongoing_job_head}>
          <h1 className={classes.card_ongoing_job_head_h1}>
            Guest Relation <br></br>Executive
          </h1>
          <Typography className={classes.card_ongoing_job_head_job_id}>
            Job id -<span>12938A</span>{" "}
          </Typography>
        </div>
        <div className={classes.card_ongoing_job_body}>
          <div className={classes.location}>
            <span className={classes.location_icon}>
              <img src="../../images/maps-and-flags.svg" alt="icon"></img>
            </span>
            <div>
              <h3 className={classes.location_icon_h3}>Location</h3>
              <Typography className={classes.location_icon_typo}>
                Mumbai
              </Typography>
            </div>
          </div>

          <div className={classes.position_icon}>
            <span className={classes.position_icon_img}>
              <img src="../../images/man-user.svg" alt="icon"></img>
            </span>
            <div>
              <h3 className={classes.position_icon_h3}>Positions</h3>
              <Typography className={classes.position_icon_typo}>5</Typography>
            </div>
          </div>

          <div className={classes.experience_icon}>
            <span className={classes.experience_icon_img}>
              <img src="../../images/portfolio.svg" alt="icon"></img>
            </span>
            <div>
              <h3 className={classes.experience_icon_h3}>Experience</h3>
              <Typography className={classes.experience_icon_typo}>
                <span>2</span> Yrs
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.card_ongoing_job_footer}>
          <div className={classes.card_ongoing_job_footer_applied}>
            <h3>30</h3>
            <p>Applied</p>
          </div>
          <div className={classes.card_ongoing_job_footer_viewed}>
            <h3>87</h3>
            <p>Viewed</p>
          </div>
          <div className={classes.card_ongoing_job_footer_saved}>
            <h3>02</h3>
            <p>Saved</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
