import React, { JSX } from 'react'
import { Field, ImageField, Text, Image, RichText } from '@sitecore-content-sdk/nextjs'
import { ComponentProps } from 'lib/component-props'
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Users } from "lucide-react"
import Link from "next/link"

export type HeroSectionProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Description: Field<string>;
    Image: ImageField;
    CTA1: Field<string>;
    CTA2: Field<string>;
  }
}

const HeroSection = (props: HeroSectionProps): JSX.Element => {
    console.log(props);
  return (
    <section className="relative bg-gradient-to-br from-background to-accent/20 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                <Text field={props.fields.Title} />
              </h1>
              <div className="text-xl text-muted-foreground leading-relaxed text-pretty">
                <RichText field={props.fields.Description} />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/appointments">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/doctors">
                  <Users className="mr-2 h-5 w-5" />
                  Find a Doctor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Care</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Specialists</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15k+</div>
                <div className="text-sm text-muted-foreground">Patients Served</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-accent/30">
                <Image field={props.fields.Image} className="w-full h-full"/>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Easy Scheduling</div>
                  <div className="text-sm text-muted-foreground">Book online 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const Default = HeroSection;