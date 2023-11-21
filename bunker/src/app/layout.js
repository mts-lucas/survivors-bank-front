import './globals.css';


export const metadata = {
  title: 'Bunker',
  description: 'Pweb project',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}