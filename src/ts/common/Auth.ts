type Auth =
  | {
      id: number;
      name: string;
      email: string;
      Role?: { id: number; name: string };
    }
  | false;
export default Auth;
