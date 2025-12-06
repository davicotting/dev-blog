import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import insights from "@/public/insights.svg";
import Image from "next/image";
export function ResearchInsightsBlogsSection() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="h-[538px] border border-t-0 flex items-center border-l-0 px-4">
        <div>
          <Image src={insights} alt="" />
          <h1 className="text-4xl font-semibold mt-10">
            Research Insights Blogs
          </h1>
          <p className="text-muted-foreground mt-4">
            Dive deep into future technology concepts with our research <br />
            section.
          </p>
        </div>
      </div>
      <div className="h-[538px] border border-t-0 border-l-0 grid grid-cols-2 px-8 gap-4 py-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="lg:text-2xl text-xl">Depth</CardTitle>
            <CardDescription className="lg:text-lg text-base">
              500+ research articles for in-depth understanding.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full">
          <CardHeader>
           <CardTitle className="lg:text-2xl text-xl">Depth</CardTitle>
            <CardDescription className="lg:text-lg text-base">
              500+ research articles for in-depth understanding.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="lg:text-2xl text-xl">Depth</CardTitle>
            <CardDescription className="lg:text-lg text-base">
              500+ research articles for in-depth understanding.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="lg:text-2xl text-xl">Depth</CardTitle>
            <CardDescription className="lg:text-lg text-base">
              500+ research articles for in-depth understanding.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
