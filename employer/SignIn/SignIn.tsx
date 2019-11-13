import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import {
  EMPLOYER_SIGNUP_ROUTE,
  EMPLOYER_HOME_ROUTE,
} from "../../../constants/routes";

const useStyles = makeStyles({
  card: {
    maxWidth: "100%",
    margin: "0px auto",
    display: "block",
    width: 400,
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: "3rem",
    borderColor: "1px solid #EAEAEA",
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
    "@media (max-width: 580px) and (min-width: 320px) ": {
      padding: "1.5rem",
    },
  },
  cardCenter: {
    display: "flex",
    alignItems: "center",
    height: "100vh",
  },
  skill: {
    border: "1px solid #E2E2E2",
    maxWidth: "80%",
    padding: "10px !important",
    margin: "0 auto",
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important",
    borderRadius: "50rem !important",
    display: "block",
    width: "100%",
    fontWeight: 500,
    color: "#212529",
    textAlign: "center",
    fontSize: "26px",
    background: "#fff",
    "@media (max-width: 580px) and (min-width: 320px) ": {
      fontSize: "18px",
    },
  },
  card_heading: {
    color: "#1F2C41",
    fontSize: "18px",
    textAlign: "center",
    margin: "30px auto 5px auto",
    display: "block",
    fontWeight: 500,
  },
  textField: {
    width: "100%",
    color: "#757575",
    margin: "15px 0 0 0",
  },
  frgtText: {
    textAlign: "right",
    color: "#0D0D0D",
    margin: "15px auto 0",
    fontWeight: 500,
  },
  bText: {
    color: "#0D0D0D",
    margin: "15px auto 0",
    fontWeight: 500,
  },
  button: {
    // border: "1px solid #0caa41",
    // borderRadius: "10px",
    padding: "1em",
    // fontWeight: 400,
    // textAlign: "center",
    margin: "15px 0 15px 0",
    // verticalAlign: "middle",
    // width: "100%",
  },
  formControl: {
    minWidth: "100%",
    margin: "15px 0 0 0",
  },
});

const LOGIN_QUERY = gql`
  query LoginQuery($email: String!, $password: String!) {
    verifyEmployerLogin(email: $email, password: $password)
  }
`;

function EmployerSignIn(props: any) {
  const classes = useStyles();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginAttempted, setLoginAttempeted] = useState(false);

  const { loading, error, data } = useQuery(LOGIN_QUERY, {
    skip: !loginAttempted,
    variables: {
      email,
      password,
    },
    onCompleted: data => {
      handleSignIn();
    },
  });

  function handleSignIn() {
    if (data.verifyEmployerLogin) {
      props.history.replace(EMPLOYER_HOME_ROUTE);
    } else {
      setLoginAttempeted(false);
    }
  }

  return (
    <div>
      <div className={classes.cardCenter}>
        <Card className={classes.card}>
          <div>
            <Typography className={classes.skill}>
              <Link to="/" style={{ textDecoration: "none" }}>
                Skill Exchange
              </Link>
            </Typography>
            <Typography className={classes.card_heading}>Sign in</Typography>
          </div>
          <div>
            <TextField
              id="outlined-text-input"
              label="User ID/Mobile number"
              className={classes.textField}
              type="tel"
              variant="outlined"
              value={email}
              onChange={(
                event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => setEmail(event.target.value)}
            />

            <TextField
              id="outlined-password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              variant="outlined"
              value={password}
              onChange={(
                event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => setPassword(event.target.value)}
            />
            <Typography className={classes.frgtText}>
              Forgot Password?
            </Typography>
          </div>
          <div>
            <Button
              className={classes.button}
              onClick={() => setLoginAttempeted(true)}
              color="primary"
              variant="contained"
              fullWidth
            >
              Sign in
            </Button>
          </div>
          {data && !data.verifyEmployerLogin && (
            <Typography variant="subtitle1" color="error" align="center">
              Email or password incorrect.
            </Typography>
          )}
          <Typography>
            <Link to={EMPLOYER_SIGNUP_ROUTE}>
              Not singed up yet! Click here to Sign up
            </Link>
          </Typography>
        </Card>
      </div>
    </div>
  );
}

export default EmployerSignIn;
