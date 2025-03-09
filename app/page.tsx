"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ClientLayout from "@/components/client-layout"

export default function Home() {
  return (
    <ClientLayout>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <Services />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </ClientLayout>
  )
}

