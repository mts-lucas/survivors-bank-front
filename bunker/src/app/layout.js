// components/RootLayout.js
import React from 'react';
import './globals.css';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Navbar } from './components/navbar';
import Provider from "./context/client-provider"
import { getServerSession } from "next-auth/next"
// import { nextAuthOptions } from "./api/auth/[...nextauth]/route"
import { nextAuthOptions } from "./utils/authOptions"

export const metadata = {
  title: 'Bunker',
  description: 'Pweb project',
  icons: {
    icon: "/assets/fav-rounded.png"
  }
}

export default async function RootLayout ({ children }){
  const backgroundImage = '/spock-zombie.svg'; 
  const session = await getServerSession(nextAuthOptions)

  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <Provider session={session}>
          <Header />
          <div className="flex justify-center">
            <Navbar />
          </div>
          <div className="flex-grow">{children}</div>
          <Footer />
        </Provider>
        {/* <Header />
        <div className="flex justify-center">
          <Navbar />
        </div>
        <div className="flex-grow">{children}</div>
        <Footer /> */}
      </body>
    </html>
  );
}
