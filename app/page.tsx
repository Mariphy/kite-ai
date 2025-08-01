"use client";

import { Button } from '@/components/ui/button';
import Lottie from 'lottie-react';
import kiteAnimation from '@/public/animations/movingkite.json';
import Link from 'next/link';
import ServiceCard from '@/components/service-card';
import StoryCard from '@/components/story-card';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";


export default function HomePage() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen">

        <section className="bg-[#F6F2EF] w-full h-dvh flex flex-col sm:flex-row items-center justify-between p-4 sm:px-8 lg:px-20 xl:px-32">
            <div className="flex flex-col sm:items-start items-center justify-center p-8">
              <h1 className="text-4xl md:text-6xl mb-6">Let&#39;s make career change easier, together.</h1>
              <p className="text-body text-gray-600 mb-8">
                Join open projects, find volunteering network, chat with fellow career changers
              </p>
                <div className="flex gap-4 mt-4">
                <Button asChild>
                  <Link href="/register"> Join our community <Image src="/images/button_arrow.svg" alt="Arrow" width={20} height={20} /></Link>
                </Button>
                <Button variant="outline">
                  <Link href="/about">More about Kite</Link>
                </Button>
                </div>
            </div>
            <div className="flex flex-col items-center sm:items-end justify-center p-8">
              <div className="w-full max-w-xs sm:max-w-md md:max-w-lg h-[200px]">
                <Lottie animationData={kiteAnimation} loop={true} />
              </div>
            </div>
        </section>

        <div className="bg-white flex flex-col items-center justify-between py-12 px-2 sm:px-0">
          <div className="py-8 px-47 text-center">
            <h2 className="text-3xl md:text-5xl mb-4">How can we help you</h2>
            <p className="text-2xl">Your next step toward brighter days!</p>
          </div>
          <div className="flex flex-row p-4 overflow-x-auto sm:px-0 flex-wrap sm:justify-center">
              <ServiceCard 
                title="Join our community"
                description="We have a supportive community waiting for you on discord."
                buttonTitle="Join discord"
                icon={<Image src="/images/icon1.svg" alt="Team Icon" width={60} height={60} />}
                buttonLink="https://discord.gg/nMpmpNnpYD"
              />
              <ServiceCard 
                title="Create a plan with AI"
                description="Confused  about where to start? Build a plan and track your progress with AI."
                buttonTitle="Start now"
                icon={<Image src="/images/icon2.svg" alt="Star Icon" width={60} height={60} />}
                buttonLink="/ai"
                showBeta={true}
              />
              <ServiceCard 
                title="Resources"
                description="Browse free resources that can help you in your transition."
                buttonTitle="Start browsing"
                icon={<Image src="/images/icon3.svg" alt="Care Icon" width={60} height={60} />}
                buttonLink="/resources"
              />
            </div>
        </div>

        <div className="bg-white flex flex-col items-center justify-between py-12 px-2 sm:px-0">
          <div className="py-8 px-47 text-center">
            <h2 className="text-3xl md:text-5xl mb-4">Transition Stories</h2>
            <p className="text-2xl">Real stories of bold career moves and fresh starts.</p>
          </div>
          <div className="flex flex-row p-4 overflow-x-auto sm:px-0 flex-wrap sm:justify-center">
            <StoryCard 
              image={<Image src="/images/biology.webp" alt="Picture depicting a microscope and a person using it in the background" width={320} height={180} className="rounded-t-lg"/>}
              title="My Journey From Biology to Biostatistics"
              description="Eliana Ibrahimi"
              url="https://medium.com/stats-learning/my-journey-from-biology-to-biostatistics-988bd23a2e29"
            />
            <StoryCard 
              image={<Image src="/images/chemistry.webp" alt="Hand in a glove holding a laboratory glassware and a pipette" width={320} height={180} className="rounded-t-lg"/>}
              title="Jumping from a chemistry PhD to data science at Faire"
              description="Sam Kenny"
              url="https://craft.faire.com/jumping-from-a-chemistry-phd-to-data-science-at-faire-d67728cea436?gi=b94a5ecbaaff"
            />
            <StoryCard 
              image={<Image src="/images/computer.webp" alt="A picture of a laptop with code snippet on the screen" width={320} height={180} className="rounded-t-lg"/>}
              title="How I Went from Translator to Engineering Apprentice..."
              description="Elizabeth Gardiner"
              url="https://www.codecademy.com/resources/blog/from-translator-to-engineering-apprentice"
            />
          </div>

        </div>

        <div className="bg-white flex flex-col items-center text-center justify-between py-12 px-2 sm:px-0">
          <h2 className="text-3xl md:text-5xl mt-4">Curated Books</h2>
          <p className="text-2xl p-2 mb-4">Not sure where to start? <br/>Check the books that helped other career changers most.</p>
          <div className="flex flex-row p-4 overflow-x-auto sm:px-0 flex-wrap sm:justify-center">
            <StoryCard 
              image={<Image src="/images/nsa.svg" alt="Never Search Alone book cover" width={320} height={180} className="rounded-t-lg p-2"/>}
              title="Never Search Alone"
              description="Phyl Terry"
              url="https://www.phyl.org/"
            />
            <StoryCard 
              image={<Image src="/images/job-moves.svg" alt="Job Moves book cover" width={320} height={180} className="rounded-t-lg p-4"/>}
              title="Job Moves"
              description="Ethan Bernstein, Michael B. Horn, Bob Moesta"
              url="https://www.jobmoves.com/"
            />
            <StoryCard 
              image={<Image src="/images/designing.svg" alt="Designing Your Life book cover" width={320} height={180} className="rounded-t-lg p-4"/>}
              title="Designing Your Life"
              description="Bill Burnett, Dave Evans"
              url="https://www.designingyour.life/"
            />
            <StoryCard 
              image={<Image src="/images/two-hour.svg" alt="Two Hour Job Search book cover" width={320} height={180} className="rounded-t-lg p-2"/>}
              title="The Two-Hour Job Search"
              description="Steve Dalton"
              url="https://2hourjobsearch.com/"
            />
          </div>  
        </div>

        <div className="w-full bg-black flex flex-col items-center text-center justify-between py-12 px-2 sm:px-0">
          <h2 className="text-3xl text-white md:text-5xl mt-4">New Features Coming Soon</h2>
          <p className="text-xl text-white p-2 mb-4">Kite team is working on bringing new features to help you with your job search. </p>
          <div className="flex justify-center w-full p-2">
            <iframe 
                width="80%" 
                height="500" 
                src="https://youtube.com/embed/eN60btQ-UpY" 
                title="Kite App Demo" 
                className="border-0 px-12"  
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
          </div>
        </div>  

        <div className="flex flex-row p-4 overflow-x-auto sm:px-0 flex-wrap sm:justify-center">
          <div className="flex items-center">
            <Card>
              <CardHeader>
                <p className="text-sm text-gray-500 mb-2">CONTACT US</p>
                <CardTitle>Do you want to share your story?</CardTitle>
                <CardDescription>Have any suggestions or do you want to share your career transition? We’d love to hear from you. </CardDescription>
              </CardHeader>
              <CardFooter className="flex gap-2">
                <Button asChild>
                  <a href="mailto:kiteAIapp@gmail.com">Contact us</a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="https://discord.gg/nMpmpNnpYD">Share on discord</a>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Image src="/images/careers.svg" alt="Careers" width={600} height={400} className="w-full h-auto object-cover" />
          </div>
        </div>
      </main>
    </>
  );
}