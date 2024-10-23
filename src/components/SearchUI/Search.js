import React, { useEffect, useState } from "react";

const Search = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [visible, setVisible] = useState(false);
  const [cache, setCache] = useState({}); //cache is always a object because the time complexity of finding in object in 0(1), or you can use hash map

  useEffect(() => {
    const intevalId = setTimeout(() => {
      fetchData();
    }, 300);
    return () => clearTimeout(intevalId); // if user presses key before 300ms then this return is called as componet is unmounted and again mounted and useeffect is called, dependacy change toh useffect called
  }, [inputSearch]);

  const fetchData = async function fetchData() {
    if (cache[inputSearch]) {
      setSearchResults(cache[inputSearch]);
    } else {
      const data = await fetch(
        "https://www.google.com/complete/search?&client=firefox&q=" +
          inputSearch
      );
      const json = await data.json();
      setSearchResults(json[1]);
      setCache((prevCache) => {
        return {
          ...prevCache,
          [inputSearch]: json[1],
        };
      });
    }
  };

  return (
    <div className="bg-zinc-200 pt-20 flex items-center mx-auto flex-col h-full shadow-lg">
      <h1 className="text-4xl font-bold ">Google Search</h1>
      <input
        type="text"
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        placeholder="Search"
        className="bg-gray-200 mt-20 w-1/2  h-7 border border-black p-6 "
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
      />
      {searchResults.length > 1 && visible && (
        <ul className="border border-black p-6 w-1/2 bg-gray-200">
          {searchResults?.map((item, i) => {
            return (
              <li
                key={i}
                className="p-2 text-lg bg-gray-100 border-b-2 rounded-md cursor-pointer hover:bg-gray-200 shadow-lg"
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
