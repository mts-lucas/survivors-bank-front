'use client'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginForm () {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  async function handleSubmit(e){
    e.preventDefault();
    const result = await signIn('BunkerAPI', {
        username,
        password,
        redirect: false

    })
    
    if (result?.error) {
        console.log(result)
        return
    }

    router.replace('/')
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Login to your account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button
                type="submit"
                className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
