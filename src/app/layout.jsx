import '@/styles/tailwind.css'
import { Toaster } from 'sonner'

export const metadata = {
  title: {
    template: '%s - MKM',
    default: 'MKM Real Estate - Empowering Purpose-driven Real Estate',
  },
  openGraph: {
    title: "MKM Real Estate",
    description: "Empowering Purpose-driven Real Estate",
    url: "https://mkm-companies.vercel.app/",
    siteName: "MKM Real Estate",
    images: [
      {
        url: "https://mkm-companies.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwciu.d773ca94.jpg&w=3840&q=75", // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: "William Carey International University",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        {children}
         <Toaster position="top-center" richColors closeButton />
        </body>
    </html>
  )
}
