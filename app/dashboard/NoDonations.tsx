import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const NoDonations = () => {
  return (
    <div className="w-full h-48 flex flex-col justify-center items-center gap-3">
      <p className="text-gray-500">You have not made any donations yet.</p>
      <Link href="/#donations" className={buttonVariants()}>
        Make your first one!
      </Link>
    </div>
  );
};

export default NoDonations;
