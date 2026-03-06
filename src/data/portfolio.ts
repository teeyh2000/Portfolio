export const personalInfo = {
  name: "Tee Yung How",
  title: "Software Developer (Full Stack)",
  email: "teeyh2000@gmail.com",
  github: "",
  linkedin: "https://www.linkedin.com/in/tee-yung-how-411510246/",
  location: "Kuala Lumpur, Malaysia",
  bio: `Versatile Full Stack Developer with a proven track record of delivering high-impact solutions across fintech, e-commerce, and enterprise systems. Deep expertise in payment gateway integrations, e-invoicing systems, and cloud deployments. From architecting microservice payment flows to building admin portals single-handedly, I thrive on turning complex requirements into reliable, scalable software.`,
};

export const skills = [
  { name: "C# / .NET", category: "Backend" },
  { name: "ASP.NET MVC", category: "Backend" },
  { name: "Entity Framework", category: "Backend" },
  { name: "RESTful APIs", category: "Backend" },
  { name: "Hangfire", category: "Backend" },
  { name: "RabbitMQ", category: "Backend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "HTML / CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Razor (cshtml)", category: "Frontend" },
  { name: "MSSQL / SQL", category: "Database" },
  { name: "Database Design", category: "Database" },
  { name: "Stored Procedures", category: "Database" },
  { name: "Azure Cloud", category: "DevOps" },
  { name: "Git / GitHub", category: "DevOps" },
  { name: "CI/CD & Deployment", category: "DevOps" },
  { name: "Swagger / OpenAPI", category: "DevOps" },
  { name: "Jira / Confluence", category: "DevOps" },
  { name: "Redis Cache", category: "DevOps" },
];

export const experience = [
  {
    company: "Syntrino Solutions Sdn. Bhd.",
    role: "Software Developer",
    period: "Sep 2024 - Present",
    highlights: [
      "Top contributor — completed 55 tasks across 7 months",
      "Integrated 6 payment gateways: ShopeePay, Touch 'n Go, Maybank MGate, Boost-Sparkle, PayDibs, Funding Society",
      "Architected end-to-end LHDN e-invoicing system across 4 Syntrino products",
      "Single-handedly built the Porsche Club Malaysia admin web application",
      "Managed Azure deployments, centralized logging, and database design",
      "Resolved 12 production bugs and authored 14 integration test cases",
      "Fostered team collaboration through frequent discussions and code reviews",
      "Documented all work via Jira task tracking and maintained changelogs in Confluence for every release",
    ],
  },
  {
    company: "UOB Kay Hian Securities (M) Sdn. Bhd.",
    role: "Junior Officer - Software Developer",
    period: "Jun 2023 - Aug 2024",
    highlights: [
      "Maintained multiple production systems simultaneously",
      "Resolved security vulnerabilities identified by penetration testing vendor, including XSS, CSRF, and SQL injection fixes",
      "Developed APIs from scratch and managed database stored procedures",
      "Migrated legacy projects to modern .NET platforms",
      "Restored lost legacy C# and Visual Basic codebases",
      "Engaged with stakeholders to gather requirements and translate business needs into technical solutions",
    ],
  },
  {
    company: "GHL ePayments Sdn. Bhd.",
    role: "Intern - Back-End Development",
    period: "Nov 2022 - May 2023",
    highlights: [
      "Developed back-end solutions using C# and ASP.NET",
      "Integrated RabbitMQ for DHL e-Billing email queue optimization",
      "Migrated applications from .NET Framework 4.8 to .NET Core 6.0",
      "Designed databases and stored procedures from scratch",
    ],
  },
];

export const projects = [
  {
    title: "SwifPay - Payment Gateway",
    description:
      "Multi-gateway payment wall integrating 6 payment providers with end-to-end payment flow, microservice architecture, and automated reconciliation.",
    tech: ["C#", "ASP.NET", "Entity Framework", "Azure", "SQL", "Swagger"],
    highlights: [
      "Integrated ShopeePay, Touch 'n Go, Maybank MGate, Boost DuitNow QR, PayDibs, Funding Society",
      "Built RESTful APIs for authorization, capture, refund, and reconciliation",
      "Designed transaction reports for finance & operations team",
      "Implemented retry/fallback mechanisms with centralized logging",
    ],
  },
  {
    title: "LHDN E-Invoicing System",
    description:
      "Standalone e-invoicing backend integrated across 4 Syntrino systems with automated submissions, digital signing, and real-time monitoring.",
    tech: ["C#", "ASP.NET", "Hangfire", "Entity Framework", "SQL", "Azure"],
    highlights: [
      "Automated individual and monthly consolidated LHDN submissions",
      "Digital signing with dedicated e-invoicing certificates",
      "SMS and email notification services for customers and vendors",
      "Real-time monitoring dashboard for status tracking across all systems",
    ],
  },
  {
    title: "Syntrino Mobile POS - E-Invoice QR Module",
    description:
      "LHDN e-invoicing module for the Syntrino Mobile POS system, enabling merchants to generate QR codes for customer self-service e-invoice submissions.",
    tech: ["C#", "ASP.NET", "Entity Framework", "SQL", "LHDN API"],
    highlights: [
      "Built QR code generation for customers to self-request e-invoice submissions to LHDN",
      "Automated validation and submission of e-invoices upon QR scan",
      "Customers receive a copy of the validated e-invoice and a link to access it on MyTax (LHDN portal)",
    ],
  },
  {
    title: "Porsche Club Malaysia Web",
    description:
      "Admin web application built single-handedly for processing membership applications and managing club operations.",
    tech: ["React", "TypeScript", "ASP.NET", "SQL", "Azure"],
    highlights: [
      "Solo-developed the full admin portal from scratch",
      "Application processing workflow with approval center",
      "Member management and various administrative features",
    ],
  },
  {
    title: "UTrade Stockscreener & ShareXplorer",
    description:
      "Legacy stock screening platform restored, secured, and modernized for cross-platform compatibility.",
    tech: ["C#", ".NET Framework 4.8", "SQL", "HTML/CSS/JS"],
    highlights: [
      "Restored lost legacy C# codebase using specialized tools",
      "Fixed multiple security vulnerabilities from penetration testing",
      "Enhanced search to support both full name and ticker symbol",
      "Ensured cross-platform compatibility (iOS, Android, Windows)",
    ],
  },
  {
    title: "DHL e-Billing & e-Receipts",
    description:
      "Email billing system with RabbitMQ message queue integration for DHL Express, including PDF receipt generation.",
    tech: ["C#", "ASP.NET", "RabbitMQ", ".NET Core 6.0", "SQL"],
    highlights: [
      "Designed RabbitMQ queue system to optimize email sending",
      "Migrated from .NET Framework 4.8 to .NET Core 6.0",
      "Automated PDF receipt generation alongside email dispatch",
    ],
  },
  {
    title: "StandardFA Portal & Insurance Management System",
    description:
      "Web portal for financial advisors to manage insurance policies, client records, and commission tracking with role-based access control.",
    tech: ["C#", "ASP.NET MVC", "Entity Framework", "SQL", "Azure"],
    highlights: [
      "Built policy management modules with CRUD operations and search filters",
      "Implemented role-based access control for agents, managers, and admins",
      "Designed commission calculation and reporting features",
    ],
  },
  {
    title: "GHL Internal Maintenance System",
    description:
      "Internal maintenance and monitoring system for GHL's payment terminal infrastructure, streamlining operations and issue tracking.",
    tech: ["C#", "ASP.NET", ".NET Core 6.0", "SQL", "Entity Framework"],
    highlights: [
      "Developed maintenance scheduling and tracking modules",
      "Built reporting dashboards for terminal status monitoring",
      "Migrated legacy components from .NET Framework 4.8 to .NET Core 6.0",
    ],
  },
  {
    title: "3D Room Modeling (Final Year Project)",
    description:
      "3D room modeling and virtualization system using Intel RealSense depth camera with interactive OBJ model export.",
    tech: ["Python", "RealSense SDK", "3D Modeling", "Google Sites"],
    highlights: [
      "Created complete 3D scene models from multiple depth inputs",
      "Used image odometry algorithm with RGB-D sensor data",
      "Interactive 3D model viewer with OBJ export capability",
    ],
  },
];

export const achievements = [
  { title: "Top Team Contributor at SwiF Fintech", detail: "55 tasks completed across 7 months", year: "2025" },
  { title: "Google IT Support Certificate", detail: "Google", year: "2023" },
  { title: "Foundational C# with Microsoft", detail: "Microsoft", year: "2023" },
  { title: "freeCodeCamp Front End Development Libraries", detail: "freeCodeCamp", year: "2023" },
  { title: "freeCodeCamp JS Algorithm & Data Structures", detail: "freeCodeCamp", year: "2023" },
  { title: "freeCodeCamp Responsive Web Design", detail: "freeCodeCamp", year: "2023" },
  { title: "AWS Cloud Quest: Cloud Practitioner", detail: "Amazon Web Services", year: "2022" },
  { title: "AWS Academy Cloud Foundations", detail: "Amazon Web Services", year: "2022" },
  { title: "President's List (3 semesters)", detail: "CGPA > 3.9 at TAR UMT", year: "2020-2023" },
  { title: "Dean's List (2 semesters)", detail: "CGPA > 3.75 at TAR UMT", year: "2020-2023" },
  { title: "First Class Honours", detail: "BSc Software Engineering, CGPA 3.8944", year: "2023" },
  { title: "MUET Band 5", detail: "Malaysian University English Test", year: "2019" },
];

export const education = {
  university: "Tunku Abdul Rahman University of Management and Technology (TAR UMT)",
  degree: "Bachelor of Computer Science (Honours) in Software Engineering",
  cgpa: "3.8944 (First Class)",
  period: "2020 - 2023",
};
