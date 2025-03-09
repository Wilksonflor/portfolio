"use client"

import { motion } from "framer-motion"
import { Code, Laptop, Server } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

export default function About() {
  const { t } = useLanguage()

  const skills = [
    { name: "ReactJS", category: "frontend" },
    { name: "React Native", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "HTML5", category: "frontend" },
    { name: "CSS3", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Express", category: "backend" },
    { name: "MongoDB", category: "backend" },
    { name: "PostgreSQL", category: "backend" },
    { name: "Git", category: "tools" },
    { name: "GitHub", category: "tools" },
    { name: "Figma", category: "tools" },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t("aboutTitle")}</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("aboutDescription")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
            className="flex flex-col gap-6"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/profile-image.jpg"
                alt="Wilkson Flor Soares"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-xl font-bold">Wilkson Flor Soares</h3>
                <p className="text-white/80 text-sm">{t("heroTitle")}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-4">{t("myJourney")}</h3>
            <p className="text-muted-foreground mb-4">{t("journeyDescription")}</p>
            <p className="text-muted-foreground mb-4">{t("experience")}</p>
            <p className="text-muted-foreground">{t("fullStack")}</p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Laptop className="h-6 w-6 text-primary" />
              <CardTitle>{t("frontendTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{t("frontendDescription")}</CardDescription>
              <div className="flex flex-wrap gap-2 mt-4">
                {skills
                  .filter((skill) => skill.category === "frontend")
                  .map((skill) => (
                    <span key={skill.name} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill.name}
                    </span>
                  ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Server className="h-6 w-6 text-primary" />
              <CardTitle>{t("backendTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{t("backendDescription")}</CardDescription>
              <div className="flex flex-wrap gap-2 mt-4">
                {skills
                  .filter((skill) => skill.category === "backend")
                  .map((skill) => (
                    <span key={skill.name} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill.name}
                    </span>
                  ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Code className="h-6 w-6 text-primary" />
              <CardTitle>{t("toolsTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{t("toolsDescription")}</CardDescription>
              <div className="flex flex-wrap gap-2 mt-4">
                {skills
                  .filter((skill) => skill.category === "tools")
                  .map((skill) => (
                    <span key={skill.name} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill.name}
                    </span>
                  ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

