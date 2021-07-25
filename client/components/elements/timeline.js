import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { blueGrey, green, grey, purple, yellow } from '@material-ui/core/colors';
import appConfig from "../../app.config.json";
import { Box, isWidthUp, withWidth } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        color: "#fff",
        borderRadius: 20,
        backgroundColor: grey[900],
    },
    date: {
        color: "#fff",
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    responsibility: {
        padding: 20,
    },
    timelineItemHeader: {
        borderBottom: "2px dotted "+ grey[100],
        padding: '6px 16px',
        backgroundColor: blueGrey[800],
        borderRadius: 20,
        'box-shadow': '2px 3px 3px 3px rgba(123,110,110,.5)',
        '-webkit-box-shadow': '2px 3px 3px 3px rgba(123,110,110,.35)',
        '-moz-box-shadow': '2px 3px 3px 3px rgba(123,110,110,.5)',
    }
}));

const TimelineForMobile = () => {
    const classes = useStyles();

    return (
        <Box>
            {
                appConfig.experiences.map( (experience,i) => (
                    <Paper elevation={3} style={{marginTop:30}} className={classes.paper}>
                        <Typography className={classes.timelineItemHeader} variant="h6" component="h1">
                            {
                                experience.employee 
                            }
                            <a style={{color: green[500],marginLeft: 15,marginRight: 20}} target="_blank" href={experience.employeeRef}>@</a>
                            <span style={{fontSize:11}}>{experience.joinDate + " - " + experience.toDate}</span>

                            <span style={{display: 'block',fontSize: 12}}>{experience.jobTitle}</span>
                        </Typography>
                        <Typography className={classes.responsibility}>
                            {
                                experience.experience
                            }
                            {
                                experience.responsibilities.map((res,key) => (
                                    <span style={{display: "block" , marginTop: 10,marginLeft: 20}} key={key}> * {res} </span> 
                                ))
                            }
                        </Typography>
                    </Paper>
                ))
            }
        </Box>

    )
}

function TimelineForLarge() {
    const classes = useStyles();

    return (
        <Timeline align="alternate" >
            {
                appConfig.experiences.map( (experience,i) => (
                    <TimelineItem key={i}>
                        <TimelineOppositeContent>
                            <Typography variant="body2" className={classes.date}>
                                {experience.joinDate + " - " + experience.toDate}
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot>
                                <LaptopMacIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography className={classes.timelineItemHeader} variant="h6" component="h1">
                                {
                                    experience.employee 
                                }
                                <a style={{color: green[500],marginLeft: 15}} target="_blank" href={experience.employeeRef}>@</a>
                                <span style={{display: 'block',fontSize: 12}}>{experience.jobTitle}</span>
                            </Typography>
                            <Typography className={classes.responsibility}>
                                {
                                    experience.experience
                                }
                                {
                                    experience.responsibilities.map((res,key) => (
                                        <span style={{display: "block" , marginTop: 10,marginLeft: 20}} key={key}> * {res} </span> 
                                    ))
                                }
                            </Typography>
                        </Paper>
                        </TimelineContent>
                    </TimelineItem>
                ))
            }
        </Timeline>
    );
}

function ExperienceTimeline(props) {
    return(
        <Box>
            {
                isWidthUp('sm',props.width) ? <TimelineForLarge /> : <TimelineForMobile />
            }

        </Box>

    )
}


export default withWidth()(ExperienceTimeline);