import {  Box, Grid, makeStyles, withWidth,Typography } from "@material-ui/core";
import { blue, green, purple, red, yellow } from "@material-ui/core/colors";
import Service from "../elements/service";
import appConfig from "../../app.config.json";

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 50
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

function Services() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography
                className={classes.title}
                variant='h3'>
                Services
            </Typography>
            <Grid
                className={classes.serviceContainer}
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={3}
            >
               {
                    appConfig.aboutServices.map(({color,title,details,image},key) => (
                        <Grid item key={key} lg={4} sm={4} xs={12} xl={4}>
                            <Service color={color} title={title} details={details} image={image} />
                        </Grid>
                    ))
               }
            </Grid>
        </Box>
    )
}

export default withWidth()(Services);