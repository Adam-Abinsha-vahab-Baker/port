import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Adam Baker - Portfolio',
  description: 'AI/ML Engineer & Full Stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {/* Header */}
        <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold">
              Adam Baker
            </Link>
            <nav className="flex gap-8">
              <Link 
                href="/" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-background/80 backdrop-blur-sm border-t border-border py-12">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground">adam.baker@evebyadam.co.uk</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                  <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Location</h3>
                <p className="text-muted-foreground">Hertfordshire England</p>
                <p className="text-muted-foreground mt-2">Available for remote work worldwide</p>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
              <p>© {new Date().getFullYear()} Adam Baker. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}