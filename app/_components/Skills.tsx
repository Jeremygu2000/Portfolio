import React from 'react'
import { Section } from './Section'
import { Badge } from '@/components/ui/badge'
import { JsLogo } from './icon/JsLogo'
import { Code } from './Code'
import { ReactLogo } from './icon/ReactLogo'
import { HtmlLogo } from './icon/HtmlLogo'
import { NextLogo } from './icon/NextLogo'
import { PythonLogo } from './icon/PythonLogo'
import { CssLogo } from './icon/CssLogo'

export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant="outline">Skills</Badge>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                I love working on...
            </h2>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                            <div className="flex flex-col gap-4">
                                <JsLogo size={35}  />
                                <h3 className="mb-2 text-xl font-bold tracking-tight ">JavaScript</h3>
                                <p className="text-sm text-muted-foreground">
                                    My main framework is <Code>React</Code>. I also <Code>Next.js</Code> as a
                                    backend and frontend framework.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <HtmlLogo size={35} />
                                <h3 className="mb-2 text-xl font-bold tracking-tight ">HTML</h3>
                                <p className="text-sm text-muted-foreground">
                                    My main framework is <Code>React</Code>. I also <Code>Next.js</Code> as a
                                    backend and frontend framework.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <CssLogo size={35} />
                                <h3 className="mb-2 text-xl font-bold tracking-tight ">CSSS</h3>
                                <p className="text-sm text-muted-foreground">
                                    My main framework is <Code>React</Code>. I also <Code>Next.js</Code> as a
                                    backend and frontend framework.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <NextLogo size={28} />
                                <h3 className="mb-2 text-xl font-bold tracking-tight ">Next.js</h3>
                                <p className="text-sm text-muted-foreground">
                                    My main framework is <Code>React</Code>. I also <Code>Next.js</Code> as a
                                    backend and frontend framework.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <ReactLogo size={42} className="animate-spin" style={{animationDuration:"10s"}} />
                                <h3 className="mb-2 text-xl font-bold tracking-tight ">React</h3>
                                <p className="text-sm text-muted-foreground">
                                    My main framework is <Code>React</Code>. I also <Code>Next.js</Code> as a
                                    backend and frontend framework.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <PythonLogo/>
                                <h3 className="mb-2 text-xl font-bold tracking-tight ">Python</h3>
                                <p className="text-sm text-muted-foreground">
                                    My main framework is <Code>React</Code>. I also <Code>Next.js</Code> as a
                                    backend and frontend framework.
                                </p>
                            </div>
                </div>
        </Section>
    )
}

