// components/RootLayout.js
import './globals.css';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Navbar } from './components/navbar';
import { Search } from './components/search';

export const metadata = {
  title: 'Bunker',
  description: 'Pweb project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <div className="flex justify-center">
          <Navbar />
        </div>
        <div className='flex justify-center'>
          <Search />
        </div>
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
