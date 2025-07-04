export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen"
      
    >
      <h1 className="text-4xl font-bold mb-4">About Kite</h1>
      <p className="text-lg text-gray-600 mb-8 p-6 text-center max-w-4xl">
        Kite is being developed by the effort of 3 career changers who have been experiencing the challenges of professional transitions first-hand. We quickly realized we are not alone: many professionals are struggling to navigate career changes without clear guidance or support. We asked career changers what they are missing, what they have tried, from resources to bootcamps, mentoring, volunteer work, communities, what worked and what didn’t. 
      </p>
      <div
        style={{
          backgroundImage: "url('/images/map.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain", 
          backgroundPosition: "center",
          width: "100%",
          minHeight: "300px", 
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >

      </div>
      
     
    </main>
  );
}