import { dummyExperiences } from "@/lib/dummy-data";
import Image from "next/image";

export default function ExperiencePage() { 
  return ( 
    <div className='container mx-auto py-24'> 
      <h1 className='text-4xl font-bold capitalize mb-12'>Experience</h1> 
      
      <div className="flex flex-col gap-8 max-w-3xl">
        {dummyExperiences.map((exp) => (
          <div key={exp.id} className="flex gap-6 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm">
            <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border border-zinc-100 dark:border-zinc-800">
              <Image 
                src={exp.logo} 
                alt={exp.company} 
                fill 
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                {exp.position}
              </h3>
              <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                {exp.company}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                {new Date(exp.start_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} 
                {' - '} 
                {exp.end_date ? new Date(exp.end_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present'}
              </p>
              <p className="text-muted-foreground">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div> 
  ); 
}
