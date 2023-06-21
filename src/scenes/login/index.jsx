import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import Register from "../../pages/register/Register";

const LogIn = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Box m="20px" d>
			<Header title="LogIn" subtitle="Sign in to our Hostel and Homestel " />

			<Box display='flex' justifyContent='space-between' position='relative' top='0' left='0'>
				<Register />
			</Box>
		</Box>
	);
};

export default LogIn;
