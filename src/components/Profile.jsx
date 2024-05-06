import { useEffect, useState } from "react";
import { getUsername } from "../api/api";

function Profile({ username }) {
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    getUsername(username)
      .then((response) => {
        console.log(response);
        setUser(response.data.user);
      })
      .catch((error) => {
        setIsError(true);
      });
  });
  return (
    <div className="user-profile">
      <h1>Your user profile page</h1>
      <p className="user-profile-text">username: {user.username}</p>
      <p className="user-profile-text">name: {user.name}</p>
      <img src={user.avatar_url} className="user-profile-image" />
    </div>
  );
}

export default Profile;
