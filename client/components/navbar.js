import { AppBar, Button, makeStyles, Toolbar } from "@material-ui/core"
import { navItem } from "../utils/app_navbar";

const useStyles = makeStyles( theme => ({
    root: {
        display: 'block',
        margin: 20
    },
    navButton: {
        background: 'rgba(255, 235, 59,1)',
        padding: '10px 20px',
        marginRight: 20,
        textAlign: 'center',
        textTransform: 'uppercase',
        transition: '0.5s',
        backgroundSize: '200% auto',
        color: 'black',            
        boxShadow: '0 0 10px #eee',
        border: '3px solid rgba(197, 17, 98,0.8)',
        borderRadius: '5px 30px 5px 30px',

        '&:hover': {
           color:' #fff',
           textDecoration: 'none'
        }
    }
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <AppBar position="static" style={{background: '#3F51B5',padding: 10}}>
            <Toolbar variant="dense">
            {
                navItem.map( (item,i) => (
                    <Button key ={i} className={classes.navButton} variant="contained" color='secondary'>
                        {item.name}
                    </Button>
                ))
            }
            </Toolbar>
        </AppBar>
        // <nav className={classes.root}>
        //     {
        //         navItem.map( (item,i) => (
        //             <Button key ={i} className={classes.navButton} variant="contained" color='secondary'>
        //                 {item.name}
        //             </Button>
        //         ))
        //     }

        // </nav>
    )
}