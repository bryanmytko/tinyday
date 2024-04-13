import { useState } from "react";

import "./App.css";
import { Login } from "./components/login";
import { LoginForm } from "./components/loginForm";
import { SignupForm } from "./components/signupForm";
import { TFormState } from "./@types";

const App = () => {
  const [formState, setFormState] = useState<TFormState>("home");

  return (
    <div className="main flex flex-col">
      <h1 onClick={() => setFormState("home")} className="cursor-pointer">
        tinyday.
      </h1>
      <div className="mt-40 h-12 w-full">
        {formState === "home" && <Login setFormState={setFormState} />}
        {formState === "login" && <LoginForm />}
        {formState === "signup" && <SignupForm />}
      </div>
    </div>
  );
};

export default App;
