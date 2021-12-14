import firebase from 'firebase';
import axios from 'axios';

axios.interceptors.request.use((request) => {
  const token = window.localStorage.getItem('token');

  if (token != null) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
}, (err) => Promise.reject(err));

const signInUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((user) => {
    const u = user.user;
    if (user.additionalUserInfo?.isNewUser) {
      const userInfo = {
        firstName: u?.displayName.split(' ')[0],
        lastName: u?.displayName.split(' ')[1],
        userName: u?.email.split('@gmail.com')[0]
      };
      createUser(userInfo);
    }
  });
};

const signOutUser = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then(resolve).catch(reject);
});
export { signInUser, signOutUser };
