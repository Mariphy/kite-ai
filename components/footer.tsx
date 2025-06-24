import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white shadow-md mt-auto">
      <div className="flex items-center justify-between p-4 sm:px-8 lg:px-16 xl:px-32">
        <div className="flex-1 flex justify-start">
          <Link href="mailto:kiteAIapp@gmail.com" target="_blank" rel="noopener noreferrer">
            Feel free to reach out <strong>via email</strong>
          </Link>
        </div>
        <div className="flex-1 flex justify-end">
          <p>Copyright &copy; 2025 Kite</p>
        </div>
      </div>
    </footer>
  );
}