import { Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle } from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ServiceCard({title, description, buttonTitle, icon, buttonLink}: {title: string, description: string, buttonTitle: string, icon: React.ReactNode, buttonLink: string}) {
    const isExternal = buttonLink.startsWith('http');
    return (
        <div className="p-2">
            <Card className="w-80 shrink-0">
                <CardHeader>
                    <div>
                        {icon}
                    </div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button asChild variant="outline">
                        <Link 
                            href={buttonLink} 
                             {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                            {buttonTitle}
                            <span aria-hidden="true" className="font-bold">→</span>
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>    
    )
}

