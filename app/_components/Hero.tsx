/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ComponentPropsWithoutRef } from 'react';
import { Section } from './Section'
import { cn } from '@/lib/utils';
import { LinkedIn } from './icon/LinkedIn';
import Link from 'next/link';



const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
    return (
        <span
            className={cn(
            "bg-accent/30 font-mono border hover:bg-accent/50 transition-colors border-accent px-1 p-0,5 text-primary rounded-sm",
            className
            )}
            {...props}
        />
    );
};

export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full  flex flex-col gap-2">
                <h2 className="font-caption font-bold text-5xl text-primary">Jeremy GUYONNET </h2>
                <h3 className="text-3xl font-caption">Software Developer Junior</h3>
                <p className="text-base">
                    A software engineer based in {""}
                    <Link href="https://www.linkedin.com/in/jeremy-guyonnet/">
                    <Code className="inline-flex items-center gap-1">
                        <LinkedIn size={14} className="inline" /> LinkedIn
                        </Code>
                    </Link>,
                    Mauritius.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Magnam minima temporibus magni omnis neque totam reprehenderit rem dolores cumque consectetur laborum eveniet ipsa aut,
                    sint corporis sapiente perferendis. Nesciunt, eligendi.
                    <Link href="https://www.w3schools.com/css/css3_flexbox.asp">
                    <Code className="inline-flex items-center gap-1">
                        <img src="w3school.png"style={{ width: 20, height: "auto"}} alt= "logo w3school" /> W3school
                        </Code>
                    </Link>,
                    and I leave in Mauritius <Link href="https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/conseils-par-pays-destination/maurice/">
                    <Code className="inline-flex items-center gap-1">
                            <img src="mruflag.png"style={{ width: 10, height: "auto"}} alt= "mauritius flag"/> Mauritius
                        </Code>
                    </Link>,
                </p>
            </div>
            <div className="flex-[2] max-md:m-auto ml-auto">
                <img
                    src="avatar.png"
                    className="w-full h-auto max-w-xs max-md:w-56"
                    alt="Jeremy's picture"
                />  
            </div>
        </Section>
    );
}
