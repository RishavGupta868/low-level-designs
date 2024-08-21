import React from "react";
import { useOutletContext } from "react-router-dom";
import { Lang } from "../Utils/constants";

const About = () => {
const { lang } = useOutletContext();
const data = Lang[lang]
  
  return (
    <div>
      <h1 className="font-bold text-xl text-black p-4">{data.title}</h1>
      <p className="pl-4">
       {data.desc}
      </p>
      <h1 className="font-bold text-xl text-black p-4">{data.title2}</h1>
      <p className="pl-4">
        {data.desc}
      </p>
      <h1 className="font-bold text-xl text-black p-4">{data.title3}</h1>
      <p className="pl-4">
        {data.desc}
      </p>
      <h1 className="font-bold text-xl text-black p-4">{data.title4}</h1>
      <p className="pl-4">
        {data.desc}
      </p>
    </div>
  );
};

export default About;
