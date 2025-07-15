import StoryCard from "@/components/story-card";
import Image from "next/image";

export default function ResourcesPage() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl md:text-6xl mb-6">Free Resources</h1>
        <p className="text-xl text-gray-600 mb-8 text-center">
          Explore our curated list of resources to help you in your career transition. <br />Join our Discord to explore more and share your favorite ones.
        </p>
        <div className="bg-white flex flex-col items-center text-center justify-between py-12 px-2 sm:px-0">
          <h2 className="text-3xl md:text-5xl mt-4">Curated Books</h2>
          <p className="text-base p-2 mb-4">Not sure where to start? <br/>Check the books that helped other career changers most.</p>
          <div className="flex flex-row p-4 overflow-x-auto sm:px-0 flex-wrap sm:justify-center">
            <StoryCard 
              image={<Image src="/images/nsa.svg" alt="Never Search Alone book cover" width={320} height={180} className="rounded-t-lg"/>}
              title="Never Search Alone"
              description="Phyl Terry"
              url="https://www.phyl.org/"
            />
            <StoryCard 
              image={<Image src="/images/job-moves.svg" alt="Job Moves book cover" width={320} height={180} className="rounded-t-lg"/>}
              title="Job Moves"
              description="Ethan Bernstein, Michael B. Horn, Bob Moesta"
              url=""
            />
            <StoryCard 
              image={<Image src="/images/designing.svg" alt="Designing Your Life book cover" width={320} height={180} className="rounded-t-lg"/>}
              title="Designing Your Life"
              description="Bill Burnett, Dave Evans"
              url="https://www.designingyour.life/"
            />
            <StoryCard 
              image={<Image src="/images/two-hour.svg" alt="Two Hour Job Search book cover" width={320} height={180} className="rounded-t-lg"/>}
              title="The Two-Hour Job Search"
              description="Steve Dalton"
              url="https://2hourjobsearch.com/"
            />
          </div>  
        </div>
      </main>
    </>
  );
}
         