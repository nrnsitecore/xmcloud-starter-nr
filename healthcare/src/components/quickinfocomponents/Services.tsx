import React, { JSX } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { ComponentProps } from 'lib/component-props'
import { Heart, Brain, Bone, Eye, Baby, Shield } from "lucide-react"

export type ServicesProps = ComponentProps & {
}

const Services = (props: ServicesProps): JSX.Element => {
    console.log(props);
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive heart and cardiovascular care with advanced diagnostic tools.",
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Expert treatment for neurological conditions and brain health.",
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Specialized care for bones, joints, and musculoskeletal system.",
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Complete eye care services from routine exams to surgery.",
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Dedicated healthcare for infants, children, and adolescents.",
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Comprehensive wellness programs and preventive health services.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            From routine check-ups to specialized treatments, our expert medical team provides personalized care across
            all major healthcare disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export const Default = Services;