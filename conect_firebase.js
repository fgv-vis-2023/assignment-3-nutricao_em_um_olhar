
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhS7zhyXHLNGLpQ9saPZZg8Aol8jWaGPA",
    authDomain: "nutricao-em-um-olhar.firebaseapp.com",
    projectId: "nutricao-em-um-olhar",
    storageBucket: "nutricao-em-um-olhar.appspot.com",
    messagingSenderId: "101019466395",
    appId: "1:101019466395:web:d22a7fda84e635e544243e",
    measurementId: "G-MNX0D151MB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);
// Signed in
const user_uid = localStorage.getItem('user');
console.log(user_uid);

const confirmar_elemente = document.getElementById('confirmar');
confirmar_elemente.addEventListener('click', confirmar);


// Recupera os dados do usuário
const docRef = doc(db, "user", user_uid);

getDoc(docRef)
    .then((docSnap) => {
        // Recupera os dados do documento (testes)
        if (docSnap.exists()) {
            if (docSnap.data()["initial"] == false) {
                let fieldIds = ["weight", "daily_calories", "carbs_percent", "lipids_percent", "protein_percent", "tolerance"];
                fieldIds.forEach(function (fieldId) {
                    // Define o valor do elemento como o valor no banco de dados
                    document.getElementById(fieldId).value = docSnap.data()[fieldId];
                });
            }
        } else {
            console.log("No such document!");
        }
    })
    .catch((error) => {
        console.error("Erro ao recuperar os dados:", error);
    });



function confirmar() {
    var fieldIds = ["weight", "daily_calories", "carbs_percent", "lipids_percent", "protein_percent", "tolerance"];
    var data = {};

    fieldIds.forEach(function (fieldId) {
        var value = parseInt(document.getElementById(fieldId).value);
        if (isNaN(value)) {
            var placeholder = document.getElementById(fieldId).placeholder;
            data[fieldId] = placeholder;
        } else {
            data[fieldId] = value;
        }
    });

    // Cria (ou atualiza) o documento para o usuário no Firestore
    setDoc(doc(db, "user", user_uid, "current_data"), {
        weight: data["weight"],
        daily_calories: data["daily_calories"],
        carbs_percent: data["carbs_percent"],
        lipids_percent: data["lipids_percent"],
        protein_percent: data["protein_percent"],
        tolerance: data["tolerance"],
        initial: 1
    })
        .then(() => {
            // Operação de gravação concluída com sucesso
            // Troca para a página app.html
            // window.location.href = "app.html";


            // Muda para a página app.html
            window.location.href = "app.html";

            /*
            // Recupera os dados do usuário
            const docRef = doc(db, "user", user_uid);
            
            getDoc(docRef)
                .then((docSnap) => {
                    
                    // Recupera os dados do documento (testes)
                    if (docSnap.exists()) {
                        console.log("Document data:", docSnap.data());
                    } else {
                        console.log("No such document!");
                    }
                    
                    // // Muda para a página app.html
                    // window.location.href = "app.html";
                })
                .catch((error) => {
                    console.error("Erro ao recuperar os dados:", error);
                });
            */
        })
        .catch((error) => {
            // Ocorreu um erro ao gravar no Firestore
            console.error("Erro ao criar o documento: ", error);
        });

}