import { useState } from "react";
import "./LoginForm.css";

export default function LoginForm() {
   const [isRegister, setIsRegister] = useState(false);
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [errorMessage, setErrorMessage] = useState("");

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
         });

         if (!response.ok) throw new Error("Invalid username or password");

         const data = await response.json();
         alert(data.message); // Show success message
      } catch (error) {
         setErrorMessage(error.message);
      }
   };
 
   return (
      <div className="auth-container">
         <div className="auth-toggle">
            <button
               className={isRegister ? "active" : ""}
               onClick={() => setIsRegister(true)}
            >
               Register
            </button>
            <button
               className={!isRegister ? "active" : ""}
               onClick={() => setIsRegister(false)}
            >
               Sign In
            </button>
         </div>
         <div className="auth-form">
            {isRegister ? (
            <>
               <div className="input-box">
                  <input type="text" placeholder="Username or e-mail" />
               </div>
               <div className="input-box">
                  <input type="password" placeholder="Password" />
               </div>
               <div className="input-box">
                  <input type="password" placeholder="Confirm Password" />
               </div>
               <button className="submit-button">Register</button>
            </>
            ) : (
            <>
               <div className="input-box">
                  <input type="text" placeholder="Username or e-mail" />
               </div>
               <div className="input-box">
                  <input type="password" placeholder="Password" />
               </div>
               <div className="options">
                  <label>
                     <input type="checkbox" />Remember me
                  </label>
                  <a href="#">Forgot password?</a>
               </div>
               <button className="submit-button">Sign In</button>
            </>
            )}
         </div>
      </div>
   );
}