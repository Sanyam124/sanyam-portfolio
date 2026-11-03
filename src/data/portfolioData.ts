export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  description: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'Full-Stack' | 'AI / Computer Vision' | 'System Design';
  featured: boolean;
  metrics: { label: string; value: string }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  credentialUrl: string;
  badgeUrl?: string;
  category: 'Cloud' | 'Enterprise Platform' | 'AI / ML' | 'Data Structures';
  skills: string[];
}

export interface CompetitiveStats {
  platform: string;
  rating?: string | number;
  solved: string;
  tier?: string;
  profileUrl: string;
  iconName: string;
  highlight: string;
}

export const PERSONAL_INFO = {
  name: "Sanyam Sharma",
  title: "Full-Stack Engineer & AI/ML Developer",
  tagline: "Final-Year B.Tech CSE-AI Student | 8.87 CGPA | Problem Solver",
  bio: "Passionate software engineer with hands-on expertise building scalable full-stack web applications and AI-driven computer vision pipelines. Solved 1700+ algorithmic problems across LeetCode, CodeChef, and Codeforces, with a strong focus on high-performance backends, secure system architectures, and intuitive modern interfaces.",
  status: "Available for Software Engineering, Full-Stack & AI Roles (Graduating May 2027)",
  location: "Vadodara, Gujarat, India",
  phone: "+91 9424359751",
  email: "sanyamsharma124@gmail.com",
  socials: {
    github: "https://github.com/Sanyam124",
    linkedin: "https://www.linkedin.com/in/sanyam-sharma-253a9a172/",
    leetcode: "https://leetcode.com/u/sanyam_sharma_1",
    codechef: "https://codechef.com/users/sanyam124",
    codeforces: "https://codeforces.com/profile/sanyamsharma124",
  },
  education: {
    institution: "Parul University",
    location: "Vadodara, India",
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science and Engineering (CSE-AI)",
    cgpa: "8.87 / 10.0",
    period: "2023 — Expected May 2027",
    highlights: [
      "Consistent Academic Excellence with 8.87 CGPA",
      "Specialization in Artificial Intelligence, Deep Learning & Systems",
      "Active participant in competitive programming and collegiate hackathons"
    ]
  }
};

export const COMPETITIVE_STATS: CompetitiveStats[] = [
  {
    platform: "LeetCode",
    rating: "1807",
    solved: "500+",
    tier: "Top 7% Worldwide",
    profileUrl: "https://leetcode.com/u/sanyam_sharma_1",
    iconName: "Code2",
    highlight: "Knight-level rating with 500+ solved across Data Structures & Dynamic Programming"
  },
  {
    platform: "CodeChef",
    rating: "1470",
    solved: "1000+",
    tier: "2-Star Competitive Coder",
    profileUrl: "https://codechef.com/users/sanyam124",
    iconName: "Flame",
    highlight: "Over 1000 problems conquered in algorithmic contests and challenges"
  },
  {
    platform: "Codeforces",
    solved: "200+",
    tier: "Active Contestant",
    profileUrl: "https://codeforces.com/profile/sanyamsharma124",
    iconName: "Terminal",
    highlight: "Regular participant in Div. 2 and Div. 3 international rounds"
  }
];

export const SKILL_CATEGORIES = [
  {
    category: "Languages",
    skills: [
      { name: "Java", level: "Advanced", icon: "Coffee" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode2" },
      { name: "Python", level: "Advanced", icon: "Terminal" },
      { name: "C++", level: "Proficient", icon: "Cpu" },
      { name: "SQL", level: "Advanced", icon: "Database" },
      { name: "HTML5 / CSS3", level: "Expert", icon: "Layout" },
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "Next.js 14/15", level: "Advanced", icon: "Boxes" },
      { name: "React 18/19", level: "Advanced", icon: "Atom" },
      { name: "Node.js", level: "Advanced", icon: "Server" },
      { name: "Express.js", level: "Advanced", icon: "Network" },
      { name: "Flask", level: "Advanced", icon: "Zap" },
      { name: "Django", level: "Proficient", icon: "Layers" },
      { name: "OpenCV", level: "Proficient", icon: "Eye" },
      { name: "Socket.IO", level: "Advanced", icon: "Radio" },
      { name: "SQLAlchemy", level: "Advanced", icon: "HardDrive" },
      { name: "Tailwind CSS", level: "Expert", icon: "Palette" },
    ]
  },
  {
    category: "Databases & Storage",
    skills: [
      { name: "PostgreSQL", level: "Advanced", icon: "Database" },
      { name: "MongoDB", level: "Advanced", icon: "Leaf" },
      { name: "MySQL", level: "Advanced", icon: "Server" },
      { name: "SQLite", level: "Proficient", icon: "HardDrive" },
      { name: "Cloudinary", level: "Proficient", icon: "Cloud" },
    ]
  },
  {
    category: "Cloud, DevOps & Tools",
    skills: [
      { name: "AWS", level: "Certified", icon: "CloudSun" },
      { name: "ServiceNow", level: "CSA & CAD Certified", icon: "ShieldCheck" },
      { name: "Docker", level: "Proficient", icon: "Box" },
      { name: "Linux / Bash", level: "Advanced", icon: "TerminalSquare" },
      { name: "Git & GitHub", level: "Expert", icon: "GitBranch" },
      { name: "Postman", level: "Advanced", icon: "Send" },
      { name: "WebRTC", level: "Proficient", icon: "Video" },
    ]
  },
  {
    category: "Core Computer Science",
    skills: [
      { name: "Data Structures & Algorithms", level: "1700+ Solved", icon: "Binary" },
      { name: "Object-Oriented Programming (OOP)", level: "Advanced", icon: "Layers" },
      { name: "Database Management Systems (DBMS)", level: "Advanced", icon: "Database" },
      { name: "Operating Systems", level: "Proficient", icon: "Cpu" },
      { name: "Computer Networks", level: "Proficient", icon: "Network" },
      { name: "RESTful API Design", level: "Advanced", icon: "Webhook" },
      { name: "JWT & OAuth 2.0 (RBAC)", level: "Advanced", icon: "Lock" },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "recircle",
    title: "ReCircle — Student Campus Marketplace",
    subtitle: "Full-Stack P2P Marketplace with Real-Time Negotiation & Fair-Trade Guardrails",
    role: "Full-Stack Architect & Lead Developer",
    category: "Full-Stack",
    featured: true,
    description: "Architected an end-to-end campus marketplace empowering students to buy, sell, and offer freelance services securely within their university ecosystem. Designed with Next.js 15 App Router, atomic MongoDB transactions, and real-time negotiation channels.",
    highlights: [
      "Engineered full-stack marketplace on Next.js 15 App Router with MongoDB & Mongoose backend and Cloudinary CDN for responsive media optimization.",
      "Implemented dual-layer security with JWT and Google OAuth 2.0, granular Role-Based Access Control (RBAC), and physical OTP verification for secure deal completion.",
      "Prevented race conditions and phantom listings using MongoDB atomic transactions (ACID guarantees) during deal finalization.",
      "Engineered real-time chat with tabbed negotiation UI, automated order lifecycle updates, and fair-trade guardrails (±200% price caps, strict integer-only inputs)."
    ],
    techStack: ["Next.js 15", "React 19", "Node.js", "MongoDB", "Mongoose", "JWT", "Google OAuth 2.0", "Cloudinary", "Tailwind CSS"],
    liveUrl: "https://recircle-hub.vercel.app/",
    githubUrl: "https://github.com/Sanyam124/recircle-marketplace",
    metrics: [
      { label: "Architecture", value: "Next.js 15 App Router" },
      { label: "Security", value: "JWT + OAuth + OTP" },
      { label: "Data Integrity", value: "Atomic Transactions" },
      { label: "Real-time", value: "Negotiation Engine" }
    ]
  },
  {
    id: "smart-attendance",
    title: "AI-Powered Automated Attendance System",
    subtitle: "Multi-Tenant Edge Biometric Facial Recognition Platform with Wireless Node Streaming",
    role: "AI & Backend Engineer",
    category: "AI / Computer Vision",
    featured: true,
    description: "Designed a multi-tenant biometric monitoring ecosystem that enables high-accuracy facial recognition across multiple educational institutions with isolated administrative dashboards and zero-hardware smartphone edge integration.",
    highlights: [
      "Engineered a real-time biometric pipeline utilizing dlib 128-dimensional deep metric embeddings and Socket.IO for sub-second facial match detection.",
      "Architected secure SSH reverse tunneling infrastructure to leverage ubiquitous smartphone cameras worldwide as high-resolution remote attendance nodes.",
      "Constructed a multi-tenant database schema with strict institution-level data isolation and role-based access for Admins, Teachers, and Students.",
      "Designed an automated biometric folder migration engine, guaranteeing complete synchronization of facial biometric data across student promotions and server restarts."
    ],
    techStack: ["Python", "Flask", "dlib", "OpenCV", "WebRTC", "Socket.IO", "SQLAlchemy", "SQLite", "SSH Tunneling", "NumPy"],
    liveUrl: "https://smart-attendance-system-znsi.onrender.com",
    githubUrl: "https://github.com/Sanyam124/Flask-Based-Attendance-System",
    metrics: [
      { label: "Recognition", value: "128-D Deep Embeddings" },
      { label: "Edge Hardware", value: "Smartphone Cameras" },
      { label: "Latency", value: "Sub-Second Live Match" },
      { label: "Multi-Tenancy", value: "Strict Org Isolation" }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "servicenow-csa",
    title: "Certified System Administrator (CSA)",
    issuer: "ServiceNow",
    credentialUrl: "https://www.credly.com/badges/defc7c46-11cd-4a9d-879d-e73f3f3f0315/public_url",
    category: "Enterprise Platform",
    skills: ["System Administration", "ITSM", "Workflows & Automation", "User Administration & RBAC"]
  },
  {
    id: "servicenow-cad",
    title: "Certified Application Developer (CAD)",
    issuer: "ServiceNow",
    credentialUrl: "https://www.credly.com/badges/0b890559-bbb1-4d38-aece-89b0e6082b71/public_url",
    category: "Enterprise Platform",
    skills: ["Scoped Applications", "Server & Client Scripts", "Flow Designer", "REST Integration"]
  },
  {
    id: "aws-cloud-essentials",
    title: "AWS Cloud Essentials Knowledge Badge",
    issuer: "Amazon Web Services (AWS)",
    credentialUrl: "https://www.credly.com/badges/2af980ba-f8ec-4854-ab7d-8d8c7fa67335/public_url",
    category: "Cloud",
    skills: ["Cloud Architecture", "AWS Compute & S3", "IAM Security", "High Availability"]
  },
  {
    id: "aws-cloud-foundations",
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    credentialUrl: "https://www.credly.com/badges/711d9547-364c-4ad4-a396-f3c36e93d44a/public_url",
    category: "Cloud",
    skills: ["Virtual Private Cloud (VPC)", "EC2", "RDS", "Serverless Fundamentals"]
  },
  {
    id: "ibm-ai-fundamentals",
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    credentialUrl: "https://www.credly.com/badges/0855e6a6-c6cb-47e0-9e0d-03db8835fe79/public_url",
    category: "AI / ML",
    skills: ["Machine Learning", "Deep Learning", "Neural Networks", "Computer Vision Fundamentals"]
  },
  {
    id: "smart-coder-dsa",
    title: "Smart Coder — Data Structures & Algorithms",
    issuer: "Smart Interviews",
    credentialUrl: "https://smartinterviews.in/certificate/31aac4b8",
    category: "Data Structures",
    skills: ["Advanced Trees & Graphs", "Dynamic Programming", "Time & Space Optimization", "Bit Manipulation"]
  }
];
