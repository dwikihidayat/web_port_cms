import { dummyResearch } from "@/lib/dummy-data";
import Link from "next/link";
import { FileText } from "lucide-react";

export default function ResearchPage() { 
  return ( 
    <div className='container mx-auto py-24'> 
      <h1 className='text-4xl font-bold capitalize mb-12'>Research & Publications</h1> 
      
      <div className="flex flex-col gap-6 max-w-4xl">
        {dummyResearch.map((item) => (
          <div key={item.id} className="p-8 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm transition-all hover:shadow-md flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg shrink-0 text-zinc-500 dark:text-zinc-400">
              <FileText size={40} />
            </div>
            
            <div className="flex-grow">
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
                {item.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium mb-3">
                {item.journal} • {new Date(item.published_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
              <p className="text-muted-foreground mb-6 line-clamp-4">
                {item.description}
              </p>
              
              {item.pdf && (
                <Link href={item.pdf} target="_blank" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-10 py-2 px-4">
                  Read Paper (PDF)
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div> 
  ); 
}
