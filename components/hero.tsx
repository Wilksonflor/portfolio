"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

export default function Hero() {
  const { t } = useLanguage()
  const [typedText, setTypedText] = useState("")
  const fullText = t("heroTitle")
  const typingSpeed = 100

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, typingSpeed)

      return () => clearTimeout(timeout)
    }
  }, [typedText, fullText])

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Imagem de perfil */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-48 h-48 md:w-64 md:h-64 relative mb-6 md:mb-0 order-1 md:order-1"
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <Image
                  src="/profile-image.jpg"
                  alt="Wilkson Flor Soares"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-primary/40 animate-pulse"></div>
            </motion.div>

            {/* Conteúdo textual */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center md:text-left order-2 md:order-2 flex-1"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Wilkson Flor Soares</h1>
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 h-8">
                {typedText}
                <span className="animate-blink">|</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0">{t("heroDescription")}</p>

              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 mb-12">
                <Button asChild size="lg">
                  <a href="#contact">{t("contactMe")}</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#projects">{t("viewProjects")}</a>
                </Button>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com/wilksonflor"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://linkedin.com/in/wilksonflor"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:wilksonflor@gmail.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <Button variant="ghost" size="icon" asChild>
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  )
}

