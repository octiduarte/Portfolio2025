import "./globals.css";
import type React from "react";
import { Fira_Code } from "next/font/google"
import CustomCursor from "@/components/CustomCursor";
import { Analytics } from "@vercel/analytics/react"

const fira_code = Fira_Code({preload: true, subsets: ['latin']})

export const metadata = {
  title: "Octavio Duarte",
  description: "Un resumen de lo que soy y mas",
  icons: "/logo.png", 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fira_code.className}>
      <CustomCursor />{children}
      <Analytics /></body>
    </html>
  )
}

