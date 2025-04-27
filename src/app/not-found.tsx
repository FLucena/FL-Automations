import { Metadata, Viewport } from "next";
import NotFoundClient from "@/components/not-found/NotFoundClient";

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
  title: "Page Not Found | FL Automations",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return <NotFoundClient />;
} 