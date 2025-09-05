"use client"
import React, { JSX } from 'react'
import { Field, Text, withDatasourceCheck } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export type FeaturedNewsProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Subtitle: Field<string>;
  }
}

const categories = [
  { value: "all", label: "All" },
  { value: "service-updates", label: "Service Updates" },
  { value: "sustainability", label: "Sustainability" },
  { value: "technology", label: "Technology" },
  { value: "partnerships", label: "Partnerships" },
  { value: "awards", label: "Awards" },
]

const FeaturedNews = (props: FeaturedNewsProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  return (
    <>
      <section className={`bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 ${sxaStyles}`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"><Text field={props.fields.Title} /></h1>
          <p className="text-xl text-blue-100 mb-8">
            <Text field={props.fields.Subtitle} />
          </p>

          {/* Search Bar */}
          {/* TODO: Implement Sitecore Search */}
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 bg-white text-gray-900"
                />
              </div>
            </div>

            <Select defaultValue="all">
              <SelectTrigger className="w-48 bg-white text-gray-900">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select defaultValue='newest'>
              <SelectTrigger className="w-48 bg-white text-gray-900">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="title">Title</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
    </>
  )
}

export const Default = withDatasourceCheck()<FeaturedNewsProps>(FeaturedNews);
