import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  ListItem,
  List,
  createStyles,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    list: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
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
      // fontSize: "20px",
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
      // fontSize: "20px",
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
      // fontSize: "20px",
    },
  })
);

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Title Goes here
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Word of the Day
        </Typography>

        <List className={classes.list}>
          {[1, 2, 3].map(item => (
            <ListItem key={item}>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
          ))}
        </List>
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
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
