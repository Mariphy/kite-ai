import Header from '@/components/header.tsx';


export default function HomePage() {
  return (
    <>
      <Header/>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-stone-200 w-full h-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Kite AI!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Your career transition assistant. Get started by signing up or logging in.
          </p>
          {/* Add links to login/register if you want */}
        </div>
        <div className="bg-white w-full h-screen flex flex-col items-center justify-center">
          <h2>How can we help you</h2>
          <p>Your next step toward brighter days!</p>
        </div>
      </main>
    </>
  );
}