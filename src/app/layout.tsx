import "./globals.css"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"

export const metadata = {
  title: "THEMM Creative Agency",
  description: "A NYC-based creative media agency specializing in content creation, social media strategy, brand campaigns, and creative direction.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
