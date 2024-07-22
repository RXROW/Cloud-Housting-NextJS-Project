"use client";

import React, { useState } from 'react';
 
function Register() {
  // State variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
 
  // Handle form submission
  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();  
    console.log({name , email , password })

 
    if (!name || !email || !password) {
      setError('All fields are required');
      return;
    }

    // try {
    //   // Replace this URL with your actual registration endpoint
    //   const response = await fetch('/api/register', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ name, email, password }),
    //   });

    //   const result = await response.json();

    //   if (response.ok) {
    //     setSuccess('Registration successful! Redirecting to login...');
    //     setTimeout(() => {
    //       router.push('/login');
    //     }, 2000); // Redirect after 2 seconds
    //   } else {
    //     setError(result.message || 'Registration failed');
    //   }
    // } catch (error) {
    //   setError('An unexpected error occurred');
    // }
  };

  return (
    <div className="flex items-center mt-6 justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-red-600 text-center">{error}</p>}
          {success && <p className="text-green-600 text-center">{success}</p>}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-bold hover:bg-blue-700 transition"
          >
            Register
          </button>
          <div className="text-center mt-4">
            <p className="text-gray-600">Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
