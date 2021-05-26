import { List, ListItem , ListItemIcon , ListItemText, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { leftNavItem } from "../../utils/app_navbar";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height: '100%',     
      maxWidth: 250,
    },
    listItem: {
        color: "white"
    },
    header : {
        marginLeft: 20,
        fontFamily: 'Rubik, sans-serif',
        fontWeight: 800,
        fontSize: 25,
        lineHeight: '27px',
    },
    navList: {
        paddingTop: 30
    },
    copyRight: {
        marginTop: 10,
        fontWeight: 100,
        marginLeft: 15,
        fontSize: 13,
        color: 'rgb(156, 154, 179)'
    }
}));

export default function LeftNav() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.header}>Bipul Mandol</Typography>
            <List component="nav" aria-label="main mailbox folders" className={classes.navList}>
                {
                    leftNavItem.map( (item,i) => (
                        <ListItem key={i} button className={classes.listItem}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    ))
                }
            </List>
            <Typography className={classes.copyRight}>© 2021 Bipul Mandol.</Typography>
        </div>
    )
}