import React, { useState } from "react";
import "../App.css";

const Meme = ({ gif, i }) => {
  const [toggled, setToggled] = useState(false);

  return (
    <figure className="masonry-brick" onClick={() => setToggled(!toggled)}>
      {toggled ? (
        <img
          src={gif.images.fixed_height_small.url}
          alt="Memeeeeeessssssss"
          className="masonry-img"
        />
      ) : (
        <h3 className="masonry-img">{i + 1}</h3>
      )}
    </figure>
  );
};

export default Meme;
