import { GeistSans } from 'geist/font/sans';
import './globals.css';
import ClientRootLayout from '@/components/ClientRootLayout';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'PhilanthroLink',
  description:
    'The one-stop crowdfunding platform dedicated to connecting donors with causes they care about',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  );
}
