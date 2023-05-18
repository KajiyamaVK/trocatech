import LoginForm from "@/components/LoginForm";
import { useContext, useEffect } from "react";
import { NavigationContext } from "@/contexts/NavigationContext";

export default function Login() {
  const { setIsLoading } = useContext(NavigationContext);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="h-screen w-screen">
      <LoginForm />
    </div>
  );
}
