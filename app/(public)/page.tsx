import { Hero } from "@/components/public/Hero";
import { dummyProjects } from "@/lib/dummy-data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProjects = dummyProjects.filter(p => p.featured).slice(0, 3);
  
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 dark:bg-black">
      <Hero />
      
      <section className="py-24 bg-white dark:bg-zinc-950/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Here are some of my recent and most exciting projects. 
              </p>
            </div>
            <Link href="/projects" className="hidden sm:flex items-center gap-2 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              View all projects <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
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
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Link href={`/projects`}>
                      <span className="absolute inset-0"></span>
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 sm:hidden flex justify-center">
            <Link href="/projects" className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-11 px-8 w-full">
              View all projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
