import React from "react";
import { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [meme, setMeme] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMemes = async () => {
    try {
      setLoading(true);
      const data = await fetch("https://meme-api.com/gimme/20");
      if (!data.ok) {
        throw new Error(`HTTP Error! Status: ${data.status}`);
      }
      const json = await data.json();
      setMeme((meme) => [...meme, ...json.memes]);
    } catch (error) {
      console.error("Failed to fetch memes:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight
    ) {
      console.log("handle");
      fetchMemes();
    }
  };

  useEffect(() => {
    fetchMemes();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-row flex-wrap bg-orange-400 pl-9">
      {meme &&
        meme.map((element, index) => {
          return <MemeCard key={index} data={element} />;
        })}

      {loading && <Shimmer />}
    </div>
  );
};

export default Body;
