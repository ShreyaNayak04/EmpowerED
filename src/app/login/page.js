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
        // homepage
        <div className="relative mt-1 overflow-hidden bg-white">

        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48 ">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="sm:max-w-lg">
           <h1 className='font text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl px-10'>“To any entrepreneur: if you want to do it, do it now. If you don’t, you’re going to regret it.”</h1>
          <p className='mt-4 text-small text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsam incidunt beatae ad voluptatem at non, quas iusto eveniet neque quo. Magni facilis exercitationem ipsum. Asperiores hic explicabo pariatur quod.</p>
        </div>
        </div>
        </div>
{/* homepage */}

        <div>
       
       
    )
}

export default page