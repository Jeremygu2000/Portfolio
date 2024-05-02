import { buttonVariants } from "@/components/ui/button"
import { Section } from "./Section"
import { GithubIcon } from "./icon/Github"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { LinkedIn } from "./icon/LinkedIn"
import { W3school } from "./icon/W3school"


export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">
                    Jeremy&Innabibi.com
                </h1>
                <div className="flex-1" />
                <ul className="flex items-center gap-6 ">
                    <Link
                        href="https://github.com/Jeremygu2000"
                        className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                    >
                        <GithubIcon size={20} className="text-foreground" />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/jamy-guy-21233b2b2"
                        className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                    >
                        <LinkedIn size={20} className="text-foreground" />
                    </Link>
                    <Link
                        href="https://flowcv.com/"
                        className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                    >
                        <W3school size={20} className="text-foreground" />
                    </Link>
                </ul>
            </Section>
        </header>
    )
}
