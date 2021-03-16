import { Avatar, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        left: 0,
        top: '25%',
        width: 100,
        color: '#fff',
        display: 'block'
    },
    listItem : {
        border: '1px solid white',
        borderRadius: 5,
        background: 'rgba(247,46,216,0.4)',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        backgroundImage: 'linear-gradient(to right, #ff00cc 0%, #333399  51%, #ff00cc  100%)',

        transition: '0.5s',
        backgroundSize: '300% auto',
        color: 'white',            
        boxShadow: '0 0 20px #eee',

        '&:hover': {
           backgroundPosition: 'right center', /* change the direction of the change here */
           color:' #fff',
           textDecoration: 'none',
           width: 160,
           paddingLeft: 50
        }

    },
    
}));
export default function HomeLeftbar () {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav">
                <ListItem >
                    <h6>Follow me</h6>
                </ListItem>
                <ListItem button  className={classes.listItem}>
                    <ListItemIcon>
                        <LinkedInIcon style={{height: 50,width: 50, color: 'white'}}/>
                    </ListItemIcon>
                </ListItem>
                <ListItem button  className={classes.listItem}>
                    <ListItemIcon>
                        <GitHubIcon style={{height: 50,width: 50,color: 'white',}}/>
                    </ListItemIcon>
                </ListItem>
                <ListItem button  className={classes.listItem}>
                    <ListItemIcon>
                        <FacebookIcon style={{height: 50,width: 50,color: 'white',}}/>
                    </ListItemIcon>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon>
                        <InstagramIcon style={{height: 50,width: 50,color: 'white',}}/>
                    </ListItemIcon>
                </ListItem>
            </List>
        </div>
    )
}