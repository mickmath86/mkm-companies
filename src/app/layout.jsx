import '@/styles/tailwind.css'
import { Toaster } from 'sonner'

export const metadata = {
  title: {
    template: '%s - Studio',
    default: 'Studio - Award winning developer studio based in Denmark',
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
