import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Link } from "react-router-dom";
import { EMPLOYER_SIGNIN_ROUTE } from "../../../constants/routes";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/react-hooks";
import CustomizedReactSelect from "../../CustomizedReactSelect/CustomizedReactSelect";
import { ValueType, OptionTypeBase } from "react-select";

const SIGN_UP_MUTATION = gql`
  mutation EmployerSignup(
    $fName: String!
    $lName: String
    $email: String!
    $password: String!
    $mobile: String!
    $location: Int!
    $company: Int!
    $mobileVerified: Boolean!
    $emailVerified: Boolean!
    $createdBy: String!
    $createdTimeStamp: Date!
  ) {
    employerSignup(
      employerSignupInfo: {
        fName: $fName
        lName: $lName
        email: $email
        password: $password
        mobile: $mobile
        location: $location
        company: $company
        mobileVerified: $mobileVerified
        emailVerified: $emailVerified
        createdBy: $createdBy
        createdTimeStamp: $createdTimeStamp
      }
    ) {
      id
      fName
    }
  }
`;

const ADD_LOCATION_MUTATION = gql`
  mutation AddLocation(
    $createdTimeStamp: Date!
    $createdBy: String!
    $state: String!
    $district: String!
    $area: String!
  ) {
    addLocation(
      locationInfo: {
        state: $state
        district: $district
        area: $area
        createdTimeStamp: $createdTimeStamp
        createdBy: $createdBy
      }
    ) {
      id
    }
  }
`;

const ALL_STATES_QUERY = gql`
  query AllStates {
    states {
      state
    }
  }
`;

const DISTRICTS_BY_STATE_QUERY = gql`
  query DistrictsByState($state: String!) {
    districtsByState(state: $state) {
      district
    }
  }
`;

const AREAS_BY_DISTRICT_QUERY = gql`
  query AreasByDistrict($district: String!) {
    areasByDistrict(district: $district) {
      area
    }
  }
`;

const ALL_COMPANIES_QUERY = gql`
  query AllCompanies {
    allCompaniesFromList {
      id
      title
    }
  }
`;

const useStyles = makeStyles({
  card: {
    maxWidth: "100%",
    margin: "0px auto",
    display: "block",
    width: "500px",
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: "3rem",
    borderColor: "1px solid #EAEAEA",
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
    "@media (max-width: 580px) and (min-width: 320px) ": {
      padding: "1.5rem",
    },
  },
  card_center: {
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
  frgt_text: {
    textAlign: "right",
    color: "#0D0D0D",
    margin: "15px auto 0",
    fontWeight: 500,
  },
  b_text: {
    color: "#0D0D0D",
    margin: "15px auto 0",
    fontWeight: 500,
  },
  button: {
    border: "1px solid #0caa41",
    borderRadius: "10px",
    background: "#0caa41",
    padding: "1em",
    fontWeight: 400,
    color: "#FFFFFF",
    textAlign: "center",
    margin: "15px 0 0 0",
    verticalAlign: "middle",
    width: "100%",
    "&:hover": {
      background: "#0caa41 !important",
      color: "#FFFFFF !important",
    },
    "&:focus": {
      outline: "none !important",
    },
  },

  formControl: {
    minWidth: "100%",
    margin: "15px 0 0 0",
  },
});

interface Location {
  state: string;
  district: string;
  area: string;
}

function EmployerSignup() {
  const classes = useStyles();

  const [location, setLocation] = React.useState<any>({
    state: "",
    district: "",
    area: "",
  });
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [mobileVerified, setMobileVerified] = React.useState(true);
  const [emailVerified, setEmailVerified] = React.useState(false);
  const [createdBy, setCreatedBy] = React.useState("Narendra");
  const [company, setComponay] = React.useState("");
  // const [allStates, setAllStates] = React.useState([]);

  const inputLabel = React.useRef<any>(null);

  /**
   * gql queries and mutations
   */

  // queries
  const {
    loading: isAllStatesLoading,
    error: isAllStatesError,
    data: allStates,
  } = useQuery(ALL_STATES_QUERY);

  console.log(isAllStatesError, isAllStatesLoading, allStates);

  function structureAllState(data: any) {
    console.log(data);
    return data.map((option: any) => {
      return { label: option.state, value: option.state };
    });
  }

  const {
    loading: isDistrictsLoading,
    error: isDistrictsError,
    data: districtsByState,
  } = useQuery(DISTRICTS_BY_STATE_QUERY, {
    skip: location.state === "",
    variables: { state: location.state },
  });

  function structureDistrictsByState(data: any) {
    return data.districtsByState.map((district: any) => {
      return { label: district.district, value: district.district };
    });
  }

  console.log(isDistrictsLoading, isDistrictsError, districtsByState);

  const {
    loading: isAreaLoading,
    error: isAreaError,
    data: areasByDistrictData,
  } = useQuery(AREAS_BY_DISTRICT_QUERY, {
    skip: location.district === "",
    variables: { district: location.district },
  });

  function structureAreas(data: any) {
    return data.areasByDistrict.map((area: any) => {
      return { label: area.area, value: area.area };
    });
  }

  console.log(isAreaError, isAreaLoading, areasByDistrictData);

  const {
    loading: isAllCompaniesLoading,
    error: isAllCompaniesError,
    data: allCompanies,
  } = useQuery(ALL_COMPANIES_QUERY);

  console.log(allCompanies);

  const structureAllCompanies = (data: any) => {
    console.log(data);
    return data.allCompaniesFromList.map((company: any) => {
      return { label: company.title, value: company.title };
    });
  };

  const [employerSignup] = useMutation(SIGN_UP_MUTATION);
  const [addLocation] = useMutation(ADD_LOCATION_MUTATION);

  React.useEffect(() => {
    inputLabel.current && setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = (type: any) => (value: string) => {
    const locationCopy: any = { ...location };
    locationCopy[type] = value;
    setLocation(locationCopy);
  };

  async function handleSignup() {
    const signUpDetails = {
      fName: firstName,
      lName: lastName,
      email,
      password,
      mobile,
      mobileVerified,
      emailVerified,
      createdBy,
      createdTimeStamp: new Date().toISOString(),
      location: 1,
      company:
        allCompanies.allCompaniesFromList.findIndex(
          (companyItem: any) => companyItem.title === company
        ) + 1,
    };
    // console.log(signUpDetails);
    const locationDetails = {
      ...location,
      createdBy,
      createdTimeStamp: new Date().toISOString(),
    };
    // console.log(locationDetails);
    // const addLocationRes = await addLocation({ variables: locationDetails });
    // console.log(addLocationRes);
    // if (addLocationRes) {
    // signUpDetails.location = addLocationRes.data.addLocation.id;
    console.log(signUpDetails);
    const res = await employerSignup({ variables: signUpDetails as any });
    console.log(res);
    // }
  }

  return (
    <div className="container">
      <div className={classes.card_center}>
        <Card className={classes.card}>
          <div>
            <Typography className={classes.skill}>
              <Link to="/" style={{ textDecoration: "none" }}>
                Skill Exchange
              </Link>
            </Typography>
            <Typography className={classes.card_heading}>Sign Up</Typography>
          </div>
          <div>
            <TextField
              id="outlined-text-input"
              label="First Name"
              className={classes.textField}
              type="text"
              variant="outlined"
              value={firstName}
              onChange={(
                event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => setFirstName(event.target.value)}
            />

            <TextField
              id="outlined-text-input"
              label="Last Name"
              className={classes.textField}
              type="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(
                event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => setLastName(event.target.value)}
            />
            <TextField
              id="outlined-text-input"
              label="Email"
              className={classes.textField}
              type="Email"
              variant="outlined"
              value={email}
              onChange={(
                event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => setEmail(event.target.value)}
            />
            <TextField
              id="outlined-text-input"
              label="Mobile"
              className={classes.textField}
              type="text"
              variant="outlined"
              value={mobile}
              onChange={(
                event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => setMobile(event.target.value)}
            />
            <TextField
              id="outlined-text-input"
              label="Password"
              className={classes.textField}
              type="Password"
              variant="outlined"
              value={password}
              onChange={(
                event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => setPassword(event.target.value)}
            />

            <CustomizedReactSelect
              label="State"
              onChange={handleChange("state")}
              options={allStates ? structureAllState(allStates.states) : []}
              value={location.state}
            />

            <CustomizedReactSelect
              label="Select District/City"
              onChange={handleChange("district")}
              options={
                districtsByState
                  ? structureDistrictsByState(districtsByState)
                  : []
              }
              value={location.district}
            />

            <CustomizedReactSelect
              label="Select Area"
              onChange={handleChange("area")}
              options={
                areasByDistrictData ? structureAreas(areasByDistrictData) : []
              }
              value={location.area}
            />

            <CustomizedReactSelect
              label="Company Selection"
              onChange={value => {
                console.log(value);
                return setComponay(value);
              }}
              options={allCompanies ? structureAllCompanies(allCompanies) : []}
              value={company}
            />

            {/* <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel ref={inputLabel} id="demo-simple-select">
                State
              </InputLabel>
              <Select
                labelId="demo-simple-select"
                id="demo-simple-select"
                value={location.state}
                onChange={handleChange("state")}
                labelWidth={labelWidth}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>AP</MenuItem>
                <MenuItem value={20}>TS</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel ref={inputLabel} id="demo-simple-select">
                City
              </InputLabel>
              <Select
                labelId="demo-simple-select"
                id="demo-simple-select"
                value={location.city}
                onChange={handleChange("city")}
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
              <InputLabel ref={inputLabel} id="demo-simple-select">
                Area
              </InputLabel>
              <Select
                labelId="demo-simple-select"
                id="demo-simple-select"
                value={location.area}
                onChange={handleChange("area")}
                labelWidth={labelWidth}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Gachibowli</MenuItem>
                <MenuItem value={20}>Hitech city</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel ref={inputLabel} id="outlined-label">
                Company Selection
              </InputLabel>
              <Select
                labelId="outlined-label"
                id="outlined"
                value={company}
                onChange={e => setComponay(e.target.value as any)}
                labelWidth={labelWidth}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"WTA"}>WTA</MenuItem>
                <MenuItem value="google">Google</MenuItem>
              </Select>
            </FormControl> */}
          </div>
          <div>
            <Button className={classes.button} onClick={handleSignup}>
              sign up
            </Button>
          </div>
          <Typography>
            <Link to={EMPLOYER_SIGNIN_ROUTE}>
              Already signed up! Click here to Signin
            </Link>
          </Typography>
        </Card>
      </div>
    </div>
  );
}

export default EmployerSignup;
