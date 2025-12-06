import { Compare } from "./ui/compare";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function IpadScrollSection() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Descubra novas
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Perpectivas
              </span>
            </h1>
          </>
        }
      >
        <Compare
          firstImage="https://assets.aceternity.com/code-problem.png"
          secondImage="https://assets.aceternity.com/code-solution.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-full w-full"
          slideMode="hover"
        />
      </ContainerScroll>
    </div>
  );
}
