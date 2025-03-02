# SpendSmart

## 📌 Project Overview

SpendSmart is a modern finance management web application designed to help users track their expenses, manage budgets, and gain insights into their financial health. Built with cutting-edge technologies, SpendSmart offers a seamless user experience with real-time analytics, visualized reports, and AI-powered financial insights. Main highlight of the project is receipt scanning using AI , bot protection and rate limiting using arcjet and using Inngest for cron jobs.

## 🖼️ Preview

![SpendSmart Landing Page](public/landing-page.png)

## 🚀 Features

- **User Authentication** using Clerk
- **Expense Tracking** with interactive charts and reports
- **Budget Management** for better financial planning
- **AI-powered financial insights** using Google Generative AI
- **Modern UI/UX** with Tailwind CSS and Radix UI
- **Dark Mode Support** with Next Themes
- **Automated Email Notifications** using Resend
- **Data Validation** using Zod
- **Responsive Design** ensuring accessibility across devices
- **Database Management** with Prisma ORM
- **Bot Protection,Rate Limiting** using Arcjet
- **Cron jobs** using Inngest

## 🔗 Live Demo

Check out the live version of SpendSmart here: [Live Site](https://spend-smart-navy.vercel.app/)

## 🛠 Installation & Setup

To set up and run the project locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- **Node.js** (Latest LTS version recommended)
- **npm** or **yarn** for package management
- **A PostgreSQL database**
- **Clerk account** for authentication
- **Inngest account** for scheduling cron jobs
- **Arcjet account** for bot protection and rate limiting

### Steps to Run

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Sankalp20Tiwari/SpendSmart.git
   ```

2. **Navigate to the project directory:**
   ```sh
   cd SpendSmart
   ```

3. **Install dependencies:**
   ```sh
   npm install  # or yarn install
   ```

4. **Configure environment variables:**
   Create a `.env` file in the root directory and define the necessary environment variables:
   ```sh
   DATABASE_URL=<your-database-connection-string>
   DIRECT_URL=<your-database-direct-url>
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-public-key>
   CLERK_SECRET_KEY=<your-clerk-secret-key>
   RESEND_API_KEY=<your-resend-api-key>
   GEMINI_API_KEY=<your-google-generative-ai-key>
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=<sign-in>
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=<sign-up>
   ARCJET_KEY=<your-arcjet-api-key>

   ```

5. **Run Prisma migrations:**
   ```sh
   npx prisma migrate dev
   ```

6. **Run the development server:**
   ```sh
   npm run dev  # or yarn dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📂 Project Structure

```
SpendSmart/
   ├──app/              # Next.js app directory
   │   ├──(auth)/       # Authentication-related pages
   │   ├──(main)/       # User dashboard pages
   │   ├──(api)/        # API routes
   │   ├──lib/          # Schemas
   │   ├──layout.tsx    # Layout file
   │   ├──page.tsx      # Landing Page
   ├──components/       # UI components (Radix, Tailwind, etc.)
   ├──data/             # Static data files
   ├──emails/           # Email template
   ├──hooks/            # Custom hooks
   ├──lib/              # Utility functions
   ├──models/           # Database models
   ├──public/           # Static assets (images, icons, etc.)
   ├──prisma/           # Prisma schema and migrations
   ├──next.config.ts    # Next.js configuration
   ├──package.json      # Project metadata and dependencies
   ├──.env              # Environment variables (excluded from Git)
```

## 🏰 Technologies Used

- **Next.js** - React framework for SSR & SSG
- **React 19** - Latest React version for a fast UI
- **Tailwind CSS** - Modern styling framework
- **Radix UI** - Accessible UI components
- **Clerk** - User authentication and management
- **Prisma** - ORM for database management
- **PostgreSQL** - Database for financial data
- **Google Generative AI** - AI-powered financial insights
- **Resend** - Email automation for notifications
- **Zod** - Data validation for forms and API inputs
- **Arcjet** - Bot protection and rate limiting
- **Inngest** - Used for creating cron jobs

## 🤝 Contributing

We welcome contributions to enhance the project! To contribute:

1. Fork the repository.
2. Create a new branch (`feature/your-feature-name`).
3. Implement your changes and commit.
4. Push to your forked repository and submit a pull request.


Made with ❤️ by Sankalp Tiwari 




