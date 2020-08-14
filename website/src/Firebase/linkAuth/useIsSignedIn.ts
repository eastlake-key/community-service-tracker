import { firebase } from "../setup";
import { useState, useEffect } from "react";

/** A hook for determining if a user is signed in or not. Returns the user email if signed in and false otherwise.*/
const useIsSignedIn = () => {
  const [signedIn, setSignedIn] = useState<boolean | string>(false);
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user && user.email) {
        setSignedIn(user.email);
      } else {
        setSignedIn(false);
      }
    });
    return unsubscribe;
  });
  return signedIn;
};

export default useIsSignedIn;
