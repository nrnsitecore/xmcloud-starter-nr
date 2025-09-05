import React, { JSX } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { ComponentProps } from 'lib/component-props'
import { Target, Eye, Heart } from "lucide-react"

export type quickactionsProps = ComponentProps & {
}

const Mission = (props: quickactionsProps): JSX.Element => {
    console.log(props);
  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Our Mission, Vision & Purpose
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Guided by our core principles, we strive to deliver healthcare excellence that makes a meaningful difference
            in the lives of those we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="text-center group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional, patient-centered healthcare services that promote healing, wellness, and quality
                of life for individuals and families in our community.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading healthcare provider in our region, recognized for clinical excellence, innovation, and
                compassionate care that sets the standard for others to follow.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Purpose</h3>
              <p className="text-muted-foreground leading-relaxed">
                To heal, comfort, and care for our patients with dignity and respect, while advancing medical knowledge
                and improving healthcare outcomes for future generations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export const Default = Mission;