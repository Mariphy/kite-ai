import { Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle } from '@/components/ui/card';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';

export default function ServiceCard({title, description, buttonTitle, icon}: {title: string, description: string, buttonTitle: string, icon?: React.ReactNode}) {
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
                    <Button variant="outline">{buttonTitle}<span aria-hidden="true" className="font-bold">→</span></Button>
                </CardFooter>
            </Card>
        </div>    
    )
}

