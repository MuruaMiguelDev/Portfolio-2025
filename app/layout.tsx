// layout.tsx
import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  title: "Miguel Ángel Murua | Social Media Paid & Frontend Developer",
  description:
    "2 años y medio de experiencia en campañas publicitarias y desarrollo web frontend, combinando la creatividad con la optimización técnica.",
  openGraph: {
    title: "Miguel Ángel Murua | Social Media Paid & Frontend Developer",
    description: "2 años y medio de experiencia en campañas publicitarias y desarrollo web frontend",
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
      {/* Google Tag Manager */}
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K3NLLSPC');`}
      </Script>
      {/* End Google Tag Manager */}

      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K3NLLSPC" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          }}
        />
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  )
}