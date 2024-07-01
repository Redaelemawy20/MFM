import AuthStatus from "@/components/Nav/AuthStatus";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Link href={"/dashboard"}>dashboard</Link>
      <AuthStatus />
      Home
    </div>
  );
};

export default Home;
