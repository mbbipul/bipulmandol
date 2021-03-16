import {  Box } from '@material-ui/core';
import HomeLeftbar from '../components/home_leftbar';
import ProfileInfo from '../components/profile_info';

const Home = () => {
	return (
		<Box >
			<HomeLeftbar />
			<ProfileInfo style={{marginTop: -330,transform: 'scale(0.5'}} />
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