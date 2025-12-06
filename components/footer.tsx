import { MessageCircleCode, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function Footer() {
  return (
    <footer>
      <aside className="h-60 border border-x-0 border-b-0 p-4 flex lg:justify-between lg:flex-row flex-col items-center">
        <div>
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <MessageCircleCode className="text-blue-500" size={24} />
            <h2 className="text-2xl">CodeTalks</h2>
          </div>
          <h2 className="text-muted-foreground mt-2">
            Created by{" "}
            <span className="text-blue-500 hover:underline cursor-pointer">
              Davi Cotting.
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-2 text-center mt-4 lg:text-start lg:mt-0">
          <h2 className="font-semibold">Entre na nossa NewsLetter</h2>
          <p className="text-xs text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Maxime <br />
            adipisci, laborum vitae cum, providen
          </p>

          <div className="flex items-center gap-2 mt-2">
            <Input
              className="w-56"
              placeholder="ex: johndoe@example.com"
            />
            <Button>
              <Send />
            </Button>
          </div>
        </div>
      </aside>
      <aside className="text-muted-foreground flex items-center justify-between px-4 py-2 border border-b-0 border-x-0 text-xs">
        <div className="flex items-center gap-4 font-normal">
          <Link href={"terms-&-conditions "} className="hover:underline">Terms & Conditions</Link>
          <Link href={"terms-&-conditions "} className="hover:underline">Privacy Policy</Link>
        </div>
        <p>© 2024 CodeTalks. All rights reserved.</p>
      </aside>
    </footer>
  );
}
