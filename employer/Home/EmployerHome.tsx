import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import Header from "../Header/Header";
import JobCard from "./../components/jobCard2";
import JobFilter from "./../components/jobfilter";
import { FormControl } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  MyjobsBody: {
    backgroundColor: "#F5F5F5",
  },
  MyjobsContainer: {
    margin: "3% 7%",
  },
  cardStyle: {},
}));

const openJobsList = new Array(12);
openJobsList.fill(1, 0);

export default function Myjobs() {
  const classes = useStyles();
  return (
    <div className={classes.MyjobsBody}>
      <Header />

      <div className={classes.MyjobsContainer}>
        <JobFilter />

        <Grid
          spacing={4}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {openJobsList.map((_item: number, index: number) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.cardStyle}
              key={index}
            >
              <JobCard />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
