import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { borderColor, textAlign } from '@material-ui/system';


const useStyles = makeStyles({
    cardStyle: {
        backgroundColor: "#FFFFFF",
        padding: 20
    },

    buttonStyle: {
        backgroundColor: "#0CAA41",
        marginTop: 20,
        color: 'white'

    },

    buttonStyle2: {
        border: '1px solid #0CAA41',
        marginRight: 20,
        marginTop: 20
    },
    videoSymbolStyle: {
        width: 33,
        height: 33,
        border: '1px solid #E5E5E5',

    },

    iconStyle: {
        width: 15,
        height: 21,

    },



    iconContainer: {
        width: 44,
        height: 44,
        display: 'flex',
        alignItems: 'center',
        border: 'solid 1px #E5E5E5',
        borderRadius: '50%',
        textAlign: 'left',
        justifyContent: 'center',
        marginRight: 20,

    },


    iconContainer2: {
        width: 44,
        height: 44,
        display: 'flex',
        alignItems: 'center',
        border: 'solid 1px #E5E5E5',
        borderRadius: '50%',
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: 40,

    },



    candidateSubtitleStyle: {
        color: "#DC9646"
    },

    locationContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20,
        textAlign: 'center'
    },
    captionStyle: {
        color: "#757575",
        textAlign: 'left'
    },
    footerBox: {
        display: 'flex',
        alignItems: 'left',
        textAlign: 'center',
        marginRight: 20,
    },
    captionStyle: {
        marginRight: 20,
    },
    candiateBox: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 20



    },

    buttonContainer: {
        display: 'flex',
        justifyContent: 'left',
        justifyItems: 'left'
    }



})



export default function CandidateCard() {
    const classes = useStyles();

    const [candiateName, setCandiateName] = useState("Cahitanya Kumar");
    const [jobId, setJobId] = useState("CIDAZ1123");
    const [location, setLocation] = useState("Hyderabad")
    const [experince, setExperience] = useState(2)
    const [age, setAge] = useState(25);
    const [skillScore, setSkillScore] = useState(85)


    return (
        <div className={classes.cardStyle}>
            <div className={classes.candiateBox}>
                <img src='/7ac15a9a95d1029d59e6bd07c9dd1436.png' />
                <div>
                    <Typography className={classes.CandidateNameStyle} variant='h5'> Chaitanya</Typography>
                    <Typography className={classes.candidateSubtitleStyle} variant='subtitle1'> CIDAZ1123</Typography>
                </div>
            </div>

            <div className={classes.locationContainer}>
                <div className={classes.iconContainer}>
                    <img className={classes.iconStyle} src='/maps-and-flags.svg' />
                </div>
                <div>
                    <Typography className={classes.captionStyle} variant='caption'> Location</Typography>
                    <Typography className={classes.captionStyle} variant='h6'> Hyderabad</Typography>
                </div>
            </div>


            <div className={classes.locationContainer}>
                <div className={classes.iconContainer}>
                    <img className={classes.iconStyle} src='/portfolio.svg' />
                </div>
                <div>
                    <Typography className={classes.captionStyle} variant='caption'> Experience</Typography>
                    <Typography className={classes.captionStyle} variant='h6'> 2 Years</Typography>
                </div>
            </div>


            <div>
                <div className={classes.footerBox}>
                    <Typography className={classes.captionStyle} variant='caption'> Age</Typography>
                    <Typography className={classes.captionStyle} variant='caption'> Skill Score</Typography>
                    <Typography className={classes.captionStyle} variant='caption'> Video Byte</Typography>
                </div>


                <div className={classes.footerBox}>
                    <Typography className={classes.captionStyle} variant='h6'> 25</Typography>
                    <Typography className={classes.captionStyle} variant='h6'> 85</Typography>
                    <div className={classes.iconContainer2}>
                        <img className={classes.iconStyle} src='/video-symbol-of-black-camera.svg' />
                    </div>
                </div>

            </div>


            <div className={classes.buttonContainer}>

                <Button className={classes.buttonStyle2} variant='outlined'>  Shortlist</Button>
                <Button className={classes.buttonStyle}>  Schedule interview</Button>

            </div>

        </div>
    )
}
