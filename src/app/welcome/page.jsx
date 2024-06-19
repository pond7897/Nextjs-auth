"use client"

import React from 'react'
import Navbar from '../components/Navbar'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

function WelcomePage() {

    const { data: session } = useSession()
    if (!session) redirect('/login')
    return (
        <div>
            <Navbar session={session}/>
            <div className="container mx-auto">
                <h3 className='text-3xl my-3'>Welcome {session?.user?.name}</h3>
                <p>Email: {session?.user?.email}</p>
                <hr className='my-3'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, blanditiis? Similique voluptatem amet labore non velit? Sapiente, non. Nesciunt in voluptates neque quam iusto quasi nisi officiis minus modi repellendus.</p>
            </div>
        </div>
    )
}

export default WelcomePage
