import {  Box, Grid, makeStyles, withWidth,Typography } from "@material-ui/core";
import ExperienceTimeline from "../elements/timeline";

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 50,
    },
    title: {
        fontSize: 36,
        fontWeight: 700,
        fontFamily: 'Rubik'
    },
    serviceContainer: {
        marginTop: 20
    }

}));

export default function Experiences() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography
                className={classes.title}
                variant='h3'>
                Experiences
            </Typography>
            <ExperienceTimeline />
        </Box>
    )
}