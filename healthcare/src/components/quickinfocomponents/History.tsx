import React, { JSX } from 'react'
import { ComponentProps } from 'lib/component-props'

export type HistoryProps = ComponentProps & {
}

const History = (props: HistoryProps): JSX.Element => {
    console.log(props);
  const milestones = [
    {
      year: "1985",
      title: "Foundation",
      description:
        "HealthCare Plus was established with a vision to provide exceptional medical care to our community.",
    },
    {
      year: "1992",
      title: "Expansion",
      description: "Opened our first specialty clinic, expanding services to include cardiology and orthopedics.",
    },
    {
      year: "2001",
      title: "Technology Integration",
      description: "Implemented electronic health records and advanced diagnostic equipment.",
    },
    {
      year: "2010",
      title: "New Facility",
      description: "Moved to our current state-of-the-art facility with expanded capacity and services.",
    },
    {
      year: "2018",
      title: "Digital Innovation",
      description: "Launched telemedicine services and patient portal for enhanced accessibility.",
    },
    {
      year: "2024",
      title: "Continued Growth",
      description: "Now serving over 15,000 patients with 50+ specialists across multiple disciplines.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Our Journey Through the Years
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Nearly four decades of growth, innovation, and unwavering commitment to healthcare excellence.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:transform md:-translate-x-1/2 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                    <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export const Default = History;