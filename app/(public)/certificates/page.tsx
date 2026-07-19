import { dummyCertificates } from "@/lib/dummy-data";
import Image from "next/image";
import Link from "next/link";

export default function CertificatesPage() { 
  return ( 
    <div className='container mx-auto py-24'> 
      <h1 className='text-4xl font-bold capitalize mb-12'>Certificates</h1> 
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyCertificates.map((cert) => (
          <div key={cert.id} className="group relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm flex flex-col">
            <div className="aspect-video w-full overflow-hidden relative">
              <Image 
                src={cert.image} 
                alt={cert.title} 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-1">
                {cert.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {cert.issuer} • {new Date(cert.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
              
              <div className="mt-auto pt-4">
                {cert.credential_url && (
                  <Link href={cert.credential_url} target="_blank" className="text-sm font-medium hover:underline text-blue-600 dark:text-blue-400">
                    View Credential &rarr;
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
