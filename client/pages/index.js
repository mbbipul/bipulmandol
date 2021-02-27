import {  Container } from '@material-ui/core';
import Pendulum from '../components/pendulum';
import styles from '../static/home.module.css';
const Home = () => {
	const data = Array(4).fill("/images/javascript.png");
	return (
		<Container className={styles.rotating}>
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