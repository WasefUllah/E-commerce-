"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex justify-end items-center gap-2">
        Signed in as {session.user.email} <br />
        <button
          onClick={() => signOut()}
          className="px-4 py-2 rounded-3xl text-black bg-white border-2 border-black hover:text-white hover:bg-black hover:border-white"
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div className="flex justify-end items-center gap-2">
      Not signed in <br />
      <button
        onClick={() => signIn()}
        className="px-4 py-2 rounded-3xl text-black bg-white border-2 border-black hover:text-white hover:bg-black hover:border-white"
      >
        Sign in
      </button>
    </div>
  );
}
