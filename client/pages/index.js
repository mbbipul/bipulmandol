import {  Box, Container } from '@material-ui/core';
import Pendulum from '../components/pendulum';
import TechCircle from '../components/tech_circle';
import styles from '../static/home.module.css';
const Home = () => {
	const data = Array(4).fill("/images/javascript.png");
	return (
		<Box >
		
			<TechCircle style={{marginTop: -200}} />
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
		</Box>
	)
}

export default Home;