"use client";
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import Lottie from 'lottie-react';
import kiteAnimation from '@/public/animations/movingkite.json';


export default function HomePage() {
  return (
    <>
      <Header/>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-stone-200 w-full h-screen flex items-center justify-between">
            <div className="flex flex-col items-start justify-center p-8">
              <h1 className="text-4xl font-bold mb-4">Let&#39;s make career change easier, together.</h1>
              <p className="text-lg text-gray-600 mb-8">
                Join open projects, find volunteering network, chat with fellow career changers
              </p>
                <div className="flex gap-4 mt-4">
                <Button>
                  Join us our community <span aria-hidden="true" className="font-bold">→</span>
                </Button>
                <Button variant="secondary">More about Kite</Button>
                </div>
            </div>
            <div className="flex flex-col items-end justify-center p-8">
              <div className="w-[400px] h-[200px]">
                <Lottie animationData={kiteAnimation} loop={true} />
              </div>
            </div>
          
        </div>
        <div className="bg-white w-full h-screen flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-4">How can we help you</h2>
          <p>Your next step toward brighter days!</p>
        </div>
      </main>
    </>
  );
}