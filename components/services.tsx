"use client"

import { motion } from "framer-motion"
import { Code, Layout, Smartphone, Database, Figma, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: <Layout className="h-10 w-10 text-primary" />,
      title: t("webDevelopment"),
      description: t("webDevelopmentDesc"),
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: t("mobileDevelopment"),
      description: t("mobileDevelopmentDesc"),
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: t("frontendDevelopment"),
      description: t("frontendDevelopmentDesc"),
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: t("backendDevelopment"),
      description: t("backendDevelopmentDesc"),
    },
    {
      icon: <Figma className="h-10 w-10 text-primary" />,
      title: t("uiuxPrototyping"),
      description: t("uiuxPrototypingDesc"),
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: t("technicalConsulting"),
      description: t("technicalConsultingDesc"),
    },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t("services")}</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("servicesDescription")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

