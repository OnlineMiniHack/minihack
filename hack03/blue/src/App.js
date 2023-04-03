import React, { useState, useEffect } from "react";
import "./App.css";
import { GiphyFetch } from "@giphy/js-fetch-api";
import Meme from "./components/Meme";

const gf = new GiphyFetch("xSmxsbnYFeDp6Uf1vl1Y114V9zwGZHrh");

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    gf.search("christmas", { limit: 24 }).then(({ data }) => setGifs(data));
  }, []);

  return (
    <div className="masonry">
      {gifs.map((gif, i) => (
        <Meme gif={gif} key={gif.id} i={i} />
      ))}
    </div>
  );
}

export default App;
