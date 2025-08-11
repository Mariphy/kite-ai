import { Toaster } from 'sonner';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
//import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';
import { SessionProvider } from 'next-auth/react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { auth } from '@/app/(auth)/auth';

export const metadata: Metadata = {
  metadataBase: new URL('https://kite-ai.vercel.app/'),
  title: 'Kite AI',
  description: 'Kite AI - platform for career changers.',
};

export const viewport = {
  maximumScale: 1, // Disable auto-zoom on mobile Safari
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-inter',
});
/*
const LIGHT_THEME_COLOR = 'hsl(0 0% 100%)';
const DARK_THEME_COLOR = 'hsl(240deg 10% 3.92%)';
const THEME_COLOR_SCRIPT = `\
(function() {
  var html = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'theme-color');
    document.head.appendChild(meta);
  }
  function updateThemeColor() {
    var isDark = html.classList.contains('dark');
    meta.setAttribute('content', isDark ? '${DARK_THEME_COLOR}' : '${LIGHT_THEME_COLOR}');
  }
  var observer = new MutationObserver(updateThemeColor);
  observer.observe(html, { attributes: true, attributeFilter: ['class'] });
  updateThemeColor();
})();`;
*/
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth();

  return (
    <html
      lang="en"
      // `next-themes` injects an extra classname to the body element to avoid
      // visual flicker before hydration. Hence the `suppressHydrationWarning`
      // prop is necessary to avoid the React hydration mismatch warning.
      // https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
      suppressHydrationWarning
    >
      <head>
        {/*
        <script
          dangerouslySetInnerHTML={{
            __html: THEME_COLOR_SCRIPT,
          }}
        />
        */}
        <link rel="stylesheet" href="https://use.typekit.net/uyv7hge.css" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header user={session?.user} />
        {/*
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        */}
          <Toaster position="top-center" />
          <SessionProvider>{children}</SessionProvider>
        {/*</ThemeProvider>*/}
        <Footer />
      </body>
    </html>
  );
}
