import { User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { authentication } from "../../firebase-config";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState({} as User);
  useEffect(() => {
    const user = authentication.currentUser
    if (user) {
      // User is signed in.
      setUser(user);
    } else {
      // No user is signed in.
      navigate("/login");
    }
  }, [])
  return <React.Fragment>
    <h1>Users page placeholder {user.email}</h1>
    <button onClick={(e) => {
      try {
        authentication.signOut()
      } catch (error) {
        console.error("An error " + JSON.stringify(error))
      }
      navigate("/login");
    }}>Sign Out</button>
  </React.Fragment>;
}
