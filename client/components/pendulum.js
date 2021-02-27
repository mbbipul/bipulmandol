import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../static/pendulum.module.css';
import { Box } from '@material-ui/core';
import theme from '../theme/theme';

const useStyles = props => makeStyles(theme => ({

    block: {
        height: 50,
        width: 50,
        margin: 20,
        marginLeft: 20,
        borderRadius: "50%",
        backgroundImage : "url("+props.backgroundImage+")",
        backgroundRepeat: 'no-repeat',
        backgroundSize: props.style.backgroundSize+'%',
        backgroundPositionX: 'center',
        backgroundPositionY: 'center',
        boxShadow: '0 5px 15px 0px rgba(255, 255, 255, 0.6)',
        transition: 'transform 1s',
        border: '5px solid white',
        /* opacity: 0.75; */
        filter: 'blur(-5px)',
        zIndex: -9,
        '&:hover': {
            boxShadow: '0px 15px 25px -5px rgba(255, 255, 255, 0.897)',
            transform: 'translateZ(7)'
        }
    },
    hookHolder: {
        height: 8,
        width: 80,
        marginLeft: 10,
        borderTop: "5px solid white",
        borderRadius: 20
    },
    hookLine: {
        position: 'absolute',
        top: -6,
        height: 68,
        width:20,
        borderLeft: '5px solid white',
        borderRadius: 30,
        left : '44%',
        right: '56%'
    },
    topHook : {
        position: 'absolute',
        height: 15,
        width: 15,
        top: -14,
        left : '40%',
        right: '60%',
        border: "8px solid white",
        borderRadius : "100%"
    },
    bottomHook : {
        position: 'absolute',
        height: 15,
        width: 15,
        bottom: 47,
        left : '40%',
        right: '60%',
        border: "5px solid white",
        borderRadius : "50%"
    }
}));


export default function Pendulum(props) {
  const classes = useStyles(props)();
  return (
        <Box style={props.style} > 
            {/* <Box className={classes.hookHolder} /> */}
            <Box  className={styles.swingpendulum} style={{paddingTop: 50}}>
                {/* <Box className={classes.hookLine}></Box> */}
                <Box className={classes.block}>
                    {/* <Box className={classes.topHook} />
                    <Box className={classes.bottomHook} /> */}
                </Box>
            </Box>
        </Box>
    );
}