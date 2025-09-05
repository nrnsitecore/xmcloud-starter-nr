import React, { JSX } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { ComponentProps } from 'lib/component-props'
import { Star } from "lucide-react"

export type TestimonialsProps = ComponentProps & {
}

const Testimonials = (props: TestimonialsProps): JSX.Element => {
    console.log(props);
  const Testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      content:
        "The care I received was exceptional. The staff was professional, caring, and made me feel comfortable throughout my treatment.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Patient",
      content:
        "Dr. Smith and the entire team provided outstanding service. The facility is modern and the appointment scheduling was seamless.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Patient",
      content:
        "I have been a patient here for years and consistently receive top-quality care. Highly recommend to anyone seeking excellent healthcare.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">What Our Patients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real experiences from real patients who trust us with their healthcare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  &quot;{testimonial.content}&quot;
                </blockquote>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Default = Testimonials;