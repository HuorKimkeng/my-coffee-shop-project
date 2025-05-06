import { useState } from "react";
import "./LoginForm.css";

export default function LoginForm() {
   const [isRegister, setIsRegister] = useState(false);
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [errorMessage, setErrorMessage] = useState("");

   const handleSubmit = async (e) => {
      e.preventDefault();
    
      const apiEndpoint = isRegister ? "/api/register" : "/api/login";
      const body = isRegister
        ? JSON.stringify({ username, password, confirmPassword: password })
        : JSON.stringify({ username, password });
    
      try {
         const response = await fetch(apiEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body,
         });
      
         if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "An error occurred");
         }
      
         const data = await response.json();
         alert(data.message);
      
         if (isRegister) {
            setIsRegister(false); // Switch to login after successful registration
         }
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
         <form className="auth-form" onSubmit={handleSubmit}>
         {isRegister ? (
            <>
               <div className="input-box">
                  <input
                     type="text"
                     placeholder="Username or e-mail"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                  />
               </div>
               <div className="input-box">
                  <input
                     type="password"
                     placeholder="Password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </div>
               <div className="input-box">
                  <input
                     type="password"
                     placeholder="Confirm Password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)} // Add a separate state if needed
                  />
               </div>
               <button className="submit-button">Register</button>
            </>
         ) : (
            <>
               <div className="input-box">
               <input
                  type="text"
                  placeholder="Username or e-mail"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
               />
               </div>
               <div className="input-box">
                  <input
                     type="password"
                     placeholder="Password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </div>
               <div className="options">
               <label>
                  <input type="checkbox" /> Remember me
               </label>
               <a href="#">Forgot password?</a>
               </div>
               <button className="submit-button" type="submit">
                  Sign In
               </button>
               {errorMessage && <p className="error-message">{errorMessage}</p>}
            </>
         )}
         </form>
      </div>
   );
}
