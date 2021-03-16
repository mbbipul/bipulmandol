import { Box, Grid, makeStyles } from "@material-ui/core";
import Navbar from "../../components/navbar";
import Image from 'next/image'
const useStyles = makeStyles( theme => ({ 
    profile_image : {
        border : '5px solid #fff',
        borderRadius: '50%'
    }
}));
export default function About() {
    const classes = useStyles();

    return (
        <Box>
            <Navbar />
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={4}>
                    <Image
                        className={classes.profile_image}
                        src="/images/bipul_profile.png"
                        alt="Picture of the author"
                        width={300}
                        height={300}
                    />
                </Grid>
                <Grid item xs={8}>

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