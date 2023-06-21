import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Box, IconButton, Tooltip, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { useContext, useEffect, useState } from "react";
import Notification from "../../components/Notification";
import Settings from "../../components/Settings";
import UserProfile from "../../components/UserProfile";
import { useStateContext } from "../../contexts/ContextProvider";
import { ColorModeContext, tokens } from "../../theme";

const Topbar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);
	const [isClicked, setIsClicked] = useState(false);
	const { activeMenu, setActiveMenu, setScreenSize, screenSize } =
		useStateContext();

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (screenSize <= 900) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);
	const handleClick = () => {
		setIsClicked(true);
	};

	const handleActiveMenu = () => setActiveMenu(!activeMenu);

	return (
		<Box display="flex" justifyContent="space-between" p={2}>
			{/* SEARCH BAR */}
			<Box display="flex">
				<IconButton>
					<Tooltip title="Menu">
						<MenuOutlinedIcon onClick={handleActiveMenu} />
					</Tooltip>
				</IconButton>

				<Box
					display="flex"
					backgroundColor={colors.primary[400]}
					borderRadius="3px"
					marginRight="10px"
				>
					<InputBase
						sx={{ ml: 2, flex: 1, width: "75%" }}
						placeholder="Search"
					/>
					<IconButton type="button" sx={{ p: 1 }}>
						<SearchIcon />
					</IconButton>
				</Box>
			</Box>

			{/* ICONS */}
			<Box display="flex">
				<IconButton onClick={colorMode.toggleColorMode}>
					{theme.palette.mode === "dark" ? (
						<Tooltip title="Dark Mode">
							<DarkModeOutlinedIcon />
						</Tooltip>
					) : (
						<Tooltip title="Light Mode">
							<LightModeOutlinedIcon />
						</Tooltip>
					)}
				</IconButton>
				<IconButton>
					<Tooltip title="Notification">
						<NotificationsOutlinedIcon onClick={() => handleClick} />
					</Tooltip>
				</IconButton>
				<IconButton>
					<Tooltip title="Settings">
						<SettingsOutlinedIcon onClick={() => handleClick} />
					</Tooltip>
				</IconButton>
				<IconButton>
					<Tooltip title="UserProfile">
						<PersonOutlinedIcon onClick={() => handleClick} />
					</Tooltip>
				</IconButton>
				{isClicked && <Settings />}
				{isClicked && <Notification />}
				{isClicked && <UserProfile />}
			</Box>
		</Box>
	);
};

export default Topbar;
