import React from "react";

const Comment = ({data}) => {
    console.log(data)
  return (
    <div className="">
      <div className="flex p-2 ">
        <img
          className="w-16 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf0chI3bLTtIar9MM7tGc4JMDw7pKD1E7g-A&s"
          alt="profile-icon"
        />
        <span className="font-bold text-2xl p-2 py-4">{data.name}</span>
      </div>
      <div className="px-20">
        <h1 className=" font-medium text-lg font-serif border-l-8 border-black p-2">{data.comment}</h1>
      </div>
      <div className="px-20">
      {data?.replies?.map((reply)=> <Comment data={reply}/>)}
      </div>
      
    </div>
  );
};

export default Comment;
