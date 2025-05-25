import React from 'react'
import NavBar from './NavBar'

const Login = () => {
  return (
  <>
  <NavBar></NavBar>
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
  <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-2xl shadow-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" action="#">
      <h5 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">Sign in to our platform</h5>
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
      </div>
      <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="remember" className="ml-2 text-sm text-gray-900 dark:text-gray-300">Remember me</label>
        </div>
        <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
      </div>
      <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700">Login to your account</button>
      <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-300">
        Not registered? <a href="#" className="text-blue-600 hover:underline dark:text-blue-400" >Create account</a>
      </div>
    </form>
  </div>
</div>
  
  
  </>
  )
}

export default Login
