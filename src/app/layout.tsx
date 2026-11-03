import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanyam Sharma | Full-Stack Engineer & AI Developer",
  description:
    "Portfolio of Sanyam Sharma — Final-Year B.Tech CSE-AI at Parul University (8.87 CGPA). 1700+ DSA problems solved, Next.js 15, Python, Cloud & Computer Vision specialist. ServiceNow & AWS Certified.",
  keywords: [
    "Sanyam Sharma",
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "AI Engineer",
    "Parul University",
    "LeetCode Knight",
    "ServiceNow CSA CAD",
    "AWS Certified",
    "Computer Vision",
    "Python Flask",
  ],
  authors: [{ name: "Sanyam Sharma", url: "https://github.com/Sanyam124" }],
  creator: "Sanyam Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Sanyam124/sanyam-portfolio",
    title: "Sanyam Sharma | Full-Stack Engineer & AI Developer",
    description:
      "Final-Year B.Tech CSE-AI (8.87 CGPA). 1700+ DSA problems conquered, 2x ServiceNow & AWS Certified. Architecting scalable full-stack & AI platforms.",
    siteName: "Sanyam Sharma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanyam Sharma | Full-Stack Engineer & AI Developer",
    description:
      "Final-Year B.Tech CSE-AI (8.87 CGPA). Full-Stack, AI & Competitive Programmer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="font-sans antialiased bg-[#070b12] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
