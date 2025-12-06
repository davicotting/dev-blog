import { MoveUpRight } from "lucide-react";
import Link from "next/link";
export function CtaHeader() {
  return (
    <Link href={""} className="flex items-center justify-center gap-2 py-5 bg-blue-500 hover:bg-blue-500/90">
      <p className="font-normal text-xs lg:text-base">
        Subscribe to our Newsletter For New & latest Blogs and Resources
      </p>{" "}
      <MoveUpRight size={12} />
    </Link>
  );
}
