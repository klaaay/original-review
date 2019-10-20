import React from "react";

const Comments = ({ comment }) => {
  const nestedComments = (comment.children || []).map(comment => {
    return <Comments key={comment.id} comment={comment} type="child" />;
  });

  return (
    <div style={{ marginLeft: "25px", marginTop: "10px" }}>
      <h1>{comment.author}</h1>
      <p>{comment.text}</p>
      {nestedComments}
    </div>
  );
};

export default comments;
