import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBI7GasxH-xjX0QgxMTqwSF_56yk8HD6D8",
    authDomain: "vishvakarmans-93d5a.firebaseapp.com",
    databaseURL: "https://vishvakarmans-93d5a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vishvakarmans-93d5a",
    storageBucket: "vishvakarmans-93d5a.appspot.com",
    messagingSenderId: "251723619946",
    appId: "1:251723619946:web:063337559b52788eca3413",
    measurementId: "G-VPJMSQJS7W"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('registrationform').addEventListener('submit',
    (event) => { contactForm(event, db); });
async function contactForm(event, db) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const textarea = document.getElementById("textarea").value;
    if (!email ||
        !validateEmail(email)) { alert(`Please enter a valid email address.`); }
    else if (!textarea) { alert('Please describe your problem.'); } 
    else {
        try {
            let date = new Date();
            const docRef = await addDoc(collection(db, "Queries"), { email: email, textarea: textarea, date: date });
            document.getElementById(
                "email").value = "";
            document.getElementById("textarea").value = "";
            alert(`Thank you reaching us, we received your query and revert you back!`);
        } catch (error) {
            console.error("Error submitting form:", error);
            alert(`Error submitting form. Please try again.`);
        }
    }
}

const validateEmail = (email) => { const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return re.test(email); };
export { contactForm };
export { app };