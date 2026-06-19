import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Staged Ready — Professional Property Staging',
  description:
    'Professional property staging for sale, HMO, and serviced accommodation in Norwich & Norfolk. Strategic staging that maximises sale price and reduces time on market.',
  metadataBase: new URL('https://stagedready.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpeg" href="/brand_assets/Staged%20ready.jpeg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
