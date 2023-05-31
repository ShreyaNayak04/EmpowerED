"use client"

import React from 'react'
import { authoptions } from '../api/auth/[...nextauth]/route';
import { signIn, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const page = () => {
    // const { data: session } = useSession(authoptions);

    // const handleLogin = async () => {
    //     const res = await signIn('google', { callbackUrl: `${process.env.NEXT_PUBLIC_HOST}` })
    // }
    // if (session) {
    //     redirect('/')
    // }
    
    return (
        // homepage
        <div className="relative mt-1 overflow-hidden bg-white">

        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48 ">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="sm:max-w-lg">
           <h1 className='font text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl px-10'>“To any entrepreneur: if you want to do it, do it now. If you don’t, you’re going to regret it.”</h1>
          <p className='mt-4 text-xl text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsam incidunt beatae ad voluptatem at non, quas iusto eveniet neque quo. Magni facilis exercitationem ipsum. Asperiores hic explicabo pariatur quod.</p>
        </div>
        </div>
        </div>
{/* homepage */}


        {/* footer */}
        <div>
            
      <footer className="bg-white dark:bg-gray-500">
        <div className="container px-6 py-8 mx-auto">
       <div className="text-center">
              <a href="#" className="text-3xl font-bold dark:text-cyan-400 hover:text-gray-700 dark:hover:text-gray-300  lg-text-3xl tracking-widest">EmpowerED.</a>
              <div className="flex flex-wrap justify-center mt-5 -mx-4">
              <a href="#" className="mx-4 text-gray-900 transition-colors duration-300  hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 font-semibold " aria-label="Reddit"> Home </a>

              <a href="#" className="mx-4 text-gray-900 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 font-semibold" aria-label="Reddit"> About </a>

              <a href="#" className="mx-4 text-gray-900 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 font-semibold" aria-label="Reddit"> Contact Us </a>

            
            </div>
       </div>
       <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
       <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-gray-500 dark:text-gray-200">© Copyright 2022. All Rights Reserved.</p>
            </div>
            </div>
            </footer>
       
       
      
        </div>
       {/* footer */}
        </div>
       
    )
}

export default page