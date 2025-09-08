import React, { JSX } from 'react'
import { ComponentProps } from 'lib/component-props'

export type docfinderheroProps = ComponentProps & {
}

const DocFinderHero = (props: docfinderheroProps): JSX.Element => {
    console.log(props);
  return (
    <section className="bg-gradient-to-br from-primary/5 to-accent/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Find Your Perfect Doctor</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          Search through our network of experienced healthcare professionals to find the right specialist for your
          needs.
        </p>
      </div>
    </section>
  )
}

export const Default = DocFinderHero;