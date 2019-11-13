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
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { blue } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import { fontWeight, textAlign } from "@material-ui/system";
import Icon from "@material-ui/core/Icon";
import MessageIcon from "@material-ui/icons/Message";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import PowerSettingsNewOutlinedIcon from "@material-ui/icons/PowerSettingsNewOutlined";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import {
  LANDING_PAGE_ROUTE,
  EMPLOYER_HOME_ROUTE,
} from "../../../constants/routes";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    //  flexGrow: 1,
    // justify:'left',
    textAlign: "left",
    padding: 16,
  },
  link: {
    color: "green",
    fontWeight: "bold",
  },
  searchInput: {
    border: 1,
    flex: 1,
    textAlign: "left",
  },
  iconButton: {
    padding: 10,
  },
  paper: {
    textAlign: "left",
    paddingLeft: 10,
  },
  iconStyle: {
    color: "gray",
    marginRight: 25,
  },
}));

const HomeLink = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(
  (props, ref) => <RouterLink innerRef={ref} {...props} />
);

export default function TopBar() {
  const classes = useStyles();
  const preventDefault = (event: React.MouseEvent) => event.preventDefault();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLButtonElement>(
    null
  );
  const [employeeName, setEmployeeName] = useState("Wayne Jordan");
  const [role, setRole] = useState("employee");

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid
      container
      spacing={1}
      justify="space-around"
      alignItems="center"
      direction="row"
    >
      <Grid item xs>
        <Typography className={classes.title}>
          <Link
            // onClick={preventDefault}
            className={classes.link}
            component={HomeLink}
            to={LANDING_PAGE_ROUTE}
          >
            Skill Exchange
          </Link>
        </Typography>
      </Grid>

      <Grid item xs>
        <Paper className={classes.paper}>
          <InputBase
            autoFocus={true}
            className={classes.searchInput}
            placeholder="Search skills, desigantion, role "
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
      <Grid item xs container justify="center" alignItems="center">
        <MessageIcon
          className={classes.iconStyle}
          style={{ textAlign: "center" }}
        />
        <Button
          className={classes.iconStyle}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          {employeeName}
          <ExpandMoreOutlinedIcon />
        </Button>
        <Typography
          variant={"subtitle1"}
          display="block"
          style={{ color: "#A6A7AD" }}
        >
          {"employee"}
        </Typography>
        <AccountCircleIcon />

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Account settings </MenuItem>
          <MenuItem onClick={handleClose}>
            <PowerSettingsNewOutlinedIcon style={{ color: "#AAB1B9" }} /> Logout{" "}
          </MenuItem>
        </Menu>
      </Grid>
    </Grid>
  );
}
