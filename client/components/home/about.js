import { Avatar, Box, Button, Card, Grid, makeStyles, Typography, withStyles } from "@material-ui/core";
import { purple,yellow,green,blue, red } from "@material-ui/core/colors";
import appConfig from "../../app.config.json";
import LinearProgress from '@material-ui/core/LinearProgress';
import withWidth, { isWidthDown, isWidthUp } from '@material-ui/core/withWidth';

const DownloadCV = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        padding: "12px 50px",
        fontSize: 16,
        borderRadius: 30,
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
        [theme.breakpoints.down('md')]: {
            padding: "8px 30px",
            fontSize: 16,   
        },
        [theme.breakpoints.down('sm')]: {
            padding: "8px 40px",
            fontSize: 16,
            borderRadius: 20,
            textAlign: 'center'
        },
        transition : 'all .5s ease-in-out'

    },
}))(Button);

const SkillWithProgress = (props) => {
    const barColor = {
        blue: blue[700],
        yellow: yellow[700],
        purple: purple[700],
        green: green[700],
        red: red[700]
    }
    const useStyles = makeStyles((theme) => ({
        root: {
            marginBottom: 20,
            padding: 0,

        },
        progressRoot: {
            height: 10,
            borderRadius: 5,
        },
        colorPrimary: {
            backgroundColor: theme.palette.grey[300],
        },
        bar: {
            backgroundColor: barColor[props.barColor],
            borderRadius: 5,
        },
        progress: {
            marginTop: 10
        },
        percent: {
            float: "right"
        },
        title: {
            fontFamily: "Rubik",
            fontSize: 16,
            fontWeight: 800,
            zIndex: '999!important',
            [theme.breakpoints.down('md')]: {
                fontSize: 12,
            },
            
        }

    }));

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Grid
                container
                justify="space-between"
                alignItems="center"
                direction="row">
                <Grid item md={11}>
                    <Typography className={classes.title}>{props.title}</Typography>
                </Grid>
                <Grid item md={1}>
                    <Typography className={classes.percent}>{props.value}%</Typography>
                </Grid>
            </Grid>
            <LinearProgress 
                classes={{
                    bar: classes.bar, // class name, e.g. `classes-nesting-root-x`
                    colorPrimary: classes.colorPrimary,
                    root: classes.progressRoot
                }}
                className={classes.progress}
                variant="determinate" value={props.value}/>
        </Box>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
    title: {
        marginLeft: 20,
        fontSize: 36,
        fontWeight: 700,
        fontFamily: 'Rubik'
    },
    myImage: {
        left: '-30px',
        borderRadius: 30,   
        height: 410,
        width: 300,
        float: 'right',
        margin: 0,
        [theme.breakpoints.down('md')]: {
            height: 560,
            width: 400,
            marginTop: '40%',
            left: '-10px'   
        },
        [theme.breakpoints.down('sm')]: {
            height: 530,
            width: 350,
            marginTop: '40%',
            left: '-10px'   
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 0,
            height: 250,
            width: 200,
            left: '-25%'

        },
    },
    aboutDetailsBox: {
        margin: 20, 
        marginTop: 50,
        padding: 20,
        borderRadius: 20,     
        backgroundColor: '#302f4e!important',
        boxShadow: '0 5px 20px 0 rgb(69 67 96 / 60%)',
    },
    aboutTypography:{
        fontFamily: 'Rubik',
        [theme.breakpoints.down('xs')]: {
            fontSize: 18,
            fontWeight: 700,
            textAlign: 'center',
        },
    },
    downLoadCv: {
        margin: 20,
        left: '15%',
        [theme.breakpoints.down('xs')]: {
            left: '13%'
        },
        [theme.breakpoints.down('md')]: {
            left: '15%'
        },
    },
    experienceAbout: {
        padding: 10,
        width: 200,
        borderRadius: 20,
        fontSize: 18,
        fontFamily: 'Rubik',
        fontWeight: 900,
        backgroundColor: yellow[400],
        marginTop: -40,
        // marginLeft: 100
        'box-shadow': '2px 3px 3px 3px rgba(123,110,110,0.77)',
        '-webkit-box-shadow': '2px 3px 3px 3px rgba(123,110,110,0.77)',
        '-moz-box-shadow': '2px 3px 3px 3px rgba(123,110,110,0.77)'
    }
}));

function About(props) {
    const classes = useStyles();
    
    return (
        <Box className={classes.root}>
            <Typography
                className={classes.title}
                variant='h3'>About Me
            </Typography>
           
            <Grid
                container
                direction={isWidthUp('sm'),props.width ? "row-reverse" : "row"}
                justify="flex-start"
                alignItems="flex-start"
                spacing={3}>
                <Grid item xs={12} sm={5} md={5} lg={3}>
                    <Avatar className={classes.myImage} variant="square" alt={appConfig.author} src={appConfig.aboutProfileImageUrl} />
                </Grid>
                <Grid item xs={12} sm={7} md={7} lg={9}>              
                    <Box className={classes.aboutDetailsBox}>
                        <Card boxShadow={3} className={classes.experienceAbout}>4 Years Experience</Card>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={6}>
                            <Grid item xs={12} sm={12} md={12} lg={7}>
                                <Typography className={classes.aboutTypography}>
                                    I have been working with web development since 2017, the period during which I have worked on different projects. I have also worked in a Startup Company from 2019 to 2020 as a software and hardware engineer. I am a self-motivated and self-taught professional who likes to solve problems. I combine a desire for usability with a user experience with technical knowledge to create a great digital experience. My repertoire includes programming languages and tools.
                                </Typography>
                                <DownloadCV className={classes.downLoadCv}>Download CV</DownloadCV>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={5}>
                                {
                                    appConfig.aboutSkill.map((skill,i) => (
                                        <SkillWithProgress key={i} title={skill.title} barColor={skill.barColor} value={skill.skillInpercent} />
                                    ))
                                }
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

            </Grid>

        </Box>
    )
}

export default withWidth()(About);