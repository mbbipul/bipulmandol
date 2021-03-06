import React from 'react';
import { Box } from "@material-ui/core";
import Navbar from "../components/navbar";

export default function Explore() {
    return (
        <Box>
            <Navbar />

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