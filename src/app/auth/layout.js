import { cn } from "@/lib/utils"
import { fontSans } from "../(Storefront)/layout"

export const metadata = {
  title: 'Admin Login',
  description: 'Login to the admin dashboard.',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >{children}</body>
    </html>
  )
}
