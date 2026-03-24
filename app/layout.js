import "./globals.css";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Prevent Font Awesome from adding its CSS automatically (handled above)
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Leo Leung — Consultant & Builder",
  description: "Consultant & developer focused on Power Platform, Dynamics 365, and full-stack web delivery across portfolio, Manchester Gents, LCWK Reports, and Manchester Gents Gallery."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#0f1726" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta property="og:title" content="Leo Leung — Consultant & Builder" />
        <meta property="og:description" content="Consultant & developer focused on Power Platform, Dynamics 365, and full-stack web delivery across portfolio, Manchester Gents, LCWK Reports, and Manchester Gents Gallery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://leoleung.co.uk" />
        <meta property="og:image" content="/OG.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/OG.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Leo Leung",
              url: "https://leoleung.co.uk",
              sameAs: [
                "https://manchestergents.com",
                "https://suitt.co"
              ],
              jobTitle: "Consultant & Web Developer"
            })
          }}
        />
        {/* Persisted theme (light) pre-hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { if (localStorage.getItem('theme') === 'light') { document.documentElement.classList.add('light'); } } catch (e) {} })();`
          }}
        />
      </head>
      <body className={`${inter.className} text-ink text-[15px] leading-relaxed text-slate-200`}>
        {children}
      </body>
    </html>
  );
}
