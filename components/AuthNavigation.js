import { useState, useEffect } from "react";
import { SignedInStack, SignedOutStack } from "../navigation";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import LoadingIndicator from "./LoadingIndicator";

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const userHandler = (user) => {
    user ? setCurrentUser(user) : setCurrentUser(null);
  };

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      userHandler(user);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>
  );
};

export default AuthNavigation;
