import { authenticate } from "@/services/authService";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
// Your own logic for dealing with plaintext password strings; be careful!

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { type: "email", label: "username" },
        password: { type: "password", label: "password" },
      },
      authorize: async (credentials) => {
        const result = await authenticate({
          username: "kdkdhwo",
          password: "kdowiw",
        });
       
        return { name: "reda@gmail.com" };
        
      },
    }),
  ],
  pages: {
    error: "/test",
  },
  logger: {
    error: (er) => {},
  },
});
