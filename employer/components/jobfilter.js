import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select'
import { FormControl } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#F5F5F5"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    selectStyle:{
        width: "265px",
        height: "55px",
    },
    buttonStyle:{
        backgroundColor: "#0CAA41",
        color: 'white',
        width: "180px",
        height: "55px",
    },
    menuItemStyle:{
        backgroundColor: 'white'
    },
    headerFonts: {
        // fontSize:"32px",
        fontWeight: "bold"
    },
}))

export default function JobFilter(props) {
    const classes = useStyles();

    const [location, setLocation] = useState();
    const [postions, setPositon] = useState(props.position);
    const [experience, setExperience] = useState(props.experience);
    const [Applied, setApplied] = useState(props.applied);
    const [viewed, setViewed] = useState(props.viewed);
    const [saved, setSaved] = useState(props.saved)

    function handleLocationChange() {

    }

    function handleRoleChange() {

    }

    function handleIndustryChange() {

    }
    return (
            <Grid direction='row' container alignItems="center" align="center" justify="space-between" spacing={4}>
                <Grid  item alignItems="center" align="center" justify="flex-start" className={classes.gridItemStyle}>
                    <div className={classes.headerFonts} >Ongoing Jobs</div>
                </Grid>

                <Grid  item alignItems="center" align="center" justify="center" className={classes.gridItemStyle}>
                    <FormControl>
                        <Select className={classes.selectStyle} variant="outlined" labelId='industryLabel' id="industry" value={"Industry"} onChange={handleIndustryChange}>
                            <MenuItem value={'None'}>None</MenuItem>
                            <MenuItem value={'Industry'}>Industry</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid  item alignItems="center" align="center" justify="center" className={classes.gridItemStyle}>
                    <FormControl>
                        <Select className={classes.selectStyle} variant="outlined" labelId='Location' id="industry" value={"Location"} onChange={handleLocationChange}>
                            <MenuItem className= {classes.menuItemStyle} value={'Location'}>Hyderabad</MenuItem>
                            <MenuItem value={'Mumbai'}>Mumbai</MenuItem>
                            <MenuItem value={'Pune'}>Pune</MenuItem>
                            <MenuItem value={'Bangalore'}>Bangalore</MenuItem>
                            <MenuItem value={'Delhi'}>Delhi</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid  item alignItems="center" align="center" justify="center" className={classes.gridItemStyle}>
                    <FormControl>
                        <Select className={classes.selectStyle} variant="outlined" labelId='Location' id="industry" value={"Role"} onChange={handleRoleChange}>
                            <MenuItem value={'None'}> None</MenuItem>
                            <MenuItem value={'Role'}> Role</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid  item alignItems="center" align="center" justify="center" className={classes.gridItemStyle}>
                    <Button className={classes.buttonStyle} value="post job">Post Job</Button>
                </Grid>

            </Grid>



    )




}