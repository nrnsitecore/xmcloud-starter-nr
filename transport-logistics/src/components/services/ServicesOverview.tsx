import React, { JSX } from 'react'
import { Field, Text, withDatasourceCheck, RichText } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Link from 'next/link';

export type ServicesOverviewProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    SelectedServices: [{
      fields: {
        Title: Field<string>;
        Subtitle: Field<string>;
        Content: Field<string>;
      },
      url: string;
    }]
  }
}

const ServicesOverview = (props: ServicesOverviewProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  return (
    <section className={`py-16 ${sxaStyles}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12"><Text field={props.fields.Title} /></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {props.fields.SelectedServices.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle><Text field={service.fields.Title} /></CardTitle>
                <CardDescription><RichText field={service.fields.Subtitle} /></CardDescription>
              </CardHeader>
              <CardContent>
                <RichText field={service.fields.Content} />
                <Link className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 w-full mt-4" href={service.url}>Read More</Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Default = withDatasourceCheck()<ServicesOverviewProps>(ServicesOverview);
