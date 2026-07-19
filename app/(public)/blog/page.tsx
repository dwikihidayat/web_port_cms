import { dummyBlogs } from "@/lib/dummy-data";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() { 
  return ( 
    <div className='container mx-auto py-24'> 
      <h1 className='text-4xl font-bold capitalize mb-12'>Blog</h1> 
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyBlogs.filter(post => post.published).map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="group relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm transition-all hover:shadow-md flex flex-col">
            <div className="aspect-[16/10] w-full overflow-hidden relative">
              <Image 
                src={post.thumbnail} 
                alt={post.title} 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-xs text-muted-foreground mb-3">
                {new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-3">
                {post.content}
              </p>
              
              <div className="mt-auto pt-6 text-sm font-medium text-blue-600 dark:text-blue-400">
                Read Article &rarr;
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div> 
  ); 
}
