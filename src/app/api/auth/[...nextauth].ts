import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const authOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        return null;
      },
    }),
  ],
};

export default NextAuth(authOptions);
