import React, { JSX } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { ComponentProps } from 'lib/component-props';
import { withDatasourceCheck, Text, RichTextField, Field, RichText, Image, ImageField, LinkField, Link } from '@sitecore-content-sdk/nextjs';

export type HeroBannerProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Text: RichTextField;
    CTA1: LinkField;
    CTA2: LinkField;
    Image: ImageField;
  }
}

const HeroBanner = (props: HeroBannerProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  return (
    <section className={`relative bg-gradient-to-br from-emerald-50 to-teal-50 py-20 lg:py-32 ${sxaStyles}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <Text field={props.fields.Title} />
              </h1>
              <div className="text-xl text-gray-600 leading-relaxed">
                <RichText field={props.fields.Text} />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
                Start Your Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
                <Play className="mr-2 h-5 w-5" />
                Take a Virtual Tour
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div>
                <div className="font-semibold text-2xl text-gray-900">25,000+</div>
                <div>Students</div>
              </div>
              <div>
                <div className="font-semibold text-2xl text-gray-900">200+</div>
                <div>Programs</div>
              </div>
              <div>
                <div className="font-semibold text-2xl text-gray-900">95%</div>
                <div>Employment Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              field={props.fields.Image}
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export const Default = withDatasourceCheck()<HeroBannerProps>(HeroBanner);
