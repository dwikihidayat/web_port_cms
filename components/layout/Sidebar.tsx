import Link from 'next/link';
import { Home, Folder, FileText, Award, Briefcase, Settings, LogOut } from 'lucide-react';

export function Sidebar() {
  const links = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: Home },
    { name: 'Projects', path: '/admin/projects', icon: Folder },
    { name: 'Blog', path: '/admin/blog', icon: FileText },
    { name: 'Experience', path: '/admin/experience', icon: Briefcase },
    { name: 'Certificates', path: '/admin/certificates', icon: Award },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <aside className="w-64 border-r bg-muted/40 h-screen sticky top-0 flex flex-col">
      <div className="p-6">
        <h2 className="text-xl font-bold tracking-tight">CMS Admin</h2>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.path}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground hover:bg-muted"
            >
              <Icon className="h-4 w-4" />
              {link.name}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-red-500 hover:bg-red-500/10 transition-all">
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  );
}
