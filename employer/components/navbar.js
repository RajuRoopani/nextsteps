import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import TopBar from "./topbar";
import Paper from "@material-ui/core/Paper";
// import FourSquareImg from '../../public/vertical_align_center_black_24x24.png'
import Box from "@material-ui/core/Box";
import "../assets/fonts/SFCompactDisplay-Light.ttf";
import "../assets/fonts/SFCompactDisplay-Medium.ttf";
import "../assets/fonts/SFCompactDisplay-Regular.ttf";
import "../assets/fonts/SFCompactDisplay-SemiBold.ttf";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#F5F5F5",
    height: "74px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkStyle: {
    flex: 1,
  },
  appBarStyle: {
    backgroundColor: "white",
  },

  gridItemStyle: {},

  fourSquareBox: {
    width: 20,
    height: 20,
    backgroundImage: "url(four-squares-with-frame-shape.svg)",
    marginRight: 10,
  },
  gridItemStyle: {
    border: 1,
    borerStyle: "solid",
    backgroundColor: "white",
    height: "100%",
    borderRightColor: "#F5F5F5",
  },
}));

export default function AppNavBar() {
  const classes = useStyles();

  const FourSquareImgDiv = (
    <div className={classes.fourSquareBox}>
                <img src={require("../assets/icons/foursquares.png")}></img>
              </div>
  );

  return (

    <Grid container>
      <div className={classes.root}>
      <AppBar position="static" className={classes.appBarStyle}>

      <Tabs value={1}  aria-label="simple tabs example">
        <Tab label="Item One" />
        <Tab label="Item Two"  />
        <Tab label="Item Three"  />
      </Tabs>
      </AppBar>
      </div>
      <AppBar position="static" className={classes.appBarStyle}>

     
        <Paper>
          <Grid
            container
            className={classes.root}
            align="center"
            justify="space-around"
            alignItems="center"
            style={{ height: "74px" }}
            spacing={1}
          >
            <Grid
              container
              alignItems="center"
              align="center"
              justify="center"
              item
              xs
              style={{ backgroundColor: "#0CAA41", height: 74 }}
            >
              {FourSquareImgDiv}
              <Link color="white" style={{ color: "white" }}>
                Home
              </Link>
            </Grid>
            <Grid
              item
              xs
              container
              alignItems="center"
              align="center"
              justify="center"
              className={classes.gridItemStyle}
            >
              {FourSquareImgDiv}
              <Link
                href="/myjobs"
                color="#404040"
                style={{ textAlign: "center" }}
              >
                My Jobs
              </Link>
            </Grid>

            <Grid
              item
              xs
              container
              alignItems="center"
              align="center"
              justify="centerd"
              className={classes.gridItemStyle}
            >
              {FourSquareImgDiv}
              <Link color="#404040">Interviews</Link>
            </Grid>

            <Grid
              item
              xs
              container
              alignItems="center"
              align="center"
              justify="center"
              className={classes.gridItemStyle}
              spacing={3}
            >
              {FourSquareImgDiv}
              <Link color="#404040">Onboarding process</Link>
            </Grid>

            <Grid
              item
              xs
              container
              alignItems="center"
              align="center"
              justify="center"
              className={classes.gridItemStyle}
            >
              {FourSquareImgDiv}
              <Link color="#404040">Skill Request</Link>
            </Grid>
            <Grid
              item
              xs
              container
              alignItems="center"
              align="center"
              justify="center"
              className={classes.gridItemStyle}
            >
              {FourSquareImgDiv}
              <Link color="#404040">User Management</Link>
            </Grid>
          </Grid>
        </Paper>
      </AppBar>
    </Grid>
  );
}
