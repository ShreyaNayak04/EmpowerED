"use client"

import React from 'react'
import { authoptions } from '../api/auth/[...nextauth]/route';
import { signIn, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const page = () => {
    const { data: session } = useSession(authoptions);

    const handleLogin = async () => {
        const res = await signIn('google', { callbackUrl: `${process.env.NEXT_PUBLIC_HOST}` })
    }
    if (session) {
        redirect('/')
    }
    
    return (
        <div>
            <h3>Login</h3>
            <h3>{session?.user?.name}</h3>
            <button className="p-4 bg-gray-100 text-black" onClick={handleLogin}>Signin</button>
        </div>
    )
}

export default page