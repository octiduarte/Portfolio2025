import "./globals.css";
import { Inter, Quicksand } from "next/font/google"; // 
import type React from "react";
import { Fira_Code } from "next/font/google"

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({weight: "300", display: "swap"})
const fira_code = Fira_Code({weight: "300"})

export const metadata = {
  title: "Octavio Duarte",
  description: "Un resumen de lo que soy y mis",
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

