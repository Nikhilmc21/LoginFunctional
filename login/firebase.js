const firebaseConfig = {
    apiKey: "AIzaSyBH2eoPxG880WsnH0LZlRUQg0Z0_oo2WX4",
    authDomain: "book-exchange-38d79.firebaseapp.com",
    databaseURL: "https://book-exchange-38d79-default-rtdb.firebaseio.com",
    projectId: "book-exchange-38d79",
    storageBucket: "book-exchange-38d79.appspot.com",
    messagingSenderId: "238743730779",
    appId: "1:238743730779:web:de9de6dcdd1a54efc2dd7e"
};
  
firebase.initializeApp(firebaseConfig);
  
function SignUpButton() {
    const email = document.getElementById("emailS").value;
    const password = document.getElementById("passwordS").value;
    const name = document.getElementById("name").value;
    signUpWithEmailAndPassword(email, password, name);
}
  
function SignInButton() {
    const email = document.getElementById("emailL").value;
    const password = document.getElementById("passwordL").value;
    signInWithEmailAndPassword(email, password);
}  