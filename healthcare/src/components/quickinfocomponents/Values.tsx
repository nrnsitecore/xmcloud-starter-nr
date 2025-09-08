import React, { JSX } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { ComponentProps } from 'lib/component-props'
import { Shield, Users, Lightbulb, Award, Handshake, Globe } from "lucide-react"

export type MissionProps = ComponentProps & {
}

const Mission = (props: MissionProps): JSX.Element => {
    console.log(props);
  const Values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our interactions and decisions.",
    },
    {
      icon: Users,
      title: "Compassion",
      description: "We treat every patient with empathy, kindness, and genuine care.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new technologies and methods to improve patient outcomes.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest quality in everything we do.",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "We work together as a team to provide comprehensive care.",
    },
    {
      icon: Globe,
      title: "Community",
      description: "We are committed to serving and improving our local community.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Our Core Values</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            These fundamental principles guide our daily actions and shape the culture of care that defines HealthCare
            Plus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Values.map((value) => {
            const Icon = value.icon
            return (
              <Card key={value.title} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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

export const Default = Mission;