import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'Intrinsic Biogas - Sustainable Energy Solutions',
  description: 'Leading provider of biogas solutions for homes, farms, and businesses. Transform waste into clean energy.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
