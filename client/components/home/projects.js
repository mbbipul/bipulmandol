import {  Box, makeStyles, withWidth,Typography } from "@material-ui/core";
import Project from "../elements/project";

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 70,
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

}));

function Projects() {
    const classes = useStyles();
    let align = true;

    const getReverseLestAlign = () => {
        align = !align;
        return align;
    }
    return (
        <Box className={classes.root}>
            <Typography
                className={classes.title}
                variant='h3'>
                Projects
            </Typography>
           {
               Array(6).fill(0).map((v,i) => <Project leftAlign={getReverseLestAlign()} />)
           }
        </Box>
    )
}

export default withWidth()(Projects);