import {  Box, Grid, makeStyles, withWidth,Typography, Paper } from "@material-ui/core";
import PaperWithImage from "../elements/paperWithBg";
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 50
    },
    title: {
        fontSize: 36,
        fontWeight: 700,
        fontFamily: 'Rubik'
    },
    techList : {
        padding: 0,
        marginTop:20,
        "& span": {
            marginLeft: 10,
            color:"#9DA8C7"
        }
    },
    projectTitle: {
        fontSize: 31,
        fontWeight: 600,
    },
    projectType:{
        fontSize: 17,
        marginTop: 40,
        [theme.breakpoints.down('md')]: {
            marginTop: 0,
        },
        fontWeight: 400,
        color: "#5FF1D0"
    },
    projectAnchor: {
        color: "#ccd6f6",
        textDecoration: "none",
        "&:hover" : {
            color: "#61F9D5"
        }
    },
    projectAnchorBox: {
        marginTop: 20,
        "& a": {
            marginLeft: 10,
            fontSize: 20,
            fontWeight: 400
        }
    },
    projectDetails: {
        borderRadius: 10,
        marginTop:20,
        padding:30,
        marginLeft:-150,
        backgroundColor: "#112240",
        color:"#9DA8C7"
    },
    projectDetailsLeft: {
        borderRadius: 10,
        marginTop:20,
        padding:30,
        marginRight:-150,
        backgroundColor: "#112240",
        color:"#9DA8C7"
    },

}));

function ProjectLeft(){
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row-reverse"
            justify="flex-start"
            alignItems="flex-start"
            spacing={3}
            className={classes.root}
        >
            <Grid item lg={7}  md={7} sm={7} xs={7}>
                <PaperWithImage
                    href=""
                    height="350px"
                    width='100%'
                    image="/images/iot_app_dev.jpg" />
            </Grid>
            <Grid item lg={5} md={5} sm={5} xs={5} style={{textAlign: 'left'}}>
                <Typography className={classes.projectType}>Featured Project</Typography>
                <Typography >
                    <a href="#" target="_blank" className={classes.projectTitle+" "+classes.projectAnchor}>Talking Glass</a>
                </Typography>
                <Paper elevation={9} className={classes.projectDetailsLeft}>
                    A nicer look at your GitHub profile and repository stats with data visualizations 
                    of your top languages and stars. Sort through your top repos by number of stars, 
                    forks, and size.
                </Paper>
                <Box className={classes.techList}>
                   <span>Python</span>
                   <span>Python</span>
                   <span>Python</span>
                   <span>Python</span>
                </Box>
                <Box className={classes.projectAnchorBox}>
                    <a href="#" target="_blank" className={classes.projectAnchor}> <GitHubIcon /></a>
                    <a href="#" target="_blank" className={classes.projectAnchor}> <LaunchRoundedIcon /></a>
                </Box>
            </Grid>
          
        </Grid>
    )
}

function ProjectRight() {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={3}
            className={classes.root}
        >
            <Grid item lg={7} md={7} sm={7} xs={7}>
                <PaperWithImage
                    href=""
                    height="350px"
                    width='100%'
                    image="/images/backend_dev.jpg" />
            </Grid>
            <Grid item lg={5} md={5} sm={5} xs={5} style={{textAlign: 'right'}}>
                <Typography className={classes.projectType}>Featured Project</Typography>
                <Typography >
                    <a href="#" target="_blank" className={classes.projectTitle+" "+classes.projectAnchor}>Talking Glass</a>
                </Typography>
                <Paper elevation={3} className={classes.projectDetails}>
                    A nicer look at your GitHub profile and repository stats with data visualizations 
                    of your top languages and stars. Sort through your top repos by number of stars, 
                    forks, and size.
                </Paper>
                <Box className={classes.techList}>
                   <span>Python</span>
                   <span>Python</span>
                   <span>Python</span>
                   <span>Python</span>
                </Box>
                <Box className={classes.projectAnchorBox}>
                    <a href="#" target="_blank" className={classes.projectAnchor}> <GitHubIcon /></a>
                    <a href="#" target="_blank" className={classes.projectAnchor}> <LaunchRoundedIcon /></a>
                </Box>
            </Grid>
        </Grid>
    )
}

function Project({leftAlign}){
    if (leftAlign === true) 
        return <ProjectLeft />
    return <ProjectRight />
}

export default withWidth()(Project);