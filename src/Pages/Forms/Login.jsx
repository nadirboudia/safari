import { useEffect, useState } from 'react';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { use } from 'react';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

function FormsubmitHandler(e) {
    e.preventDefault();

    if (email.trim() === '') return toast.error('Email is required');
    if (password.trim() === '') return toast.error('Password is required');

    const savedUser= JSON.parse(localStorage.getItem("user"))

    //  If same user is already logged in
    if (
      savedUser  && savedUser.email === email && savedUser.password ===password
    ) {
      return toast.info("You're already logged in.");
    }

    //  Save new user and show success toast
    localStorage.setItem("user", JSON.stringify({ email, password }));
    toast.success("Login successful!");
  }





  return (
    <div className='form-wrapper'>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <form onSubmit={FormsubmitHandler} className='form'>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder='Email'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value ) }
          type="Password"
          placeholder='Password'
        />
        <button onClick={()=>{
        }}>Login</button>
        
       
      </form>
    </div>
  );
}

export default Login;
