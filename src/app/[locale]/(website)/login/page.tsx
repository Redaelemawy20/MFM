import { auth } from "@/auth";
import Login from "@/components/login/Login";
import { redirect } from "next/navigation";

const TestPage = async () => {
  const session = await auth();
  if (session?.user) redirect("/");
  return (
    <div>
      <Login />
    </div>
  );
};

export default TestPage;

