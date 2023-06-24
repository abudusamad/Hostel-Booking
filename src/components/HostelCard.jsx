import { useTheme } from "@emotion/react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { hostels } from "../data/dummy";
import { tokens } from "../theme";

const HostelList = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [likedItems, setLikedItems] = useState([]);

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

	return (
		<div>
			{hostels.map((hostel, index) => (
				<Box className=" flex-col gap-6">
					<Box className="grid grid-cols-3 grid-flow-row-dense ">
						<img
							key={index}
							src={hostel.image}
							alt={`Hostel ${index + 1}`}
							width="400"
							height="auto"
							style={{
								borderRadius: "14px",
								boxShadow: "1px 1px 3px 0.5px",
							}}
						/>
					</Box>
					<Box
						paddingX="10px"
						display="flex"
						flexWrap="wrap"
						flexDirection="column"
					>
						<Typography variant="h4" color={colors.grey[100]} fontWeight="bold" className=" pt-2 pb-2">
							{hostel.name}
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
							<Box display="flex" alignItems="center">
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
				</Box>
			))}
		</div>
	);
};

export default HostelList;
