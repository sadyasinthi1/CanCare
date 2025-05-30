import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type Props = {
    title: string;
};

export const Header = ({ title }: Props) => {
    return(
        <div className="sticky top-0 bg-white pb-2 lg:pt-[28px] lg:mt-[-30px] flex items-center justify-between border-b-2 mb-5 text-neutral-400 lg:z-50">
            <Link href="/options">
                <Button>
                    <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-400"/>
                </Button>
            </Link>
            <h1 className="font-bold text-lg">
                {title}
            </h1>
            <div />
        </div>
    );
}