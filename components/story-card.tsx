import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import Link from "next/link";

export default function StoryCard({
  image,
  title,
  description,
  url
}: {
  image: React.ReactNode; // e.g. <Image ... /> or <img ... />
  title: string;
  description: string;
  url: string;
}) {
  const isExternal = url.startsWith("http");
  return (
    <div className="p-2">
      <Card className="w-80 shrink-0 flex flex-col">
        <div className="w-full flex justify-center items-center">
          {image}
        </div>
        <CardHeader>
          <CardTitle className="text-heading-md font-halyard">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Link
            href={url}
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="text-blue-600 hover:underline truncate w-full"
            title={url}
          >
            {url}
            <span aria-hidden="true" className="font-bold ml-2">→</span>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}