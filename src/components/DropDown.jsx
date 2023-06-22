import React, { useState } from "react";

const Dropdown = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			{isOpen && (
				<ul>
					<li>Option 1</li>
					<li>Option 2</li>
					<li>Option 3</li>
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
