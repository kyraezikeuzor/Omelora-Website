import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from '../components/Global/Navbar';
import Footer from '../components/Global/Footer';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Omelora',
  description: 'Dedicated to improving the health & education of children in southern Nigeria through activism & charitable activities.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
