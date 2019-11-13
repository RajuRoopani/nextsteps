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
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import ListItemText from "@material-ui/core/ListItemText";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  withRouter,
} from "react-router-dom";
import {
  LANDING_PAGE_ROUTE,
  EMPLOYER_HOME_ROUTE,
} from "../../../constants/routes";

// import "../assets/fonts/SFProDisplay-Bold.ttf";
// import "../assets/fonts/SFProDisplay-Medium.ttf";
// import "../assets/fonts/SFProDisplay-Semibold.ttf";
// import "../assets/fonts/SFProDisplay-Regular.ttf";

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1
  },
  topbarStyle: {
    // height: 100,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    //  flexGrow: 1,
    // justify:'left',
    textAlign: "left",
    paddingLeft: 16,
    fontWeight: 600,
    fontSize: 22,
    lineHeight: 3.05,
    color: (theme.palette.primary as unknown) as string,
  },

  companyLink: {
    fontWeight: 600,
    fontSize: 22,
    lineHeight: 3.05,
    color: "#0caa41",
  },

  link: {
    color: "#0caa41",
  },
  searchInput: {
    border: 1,
    flex: 1,
    textAlign: "left",
  },
  iconButton: {
    // padding: 10,
  },
  paper: {
    textAlign: "left",
    paddingLeft: 10,
  },
  iconStyle: {
    color: "gray",
    // marginRight: 25
  },
  avatar: {
    marginRight: 10,
    marginLeft: 10,
  },
  menuItemStyle: {
    marginLeft: 70,
  },
  leftPaddingStyle: {
    paddingLeft: 10,
  },
  accountLinksStyle: {
    color: "#0caa41",
    fontFamily: "SFProDisplay-Regular",
    fontWeight: "normal",
    fontSize: 18,
    marginLeft: 35,
    fontStyle: "normal",
    fontStretch: "normal",
  },

  accountLinksStyle2: {
    color: "#0caa41",
    fontFamily: "SFProDisplay-Regular",
    fontWeight: "normal",
    fontSize: 18,
    fontStyle: "normal",
    fontStretch: "normal",
    marginLeft: 35,
  },
}));

const HomeLink = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(
  (props, ref) => <RouterLink innerRef={ref} {...props} />
);

function TopBar(props: any) {
  const classes = useStyles();
  const preventDefault = (
    event: React.MouseEvent<HTMLBaseElement, MouseEvent>
  ) => event.preventDefault();
  const [anchorEl, setAnchorEl] = React.useState<any>(null);
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
      className={classes.topbarStyle}
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
      <Grid
        item
        xs={6}
        sm={3}
        md={5}
        container
        justify="space-between"
        alignItems="center"
      >
        <List className={classes.root}>
          <ListItem disableGutters>
            <ListItemText
              primary="Wayne Jordan"
              primaryTypographyProps={{ style: { fontSize: "15px" } }}
            />
            <Avatar
              onClick={handleClick}
              alt="Remy Sharp"
              src="https://via.placeholder.com/150"
              className={classes.avatar}
            />
          </ListItem>
        </List>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>
            <List className={classes.root}>
              <ListItem>
                <Avatar
                  onClick={handleClick}
                  alt="Remy Sharp"
                  src="https://via.placeholder.com/150"
                  className={classes.avatar}
                />
                <ListItemText primary="Wayne Jordan" secondary="Employee" />
              </ListItem>
            </List>
          </MenuItem>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem className={classes.accountLinksStyle}>
              <Link
                className={classes.accountLinksStyle}
                href="#"
                onClick={preventDefault}
              >Profile
              </Link>
            </ListItem>
            <ListItem className={classes.accountLinksStyle}>
              <Link
                className={classes.accountLinksStyle}
                href="#"
                onClick={preventDefault}
              >Account Settings
              </Link>
            </ListItem>
            <ListItem>
              <PowerSettingsNewOutlinedIcon style={{ color: "#AAB1B9" }} />
              <Link
                className={classes.accountLinksStyle}
                href="#"
                onClick={() => props.history.push("/")}
                // component={}
              >Logout</Link>
            </ListItem>
          </List>
        </Menu>
      </Grid>
    </Grid>
  );
}

export default withRouter(TopBar);
