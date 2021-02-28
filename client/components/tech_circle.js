import React from 'react';
import {  Box, Container, makeStyles, Typography } from '@material-ui/core';
import Pendulum from './pendulum';
import Image from 'next/image';

const useStyles = makeStyles(theme => ({
    profileImage: {
        position: 'relative',
        top: 400,
        left: 180,
        height: 200,
        width: 200,
        borderRadius: "50%",
        backgroundImage : "url('/images/bipul_profile.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '120%',
        backgroundPositionX: 'center',
        backgroundPositionY: 'center',
        boxShadow: '0 5px 15px 0px rgba(255, 255, 254,1)',
        border: '8px solid rgba(250, 11, 99 ,0.9)',
        zIndex: 5666,
    },
    profileInfo : {
        paddingTop: 205,
        paddingLeft: '25%'
    }
}));
export default function TechCircle(props) {
    const classes = useStyles();
    return (
            <Box style={props.style}>
                <Box className={classes.profileImage}>
                    <Box className={classes.profileInfo}>
                        <Typography >Bipul Mandol</Typography>
                        <Typography style={{marginLeft: -25}}>Full-stack Developer</Typography>
                    </Box>

                </Box>
                <Box style={{display: "flex"}}>
                    <Pendulum backgroundImage={"/images/reactjs.svg"} style={{backgroundSize: 90,position: 'relative',zIndex: 380,marginTop:200,}}/>
                    <Pendulum backgroundImage={"/images/javascript.png"} style={{position: 'relative',zIndex: 380,left: -75,marginTop:130, backgroundSize: 120}}/>
                    <Pendulum backgroundImage={"/images/vuejs.png"} style={{position: 'relative',zIndex: 380,left: -130,marginTop:68, backgroundSize: 70,}}/>
                    <Pendulum backgroundImage={"/images/jquery.png"} style={{position: 'relative',zIndex: 380,left: -170,marginTop:15, backgroundSize: 100,}}/>
                    <Pendulum backgroundImage={"/images/es6.jpg"} style={{position: 'relative',zIndex: 380,left: -190,marginTop:-15, backgroundSize: 200,}}/>
                    <Pendulum backgroundImage={"/images/bootstrap.png"} style={{position: 'relative',zIndex: 380,left: -210,marginTop: -20, backgroundSize: 100,}}/>
                    <Pendulum backgroundImage={"/images/nodejs.jpg"} style={{position: 'relative',zIndex: 380,left: -230,marginTop:-12, backgroundSize: 100,}}/>
                    <Pendulum backgroundImage={"/images/dotnetcore.png"} style={{ position: 'relative',zIndex: 380,left: -255,marginTop:15 ,backgroundSize: 100,}}/>
                    <Pendulum backgroundImage={"/images/git.png"} style={{position: 'relative',zIndex: 380,left: -295,marginTop:60, backgroundSize: 100,}}/>
                    <Pendulum backgroundImage={"/images/docker.webp"} style={{position: 'relative',zIndex: 380,left: -350,marginTop:120, backgroundSize: 110,}}/>
                    <Pendulum backgroundImage={"/images/nginx.png"} style={{position: 'relative',zIndex: 380,left: -420,marginTop:190, backgroundSize: 220,}}/>

                </Box>
                <Box style={{display: "flex"}}>
                    <Pendulum backgroundImage={"/images/kubernetes.png"} style={{position: 'relative',zIndex: 380,left: 0,marginTop: -70,backgroundSize: 115}}/>
                    <Pendulum backgroundImage={"/images/digitalocean.webp"} style={{position: 'relative',zIndex: 380,left: -70,marginTop: 0, backgroundSize: 100}}/>
                    <Pendulum backgroundImage={"/images/devops.png"} style={{position: 'relative',zIndex: 380,left: -115,marginTop: 60, backgroundSize: 250,}}/>
                    <Pendulum backgroundImage={"/images/github.jpg"} style={{position: 'relative',zIndex: 380,left: -145,marginTop: 100, backgroundSize: 100,}}/>
                    <Pendulum backgroundImage={"/images/azure.png"} style={{position: 'relative',zIndex: 380,left: -165,marginTop: 130, backgroundSize: 100,}}/>
                    <Pendulum backgroundImage={"/images/raspberrypi.jpg"} style={{position: 'relative',zIndex: 380,left: -180,marginTop: 135, backgroundSize: 140,}}/>
                    <Pendulum backgroundImage={"/images/firebase.jpg"} style={{position: 'relative',zIndex: 380,left: -205,marginTop: 120, backgroundSize: 100,}}/>
                    <Pendulum backgroundImage={"/images/nextjs.png"} style={{position: 'relative',zIndex: 380,left: -235,marginTop: 85, backgroundSize: 200,}}/>
                    <Pendulum backgroundImage={"/images/flask.png"} style={{position: 'relative',zIndex: 380,left: -280,marginTop: 40, backgroundSize: 125,}}/>
                    <Pendulum backgroundImage={"/images/androidstudio.png"} style={{position: 'relative',zIndex: 380,left:-340,marginTop: -20,backgroundSize: 100,}}/>
                    <Pendulum backgroundImage={"/images/ts.png"} style={{position: 'relative',zIndex: 380,left: -420,marginTop: -85, backgroundSize: 130,}}/>
                </Box>
            </Box>
        );
}