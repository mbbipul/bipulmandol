
import { Box, Container } from '@material-ui/core';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from '../static/home.module.css';
import anime from "animejs";

const Home = () => {
	const data = Array(4).fill("/images/javascript.png");
	return (
		<Container style={{display: "flex",marginTop: 100}}>
			{
				data.map( (img,k) => 
					<Box  key ={k}>
						<Box style={{borderTop: "5px solid white",height: 10,width: 100}}>
						</Box>
						<Box className={styles.swingimage} style={{paddingTop: 100}}>
							<Box style={{position: 'absolute',top: -12,height: 118,width:20,borderLeft: '5px solid white',left : '46%',right: '54%'}}></Box>

							<Box className={styles.block}>
								<Box style={{position: 'absolute',height: 20,width: 20,top: -16,left : '40%',right: '60%',border: "5px solid white",borderRadius : "100%"}}></Box>
								<Box style={{position: 'absolute',height: 20,width: 20,bottom: 78,left : '40%',right: '60%',border: "5px solid white",borderRadius : "50%"}}></Box>

							</Box>
						</Box>
					</Box>
				)
			}

			<style jsx global>
				{`
					html,
					body {
						padding: 0;
						margin: 0;
						background: black;
						color: white;
						font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
							Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
							sans-serif;
						overflow: hidden;
					}
					* {
						box-sizing: border-box;
					}
					.bg-image {
						
						height: 300px;
						width: 100%;
						background-repeat: no-repeat;
						background-image : url('/images/javascript.png')
					}
				`}
			</style>
		</Container>
	)
}

export default Home;