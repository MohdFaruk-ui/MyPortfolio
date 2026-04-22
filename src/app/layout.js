import './globals.css';

export const metadata = {
  title: 'Mohd Faruk — Software Engineer',
  description: 'Portfolio of Mohd Faruk — Software Engineer specializing in Flutter, Python, and full-stack web development. Building fast, scalable digital experiences.',
  keywords: ['software engineer', 'flutter', 'python', 'fastapi', 'react', 'next.js', 'portfolio', 'Mohd Faruk'],
  authors: [{ name: 'Mohd Faruk' }],
  openGraph: {
    title: 'Mohd Faruk — Software Engineer',
    description: 'Software Engineer specializing in Flutter, Python & full-stack technologies.',
    type: 'website',
  },
  icons: {
    icon: '/mf-logo.png',
    shortcut: '/mf-logo.png',
    apple: '/mf-logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
