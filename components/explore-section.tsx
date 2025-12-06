import { Badge } from "./ui/badge";

export function ExploreSection() {
  return (
    <div className="border border-x-0 p-4 bg-[#1A1A1A] lg:h-80 flex flex-col justify-center">
      <Badge variant={"secondary"} className="p-2 rounded-md">A Knowledge Treasure Trove</Badge>

      <h1 className="text-5xl mb-5 mt-4 leading-14 ">Explore FutureTech's In-Depth Blog Posts</h1>
    </div>
  );
}
