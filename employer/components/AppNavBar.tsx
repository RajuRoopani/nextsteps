import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Tabs, Tab } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import { default as _ } from "lodash";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { HeaderMenuViews } from "../../../constants/HeaderMenuConstants";

const theme = createMuiTheme({
  overrides: {
    MuiTab: {
      root: {
        backgroundColor: "#ffffff",
        color: "#0caa41",
      },
      wrapper: {
        flexDirection: "inherit",
      },
      labelIcon: {
        alignContent: "center",
        color: "#0caa41",
      },
    },
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    height: "55px",
    color: "#0caa41",
  },
  tab: {
    color: "#0caa41",
    "&$selected": {
      backgroundColor: "blue",
      color: "#FFFFFF",
    },
  },
  root2: {
    backgroundColor: theme.palette.background.paper,
    // marginLeft: 75,
    // marginRight: 75,
  },
  indicator: {
    backgroundColor: "#0caa41",
    color: "#0caa41",
  },
  inkBarStyle: {
    backgroundColor: "#0caa41",
    color: "#0caa41",
  },
  fourSquareBox: {
    width: 10,
    height: 10,
    backgroundImage: "url(four-squares-with-frame-shape.svg)",
    marginRight: 10,
  },
}));

export const FourSquareImg = React.memo(function FourSquareImg1() {
  const style = {
    width: 12,
    height: 12,
    marginRight: 10,
  };
  return (
    <div>
      <img style={style} src={require("../assets/icons/foursquares.png")}></img>
    </div>
  );
});

export default function AppNavBar() {
  const classes = useStyles();

  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root2}>
      <AppBar position="static" className={classes.root}>
        <ThemeProvider theme={theme}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#0caa41",
                color: "#0caa41",
              },
            }}
            textColor="primary"
            aria-label="Header Navigation"
            centered
            classes={{
              indicator: classes.indicator,
            }}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab disabled />
            {Object.values(HeaderMenuViews).map(key => {
              return (
                <Tab
                  icon={<FourSquareImg />}
                  label={<span className={classes.tab}>{key}</span>}
                  textColor="inherit"
                />
              );
            })}
            <Tab disabled />
          </Tabs>
        </ThemeProvider>
      </AppBar>
    </div>
  );
}
