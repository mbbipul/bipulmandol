import {  Box, makeStyles } from '@material-ui/core';
import Head from 'next/head';
import LeftNav from '../components/home/left_nav';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { useEffect, useState } from 'react';
import Home from '../components/home/home';
import About from '../components/home/about';
import Services from '../components/home/services';
import Section from '../components/section';
import Experiences from '../components/home/experiences';

const leftMargin = 250;

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '100%',
	},

	mobileHeader: {
		display: 'inline-block',
		padding: 10,
		fontWeight: 900	,
	},
	shiftMobileHeader : {
		marginLeft: leftMargin,
		transition : 'all 0.3s ease-in-out'
	},
	initXMobileHeader: {
		marginLeft: 0,
		transition : 'all 0.3s ease-in-out'
	},
	left: {
		borderRight: '1px solid hsla(0,0%,100%,.1)',
		'border-right-width': 1,
		'border-right-style': 'solid',
		'border-right-color': 'rgba(255, 255, 255, 0.1)',
		animation: "inAnimationNav 0.3s ease-in",
	},
	leftHide: {
		animation: "outAnimationNav 0.3s ease-out",
		animationFillMode: "forwards"
	},
	mainDesktopOnly : {
		height: '100vh',
		marginLeft: leftMargin,
		transition : 'all 0.3s ease-in-out'
	},
	main : {
		height: '100vh',
		marginLeft: 0,
		transition : 'all .3s ease-in-out'
	}

}));

const App = (props) => {
	const classes = useStyles();
	const [showLeftNav,setLeftNavVisibility] = useState(false);
	
	const handleLeftNav = () => {
		setLeftNavVisibility(!showLeftNav);
	}

	const onLeftNavOutsideClicked = () => {
		if (showLeftNav) {
			setLeftNavVisibility(!showLeftNav);
		}
	}

	return (
		<Box className={classes.root}>
		    <Head>
                <title>Bipul Mandol || Software Engineer</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
            </Head>
			
			<Box 
				className={isWidthUp('md', props.width) || showLeftNav ? 
					'desktop-leftbar '+classes.left
					 : 'desktop-leftbar '+classes.leftHide}
			>
				<LeftNav />
			</Box> 

			{
				isWidthUp('md', props.width) || 
					<header 
						className={ showLeftNav ? 
							classes.mobileHeader +" "+ classes.shiftMobileHeader 
							: classes.mobileHeader +" "+ classes.initXMobileHeader} 
					>
						<Box style={{  display: 'inline-flex!important'}}> 
							<MenuRoundedIcon onClick={handleLeftNav} fontSize="large" />
							<span variant="h3" style={{display: 'inline-block',fontSize:30 ,marginLeft : 15}}>Bipul Mandol</span> 
						</Box>
					</header>
				
			}
			<Box 	
				onClick={onLeftNavOutsideClicked} 				
				className={isWidthUp('md', props.width) || showLeftNav ? classes.mainDesktopOnly :  classes.main }
			>
				<Box 
						style={{height: '100vh'}}>
						<Section id="Home" child={<Home />}/>
					</Box>

					<Box>
						<Section id="About" child={<About />}/>
						<Section id="Services" child={<Services />}/>
						<Section id="Experience" child={<Experiences />}/>

					</Box>
			</Box>
			
			<style jsx global>
				{`
					@import url('https://fonts.googleapis.com/css?family=Rubik');
					@import url('https://fonts.googleapis.com/css?family=Sofia');
					html,
					body {
						padding: 0;
						margin: 0;
						background-color: #353353;
						color: white;
						font-family: Rubik, sans-serif,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
							Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
							sans-serif;
						overflow: scroll;
    					overflow-x: hidden;
						scroll-behavior: smooth;
						transition: scroll-behavior 10s;
					}
					::-webkit-scrollbar {
						width: 0;  /* Remove scrollbar space */
						background: transparent;  /* Optional: just make scrollbar invisible */
					}
					/* Optional: show position indicator in red */
					::-webkit-scrollbar-thumb {
						background: #FF0000;
					}
					* {
						box-sizing: border-box;
					}
					.desktop-leftbar {
						color: #fff;
						background: #353353;
						padding: 50px 0 0 20px;
						overflow-y: scroll;
						position: fixed;
						top: 0;
						left: 0;
						overflow-x: hidden;
						height: 100vh;
						min-height: 100vh;
						z-index: 1;
						width:250px
						
					}
					@keyframes inAnimationNav {
						0% {
							visibility: hidden;
							width: 0px;
						}
						100% {
							visibility: visible;
							width: 250px;
						}
					}
					
					@keyframes outAnimationNav {
						0% {
						}
						100% {
							visibility: hidden;
							width: 0px;
						}
					}
				`}
			</style>
		</Box>
	)
}

export default withWidth()(App);