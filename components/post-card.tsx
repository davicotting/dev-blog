
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeartIcon, MessageCircle, Send } from "lucide-react";
export function PostCard(){
    return(
        <div className="bg-inherit border border-x-0 rounded-none border-b-0 lg:flex-row flex justify-between px-4 py-16 hover:bg-muted-foreground/4 cursor-pointer">
          <div className="flex gap-14 flex-col lg:flex-row">
            <header className="flex gap-4 items-start">
              <div>
                <Avatar className="h-15 w-15">
                  <AvatarImage src={"https://github.com/davicotting.png"} />
                </Avatar>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-xl">Davi Cotting</h3>
                <p className="text-muted-foreground">Full-Stack Engineer</p>
              </div>
            </header>

            <div className="flex flex-col gap-3">
              <section>
                <h2 className="text-muted-foreground">October 15, 2023</h2>
                <div className="flex items-center mt-7 gap-4">
                  <h1 className="text-2xl font-semibold">
                    The Quantum Leap in Computing
                  </h1>
                  <Badge variant={"secondary"}>Em alta 🔥</Badge>
                </div>
                <p className="text-muted-foreground mt-2.5">
                  Explore the revolution in quantum computing, its applications,
                  <br />
                  and its potential impact on various industries.
                </p>
              </section>

              <section className="flex gap-2 items-center">
                <Button variant={"outline"} className="rounded-full">
                  <HeartIcon className="text-red-500" /> 24.2k
                </Button>
                <Button variant={"outline"} className="rounded-full">
                  <MessageCircle /> 30
                </Button>
                <Button variant={"outline"} className="rounded-full">
                  <Send /> 60
                </Button>
              </section>
            </div>
          </div>

          <Button size={"lg"}>Ver Post</Button>
        </div>
    )
}