import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { useAuth } from "./providers/AuthProvider";

export default function AuthButton() {
  const { user } = useAuth();

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.user_metadata.full_name}!
      <Link href="/dashboard" className={buttonVariants()}>
        Dashboard
      </Link>
    </div>
  ) : (
    <Link
      href="/login"
      className={`${buttonVariants({ variant: "link" })} text-white hover:text-primary`}
    >
      Login
    </Link>
  );
}
