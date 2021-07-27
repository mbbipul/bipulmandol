import { makeStyles, Paper } from "@material-ui/core";
import Image from 'next/image';

const useStyles = props => makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('lg')]: {
            width: "100%",
            height: props.height,
        },
        [theme.breakpoints.down('md')]: {
            width: "100%",
            height: 300,
        },
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            height: 200,
        },
        backgroundImage: `url("${props.image}")`,
        backgroundRepeat: 'no-repeat',
        margin: 0,
        padding: 0,
        "&:hover": {
            'box-shadow': '3px 3px 3px 3px rgba(123,110,110,.5)',
            '-webkit-box-shadow': '3px 3px 3px 3px rgba(123,110,110,.35)',
            '-moz-box-shadow': '3px 3px 3px 3px rgba(123,110,110,.5)',
        }
    }
}));

export default function PaperWithImage(props){
    const classes = useStyles(props)();
    return (
        <a href={props.href} target="_blank">
            <Paper {...props} className={classes.root} />
        </a>
    )
}