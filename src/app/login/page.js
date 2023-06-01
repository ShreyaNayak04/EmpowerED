"use client"

import { signIn } from 'next-auth/react'
import React, { useState } from 'react'
const posts = [


    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    // More posts...
  ]
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

          </div>
       

      
       
    )
}

export default page