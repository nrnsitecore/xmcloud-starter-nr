import React, { JSX } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ComponentProps } from 'lib/component-props'
import { ArrowRight } from 'lucide-react'
import { LinkField, Link, Field, ImageField, Text, Image, RichText, withDatasourceCheck } from '@sitecore-content-sdk/nextjs'

export type ourteamProps = ComponentProps & {
    fields: {
        Title: Field<string>;
        Subtitle: Field<string>;
        Doctors: [
            {
                fields: {
                    Name: Field<string>;
                    Title: Field<string>;
                    Image: ImageField;
                    Content: Field<string>;
                }
            }
        ];
        Link: LinkField;
      }
}

const OurTeam = (props: ourteamProps): JSX.Element => {

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance"><Text field={props.fields.Title} /></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            <Text field={props.fields.Subtitle} />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {props.fields.Doctors.map((doctor, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto w-32 h-32">
                  <Image field={doctor.fields.Image} className="w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-1"><Text field={doctor.fields.Name} /></h3>
                <p className="text-primary font-medium mb-3"><Text field={doctor.fields.Title} /></p>
                <div className="text-muted-foreground text-sm leading-relaxed"><RichText field={doctor.fields.Content} /></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="text-lg px-8">
            <Link field={props.fields.Link} >
            </Link>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export const Default = withDatasourceCheck()<ourteamProps>(OurTeam);