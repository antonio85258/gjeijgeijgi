import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
export const metadata: Metadata={title:"Мой первый Next.js проект",description:"Практическая работа №1.2 по Next.js"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body><header className="site-header"><nav className="nav"><Link className="brand" href="/">Next.js Практика</Link><Link href="/">Главная</Link><Link href="/about">О проекте</Link><Link href="/blog/nextjs-vvedenie">Блог</Link></nav></header>{children}</body></html>}
