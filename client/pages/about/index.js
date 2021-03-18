import { Box, Card, Grid, makeStyles, Typography } from "@material-ui/core";
import Navbar from "../../components/navbar";
import Image from 'next/image'
const useStyles = makeStyles( theme => ({ 
    root: {
        margin: '50px 100px ',
    },
    profile_image : {
        border : '5px solid #fff!important',
        borderRadius: '50%'
    },
    profile_name: {
        fontFamily: 'Comic Sans, Comic Sans MS, cursive',
        fontStyle: 'bold'
    }
}));
export default function About() {
    const classes = useStyles();

    return (
        <Box>
            <Navbar />
            <Grid
                className={classes.root}
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={4} >
                    <Grid
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start"
                        style={{padding: '0px 125px '}}
                        >
                        <Grid item>
                            <Image
                                className={classes.profile_image}
                                src="/images/bipul_profile.png"
                                alt="Picture of the author"
                                width={200}
                                height={200}
                            />
                            <Typography variant='h4' className={classes.profile_name} >Bipul Mandol</Typography>
                            <Typography variant='h5' >Full Stack Engineer</Typography>
                        </Grid>
                    </Grid>
                    
                    
                    <Typography style={{textAlign:'center',}}>
                        <p>Hello World, My Name is Bipul Mandol.<br />
                        I am an award-winning full-stack web developer and UI/UX javascript specialist.
                        Check out my articles, React and React Native UI components at the code laboratory.
                        Feel free to take a look at my latest projects on the web portfolio page.

                        Remotely available UTC−1 to UTC+8. rafael@caferati.me_</p>
                    </Typography>
                </Grid>
                <Grid 
                    style={{marginTop : -430,}}
                    item xs={8}>
                    <Card style={{marginRight: 20}}>
                        <Typography>Skills</Typography>
                    </Card>
                </Grid>
            </Grid>
            <style jsx global>
                {`
                    html,
                    body {
                        padding: 0;
                        margin: 0;
                        background-color: black;
                        color: white;
                        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                            sans-serif;
                            overflow: hidden;
                    }
                    * {
                        box-sizing: border-box;
                    }
                `}
            </style>
        </Box>
    )
}