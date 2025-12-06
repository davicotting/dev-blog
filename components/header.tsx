import { MessageCircleCode } from "lucide-react";
import { Menu } from "./menu";

export function Header() {
  return (
    <header className="flex items-center justify-between w-full border border-x-0 pb-4 py-5 bg-[#1A1A1A] px-4">
      <div className="flex items-center gap-2 justify-center lg:justify-start">
        <MessageCircleCode className="text-blue-500" size={24} />
        <h2 className="text-2xl ">CodeTalks</h2>
      </div>

      <Menu />
    </header>
  );
}
