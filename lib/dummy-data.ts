export const dummyProfile = {
  id: "1",
  name: "John Doe",
  headline: "Full Stack Developer & Data Enthusiast",
  bio: "I am a passionate software engineer with experience in building scalable web applications and analyzing complex data. Always eager to learn new technologies and solve challenging problems.",
  photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&auto=format&fit=crop",
  email: "hello@johndoe.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  website: "https://johndoe.com",
  cv: "https://example.com/cv.pdf",
  updated_at: new Date().toISOString(),
};

export const dummyProjects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    slug: "e-commerce-platform",
    description: "A full-featured e-commerce platform built with Next.js, Stripe, and Tailwind CSS. Features include user authentication, product search, cart management, and payment processing.",
    thumbnail: "https://images.unsplash.com/photo-1557821552-17105153ce67?q=80&w=1000&auto=format&fit=crop",
    github_url: "https://github.com",
    demo_url: "https://demo.com",
    tech_stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "Supabase"],
    featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Task Management App",
    slug: "task-management-app",
    description: "A collaborative task management application with real-time updates. Allows teams to create boards, lists, and cards, assign tasks, and track progress.",
    thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000&auto=format&fit=crop",
    github_url: "https://github.com",
    demo_url: "https://demo.com",
    tech_stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Weather Dashboard",
    slug: "weather-dashboard",
    description: "A weather dashboard that displays current weather conditions and a 5-day forecast for any city in the world. Uses the OpenWeatherMap API for data.",
    thumbnail: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000&auto=format&fit=crop",
    github_url: "https://github.com",
    demo_url: "https://demo.com",
    tech_stack: ["Vanilla JS", "HTML", "CSS", "REST API"],
    featured: false,
    created_at: new Date().toISOString(),
  }
];

export const dummyExperiences = [
  {
    id: "1",
    company: "Tech Solutions Inc.",
    position: "Senior Frontend Developer",
    start_date: "2021-05-01",
    end_date: null, // Present
    description: "Lead the frontend development team in building scalable web applications. Mentored junior developers and implemented best practices for code quality and performance.",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=250&auto=format&fit=crop",
    order_index: 0,
  },
  {
    id: "2",
    company: "Creative Agency",
    position: "Web Developer",
    start_date: "2018-08-01",
    end_date: "2021-04-30",
    description: "Developed and maintained multiple client websites using React and Next.js. Collaborated closely with the design team to ensure pixel-perfect implementation of UI/UX designs.",
    logo: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=250&auto=format&fit=crop",
    order_index: 1,
  }
];

export const dummySkills = [
  { id: "1", name: "JavaScript", icon: "devicon-javascript-plain", category: "Frontend", level: 90, order_index: 0 },
  { id: "2", name: "TypeScript", icon: "devicon-typescript-plain", category: "Frontend", level: 85, order_index: 1 },
  { id: "3", name: "React", icon: "devicon-react-original", category: "Frontend", level: 95, order_index: 2 },
  { id: "4", name: "Next.js", icon: "devicon-nextjs-plain", category: "Frontend", level: 90, order_index: 3 },
  { id: "5", name: "Node.js", icon: "devicon-nodejs-plain", category: "Backend", level: 80, order_index: 4 },
  { id: "6", name: "PostgreSQL", icon: "devicon-postgresql-plain", category: "Database", level: 75, order_index: 5 },
  { id: "7", name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", category: "Styling", level: 95, order_index: 6 },
];

export const dummyCertificates = [
  {
    id: "1",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023-01-15",
    image: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?q=80&w=500&auto=format&fit=crop",
    credential_url: "https://aws.amazon.com/certification/",
  },
  {
    id: "2",
    title: "Frontend Developer Certificate",
    issuer: "Meta",
    date: "2022-06-20",
    image: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?q=80&w=500&auto=format&fit=crop",
    credential_url: "https://coursera.org",
  }
];

export const dummyResearch = [
  {
    id: "1",
    title: "Impact of AI on Modern Web Development",
    description: "An in-depth analysis of how artificial intelligence tools and large language models are changing the landscape of software engineering and web development workflows.",
    journal: "Journal of Computer Science",
    pdf: "https://example.com/research.pdf",
    published_date: "2024-02-10",
  }
];

export const dummyBlogs = [
  {
    id: "1",
    title: "Getting Started with Next.js 15",
    slug: "getting-started-with-nextjs-15",
    content: "Next.js 15 brings a lot of exciting new features to the table. In this post, we'll explore the App Router, Server Actions, and how to optimize your application for performance...",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    published: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS",
    slug: "mastering-tailwind-css",
    content: "Tailwind CSS has revolutionized the way we style our web applications. By using utility classes, we can build complex designs quickly without leaving our HTML...",
    thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000&auto=format&fit=crop",
    published: true,
    created_at: new Date(Date.now() - 86400000 * 5).toISOString(),
  }
];
