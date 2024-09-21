import React, { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
  "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6",
  "https://images.unsplash.com/photo-1498804103079-a6351b050096",
  "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b",
];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

useEffect(()=>{
   const intervalID = setInterval(()=>{
    nextImage();
   } , 5000)
   return ()=> clearInterval(intervalID)
},[activeIndex])

    

  const prevImage = () => setActiveIndex((activeIndex)=> activeIndex - 1< 0 ? images.length -1 : activeIndex -1);
  const nextImage = () => setActiveIndex((activeIndex)=> (activeIndex + 1) % images.length);

  return (
    <div>
      <div className="m-4 p-4 flex justify-center items-center">
        <img
          onClick={prevImage}
          className="w-14 h-14 -mx-20 relative cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
          alt="left-arrow"
        />
        <img
          className="w-[700px] h-[700px]"
          src={images[activeIndex]}
          alt="image-slider"
        />
        <img
          onClick={nextImage}
          className="w-14 h-14 -mx-20 relative  cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
          alt="right-arrow"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
