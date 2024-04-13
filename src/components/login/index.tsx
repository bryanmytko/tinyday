import { Dispatch, SetStateAction } from "react";

import { TFormState } from "../../@types";

interface ILoginFormProps {
  setFormState: Dispatch<SetStateAction<TFormState>>;
}

const Login = ({ setFormState }: ILoginFormProps) => (
  <>
    <button
      className="w-full flex justify-center mt-6 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={() => setFormState("login")}
    >
      Login
    </button>
    <div className="flex flex-row justify-center items-center my-2">
      <hr className="h-px mt-1 mx-2 bg-gray-200 border-0 dark:bg-gray-600 w-10" />
      <span className="text-xs text-gray-400">or</span>
      <hr className="h-px mt-1 mx-2 bg-gray-200 border-0 dark:bg-gray-600 w-10" />
    </div>
    <button
      className="w-full flex justify-center mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={() => setFormState("signup")}
    >
      Sign up
    </button>
  </>
);

export { Login };
