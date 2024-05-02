/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Section } from './Section'
import { Card } from '@/components/ui/card'
import { ArrowUpRight, Code2, LucideIcon, Rss, StickyNoteIcon } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'


export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 flex flex-col gap-2 w-ful">
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
                                {...work}
                            />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-2 ">
                    <p className="text-lg text-muted-foreground">Contact me</p>
                    <ContactCard
                        name="Jeremy Gu"
                        image="jeremy.jpg"
                        mediumImage='gmail.png'
                        description='Messagerie' />
                    <ContactCard
                        name="Jeremy Gu"
                        image="jeremy.jpg"
                        mediumImage='linkedin.webp'
                        description='Messagerie' />
                    <ContactCard
                        name="Jeremy Gu"
                        image="jeremy.jpg"
                        mediumImage='whatsapp.jpg'
                        description='Messagerie' />
                    <ContactCard
                        name="Jeremy Gu"
                        image="jeremy.jpg"
                        mediumImage='linkedin.webp'
                        description='Messagerie' />
                    <ContactCard
                        name="Jeremy Gu"
                        image="jeremy.jpg"
                        mediumImage='phone.png'
                        description='Messagerie' />
                </Card>
            </div>
            
        </Section>
    );
};

const ContactCard = (props: {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
}) => {
    return (
        <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
            <div className="relative">
                <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain" />
                <img src={props.mediumImage} alt={props.name}
                    className="w-5 h-5 absolute -bottom-1 -right-1 rounded-full object-contain"
                />
            </div>
            <div className='mr-auto'>
            <div className='flex items-center gap-2'> 
                <p className="text-lg font-semibold">{props.name}</p>
            </div>
                <p className="text-xs text-muted-foreground">{props.description}</p>
            </div>
            <ArrowUpRight className='group-hover:translate-x-2 mr-4  group-hover:-translate-y-2 transistion-transform ' size={17} />
        </Card>
    )
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

    {   Logo: Rss,
        title: 'Nom des projet 3',
        description: 'A software engineer based inng elit '
    
    }

]
type SideProjectProps = {
    Logo: LucideIcon,
    title: string,
    description: string
    url: string
}


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
)
};

const WORK: WorkProps[] = [
    {
        image: "APSIM.png",
        title: 'APSIM',
        role: 'Chargé du Recrutement',
        date: '2022-2023',
        url: "https://www.apsim.mu/",
        cdi: false
    },
    {
        image: "goswap.jpeg",
        title: 'GoSwap',
        role: 'Corporate Account Manager',
        date: '2021-Present',
        url: "https://www.goswap.ch/",
        cdd: true
    },
    {
        image: "Migro.png",
        title: 'work1',
        role: 'Software Engineer',
        date: '2021-Present',
        url: "https://www.ampvisualtv.tv/",
        freelance: true
    }
];

type WorkProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
    freelance?: boolean;
    cdd?: boolean;
    cdi?: boolean;
    interimaire?: boolean;
};

const Work = (props: WorkProps) => { 
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
        
            <img
                src={props.image}
                alt={props.title}
                className='w-10 h-10 objet-contain rounded-md' />
            
            <div>
<div className='flex items-center gap-2'>
        <p className="text-lg font-semibold">{props.title}</p>
            {props.cdd && <Badge variant="secondary">CDD</Badge>}
            {props.cdi && <Badge variant="secondary">CDI</Badge>}
            {props.interimaire && <Badge variant="secondary">Interimaire</Badge>}
            {props.freelance && (
        <p className="inline-flex items-center rounded-full bg-green-500/10 px-1.5 py-0.5 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
            <Badge variant="outline">Freelance</Badge>
        </p>
        )}
    </div>
    <p className="text-sm text-muted-foreground">{props.role}</p>
            </div>
            <div className="ml-auto">
                <p className="text-xs text-end text-muted-foreground">{props.date}</p>
            </div>
        </Link>
    );
};

{/* <span class="inline-flex items-center rounded-full bg-green-500/10 px-1.5 py-0.5 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20"> */}
    

// secondary:
//           "border-transparent bg-green-fluo text-green-fluo-foreground hover:bg-green-fluo/80",