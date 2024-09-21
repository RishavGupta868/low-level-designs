import React, { useEffect, useRef, useState } from "react";
import Chat from "./Chat";

const Chat_Message_Limit = 30;

var nameList = [
  'Time', 'Past', 'Future', 'Dev',
  'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
  'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
  'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
  'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
  'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
  'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
  'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
  'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
  'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
  'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
  'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
  'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
  'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
  'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
  'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
  'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
  'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
  'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
  'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
  'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];
function generateRandomNames() {
var finalName = nameList[Math.floor(Math.random() * nameList.length)];
      return finalName;
    };

const ChatContainer = () => {
  const [messages, setMessages] = useState([]);
  const inputMessage = useRef(null);

const fetchData = ()=>{
  //make API CALL and get data

  const data = [ {
    PhotoUrl: "https://yt4.ggpht.com/ytc/AIdro_nuNlfceTDiBSTQUhxQ56YDJFbBu1DjRfTpJMFP6ck9D0x3tsglom8eMUA2blBLpRVU8w=s32-c-k-c0x00ffffff-no-rj",
    Name: generateRandomNames(),
    Comment: "This is a Comment",
  }];
setMessages((prevMessages)=>{
  let newMessageList = [...data , ...prevMessages];
   newMessageList = newMessageList.splice(0,Chat_Message_Limit);
  return newMessageList;
})
}

const handleSubmit = ()=>{
const userComment = inputMessage.current.value;
// console.log(userComment)
if(userComment.trim() !== ""){
const newMessage = [ {
  PhotoUrl: "https://yt4.ggpht.com/ytc/AIdro_nuNlfceTDiBSTQUhxQ56YDJFbBu1DjRfTpJMFP6ck9D0x3tsglom8eMUA2blBLpRVU8w=s32-c-k-c0x00ffffff-no-rj",
  Name: generateRandomNames(),
  Comment: userComment,
}];
setMessages((prevMessage)=>{
  let newMessageList = [...newMessage , ...prevMessage]; 
  newMessageList = newMessageList.splice(0 , Chat_Message_Limit);
  return newMessageList;
})
inputMessage.current.value = "";
}
}

useEffect(()=>{
  const interval = setInterval(fetchData , 2000);
  return ()=> clearInterval(interval)
},[])


  return (
    <div className="border flex  overflow-y-scroll h-[615px] border-black ml-2 w-full flex-col-reverse">
      <div className="flex m-2 rounded-lg">
      <input
      className="border border-black w-3/4"
      placeholder="type your message"
      type="text"
      ref={inputMessage}
      />
      <button className=" p-2 border border-black cursor-pointer" onClick={handleSubmit} > Submit </button>

      </div>
      
      {messages.map((messages, index) => {
      return  <Chat key={index} {...messages} />;
      })}
      
     
    </div>
  );
};

export default ChatContainer;
