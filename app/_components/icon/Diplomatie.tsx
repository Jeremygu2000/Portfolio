/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { Section } from '../Section';
import { Card } from '@/components/ui/card';
import { Code2, LucideIcon, Rss, StickyNoteIcon } from 'lucide-react';
import Link from 'next/link';

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Side fun project</p>
                    <div className='flex flex-col gap-4'>
                        {SIDE_PROJECT.map((project, index) => (
                            <SideProject
                                key={index}
                                Logo={project.Logo}
                                title={project.title}
                                description={project.description}
                                url="/"
                            />
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-[2] w-full flex flex-col gap-4">
                <Card className="p-4 flex-1 "> 
                    <p className="text-lg text-muted-foreground">Work</p>
                    <div className='flex flex-col gap-4'>
                        {WORK.map((work, index) => (
                            <Work
                                key={index}
                                image={work.image}
                                title={work.title}
                                role={work.role}
                                date={work.date}
                                url="/"
                            />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1 ">Contact me</Card>
            </div>
        </Section>
    );
};

const SIDE_PROJECT = [
    
    {
        Logo: Code2 ,
        title: 'Nom des projets 1',
        description: 'A software engineer based inng elit ',
    },

    {
        Logo: StickyNoteIcon ,
        title: 'Nom des projets 2',
        description: 'A software engineer based inng elit ',
    },

    {   
        Logo: Rss,
        title: 'Nom des projet 3',
        description: 'A software engineer based inng elit '
    
    }
];

type SideProjectProps = {
    Logo: LucideIcon,
    title: string,
    description: string
    url: string
};

const SideProject = (props: SideProjectProps) => { 
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className='bg-accent text-accent-foreground p-3 rounded-sm'> 
                <props.Logo size={17} />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description }</p>
            </div>
        </Link>
    );
};



const WORK: WorkProps[] = [
    {
        image: "https://www.linkedin.com/company/35480427/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BWS3i3t9VQ0CVkeRr4kqSvw%3D%3D",
        title: 'work1',
        role: 'Software Engineer',
        date: '2021-Present',
        url: "https://www.ampvisualtv.tv/",
    },
    {
        image: "https://www.linkedin.com/company/35480427/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BWS3i3t9VQ0CVkeRr4kqSvw%3D%3D",
        title: 'work1',
        role: 'Software Engineer',
        date: '2021-Present',
        url: "https://www.ampvisualtv.tv/",
    },
    {
        image: "https://www.linkedin.com/company/35480427/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BWS3i3t9VQ0CVkeRr4kqSvw%3D%3D",
        title: 'work1',
        role: 'Software Engineer',
        date: '2021-Present',
        url: "https://www.ampvisualtv.tv/",
    }
];

type WorkProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
};

const Work = (props: WorkProps) => { 
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className='bg-accent text-accent-foreground p-3 rounded-sm'> 
                <img src={props.image} alt={props.title } className='w-4 h-4 object-contain' />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.role  }</p>
            </div>
            <div className="ml-auto">
                <p className="text-sm text-muted-foreground">{props.date  }</p>
            </div>
        </Link>
    );
};
