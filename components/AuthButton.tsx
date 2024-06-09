import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { useAuth } from "./providers/AuthProvider";

export default function AuthButton() {
  const { user } = useAuth();

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email.split("@")[0]}!
      <Link href="/dashboard" className={buttonVariants()}>
        Dashboard
      </Link>
    </div>
  ) : (
    <Link href="/login" className={buttonVariants()}>
      Login
    </Link>
  );
}
