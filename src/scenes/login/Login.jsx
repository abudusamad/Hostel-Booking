import { Box } from "@mui/material";
import Header from "../../components/Header";
import Register from "../../pages/register/Register"
const Login = () => {
	return (
		<Box m="20px">
			{/* HEADER */}
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Header title="Login" subtitle="Welcome to your Login" />
				<Register />
			</Box>
			<Box>
			</Box>
		</Box>
	);
};

export default Login;
