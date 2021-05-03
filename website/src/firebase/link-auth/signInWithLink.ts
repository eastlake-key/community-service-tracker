import { firebase } from "../setup";

const signInwithLink = async () => {
  // Confirm the link is a sign-in with email link.
  if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      // User opened the link on a different device. To prevent session fixation
      // attacks, ask the user to provide the associated email again. For example:
      email = window.prompt("Please provide your email for confirmation");
    }
    return await firebase
      .auth()
      .signInWithEmailLink(email!, window.location.href)
      .catch((e) => {
        return null;
      });
  }
  return null;
};

export default signInwithLink;
