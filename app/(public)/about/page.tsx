import { dummyProfile, dummySkills } from "@/lib/dummy-data";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

export default function AboutPage() { 
  return ( 
    <div className='container mx-auto py-24'> 
      <div className="flex flex-col md:flex-row gap-12 items-start max-w-5xl mx-auto">
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="aspect-square relative rounded-2xl overflow-hidden border-4 border-white dark:border-zinc-900 shadow-xl">
            <Image 
              src={dummyProfile.photo} 
              alt={dummyProfile.name} 
              fill 
              className="object-cover"
            />
          </div>
          
          <div className="flex gap-4 justify-center md:justify-start">
            {dummyProfile.github && (
              <Link href={dummyProfile.github} target="_blank" className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                <Github size={24} />
              </Link>
            )}
            {dummyProfile.linkedin && (
              <Link href={dummyProfile.linkedin} target="_blank" className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                <Linkedin size={24} />
              </Link>
            )}
            {dummyProfile.email && (
              <Link href={`mailto:${dummyProfile.email}`} className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                <Mail size={24} />
              </Link>
            )}
            {dummyProfile.website && (
              <Link href={dummyProfile.website} target="_blank" className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                <Globe size={24} />
              </Link>
            )}
          </div>
          
          {dummyProfile.cv && (
            <Link href={dummyProfile.cv} target="_blank" className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-11 px-8 w-full shadow-md">
              Download Resume
            </Link>
          )}
        </div>
        
        <div className="w-full md:w-2/3 flex flex-col">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            I'm {dummyProfile.name}.
          </h1>
          <h2 className="text-2xl font-medium text-zinc-600 dark:text-zinc-400 mb-8">
            {dummyProfile.headline}
          </h2>
          
          <div className="prose prose-zinc dark:prose-invert max-w-none mb-12">
            <p className="text-lg leading-relaxed">
              {dummyProfile.bio}
            </p>
          </div>
          
          <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {dummySkills.map((skill) => (
              <div key={skill.id} className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 shadow-sm">
                <span className="font-medium text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div> 
  ); 
}
