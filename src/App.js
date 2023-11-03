import React, { useState } from 'react';
import './styles.css';
import Feed from './Feed';
import ProfilePage from './Profile';

const initialPosts = [
  { id: 1, title: 'Post 1', content: 'This is the content of Post 1', likes: 0, dislikes: 0 },
  { id: 2, title: 'Post 2', content: 'This is the content of Post 2', likes: 0, dislikes: 0 },
];

const profile = {
  username: 'SampleUser',
  bio: 'This is a sample bio for the user',
};

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleAddPost = () => {
    if (newPost.title && newPost.content) {
      const newPostWithId = {
        ...newPost,
        id: posts.length + 1,
        likes: 0,
        dislikes: 0,
      };
      setPosts([...posts, newPostWithId]);
      setNewPost({ title: '', content: '' });
    }
  };

  const handleDeletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  const handleEditPost = (id, updatedPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, ...updatedPost } : post
    );
    setPosts(updatedPosts);
  };

  const handleLike = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  const handleDislike = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, dislikes: post.dislikes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div>
      <Feed
        posts={posts}
        onDelete={handleDeletePost}
        onLike={handleLike}
        onDislike={handleDislike}
        onEdit={handleEditPost}
      />
      <div>
        <h2>Add New Post</h2>
        <input
          type="text"
          placeholder="Enter title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <button onClick={handleAddPost}>Add Post</button>
      </div>
      <ProfilePage />
    </div>
  );
}

export default App;
