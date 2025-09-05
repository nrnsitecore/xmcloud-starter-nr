"use client"
import React, { JSX } from 'react'
import { Field, Text, withDatasourceCheck, RichText, ImageField, Image, DateField } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { newsDateFormatter } from '../../helpers/DateHelper';

export type FeaturedNewsProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    FeaturedNews: [{
      fields: {
        Title: Field<string>;
        Excerpt: Field<string>;
        Image: ImageField;
        Category: Field<string>;
        PublishDate: Field<string>;
      }
      url: string;
    }]
  }
}

const getCategoryBadgeColor = (category: string) => {
  const colors: Record<string, string> = {
    "service-updates": "bg-blue-100 text-blue-800",
    sustainability: "bg-green-100 text-green-800",
    technology: "bg-purple-100 text-purple-800",
    partnerships: "bg-orange-100 text-orange-800",
    awards: "bg-yellow-100 text-yellow-800",
  }
  return colors[category] || "bg-gray-100 text-gray-800"
}

const FeaturedNews = (props: FeaturedNewsProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  return (
    <section className={`container mx-auto px-4 py-8 mb-16 ${sxaStyles}`}>
      <h2 className="text-2xl font-bold mb-6"><Text field={props.fields.Title} /></h2>
      <div className="grid lg:grid-cols-2 gap-8">
        {props.fields.FeaturedNews.map((news, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gray-100">
              <Image
                field={news.fields.Image}
                className="w-full h-full"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge className={getCategoryBadgeColor(news.fields.Category.value)}>
                  <Text field={news.fields.Category} />
                </Badge>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <DateField
                    field={news.fields.PublishDate}
                    render={newsDateFormatter}
                  />
                </div>
              </div>
              <CardTitle className="text-xl">
                <Link href={news.url} className="hover:text-blue-600">
                  <Text field={news.fields.Title} /> 
                </Link>
              </CardTitle>
              <CardDescription className="text-base"><RichText field={news.fields.Excerpt} /></CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" asChild>
                <Link href={news.url}>
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export const Default = withDatasourceCheck()<FeaturedNewsProps>(FeaturedNews);
