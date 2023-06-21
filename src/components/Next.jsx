import React, { useState } from "react";

const ImageCarousel = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];

	const nextImage = () => {
		setCurrentImage((prevImage) => (prevImage + 1) % images.length);
	};

	const previousImage = () => {
		setCurrentImage(
			(prevImage) => (prevImage - 1 + images.length) % images.length
		);
	};

	return (
		<div>
			<img src={images[currentImage]} alt="Carousel" />
			<button onClick={previousImage}>Previous</button>
			<button onClick={nextImage}>Next</button>
		</div>
	);
};

export default ImageCarousel;

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <p>Page {currentPage} out of {totalPages}</p>
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
