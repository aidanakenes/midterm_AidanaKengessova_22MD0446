import React from 'react';

const Post = ({ post, onEdit, onDelete }) => (
  <div className="post">
    <h1>Post Page</h1>
    <h2>{post.title}</h2>
    <p>{post.content}</p>
    <div>
      <button onClick={() => onEdit(post.id, { title: 'Updated Title', content: 'Updated Content' })}>
        Edit
      </button>
      <button onClick={() => onDelete(post.id)}>Delete</button>
    </div>
  </div>
);

export default Post;
