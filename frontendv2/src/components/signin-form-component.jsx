import { Link } from "@tanstack/react-router";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/queries/userQuery";
import { useNavigate } from "@tanstack/react-router";
import { useUserStore } from "@/store";
import { jwtDecode } from "jwt-decode";
import { toast } from "sonner";
import Cookies from "js-cookie";

export default function SigninFormComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();

  const loginQuery = useMutation({
    mutationFn: loginUser,
    onError: (err) => {
      console.log("error:", err.message);
      if (err.message === "User not found") {
        toast.error("User not found");
      } else if (err.message === "Invalid credentials") {
        toast.error("Wrong credentials");
      } else {
        toast.error("Server error");
      }
    },
    onSuccess: (data) => {
      toast.success("User logged in successfully");
      const accessToken = Cookies.get("accessToken");
      console.log("token during login:", accessToken);
      const userPayload = jwtDecode(accessToken);
      setUser({
        userId: userPayload.id,
        userEmail: userPayload.email,
        userFirstName: userPayload.firstName,
        userLastName: userPayload.lastName,
        userAvatarUrl: userPayload.avatarUrl,
      });
      navigate({ to: "/" });
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginQuery.mutate({ email, password });
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Welcome Back, Hero!
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Time to gear up — the universe (and your cart) needs you.
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded"
          />
        </LabelInputContainer>
        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Sign in &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex items-center justify-center">
          <Link to={"/auth/register"}>
            <Button variant="link">
              don't have an account ? register here.
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
