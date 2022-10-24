import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js'
import { getStorage,ref,uploadBytesResumable,getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js';

const authConfig = {
    apiKey: "AIzaSyCEZjDAcg2tc_UvocE0gTa2pggDwYWIcMc",
    authDomain: "database-karyawan-85931.firebaseapp.com",
    databaseURL: "https://database-karyawan-85931-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "database-karyawan-85931",
    storageBucket: "database-karyawan-85931.appspot.com",
    messagingSenderId: "595106859271",
    appId: "1:595106859271:web:bf5570d1deb88837a1dda2"
};

const app = initializeApp(authConfig);
const auth = getAuth();
const storage = getStorage(app);

document.getElementById("signup").addEventListener('click',function(){
    
    const email = document.getElementById("email").value
    const username = document.getElementById("userlogin").value
    const password = document.getElementById("pass").value

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const fileName = ((user.uid).concat("."));

        alert('Akun telah Dibuat!');
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert('Email telah terdaftar!');
    });
})

document.getElementById("signin").addEventListener("click", function(){
    
    const email1 = document.getElementById("emaillogin").value
    const password1 = document.getElementById("passlogin").value

    signInWithEmailAndPassword(auth, email1, password1)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        alert('berhasil masuk');
        window.location.pathname = "/Project Web E revisi home/index.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
        alert('Email atau Password salah');
    });
})
