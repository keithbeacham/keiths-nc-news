import { useContext, useEffect, useState } from "react";
import { getUsername } from "../api/api";
import { UserContext } from "../contexts/User";

function Profile() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getUsername(user)
      .then((response) => {
        setUserProfile(response.data.user);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {user ? (
        <div className="user-profile-page">
          <h1>Your user profile page</h1>
          {isLoading ? (
            <p>Loading...</p>
          ) : isError ? (
            <p>Oops - something has gone wrong !</p>
          ) : (
            <>
              <p className="user-profile-text">
                username: {userProfile.username}
              </p>
              <p className="user-profile-text">name: {userProfile.name}</p>
              <img
                src={userProfile.avatar_url}
                className="user-profile-image"
              />
            </>
          )}
        </div>
      ) : null}
    </>
  );
}

export default Profile;
