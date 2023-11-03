import React, { useState } from 'react';

const initialProfileData = {
  username: 'SampleUser',
  bio: 'This is a sample bio for the user',
};

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(initialProfileData);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className="profile">
      <h1>Profile Page</h1>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="username"
            value={profileData.username}
            onChange={handleInputChange}
            placeholder="Enter username"
          />
          <textarea
            name="bio"
            value={profileData.bio}
            onChange={handleInputChange}
            placeholder="Enter bio"
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h2>Username: {profileData.username}</h2>
          <p>Bio: {profileData.bio}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
