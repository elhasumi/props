import React from 'react';

const Profile = ({ user }) => {
  return (
    <div>
      <h1>{user.fullName}</h1>
      <h2>{user.bio}</h2>
      <h3>{user.profession}</h3>
      <img src={user.image} alt="Mohammed"/>
      <button onClick={() => alert(user.fullName) }>Say Hello</button>
    </div>
    
  );
  
  
}

export default Profile;
