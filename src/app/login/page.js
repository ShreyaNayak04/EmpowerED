"use client"

import { signIn } from 'next-auth/react'
import React, { useState } from 'react'

const page = () => {
    // const { data: session } = useSession(authoptions);

    // const handleLogin = async () => {
    //     const res = await signIn('google', { callbackUrl: `${process.env.NEXT_PUBLIC_HOST}` })
    // }
    // if (session) {
    //     redirect('/')
    // }
    
    const [credentials, setCredentials] = useState({
        email: ""
    })

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        signIn("credentials-login", {...credentials, callbackUrl: `${process.env.NEXT_PUBLIC_HOST}`, redirect: true})
    }

    return (
        <div>
            <h3>Login</h3>
            {/* <form className='px-4' onSubmit={handleSubmit}>
                <input type='text' name='email' value={credentials.email} onChange={handleChange} className='p-3 bg-gray-100'/>
                <button type='submit' className='p-2 bg-green-200 ' >Submit</button>
            </form> */}
        </div>
    )
}

export default page