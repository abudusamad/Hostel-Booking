import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import axios from "axios";

import {
	AppBar,
	Avatar,
	Box,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Tooltip,
	useTheme,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import React, { useContext, useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useStateContext } from "../../contexts/ContextProvider";
import { auth } from "../../lib/firebase";
import { ColorModeContext, tokens } from "../../theme";
const Topbar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);
	const { currentUser } = useContext(AuthContext);
	const { activeMenu, setActiveMenu, setScreenSize, screenSize } =\
		useStateContext();
	const [query, setQuery] = useState("");
	const [data, setData] = useState([]);

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
	 useEffect(() => {
			const fetchData = async () => {
				const res = await axios.get(`http://localhost:React App?q=${query}`);
				setData(res.data);
			};
			if (query.length === 0 || query.length > 2) fetchData();
		}, [query]);


	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const navigate = useNavigate();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleLogout = async () => {
		await auth.signOut().then(() => navigate("/"));
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
					marginLeft="10px"
				>
					<InputBase
						sx={{ ml: 2, flex: 1, width: "75%" }}
						placeholder="Search"
						onChange={(e) => setQuery(e.target.value.toLowerCase())}
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
				<IconButton
					id="demo-positioned-menu"
					onClick={handleClick}
					size="small"
					aria-controls={open ? "demo-positioned-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={open ? "true" : undefined}
				>
					<Tooltip title="UserProfile">
						<Avatar
							src={currentUser?.photoURL}
							sx={{ width: 35, height: 35 }}
						/>
					</Tooltip>
				</IconButton>
			</Box>
			<AppBar display="sticky" color="inherit">
				<Container maxWidth="lg">
					<Menu
						id="demo-positioned-menu"
						aria-labelledby="demo-positioned-button"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						anchorOrigin={{
							vertical: "top",
							horizontal: "left",
						}}
						transformOrigin={{
							vertical: "top",
							horizontal: "left",
						}}
					>
						<MenuItem
							onClick={() => {
								navigate("/my-profile");
								handleClose();
							}}
						>
							<IconButton>
								<Tooltip title="Profile">
									<PersonOutlineOutlinedIcon />
								</Tooltip>
							</IconButton>
						</MenuItem>
						<MenuItem onClick={handleLogout}>
							<IconButton>
								<Tooltip title="LogOut">
									<LogoutOutlinedIcon />
								</Tooltip>
							</IconButton>
						</MenuItem>
					</Menu>
				</Container>
			</AppBar>
		</Box>
	);
};

export default Topbar;
