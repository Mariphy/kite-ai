"use client";
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import Lottie from 'lottie-react';
import kiteAnimation from '@/public/animations/movingkite.json';
import Link from 'next/link';
import ServiceCard from '@/components/service-card';
import Image from 'next/image';


export default function HomePage() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-stone-200 w-full h-screen flex flex-col sm:flex-row items-center justify-between p-4 sm:px-8 lg:px-16 xl:px-32">
            <div className="flex flex-col sm:items-start items-center justify-center p-8">
              <h1 className="text-4xl font-bold mb-4">Let&#39;s make career change easier, together.</h1>
              <p className="text-lg text-gray-600 mb-8">
                Join open projects, find volunteering network, chat with fellow career changers
              </p>
                <div className="flex gap-4 mt-4">
                <Button asChild>
                  <Link href="/register"> Join our community <span aria-hidden="true" className="font-bold">→</span></Link>
                </Button>
                <Button variant="secondary">
                  <Link href="/about">More about Kite</Link>
                </Button>
                </div>
            </div>
            <div className="flex flex-col items-center sm:items-end justify-center p-8">
              <div className="w-full max-w-xs sm:max-w-md md:max-w-lg h-[200px]">
                <Lottie animationData={kiteAnimation} loop={true} />
              </div>
            </div>
          
        </div>
        <div className="bg-white flex flex-col items-center justify-between py-12 px-2 sm:px-0">
          <h2 className="text-3xl font-bold mt-4">How can we help you</h2>
          <p className="p-2 mb-4">Your next step toward brighter days!</p>
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
              />
              <ServiceCard 
                title="Resources"
                description="Browse free resources that can help you in your transition."
                buttonTitle="Start browsing"
                icon={<Image src="/images/icon3.svg" alt="Care Icon" width={60} height={60} />}
                buttonLink="/"
              />
            </div>
            
        </div>
      </main>
    </>
  );
}