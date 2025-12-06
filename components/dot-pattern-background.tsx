import { cn } from "@/lib/utils";
import { DotPattern } from "./ui/dot-pattern";

export function DotPatternBackground(){
    return(
        <DotPattern
        glow={true}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
    )
}