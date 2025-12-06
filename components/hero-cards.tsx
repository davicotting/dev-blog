import {
  ArrowRight,
  BellElectric,
  Globe2,
  MessageCircleCode,
  MoveUpRight,
  UserStar,
} from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";

export function HeroCards() {
  return (
    <div className="grid lg:grid-cols-3">
      <Card className="bg-inherit border rounded-none lg:border-y-0">
        <CardHeader>
          <header className="flex items-end justify-between">
            <aside className="flex items-start gap-4">
              <BellElectric size={32} className="text-blue-500" />

              <div>
                <CardTitle className="text-xl">Latest News Updates</CardTitle>
                <CardDescription className="mt-2 text-base text-muted-foreground">
                  Stay Current
                </CardDescription>
              </div>
            </aside>

            <Button className="rounded-full " size={"icon-lg"}>
              <MoveUpRight />
            </Button>
          </header>
        </CardHeader>
        <CardContent className="flex items-center justify-center font-semibold">
          <Highlighter action="underline" color="#2873ec">
            Over 1,000 articles published monthly
          </Highlighter>
        </CardContent>
      </Card>
      <Card className="bg-inherit border rounded-none lg:border-y-0">
        <CardHeader>
          <header className="flex items-end justify-between">
            <aside className="flex items-start gap-4">
              <UserStar size={32} className="text-blue-500" />

              <div>
                <CardTitle className="text-xl">Expert Contributors</CardTitle>
                <CardDescription className="mt-2 text-base text-muted-foreground">
                  Trusted Insights
                </CardDescription>
              </div>
            </aside>

            <Button className="rounded-full " size={"icon-lg"}>
              <MoveUpRight />
            </Button>
          </header>
        </CardHeader>
        <CardContent className="flex items-center justify-center font-semibold">
          <Highlighter action="underline" color="#2873ec">
            50+ renowned AI experts on our team
          </Highlighter>
        </CardContent>
      </Card>
      <Card className="bg-inherit border rounded-none border-y-0">
        <CardHeader>
          <header className="flex items-end justify-between">
            <aside className="flex items-start gap-4">
              <Globe2 size={32} className="text-blue-500" />

              <div>
                <CardTitle className="text-xl">Global Readership</CardTitle>
                <CardDescription className="mt-2 text-base text-muted-foreground">
                  Worldwide Impact
                </CardDescription>
              </div>
            </aside>

            <Button className="rounded-full " size={"icon-lg"}>
              <MoveUpRight />
            </Button>
          </header>
        </CardHeader>
        <CardContent className="flex items-center justify-center font-semibold">
          <Highlighter action="underline" color="#2873ec">
            2 million monthly readers
          </Highlighter>
        </CardContent>
      </Card>
    </div>
  );
}
