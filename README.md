# Teves Enterprise

A modern web application built with Next.js, TypeScript, and Sanity CMS to showcase corporate services, company updates, and project portfolios with dynamic content management.

# 📝 Description
Teves Enterprise is a full-stack corporate web platform designed to present company services and showcase completed project portfolios. Built with Next.js App Router and integrated with Sanity Studio as a headless CMS, it allows for real-time content updates, seamless media management, and dynamic page rendering.

# 🛠️ Technologies Used
Framework: Next.js 15 (App Router, React 19)

Language: TypeScript

CMS: Sanity Studio (Headless CMS)

Styling: Tailwind CSS

# Deployment: Vercel

🚀 Setup & Installation Instructions
Follow these steps to get a local copy running on your machine:

# Prerequisites
### Make sure you have Node.js (v18 or higher) installed.

1. Clone the repository  
Bash  
git clone https://github.com/AldwynAligway/tevesEnterprises.git  
cd teves-enterprise  

2. Install dependencies  
Bash  
npm install  

3. Configure Environment Variables  
Create a .env.local file in the root directory and add your Sanity credentials:  
'''Code snippet  
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id  
NEXT_PUBLIC_SANITY_DATASET=production'''

4. Run the development server  
Bash  
npm run dev  

Open http://localhost:3000 in your browser to view the application.

Access the Sanity Studio dashboard directly at http://localhost:3000/studio.