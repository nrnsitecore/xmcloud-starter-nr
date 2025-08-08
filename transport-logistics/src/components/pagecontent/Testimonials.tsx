import React, { JSX } from 'react'
import { ComponentProps } from 'lib/component-props';
import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'

export type TestimonialsProps = ComponentProps & {
}

const testimonials = {
  title: "What Our Customers Say",
  items: [
    {
      text: "Excellent service and fast delivery. I use PostalCorp for all my business shipping needs.",
      author: "Sarah Johnson",
      role: "Small Business Owner"
    },
    {
      text: "The tracking system is fantastic. I always know exactly where my packages are.",
      author: "Mike Chen",
      role: "Online Seller"
    },
    {
      text: "Great rates and reliable service. Highly recommended for international shipping.",
      author: "Emma Wilson",
      role: "Import/Export Manager"
    }
  ]
}

const Testimonials = (props: TestimonialsProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  return (
    <section className={`py-16 bg-gray-50 ${sxaStyles}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{testimonials.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.items.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Default = Testimonials;
