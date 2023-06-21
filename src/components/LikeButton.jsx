import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import FavoriteIcon from "@mui/icons-material/Favorite";

const LikeButton = () => {
  const [likes, setLikes] = useState([]);

  const handleLike = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index] = !updatedLikes[index];
    setLikes(updatedLikes);
  };

  const items = [
    'Item 1',
    'Item 2',
    'Item 3'
  ];

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <span>{item}</span>
          <button onClick={() => handleLike(index)}>
            {likes[index] ? <FavoriteIcon color="red" /> : <FavoriteIcon />}
          </button>
        </div>
      ))}
    </div>
  );
};

export default LikeButton;