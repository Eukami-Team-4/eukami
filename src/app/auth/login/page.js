import AuthForm from "@/app/auth-form";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen border">
      <div className="w-96">
        <AuthForm />
      </div>
    </div>
  );
};

export default LoginPage;
