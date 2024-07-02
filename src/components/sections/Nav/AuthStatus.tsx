import { auth, signIn, signOut } from "@/auth";

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
  return (
    <form
      action={async () => {
        "use server";
        await signIn("credentials", { username: "reda", password: "kdhaiwo" });
      }}
    >
      <button>Sign In</button>
    </form>
  );
};

export default AuthStatus;
