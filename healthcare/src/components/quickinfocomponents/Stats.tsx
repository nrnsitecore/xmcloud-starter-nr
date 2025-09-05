import React, { JSX } from 'react'
import { ComponentProps } from 'lib/component-props'

export type StatsProps = ComponentProps & {
}

const Stats = (props: StatsProps): JSX.Element => {
    console.log(props);
  const Stats = [
     {
      number: "15,000+",
      label: "Patients Served",
      description: "Trusted by thousands of families",
    },
    {
      number: "50+",
      label: "Medical Specialists",
      description: "Expert doctors across all fields",
    },
    {
      number: "24/7",
      label: "Emergency Care",
      description: "Always here when you need us",
    },
    {
      number: "98%",
      label: "Patient Satisfaction",
      description: "Consistently high ratings",
    },
  ]

  return (
        <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Trusted Healthcare Excellence</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto text-pretty">
            Our commitment to quality care is reflected in our outcomes and patient satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <div className="text-sm opacity-80">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Default = Stats;