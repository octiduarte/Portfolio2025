import "./globals.css";
import type React from "react";
import { Fira_Code } from "next/font/google"

const fira_code = Fira_Code({preload: true, subsets: ['latin']})

export const metadata = {
  title: "Octavio Duarte",
  description: "Un resumen de lo que soy y mas",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fira_code.className}>{children}</body>
    </html>
  )
}

