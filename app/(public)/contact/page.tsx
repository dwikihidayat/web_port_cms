import { dummyProfile } from "@/lib/dummy-data";
import Link from "next/link";
import { Mail, Github, Linkedin, Globe } from "lucide-react";

export default function ContactPage() { 
  return ( 
    <div className='container mx-auto py-24'> 
      <h1 className='text-4xl font-bold capitalize mb-6'>Get in Touch</h1> 
      <p className='text-xl text-muted-foreground mb-12 max-w-2xl'>
        Interested in working together or have a question? Feel free to reach out through any of the platforms below.
      </p> 
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {dummyProfile.email && (
          <Link href={`mailto:${dummyProfile.email}`} className="flex items-center gap-6 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm transition-all hover:shadow-md group">
            <div className="p-4 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              <Mail size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Email</h3>
              <p className="text-muted-foreground">{dummyProfile.email}</p>
            </div>
          </Link>
        )}
        
        {dummyProfile.linkedin && (
          <Link href={dummyProfile.linkedin} target="_blank" className="flex items-center gap-6 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm transition-all hover:shadow-md group">
            <div className="p-4 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              <Linkedin size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">LinkedIn</h3>
              <p className="text-muted-foreground">Connect on LinkedIn</p>
            </div>
          </Link>
        )}
        
        {dummyProfile.github && (
          <Link href={dummyProfile.github} target="_blank" className="flex items-center gap-6 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm transition-all hover:shadow-md group">
            <div className="p-4 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              <Github size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">GitHub</h3>
              <p className="text-muted-foreground">Check out my repositories</p>
            </div>
          </Link>
        )}
        
        {dummyProfile.website && (
          <Link href={dummyProfile.website} target="_blank" className="flex items-center gap-6 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm transition-all hover:shadow-md group">
            <div className="p-4 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              <Globe size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Website</h3>
              <p className="text-muted-foreground">Visit my personal site</p>
            </div>
          </Link>
        )}
      </div>
    </div> 
  ); 
}
