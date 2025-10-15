import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Miguel Ángel Murua | Social Media Paid & Frontend Developer",
  description:
    "2 años de experiencia en campañas publicitarias y desarrollo web frontend, combinando la creatividad con la optimización técnica.",
  openGraph: {
    title: "Miguel Ángel Murua | Social Media Paid & Frontend Developer",
    description: "2 años de experiencia en campañas publicitarias y desarrollo web frontend",
    images: ["/images/profile.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
