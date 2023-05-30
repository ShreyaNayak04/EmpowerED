"use client";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession({required: true});
  console.log(session);

  return (
    <main>
      <h3>Main</h3>
    </main>
  )
}
