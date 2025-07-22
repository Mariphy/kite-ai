import Image from 'next/image';
export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="items-center p-4">
        <h1 className="text-center mb-4 pt-8">About Kite</h1>
        <p className="text-2xl text-center pb-8">Kite is made by career changers for career changers.</p>
        <div className="flex flex-row px-20">
          <div className="shrink-0 p-2 size-80">
            <Image src="/images/about_graph.svg" alt="About Kite Graphic" width={600} height={400} className="p-4 items-left" />
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-600 p-6 text-center max-w-4xl">
            Kite is being developed by the effort of 3 career changers who have been experiencing the challenges of professional transitions first-hand.</p> 
            <p className="text-lg text-gray-600 p-6 text-center max-w-4xl">We are not alone, numbers pill up, many professionals who are switching jobs are also changing occupations.</p>
            <p className="text-lg text-gray-600 p-6 text-center max-w-4xl">We asked other career changers what they are missing, what they have tried, what worked and what didn’t, and from that Kite started gaining shape.</p> 
          </div>  
        </div>
      </section>
      <section className="bg-[#F6F2EF] w-full h-20"></section>
      <section className="p-4 items-center">
        <h2 className="text-center p-4">Meet the Kite Team</h2>
        <p className="text-2xl text-center pb-8">Our team is designing, developing Kite from scratch across India, Portugal and the US. </p>
        <Image src="/images/map.svg" alt="Kite Team Map" width={600} height={400} className="p-4 items-center" />
      </section> 
      <section className="bg-[#F6F2EF] w-full h-20"></section>
    </main>
  );
}