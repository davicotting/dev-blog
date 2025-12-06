import { Badge } from "./ui/badge";

export function UnlockSection() {
  return (
    <div className="border border-x-0 p-4 bg-[#1A1A1A] lg:h-80 flex flex-col justify-center">
      <Badge variant={"secondary"} className="p-2 rounded-md">Unlock the Power of</Badge>

      <h1 className="text-5xl mb-5 mt-4 leading-14 ">CodeTalks Features</h1>
    </div>
  );
}
