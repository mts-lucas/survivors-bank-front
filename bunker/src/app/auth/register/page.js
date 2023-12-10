'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginForm () {

  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const router = useRouter();
  const backgroundImage = '/spock-zombie.svg'; 
  const logoImage = '/assets/images.jpeg';

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      email,
      username,
      password,
      password2,
    };

    try {
      const response = await fetch('https://bunkerapi.onrender.com/bunker/api/v1/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.replace('/api/auth/signin');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black bg-cover transition-all duration-500 ease-in-out" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="px-8 py-6 mt-4 text-left bg-gradient-to-r from-red-600 via-black to-red-600 shadow-lg rounded-lg transition-all duration-500 ease-in-out">
        <div className="flex items-center justify-center mb-8">
          <img src={logoImage} alt="Logo" className="w-20 h-20 mr-4 rounded-full transition-all duration-500 ease-in-out"/> 
          <h1 className="text-4xl p-3 font-bold text-center text-yellow-100 transition-all duration-500 ease-in-out">Welcome to Survivors Bunker!</h1>
        </div>
        <h3 className="text-3xl font-bold text-center text-yellow-100 mb-8 transition-all duration-500 ease-in-out">Register your account</h3>
        <form onSubmit={handleSubmit} className="space-y-4 text-black p-10 text-2xl transition-all duration-500 ease-in-out">
          <div>
            <label className="block text-yellow-100 mb-2 transition-all duration-500 ease-in-out" htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-black transition-all duration-500 ease-in-out transform focus:scale-105"
            />
          </div>
          <div>
            <label className="block text-yellow-100 mb-2 transition-all duration-500 ease-in-out" htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-black transition-all duration-500 ease-in-out transform focus:scale-105"
            />
          </div>
          <div>
            <label className="block text-yellow-100 mb-2 transition-all duration-500 ease-in-out" htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-black transition-all duration-500 ease-in-out transform focus:scale-105"
            />
          </div>
          <div>
            <label className="block text-yellow-100 mb-2 transition-all duration-500 ease-in-out" htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setPassword2(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 text-black transition-all duration-500 ease-in-out transform focus:scale-105"
            />
          </div>
          <div className="flex items-baseline justify-between">
          <button
            type="submit"
            className="px-6 py-2 mt-4 text-yellow-100 bg-red-500 rounded-lg hover:bg-black transition-all duration-500 ease-in-out transform scale-100 hover:scale-105"
          >
            Register
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};
