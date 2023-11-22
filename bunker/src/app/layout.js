import './globals.css';
import './components/footer'
import { Footer } from './components/footer';

export const metadata = {
  title: 'Bunker',
  description: 'Pweb project',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
         <body className="flex flex-col min-h-screen">
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  )
}