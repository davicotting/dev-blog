import { CtaHeader } from "@/components/cta-header";
import { ExploreResources } from "@/components/explore-resources";
import { ExploreSection } from "@/components/explore-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroCards } from "@/components/hero-cards";
import { IpadScrollSection } from "@/components/ipad-scroll-section";
import { Main } from "@/components/main";
import { PostsInTheHype } from "@/components/posts-in-the-hype";
import { UnlockSection } from "@/components/unlock-section";
import { FutureTechnologyBlogSection } from "@/components/future-technology-blog-section";
import { ResearchInsightsBlogsSection } from "@/components/research-insights-blogs-section";
export default function Home() {
  return (
    <section className="min-h-screen flex flex-col">
      <CtaHeader />
      <Header />
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full">
          <Main />
        </div>

        <ExploreResources />
      </div>

      <HeroCards />
      <UnlockSection />
      <FutureTechnologyBlogSection />
      <ResearchInsightsBlogsSection />
      <IpadScrollSection />
      <ExploreSection />
      <PostsInTheHype />
      <Footer />
    </section>
  );
}
