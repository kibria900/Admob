import React from 'react'
import NavBar from './NavBar'

const SingUp = () => {
  return (
   <>
   <NavBar></NavBar>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
  <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md mx-auto mt-10 ">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
      
      <form className="space-y-4">
        <div>
          <label className="block text-gray-600 mb-1" htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1" htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="••••••••"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Sign Up
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account?{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Log in
        </a>
      </p>
    </div>
    
</div> 
   
   
   </>
  )
}

export default SingUp
