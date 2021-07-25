import { Avatar, Card, CardActionArea,CardContent, Grid, makeStyles, Typography } from "@material-ui/core";
import appConfig from "../../app.config.json";
import PropTypes from 'prop-types'; 

const useStyles = color => makeStyles((theme) => ({
    root: {
        backgroundColor: color,
        borderRadius: 20,
        'box-shadow': '2px 3px 3px 3px rgba(123,110,110,.5)',
        '-webkit-box-shadow': '2px 3px 3px 3px rgba(123,110,110,.35)',
        '-moz-box-shadow': '2px 3px 3px 3px rgba(123,110,110,.5)',
        transition: 'transform 300ms ease-in-out 300ms',
        '&:hover' : {
            transform: 'translateY(-20px)',
            transition: 'transform 300ms ease-in-out 300ms'
        }
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 700,
        fontFamily: 'Rubik',
        color: '#fff'
    },
    details: {
        color: '#fff'
    },
    avatar: {
        height: 150,
        width: '100%',
        boxShadow: '0 5px 15px 0px rgba(0, 0, 0, 0.6)',
        border: '5px solid #dce2e7',
        borderRadius: 20,
        zIndex: 1222,
        left: 'auto',
        right: 'auto',
    }
}));

const Service  = ({title,details,color,image}) => {
    const classes = useStyles(color)();

    return (
        <Card className={classes.root}>
            <CardActionArea>
            <Avatar className={classes.avatar} variant="square" alt={title} src={image} />

                <CardContent>
                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography className={classes.details} variant="body2" color="textSecondary" component="p">
                        {details}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

Service.propTypes = {
    title: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
};

export default Service;