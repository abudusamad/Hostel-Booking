import { Box } from "@mui/material";
import HostelList from "../../components/HostelCard";

const Dashboard = () => {
	return (
		<Box m="20px">
			<Box>
				<HostelList />
			</Box>
		</Box>
	);
};

export default Dashboard;
