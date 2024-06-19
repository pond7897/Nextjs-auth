"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import { useSession } from "next-auth/react";
export default function Home() {

  const { data: session } = useSession();

  return (
    <main>
      <Navbar session={session}/>
      <div className="container mx-auto">
        <h3 className="text-3xl my-3">Welcome to Homepage</h3>
        <hr className="my-3" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem,
          blanditiis? Similique voluptatem amet labore non velit? Sapiente, non.
          Nesciunt in voluptates neque quam iusto quasi nisi officiis minus modi
          repellendus.
        </p>
      </div>
    </main>
  );
}
