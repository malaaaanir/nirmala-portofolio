import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nirmala Portfolio',
  description: 'Created with v0',
  generator: 'v0.dev',
  icons: {
    icon: '/logo-n.png', 
    apple: '/logo-n.png', 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}