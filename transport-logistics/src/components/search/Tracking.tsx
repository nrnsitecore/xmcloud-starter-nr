import React, { JSX } from 'react'
import { Search } from "lucide-react"
import { Field, Text, withDatasourceCheck } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export type TrackingProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Subtitle: Field<string>;
  }
}

const Tracking = (props: TrackingProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  return (
  <section className={`bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 ${sxaStyles}`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <Text field={props.fields.Title} />
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            <Text field={props.fields.Subtitle} />
          </p>
          
          <div className="max-w-md mx-auto bg-white rounded-lg p-4 shadow-lg">
            <div className="flex gap-2">
              <Input
                placeholder="Search"
                className="text-gray-900"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
  )}

  export const Default = withDatasourceCheck()<TrackingProps>(Tracking);
