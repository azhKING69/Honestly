import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '700'], 
});

export const metadata: Metadata = {
    title: "Honestly",
    description: "True Honest Anonymous feedback from real people",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <AuthProvider>
                <body className={`${poppins.className} bg-gray-800`}>
                    <Navbar />
                    {children}
                    <Toaster />
                    <Footer />
                </body>
            </AuthProvider>
        </html>
    );
}