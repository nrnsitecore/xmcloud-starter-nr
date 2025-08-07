import React, { JSX } from 'react'
import { Users, BookOpen, Award, Globe } from "lucide-react"
import { withDatasourceCheck, Field } from '@sitecore-content-sdk/nextjs'
import { ComponentProps } from 'lib/component-props';

export type StatsProps = ComponentProps & {
  fields: {
    Icon: Field<string>;
    Number: Field<string>;
    Label: Field<string>;
    Description: Field<string>;
  }
}

const Stats = (props: StatsProps): JSX.Element => {
    const sxaStyles = `${props.params?.styles || ''}`;
  
  const stats = [
    {
      icon: Users,
      number: "25,000+",
      label: "Students Enrolled",
      description: "From all 50 states and 80+ countries",
    },
    {
      icon: BookOpen,
      number: "200+",
      label: "Academic Programs",
      description: "Undergraduate and graduate degrees",
    },
    {
      icon: Award,
      number: "#15",
      label: "National Ranking",
      description: "Among public universities",
    },
    {
      icon: Globe,
      number: "500K+",
      label: "Alumni Network",
      description: "Graduates making impact worldwide",
    },
  ]

  return (
    <section className={`py-16 bg-white ${sxaStyles}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Default = withDatasourceCheck()<StatsProps>(Stats);
