import React from "react";
import Comment from "./Comment";

const data = [
  {
    id: 1,
    name: "Rishav Gupta",
    comment: "This is my first Comment",
    replies: [
      {
        id: 2,
        name: "A Gupta",
        comment: "This is my reply to first Comment",
      },
    ]},
    {
    name: "B Gupta",
    comment: "This is my second Comment",
    replies: [
      {
        id: 3,
        name: "C Gupta",
        comment: "This is my reply to second Comment",
        replies: [
          {
            id: 4,
            name: "D Gupta",
            comment: "This is my reply to the reply of second Comment",
            replies: [
              {
                id: 5,
                name: "E Gupta",
                comment: "This is my reply to the reply to the reply of second Comment",
                replies: [
                  {
                    id: 6,
                    name: "F Gupta",
                    comment: "This is my reply to the reply to the reply to the reply of second Comment",
                  },
                ],
              },
            ],
          },
        ],
      },
    ]},
    {
    id: 7,
    name: "G Gupta",
    comment: "This is my third Comment",
    replies: [
      {
        id: 8,
        name: "H Gupta",
        comment: "This is my reply to third Comment",
      },
      {
        id: 20,
        name: "Hi Gupta",
        comment: "This is my reply to thirddd Comment",
      },
    ]},
    {
    id: 9,
    name: "J Gupta",
    comment: "This is my fourth Comment",
    replies: [
      {
        id: 10,
        name: "K Gupta",
        comment: "This is my reply to my fourt comment",
        replies: [
          {
            id: 11,
            name: "L Gupta",
            comment: "This is my reply to my reply to my fourt comment",
          },
        ],
      },
    ]},
    {
    id: 12,
    name: "M Gupta",
    comment: "This is my fifth Comment",
    replies: [],
  },
];

const CommentBox = () => {
  return (
    <div>
        {data.map((comment)=> <Comment key={comment.id} data={comment} />)}
      
    </div>
  );
};

export default CommentBox;
