import React, { JSX } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ComponentProps } from 'lib/component-props'
import { Calendar, Stethoscope, FileText, Phone } from "lucide-react"
import Link from "next/link"

export type quickactionsProps = ComponentProps & {
}

const quickactions = (props: quickactionsProps): JSX.Element => {
    console.log(props);
  const actions = [
    {
      icon: Calendar,
      title: "Book Appointment",
      description: "Schedule your visit online",
      href: "/appointments",
      primary: true,
    },
    {
      icon: Stethoscope,
      title: "Find a Doctor",
      description: "Browse our specialists",
      href: "/doctors",
      primary: false,
    },
    {
      icon: FileText,
      title: "Patient Portal",
      description: "Access your records",
      href: "/patient-portal",
      primary: false,
    },
    {
      icon: Phone,
      title: "Contact Us",
      description: "Get in touch today",
      href: "/contact",
      primary: false,
    },
  ]

  return (
      <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">Quick Access to Care</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Everything you need for your healthcare journey, just a click away
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action) => {
            const Icon = action.icon
            return (
              <Card key={action.title} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div
                      className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                        action.primary ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                      } group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">{action.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{action.description}</p>
                  <Button variant={action.primary ? "default" : "outline"} className="w-full" asChild>
                    <Link href={action.href}>Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export const Default = quickactions;