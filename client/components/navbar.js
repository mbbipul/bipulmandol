import { AppBar, Button, makeStyles, Toolbar } from "@material-ui/core"
import { navItem } from "../utils/app_navbar";
import Link from 'next/link';

const useStyles = makeStyles( theme => ({
    root: {
        display: 'block',
        margin: 20
    },
    navButton: {
        background: 'rgba(255, 235, 59,1)',
        padding: '7px 20px',
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
           textDecoration: 'none',
           background: '#871EAE',
   
        }
    }
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <AppBar position="static" style={{background: '#3F51B5',padding: '5px 10px'}}>
            <Toolbar variant="dense">
            {
                navItem.map( (item,i) => (
                    <Link href={item.link}>
                        <Button key ={i} className={classes.navButton} variant="contained" >
                            {item.name}
                        </Button>
                    </Link>
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