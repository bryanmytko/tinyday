"use client"
import { useState } from "react";

import { AuthSelector } from "@/components/forms/authSelector";
import { Login } from "@/components/forms/login";
import { Signup } from "@/components/forms/signup";
import { TFormState } from "@/components/forms/@types";

export default function Home() {
  const [formState, setFormState] = useState<TFormState>("home");

  return (
    <div className="main flex flex-col items-center justify-center max-w-sm gap-40">
      <h1 onClick={() => setFormState("home")} className="cursor-pointer">
        tinyday.
      </h1>
      <div className="w-full h-12">
        {formState === "home" && <AuthSelector setFormState={setFormState} />}
        {formState === "login" && <Login />}
        {formState === "signup" && <Signup />}
      </div>
    </div>
  );
}
