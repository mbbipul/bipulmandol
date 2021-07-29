import {  Box, makeStyles, withWidth,Typography, Paper, Grid, Button } from "@material-ui/core";
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
    othersProjecttitle: {
        margin: 50,
        marginTop: 80,
        fontSize: 26,
        fontWeight: 700,
        fontFamily: 'Rubik',
        textAlign: 'center'
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
            <Box>
                <Typography
                    className={classes.title}
                    variant='h3'>
                    Projects
                </Typography>
            {
                Array(6).fill(0).map((v,i) => <Project leftAlign={getReverseLestAlign()} />)
            }
            </Box>

            <Box>
                <Typography
                    className={classes.othersProjecttitle}>
                    Other Projects
                </Typography>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    spacing={3}
                    >

                    {
                        Array(12).fill(1).map((v,i) => (
                            <Grid item lg={4}  md={6} sm={6} xs={12}>
                                <Project type="others"/>
                            </Grid>
                        ))
                    }
                </Grid>
                {/* <Button variant="contained" color="secondary">More</Button> */}
            </Box>
           
        </Box>
    )
}

export default withWidth()(Projects);