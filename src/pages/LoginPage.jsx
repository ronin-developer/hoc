
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setNavigate = useNavigate();

  function handleInput(event) {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    // save data
    localStorage.setItem('vite_user', JSON.stringify({email, password}));

    // redirect on HomePage
    setEmail('');
    setPassword('');
    setTimeout (() => {
      // toast
      toast.success('User data is valid, login successful')
      setNavigate('/');
    }, 5000);

    console.log(email, password);
  }

  return (
    <div className="container mx-auto my-6">
      <h2>User login</h2>
      <hr className="border shadow-md" />

      <form className="my-6 flex flex-col w-80 gap-4" onSubmit={handleSubmit}>
        <input
          className="border p-2 hover:shadow-xl"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleInput}
        />
        <input
          className="border p-2 hover:shadow-xl"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInput}
        />
        <button
          className="mx-auto w-24 h-8 rounded-md bg-orange-400 ring-2 ring-stone-500 ring-inset hover:bg-orange-700 hover:shadow-xl"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
