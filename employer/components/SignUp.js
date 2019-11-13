import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
  card: {
    maxWidth: '100%',
    margin: '0px auto',
    display: 'block',
    width: '500px',
    backgroundColor: '#fff',
    borderRadius: '20px',
    padding: '3rem',
    borderColor: '1px solid #EAEAEA',
    boxShadow:    '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
    '@media (max-width: 580px) and (min-width: 320px) ': {
      padding: '1.5rem',
    },
  },
  card_center : {
    display: 'flex',
    alignItems: 'center',
    height: '100vh'
  },
  skill: {
    border: '1px solid #E2E2E2',
    maxWidth: '80%',
    padding: '10px !important',
    margin: '0 auto',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important',
    borderRadius: '50rem !important',
    display: 'block',
    width: '100%',
    fontWeight: 500,
    color: '#212529',
    textAlign:'center' ,
    fontSize: '26px',
    background: '#fff',
    '@media (max-width: 580px) and (min-width: 320px) ': {
      fontSize: '18px',
    },
  },
  card_heading: {
    color: '#1F2C41',
    fontSize: '18px',
    textAlign: 'center',
    margin: '30px auto 5px auto',
    display: 'block',
    fontWeight: 500,
  },
  textField: {
    width: '100%',
    color: '#757575',
    margin: '15px 0 0 0'
  },
  frgt_text: {
    textAlign: 'right',
    color: '#0D0D0D',
    margin: '15px auto 0',
    fontWeight: 500,
  },
  b_text: {
    color: '#0D0D0D',
    margin: '15px auto 0',
    fontWeight: 500,
  },
  button: {
    border: '1px solid #0caa41',
    borderRadius: '10px',
    background: '#0caa41',
    padding: '1em',
    fontWeight: 400,
    color: '#FFFFFF',
    textAlign: 'center',
    margin: '15px 0 0 0',
    verticalAlign: 'middle',
    width: '100%',
    '&:hover': {
      background: '#0caa41 !important' ,
      color: '#FFFFFF !important',
    },
    '&:focus': {
      outline: 'none !important' ,
    },

  },

  formControl: {
    minWidth: '100%',
    margin: '15px 0 0 0'
  },
  
});


function SignUp() {
  const classes = useStyles();

  const [age, setAge] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setAge(event.target.value);
  };
  return (
    <div className="container">
      <div className={classes.card_center}>
        

        {/* sign up */}
        <Card className={classes.card}>
          <div>
              <Typography href="#" className={classes.skill}>Skill Exchange</Typography>  
              <Typography className={classes.card_heading}>Sign Up</Typography>              
          </div>
          <div>
            <TextField
              id="outlined-text-input"
              label="First Name"
              className={classes.textField}
              type="text"
              variant="outlined"
            />

            <TextField
            id="outlined-text-input"
            label="Last Name"
            className={classes.textField}
            type="Last Name"
            variant="outlined"
            
          />  
            <TextField
            id="outlined-text-input"
            label="Email"
            className={classes.textField}
            type="Email"
            variant="outlined"
          />  

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} id="demo-simple-select">
            Location
            </InputLabel>
            <Select
              labelId="demo-simple-select"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
              labelWidth={labelWidth}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Hyderabad</MenuItem>
              <MenuItem value={20}>Delhi</MenuItem>
            </Select>
          </FormControl> 

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} id="outlined-label">
            Company Selection
            </InputLabel>
            <Select
              labelId="outlined-label"
              id="outlined"
              value={age}
              onChange={handleChange}
              labelWidth={labelWidth}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>WTA</MenuItem>
              <MenuItem value={20}>Google</MenuItem>
            </Select>
          </FormControl> 
          </div>
          <div>
          <Button className={classes.button}>
            Login
          </Button>
          </div>
        </Card>
        {/* sign up end */}
      
      </div>
    </div>
  );
}

export default SignUp;
