import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#171717' },
  ],
};

export const metadata: Metadata = {
  title: "FL Automations - Francisco Lucena | Full-Stack Developer",
  description: "Professional portfolio website for Francisco Lucena showcasing modern web development projects and skills. Full-Stack developer specializing in React, Next.js, Node.js, Express, and UI/UX design.",
  keywords: ["Francisco Lucena", "web developer", "full-stack developer", "UI/UX designer", "React", "Next.js", "Node.js", "Express", "portfolio"],
  authors: [{ name: "Francisco Lucena" }],
  creator: "Francisco Lucena",
  publisher: "Francisco Lucena",
  openGraph: {
    title: "FL Automations - Francisco Lucena | Full-Stack Developer",
    description: "Professional portfolio website for Francisco Lucena showcasing modern web development projects and skills.",
    url: "https://flucena.com",
    siteName: "FL Automations",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FL Automations - Francisco Lucena | Full-Stack Developer",
    description: "Professional portfolio website for Francisco Lucena showcasing modern web development projects and skills.",
    creator: "@flucena_dev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Inline script to prevent flash of incorrect theme
const ThemeInitScript = () => {
  const themeScript = `
    (function() {
      try {
        const storedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {
        console.error('Theme initialization error:', e);
      }
    })()
  `;

  return (
    <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeScript }} />
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeInitScript />
        {/* Add third-party scripts */}
        <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js" async></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
