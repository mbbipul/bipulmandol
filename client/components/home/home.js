import { Avatar, Box, Button, ButtonGroup, Container, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import appConfig from "../../app.config.json";
import Typed from 'react-typed';
import { blue, green, purple, yellow } from "@material-ui/core/colors";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import { createMuiTheme, responsiveFontSizes,ThemeProvider, withStyles  } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const HireMe = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        padding: "12px 100px",
        fontSize: 16,
        borderRadius: 30,
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
        [theme.breakpoints.down('sm')]: {
            padding: "8px 50px",
            fontSize: 13,
            borderRadius: 20,
        },
        transition : 'all .5s ease-in-out'

    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100%',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        // flexDirection: 'column',
        position: 'relative',
        left: '50%!important',
        top: '45%',
        transform: 'translate(-50%, 45%)!important'
    },
    myImage : {
        width: 150,
        height: 150,
        boxShadow: '0 5px 15px 0px rgba(255, 255, 255, 0.6)',
        border: '5px solid white',
        borderRadius: "50%",

    },
    role : {
        color: green[500],
        fontFamily: 'Sofia',
        fontSize: 35,
        [theme.breakpoints.only('md')]: {
            color: 'yellow',
            fontSize: 25
        },
        [theme.breakpoints.down('sm')]: {
            color: 'yellow',
            fontSize: 12
        },
        [theme.breakpoints.up('lg')]: {
            color: green[500],
            fontSize: 35
        },
		transition : 'all .5s ease-in-out'
        
    },
    socialMediaIcon: {
        height: 30,
        width: 30, 
        color: 'white',
        [theme.breakpoints.down('md')]: {
            height: 20,
            width: 20,
        },
        "&:hover": {
            color: "#FFD15C"
        },
        transition : 'all .5s ease-in-out'

    }
}));

export default function Home () {
    const classes = useStyles();

    return (
        <Box>
            <Container className={classes.container}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        <Avatar alt={appConfig.author} src={appConfig.profileImageUrl} className={classes.myImage} />
                    </Grid>
                    <Grid item>
                        <ThemeProvider theme={theme}>
                            <Typography variant='h3'>Bipul Mandol</Typography>

                        </ThemeProvider>
                    </Grid>
                    <Grid item>
                        <Typed
                            className={classes.role}
                            loop
                            strings={appConfig.role}
                            typeSpeed={40}/>                        
                    </Grid>
                    <Grid style={{marginTop: 30}} item>
                        <ButtonGroup  variant="text" color="primary" aria-label=" button ">
                            <Link href={"https://github.com/"+appConfig.socialMediaUserId.github} target="_blanck">   
                                <GitHubIcon className={classes.socialMediaIcon}/>
                            </Link>
                            <Link href={"https://www.linkedin.com/in/"+appConfig.socialMediaUserId.linkedin} target="_blanck">   
                                <LinkedInIcon className={classes.socialMediaIcon}/>
                            </Link>
                            <Link href={"https://www.facebook.com/"+appConfig.socialMediaUserId.facebook} target="_blanck">   
                                <FacebookIcon className={classes.socialMediaIcon}/>
                            </Link>
                            <Link href={"https://www.instagram.com/"+appConfig.socialMediaUserId.instragram} target="_blanck">   
                                <InstagramIcon className={classes.socialMediaIcon}/>
                            </Link>

                        </ButtonGroup>
                    </Grid>
                    <Grid item style={{marginTop: 30}}>
                        <HireMe>Hire me</HireMe>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}