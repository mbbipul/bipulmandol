import { Box,Chip,Divider,Grid,makeStyles, Paper, Typography } from "@material-ui/core"
import PieChart from "../elements/pie_chart";

const useStyles  = makeStyles(theme => ({
    root: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 50,
    },
    title: {
        fontSize: 36,
        fontWeight: 700,
        fontFamily: 'Rubik'
    },
    skillBox: {

    },
    skillChip: {
        borderRadius: 5,
        padding: '10px 15px',
        backgroundColor: '#112240',
        color: '#9DA8BF',
        fontSize: 13,
        display: 'inline-block',
        "&:hover":{
            color: '#5DE8C4',
        }
    },
    skillTitle: {
        color: '#5DE8C4',
        fontSize: 18,
        fontWeight: 600
    },
    skillFiledset: {
        borderRadius: 10,
        margin: 20
    }
}))

const SkillChip = props => {
    const classes =  useStyles();

    return (
        <Paper className={classes.skillChip+" ripple"}>
            {props.label}
        </Paper>
    )
}

const Skill = (props) => {
    const classes = useStyles();
    return (
        <fieldset className={classes.skillFiledset}>
            <legend className={classes.skillTitle}>{props.title}</legend>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={1}>
                {
                    Array(20).fill(0).map(v => (
                        <Grid item lg={1}>
                            <SkillChip label="Node js"/>
                        </Grid>
                    ))
                }
            </Grid>
            
        </fieldset>
    )
}

function Skills(){
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography className={classes.title}>
                Tools & Technologies
            </Typography>
            <Typography style={{marginTop: 20}} className={classes.skillTitle}>
                Most usage languages
            </Typography>
            <Box style={{padding: '0px 300px'}}>
                <PieChart />
            </Box>
            {
                Array(4).fill(0).map(v => <Skill title="Backend Dev"/>)
            }
        </Box>
    )
}

export default Skills;