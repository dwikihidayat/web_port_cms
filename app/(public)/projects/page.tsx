import { dummyProjects } from "@/lib/dummy-data";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() { 
  return ( 
    <div className='container mx-auto py-24'> 
      <h1 className='text-4xl font-bold capitalize mb-12'>Projects</h1> 
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyProjects.map((project) => (
          <div key={project.id} className="group relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm transition-all hover:shadow-md">
            <div className="aspect-video w-full overflow-hidden relative">
              <Image 
                src={project.thumbnail} 
                alt={project.title} 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                {project.tech_stack.slice(0, 3).map((tech) => (
                  <span key={tech} className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                    {tech}
                  </span>
                ))}
                {project.tech_stack.length > 3 && (
                  <span className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                    +{project.tech_stack.length - 3}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                {project.description}
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                {project.demo_url && (
                  <Link href={project.demo_url} target="_blank" className="text-sm font-medium hover:underline">
                    Live Demo
                  </Link>
                )}
                {project.github_url && (
                  <Link href={project.github_url} target="_blank" className="text-sm font-medium hover:underline text-muted-foreground hover:text-foreground">
                    GitHub
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div> 
  ); 
}
