"use server";
import { auth, signOut } from "@/auth";
import Link from "next/link";

const AuthStatus = async () => {
  const session = await auth();
  if (session?.user)
    return (
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button>Sign out</button>
      </form>
    );
  return <Link href="/login">Sign In</Link>;
};

export default AuthStatus;
