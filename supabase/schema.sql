-- Create tables for Personal Portfolio CMS

-- 1. Profile Table
CREATE TABLE IF NOT EXISTS public.profile (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    headline TEXT,
    bio TEXT,
    photo TEXT,
    email TEXT,
    github TEXT,
    linkedin TEXT,
    website TEXT,
    cv TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Projects Table
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    thumbnail TEXT,
    github_url TEXT,
    demo_url TEXT,
    tech_stack JSONB DEFAULT '[]'::jsonb,
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Experience Table
CREATE TABLE IF NOT EXISTS public.experience (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company TEXT NOT NULL,
    position TEXT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    description TEXT,
    logo TEXT,
    order_index INTEGER DEFAULT 0
);

-- 4. Skills Table
CREATE TABLE IF NOT EXISTS public.skills (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    icon TEXT,
    category TEXT,
    level INTEGER,
    order_index INTEGER DEFAULT 0
);

-- 5. Certificates Table
CREATE TABLE IF NOT EXISTS public.certificates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    issuer TEXT NOT NULL,
    date DATE,
    image TEXT,
    credential_url TEXT
);

-- 6. Research Table
CREATE TABLE IF NOT EXISTS public.research (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    journal TEXT,
    pdf TEXT,
    published_date DATE
);

-- 7. Blog Table
CREATE TABLE IF NOT EXISTS public.blog (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    content TEXT,
    thumbnail TEXT,
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);


-- Setup Storage Buckets
INSERT INTO storage.buckets (id, name, public) VALUES 
('portfolio-storage', 'portfolio-storage', true) 
ON CONFLICT (id) DO NOTHING;


-- Row Level Security (RLS) Policies

-- Enable RLS for all tables
ALTER TABLE public.profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.research ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog ENABLE ROW LEVEL SECURITY;

-- 1. Read access for everyone (Public Portfolio)
CREATE POLICY "Public profiles are viewable by everyone" ON public.profile FOR SELECT USING (true);
CREATE POLICY "Public projects are viewable by everyone" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Public experience is viewable by everyone" ON public.experience FOR SELECT USING (true);
CREATE POLICY "Public skills are viewable by everyone" ON public.skills FOR SELECT USING (true);
CREATE POLICY "Public certificates are viewable by everyone" ON public.certificates FOR SELECT USING (true);
CREATE POLICY "Public research is viewable by everyone" ON public.research FOR SELECT USING (true);
CREATE POLICY "Public blogs are viewable by everyone" ON public.blog FOR SELECT USING (true);

-- 2. Write access for authenticated users only (Admin CMS)
-- Reusable policy function for authenticated users
CREATE POLICY "Auth users can insert profile" ON public.profile FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Auth users can update profile" ON public.profile FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Auth users can delete profile" ON public.profile FOR DELETE TO authenticated USING (true);

CREATE POLICY "Auth users can insert projects" ON public.projects FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Auth users can update projects" ON public.projects FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Auth users can delete projects" ON public.projects FOR DELETE TO authenticated USING (true);

CREATE POLICY "Auth users can insert experience" ON public.experience FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Auth users can update experience" ON public.experience FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Auth users can delete experience" ON public.experience FOR DELETE TO authenticated USING (true);

CREATE POLICY "Auth users can insert skills" ON public.skills FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Auth users can update skills" ON public.skills FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Auth users can delete skills" ON public.skills FOR DELETE TO authenticated USING (true);

CREATE POLICY "Auth users can insert certificates" ON public.certificates FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Auth users can update certificates" ON public.certificates FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Auth users can delete certificates" ON public.certificates FOR DELETE TO authenticated USING (true);

CREATE POLICY "Auth users can insert research" ON public.research FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Auth users can update research" ON public.research FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Auth users can delete research" ON public.research FOR DELETE TO authenticated USING (true);

CREATE POLICY "Auth users can insert blog" ON public.blog FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Auth users can update blog" ON public.blog FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Auth users can delete blog" ON public.blog FOR DELETE TO authenticated USING (true);

-- Storage bucket access policies
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'portfolio-storage');
CREATE POLICY "Admin Insert" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'portfolio-storage');
CREATE POLICY "Admin Update" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'portfolio-storage');
CREATE POLICY "Admin Delete" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'portfolio-storage');
