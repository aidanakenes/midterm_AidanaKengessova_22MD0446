import React, { useState } from 'react';

const Feed = ({ posts, onDelete, onLike, onDislike, onEdit }) => {
  const [editData, setEditData] = useState({ id: null, title: '', content: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSave = () => {
    onEdit(editData.id, { title: editData.title, content: editData.content });
    setEditData({ id: null, title: '', content: '' });
  };

  return (
    <div>
      <h1>Feed Page</h1>
      {posts.map((post) => (
        <div key={post.id} className="post">
          {editData.id === post.id ? (
            <div>
              <input
                type="text"
                name="title"
                value={editData.title}
                placeholder="Enter title"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="content"
                value={editData.content}
                placeholder="Enter content"
                onChange={handleInputChange}
              />
              <button onClick={handleSave}>Save</button>
            </div>
          ) : (
            <div>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <div>
                <button onClick={() => onLike(post.id)}>Like ({post.likes})</button>
                <button onClick={() => onDislike(post.id)}>Dislike ({post.dislikes})</button>
                <button onClick={() => setEditData({ id: post.id, title: post.title, content: post.content })}>
                  Edit
                </button>
                <button onClick={() => onDelete(post.id)}>Delete</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Feed;
