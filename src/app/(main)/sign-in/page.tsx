
import { redirect } from "next/navigation";
import SigninPage from "./SigninPage";
import { checkIsAuthenticated } from "@/lib/auth/checkIsAuthenticated";

type Props = {};

const signin = async (props: Props) => {
  const isAuthenticated = await checkIsAuthenticated();

  if (isAuthenticated) {
    redirect("/dashboard");
  } else {
    return (
      <>
        <SigninPage />
      </>
    );
  }
};

export default signin;
