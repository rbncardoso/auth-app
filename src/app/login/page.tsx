"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'



export default function LoginPage() {

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {

  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Login</h1>
      <hr />
      <label htmlFor="email">email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg
        mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="text"
        value={user.email}
        onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
        placeholder='email'
      />
      <label htmlFor="password">password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg
        mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="password"
        value={user.password}
        onChange={(e) => { setUser({ ...user, password: e.target.value }) }}
        placeholder='password'
      />
      <button
        onClick={onLogin}
        className="p-2 border border-gray-300 rounded-lg
        mb-4 focus:outline-none focus:border-gray-600 hover:shadow-white"
      > Login</button>
      <Link href="/signup">Visit sigup</Link>
    </div>
  )
}
