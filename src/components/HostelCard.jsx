import { useTheme } from "@emotion/react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import React, { useState } from "react";
import { hostels } from "../data/dummy";
import { tokens } from "../theme";
import Dropdown from "./DropDown";

const HostelList = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [likedItems, setLikedItems] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

	const handleLike = (index) => {
		const isLiked = likedItems.includes(index);

		if (isLiked) {
			const updatedItems = likedItems.filter((id) => id !== index);
			setLikedItems(updatedItems);
		} else {
			const updatedItems = [...likedItems, index];
			setLikedItems(updatedItems);
		}
	};
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			{hostels.map((hostel, index) => (
				<Box display="flex" flexDirection="column">
					<Box display="flex" position="relative" top="1.2rem">
						<CardHeader
							avatar={
								<Avatar
									sx={{ bgcolor: colors.primary[400] }}
									aria-label="recipe"
								>
									<CardMedia
										component="img"
										height="100px"
										width="10px"
										image={hostel.image}
										alt="Paella dish"
									/>
								</Avatar>
							}
							className="text-5xl"
							title={hostel.name}
							subheader={hostel.date}
						/>
						<Box paddingX="5.5rem" paddingTop="1rem">
							<Tooltip title="Settings">
								<IconButton aria-label="settings">
									<MoreVertIcon onClick={toggleDropdown} />
									<Dropdown />
								</IconButton>
							</Tooltip>
						</Box>
					</Box>
					<Box display="flex">
						<Box key={index}>
							<img
								src={hostel.image}
								alt="hostel"
								width="300"
								height="500"
								style={{
									borderRadius: "14px",
									boxShadow: "1px 1px 3px 0.5px",
								}}
							/>
						</Box>
						<Box
							paddingX="10px"
							display="flex"
							flexDirection="column"
							justifyContent="space-between"
						>
							<Typography
								variant="h4"
								color={colors.grey[100]}
								fontWeight="bold"
							>
								{hostel.discriptions}
							</Typography>
							<Typography variant="h5">{hostel.address}</Typography>
							<Box
								display="flex"
								alignhostel="center"
								color={colors.grey[100]}
								fontWeight="bold"
							>
								<IconButton>{hostel.likes} </IconButton>
								<IconButton>{hostel.likes}</IconButton>
								<IconButton>{hostel.likes}</IconButton>
								<IconButton>{hostel.likes}</IconButton>
								<IconButton>{hostel.dislikes}</IconButton>
								<Box display="flex" alignItems="center" justifyContent="center">
									<span>{hostel.rating}</span>
									<Typography variant="h6" sx={{ paddingLeft: "4px" }}>
										{hostel.reviews}
									</Typography>
								</Box>
							</Box>
							<Box display="flex" color={colors.grey[400]}>
								<Box>
									<Tooltip title={hostel.namLoc}>
										<IconButton>{hostel.location}</IconButton>
									</Tooltip>
								</Box>
								<Box>
									<Tooltip title={hostel.number}>
										<IconButton>{hostel.bed}</IconButton>
									</Tooltip>
								</Box>
								<Box>
									<Tooltip title="Wifi Available">
										<IconButton>{hostel.wifi}</IconButton>
										{/* <span> Wifi</span> */}
									</Tooltip>
								</Box>
							</Box>
						</Box>
						<Box
							display="flex"
							justifyContent="space-between"
							alignhostel="center"
							flexDirection="column"
							
						>
							<button
								onClick={() => handleLike(index)}
								className={likedItems.includes(index) ? "Liked" : ""}
							>
								{likedItems.includes(index) ? "Liked" : "like"}
								<IconButton>{hostel.favourite}</IconButton>
							</button>
							<Box display="flex" color={colors.grey[100]}>
								<Typography
									variant="h5"
									color={colors.grey[100]}
									fontWeight="bold"
									margin=" 0 5px"
								>
									{hostel.price}
								</Typography>
								<span>AUD Total</span>
							</Box>
						</Box>
					</Box>
				</Box>
			))}
			<div>
				{isOpen && (
					<ul>
						<li>Option 1</li>
						<li>Option 2</li>
						<li>Option 3</li>
					</ul>
				)}
			</div>
		</div>
	);
};

export default HostelList;
