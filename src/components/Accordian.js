import React, { useState } from "react";
import AccordianItem from "./AccordianItem";

const data = [
  {
    title: "Accordian Item #1",
    description:
      "This is the first item's accordion body.It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "Accordian Item #2",
    description:
      "This is the second item's accordion body.It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "Accordian Item #3",
    description:
      "This is the third item's accordion body.It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
];

const Accordian = () => {
  const [openIndices, setOpenIndices] = useState([0]);

  const toggleIndices = (index)=>{
    if(openIndices.includes(index)){
      setOpenIndices(openIndices.filter((i)=> i !== index))
    }else{
      setOpenIndices([...openIndices , index])
    }
  }

  return (
    <div className="m-auto my-6 py-4 border border-black w-[700px] rounded-lg">
      {data.map((item, index) => {
        return (
          <AccordianItem
            title={item.title}
            description={item.description}
            key={index}
            showItem={openIndices.includes(index)}
            toggleIndices={()=> toggleIndices(index)}
          />
        );
      })}
    </div>
  );
};

export default Accordian;
