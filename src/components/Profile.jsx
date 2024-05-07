import { useEffect, useState } from "react";
import { getUsername } from "../api/api";

function Profile({ username }) {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getUsername(username)
      .then((response) => {
        setUser(response.data.user);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="user-profile">
      <h1>Your user profile page</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Oops - something has gone wrong !</p>
      ) : (
        <>
          <p className="user-profile-text">username: {user.username}</p>
          <p className="user-profile-text">name: {user.name}</p>
          <img src={user.avatar_url} className="user-profile-image" />
        </>
      )}
    </div>
  );
}

export default Profile;
