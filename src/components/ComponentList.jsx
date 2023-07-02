// import React, { useState } from "react";
// import { hostels } from "../data/dummy";

// const ComponentList = () => {
// 	const [currentPage, setCurrentPage] = useState(0);
// 	const itemsPerPage = 5; // Number of items to display per page
	

// 	const handleNext = () => {
// 		const lastPage = Math.ceil(hostels.length / itemsPerPage) - 1;
// 		setCurrentPage(currentPage === lastPage ? 0 : currentPage + 1);
// 	};

// 	const handlePrevious = () => {
// 		const lastPage = Math.ceil(hostels.length / itemsPerPage) - 1;
// 		setCurrentPage(currentPage === 0 ? lastPage : currentPage - 1);
// 	};

// 	const renderItems = () => {
// 		const startIndex = currentPage * itemsPerPage;
// 		const endIndex = startIndex + itemsPerPage;
// 		const itemsToRender = hostels.slice(startIndex, endIndex);

// 		return itemsToRender.map((item, index) => <div key={index}>{item}</div>);
// 	};

// 	return (
// 		<div>
// 			{renderItems()}
// 			<button onClick={handlePrevious}>Previous</button>
// 			<button onClick={handleNext}>Next</button>
// 		</div>
// 	);
// };

// export default ComponentList;
