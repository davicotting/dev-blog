import { AvatarCircles } from "@/components/ui/avatar-circles";
import { BackgroundLines } from "@/components/ui/background-lines";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import { InteractiveGridPattern } from "./ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
import { DotPattern } from "./ui/dot-pattern";
import { DotPatternBackground } from "./dot-pattern-background";
export function ExploreResources(){
    return(
        <div className="relative border border-x-0 border-t-0 flex items-end p-4 lg:h-[500px] w-full">
          <div className="flex flex-col">
            <AvatarCircles
              numPeople={99}
              avatarUrls={[
                {
                  imageUrl: "https://avatars.githubusercontent.com/u/16860528",
                  profileUrl: "https://github.com/dillionverma",
                },
                {
                  imageUrl: "https://github.com/davicotting.png",
                  profileUrl: "https://github.com/davicotting",
                },
                {
                  imageUrl: "https://github.com/Fabiano-Bragaaa.png",
                  profileUrl: "https://github.com/Fabiano-Bragaaa",
                },
              ]}
            />
            <h1 className="text-2xl">Explore 1000+ resources</h1>
            <p className="text-muted-foreground text-lg pb-7">
              Over 1,000 articles on emerging tech trends and breakthroughs.
            </p>
            <Button variant={"outline"} size={"lg"} className="w-max">
              Explore Resources{" "}
              <MoveUpRight size={12} className="text-blue-500" />
            </Button>
          </div>
          <DotPatternBackground />
        </div>
    )
}