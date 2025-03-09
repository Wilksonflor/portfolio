"use client"

import type React from "react"

import { LanguageProvider } from "@/components/language-provider"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>
}

