import React from "react";

const Chat = ({Name, PhotoUrl, Comment}) => {
    
  return (
    <div>
      <div className="flex p-2 items-center">
        <img
          className="w-10 h-10 rounded-full m-2"
          src={PhotoUrl}
          alt="user-icon"
        />

        <p className="p-2">
          {" "}
          <span className=" font-bold">{Name} -</span>{" "}
          <span >{Comment}</span>
        </p>
      </div>
    </div>
  );
};

export default Chat;
