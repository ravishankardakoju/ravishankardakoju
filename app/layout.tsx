import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/content/site";
import { ScrollToTop } from "@/components/scroll-to-top";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
    title: `${siteConfig.person.displayName} - ${siteConfig.person.roles[0]}`,
    description: siteConfig.person.shortBio,
    keywords: [siteConfig.person.fullName, ...siteConfig.person.seoAlternateNames, "Rotary", "Philanthropy", "Bengaluru"],
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
        ],
        shortcut: '/favicon.svg',
        apple: '/favicon.svg',
    },
    openGraph: {
        type: "profile",
        title: siteConfig.person.displayName,
        description: siteConfig.person.shortBio,
        siteName: siteConfig.person.displayName,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // JSON-LD Schema for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: siteConfig.person.fullName,
        alternateName: siteConfig.person.seoAlternateNames,
        jobTitle: siteConfig.person.roles,
        address: {
            "@type": "PostalAddress",
            addressLocality: siteConfig.person.location,
        },
        email: siteConfig.links.contactEmail,
        sameAs: [
            siteConfig.links.linkedin,
            siteConfig.links.instagram,
        ],
        description: siteConfig.person.shortBio,
    };

    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} ${playfair.variable} font-sans antialiased text-slate-800 bg-slate-50 relative`}>
                {children}
                <ScrollToTop />
                <Script
                    id="json-ld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </body>
        </html>
    );
}
