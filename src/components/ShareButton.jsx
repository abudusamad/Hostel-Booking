import React from 'react';

const ShareButton = ({ content }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: content,
        url: window.location.href
      })
        .then(() => console.log('Content shared successfully'))
        .catch((error) => console.log('Error sharing content:', error));
    } else {
      console.log('Web Share API not supported');
    }
  };

  return (
    <button onClick={handleShare}>Share</button>
  );
};

export default ShareButton;