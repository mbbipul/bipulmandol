import React from 'react';
import {  Box, Button, Container, makeStyles, Typography } from '@material-ui/core';
import Pendulum from './pendulum';
import Typist from 'react-typist';

const useStyles = makeStyles(theme => ({
    profileImage: {
        position: 'relative',
        top: 100,
        left: 550,
        height: 170,
        width: 170,
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
        position: 'relative',
        top: -150,
        paddingLeft: '5%',
        textAlign:'center',
        fontFamily: 'Comic Sans, Comic Sans MS, cursive',
        lineHeight: '13px',
        fontSize: 20
    },
    exploreButton: {
        background: 'rgba(247,46,216,0.4)',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        backgroundImage: 'linear-gradient(to right, #ff00cc 0%, #333399  51%, #ff00cc  100%)',
        padding: '15px 45px',
        textAlign: 'center',
        textTransform: 'uppercase',
        transition: '0.5s',
        backgroundSize: '200% auto',
        color: 'white',            
        boxShadow: '0 0 20px #eee',
        borderRadius: 10,

        '&:hover': {
           backgroundPosition: 'right center', /* change the direction of the change here */
           color:' #fff',
           textDecoration: 'none'
        }
        
    },
}));
export default function ProfileInfo(props) {
    const classes = useStyles();
    let lines = [
        "Hello World, My Name is Bipul Mandol",
        "I have been working with web development since 2017, the period during which I have worked on different projects.",
        "I have also worked in a Startup Company from 2019 to 2020 as a software and hardware engineer. ",
        "I am a self-motivated and self-taught professional who likes to solve problems.",
        "I combine a desire for usability with a user experience with  technical knowledge to create a great digital experience.",
        " My repertoire includes programming languages and tools such as .Net core,NodeJs, Flask, Java Android,ReactJS, </p><p>NextJs, MySQL, PostgreSQL, GraphQL, Nginx server configuration, Docker, Kubernetes, RestApi, MVC, and more."
      ];
    return (
        <Container>
            
            <Box className={classes.profileImage+" "}>
                <Box className={classes.profileInfo} />     
            </Box>
            <Container style={props.style} >
               <Container style={{display: "flex",marginLeft:310}}>
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

               </Container>
               <Container style={{display: "flex",marginLeft:310}}>
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
               </Container>
           </Container>
           <Container >
               <Typography className={classes.profileInfo}>
                <Typist >
                    <h1>Hello World, My Name is Bipul Mandol</h1>
                    <p>I have been working with web development since 2017, the
                    period during which I have worked on different projects.</p> 
                    <p>I have also worked in a Startup Company from 2019 to 2020 as a
                    software and hardware engineer. </p>
                    <p>I am a self-motivated and
                    self-taught professional who likes to solve problems.</p>
                    <p>I combine a desire for usability with a user experience with
                    technical knowledge to create a great digital experience.</p>
                    <p> My
                    repertoire includes programming languages and tools such as
                    .Net core,NodeJs, Flask, Java Android,ReactJS, </p><p>NextJs, MySQL, PostgreSQL, GraphQL, Nginx server
                    configuration, Docker, Kubernetes, RestApi, MVC, and more.</p>
                    </Typist>
                    <Button variant='contained'className={classes.exploreButton}>View My Work</Button>

               </Typography>
           </Container>
        </Container>
           
    );
}