# 🚀 Personal Portfolio with CMS

Modern personal portfolio website with a built-in Content Management System (CMS), built using **Next.js** and **Supabase**. This project is designed to showcase my professional profile, projects, research, certificates, and blog while allowing content management through a secure admin dashboard.

---

# 📖 Overview

This portfolio serves two main purposes:

- **Public Website** – Visitors can explore my profile, projects, experience, blog, and contact information.
- **Admin CMS** – A private dashboard where I can manage all portfolio content without modifying the source code.

All content is stored in **Supabase PostgreSQL**, while images and files are stored in **Supabase Storage**.

---

# 🎯 Objectives

- Build a professional personal branding website.
- Create a secure CMS for content management.
- Eliminate the need to edit code for every content update.
- Provide excellent SEO and performance.
- Ensure responsive design across all devices.

---

# 🛠 Tech Stack

## Frontend

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lucide React

## Backend

- Supabase
- PostgreSQL
- Authentication
- Storage
- Row Level Security (RLS)

## Validation

- React Hook Form
- Zod

## Deployment

- Vercel
- Supabase

---

# 📂 Project Structure

```text
portfolio/
│
├── app/
│   ├── (public)/
│   │   ├── page.tsx
│   │   ├── about/
│   │   ├── projects/
│   │   ├── experience/
│   │   ├── certificates/
│   │   ├── blog/
│   │   └── contact/
│   │
│   ├── admin/
│   │   ├── login/
│   │   ├── dashboard/
│   │   ├── projects/
│   │   ├── blog/
│   │   ├── certificates/
│   │   ├── experience/
│   │   ├── skills/
│   │   └── settings/
│   │
│   └── api/
│
├── components/
├── lib/
├── hooks/
├── types/
├── public/
├── middleware.ts
└── package.json
```

---

# 🗄 Database Design

## Profile

| Field | Type |
|--------|------|
| id | UUID |
| name | Text |
| headline | Text |
| bio | Text |
| photo | Text |
| email | Text |
| github | Text |
| linkedin | Text |
| website | Text |
| cv | Text |

---

## Projects

| Field | Type |
|--------|------|
| id | UUID |
| title | Text |
| slug | Text |
| description | Text |
| thumbnail | Text |
| github_url | Text |
| demo_url | Text |
| tech_stack | JSON |
| featured | Boolean |
| created_at | Timestamp |

---

## Experience

| Field | Type |
|--------|------|
| id | UUID |
| company | Text |
| position | Text |
| start_date | Date |
| end_date | Date |
| description | Text |
| logo | Text |

---

## Skills

| Field | Type |
|--------|------|
| id | UUID |
| name | Text |
| icon | Text |
| category | Text |
| level | Integer |

---

## Certificates

| Field | Type |
|--------|------|
| id | UUID |
| title | Text |
| issuer | Text |
| date | Date |
| image | Text |
| credential_url | Text |

---

## Research

| Field | Type |
|--------|------|
| id | UUID |
| title | Text |
| description | Text |
| journal | Text |
| pdf | Text |

---

## Blog

| Field | Type |
|--------|------|
| id | UUID |
| title | Text |
| slug | Text |
| content | Text |
| thumbnail | Text |
| published | Boolean |
| created_at | Timestamp |

---

# 📁 Storage Structure

```text
portfolio-storage/

├── profile/
├── projects/
├── certificates/
├── blog/
├── research/
└── cv/
```

---

# 🔐 Authentication

The CMS uses **Supabase Authentication**.

Features:

- Secure login
- Protected admin routes
- Session management
- Middleware authentication
- Row Level Security

Only authorized users can access the CMS.

---

# 🎨 Public Pages

## Home

- Hero Section
- About Me
- Featured Projects
- Tech Stack
- Experience Timeline
- Certificates
- Latest Blog
- Contact

---

## About

- Biography
- Education
- Career Journey
- Skills

---

## Projects

Features:

- Search
- Filter by Technology
- Featured Projects
- Live Demo
- GitHub Repository

---

## Experience

- Timeline Layout
- Company Information
- Job Description

---

## Certificates

- Certificate Gallery
- Credential Links

---

## Research

- Publications
- Journals
- Papers
- Downloads

---

## Blog

- Markdown Support
- Categories
- Search
- Reading Time

---

## Contact

- Contact Form
- Social Media
- Email

---

# ⚙ CMS Features

## Dashboard

- Overview Statistics
- Recent Activity
- Quick Actions

---

## Profile Management

- Update personal information
- Upload profile photo
- Upload CV
- Social media links

---

## Project Management

- Add Project
- Edit Project
- Delete Project
- Upload Thumbnail
- Featured Project

---

## Blog Management

- Create Article
- Edit Article
- Delete Article
- Publish / Draft

---

## Experience Management

- CRUD Experience
- Timeline Ordering

---

## Certificate Management

- Upload Certificate
- Credential Links

---

## Skill Management

- CRUD Skills
- Skill Categories

---

## Research Management

- Add Publications
- Upload PDF

---

# ✨ Additional Features

- Dark Mode
- Light Mode
- Responsive Design
- SEO Optimization
- Open Graph Metadata
- Dynamic Sitemap
- Robots.txt
- Loading Skeleton
- Toast Notification
- GitHub Integration
- Download CV
- Analytics
- Visitor Counter
- Image Optimization
- Lazy Loading
- Server Components
- Static Generation
- Dynamic Metadata

---

# 🔄 Application Flow

```text
Visitor
    │
    ▼
Public Portfolio
    │
    ├── View Projects
    ├── Read Blog
    ├── Download CV
    └── Contact
```

```text
Admin
    │
    ▼
Login
    │
    ▼
Dashboard
    │
    ├── Manage Profile
    ├── Manage Projects
    ├── Manage Blog
    ├── Manage Experience
    ├── Manage Skills
    ├── Manage Certificates
    └── Manage Research
```

---

# 🚀 Deployment

## Frontend

- Vercel

## Backend

- Supabase

---

# 📈 Future Improvements

- Multi-language (English / Indonesian)
- Comments System
- Portfolio Analytics
- Newsletter
- Project Categories
- Tags
- AI Chat Assistant
- Resume Generator
- Admin Activity Logs
- Media Library
- Email Notifications
- PWA Support

---

# 📌 Expected Outcome

The final product will be a modern, responsive, and high-performance personal portfolio with a built-in CMS that enables seamless content management. It will serve as both a professional portfolio and a centralized platform for showcasing projects, research, certifications, technical skills, and personal achievements while maintaining excellent scalability and maintainability."# web_port_cms" 
