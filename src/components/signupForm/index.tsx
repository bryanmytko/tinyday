const SignupForm = () => (
  <form
    action="#"
    className="transition-opacity transition ease-in-out delay-150 duration-300"
  >
    <div className="flex flex-col items-start">
      <label
        htmlFor="email"
        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
      >
        Email Address
      </label>
      <input
        type="email"
        id="email"
        className="text-slate-600 shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 bg-slate-100"
        placeholder="your@email.com"
        required
      />
    </div>
    <div className="flex flex-col items-start mt-2">
      <label
        htmlFor="password"
        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
      >
        Password
      </label>
      <input
        type="password"
        id="password"
        className="text-slate-600 shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 bg-slate-100"
        placeholder="Enter your password"
        required
      />
      <button
        type="submit"
        className="w-full flex justify-center mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Sign up
      </button>
    </div>
  </form>
);

export { SignupForm };
