import { dummyProjects, dummyBlogs, dummyCertificates } from "@/lib/dummy-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, FileText, Award, Eye } from "lucide-react";

export default function AdminDashboardPage() { 
  return ( 
    <div className='p-8 space-y-8'> 
      <div>
        <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1> 
        <p className='mt-2 text-muted-foreground'>Overview of your portfolio content.</p> 
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dummyProjects.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {dummyProjects.filter(p => p.featured).length} featured
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dummyBlogs.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {dummyBlogs.filter(p => p.published).length} published
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Certificates</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dummyCertificates.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Earned across platforms
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground mt-1">
              +15% from last month
            </p>
          </CardContent>
        </Card>
      </div>
    </div> 
  ); 
}
