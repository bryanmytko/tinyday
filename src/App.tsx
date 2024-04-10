import "./App.css";

function App() {
  return (
    <div className="main flex flex-col">
      <h1>tinyday.</h1>
      <div className="mt-40">
        <button className="btn bg-pink-500 rounded py-1 px-4 w-48">
          Login
        </button>
        <div className="flex flex-row justify-center items-center my-2">
          <hr className="h-px mt-1 mx-2 bg-gray-200 border-0 dark:bg-gray-600 w-10" />
          <span className="text-xs text-gray-400">or</span>
          <hr className="h-px mt-1 mx-2 bg-gray-200 border-0 dark:bg-gray-600 w-10" />
        </div>
        <button className="btn bg-cyan-500 rounded py-1 px-4 w-48">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default App;
