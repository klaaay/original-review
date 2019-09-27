import React from "react";
import Comments from "./comments";

const aFakeArticle = {
  title: "Fake article title.",
  author: "grzm",
  text:
    "Fake articleFake articleFake articleFake articleFake articleFake articleFake articleFake articleFake articleFake articleFake articleFake articleFake articleFake articleFake articleFake articleFake article",
  comments: [
    {
      id: 1,
      text: "Example comment here.",
      author: "user2",
      children: [
        {
          id: 2,
          text: "Another example comment text.",
          author: "user3",
          children: [
            {
              id: 3,
              text: "Another example comment text.",
              author: "user4",
              children: []
            }
          ]
        }
      ]
    },
    {
      id: 4,
      text: "Example comment here 2.",
      author: "user5",
      children: []
    }
  ]
};

const Article = () => {
  return (
    <>
      <div className="article-area">
        <h1>{aFakeArticle.title}</h1>
        <p>{aFakeArticle.author}</p>
        <p>{aFakeArticle.text}</p>
      </div>
      <div className="comments-area">
        {aFakeArticle.comments.map(comment => {
          return <Comments key={comment.id} comment={comment} />;
        })}
      </div>
    </>
  );
};

export default Article;
