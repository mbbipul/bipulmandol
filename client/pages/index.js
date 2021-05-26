import {  Box, Grid, makeStyles } from '@material-ui/core';
import Head from 'next/head';
import LeftNav from '../components/home/left_nav';
import styles from '../static/home.module.css';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '100%'
	},
	left: {
		borderRight: '1px solid hsla(0,0%,100%,.1)',
		'border-right-width': 1,
		'border-right-style': 'solid',
		'border-right-color': 'rgba(255, 255, 255, 0.1)',
	}
}));

const Home = (props) => {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
		    <Head>
                <title>Bipul Mandol || Software Engineer</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
            </Head>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				spacing={0}>
				
				{
					isWidthUp('md', props.width) && 
						<Grid className={'desktop-leftbar '+classes.left} item xs={2} >
							<LeftNav />
						</Grid> 
				}

				<Grid item xs={isWidthUp('md', props.width) ? 10 : 12} >
					<b>BlinkMacSystemFont</b>
				</Grid>

			</Grid>

			<style jsx global>
				{`
					html,
					body {
						padding: 0;
						margin: 0;
						background-color: #353353;
						color: white;
						font-family: Rubik, sans-serif,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
							Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
							sans-serif;
							overflow: hidden;
					}
					* {
						box-sizing: border-box;
					}
					.desktop-leftbar {
						color: #fff;
						background: #353353;
						padding: 50px 0 0 20px;
						overflow-y: auto;
						overflow-x: hidden;
						height: 100vh;
						min-height: 100vh;
						z-index: 1;
						transform: translateX(0);
						transition: all .3s ease-in-out;
						transition-property: all;
						transition-duration: 0.3s;
						transition-timing-function: ease-in-out;
						transition-delay: 0s;
					}
				`}
			</style>
		</Box>
	)
}

export default withWidth()(Home);