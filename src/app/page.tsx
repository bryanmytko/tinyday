"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";

import { AuthSelector } from "@/components/forms/authSelector";
import { Login } from "@/components/forms/login";
import { Signup } from "@/components/forms/signup";
import { TFormState } from "@/components/forms/@types";
import { Dashboard } from "@/components/dashboard";

export default function Home() {
  const [formState, setFormState] = useState<TFormState>("home");

  // if (status === "authenticated") {
  //   console.log("session", session);
  //   return <Dashboard />;
  // }

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
