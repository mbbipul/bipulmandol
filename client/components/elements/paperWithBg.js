import { makeStyles, Paper } from "@material-ui/core";
const useStyles = props => makeStyles((theme) => ({
    root: {
        width: props.width,
        height: props.height,
        backgroundImage: `url("${props.image}")`,
        backgroundRepeat: 'no-repeat',
        maxHeight: '100%',
        margin: 0,
        padding: 0,
        backgroundSize: '100% 100%',
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