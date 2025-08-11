"use client"

import Link from 'next/link';
import React, { JSX, useState } from 'react';
import { ComponentProps } from 'lib/component-props';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Star, Filter, Search } from 'lucide-react'
import { Field, Text, RichText, ImageField, Image } from '@sitecore-content-sdk/nextjs';

export type ProductListerProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Subtitle: Field<string>;
    SelectedStamps: [{
      displayName: string;
      url: string
      fields: {
        Title: Field<string>;
        Content: Field<string>;
        Image: ImageField;
        Type: {
          displayName: string;
        };
        Rating: Field<string>;
        Price: Field<string>;
      };
    }];
    SelectedCoins: [{
      displayName: string;
      url: string
      fields: {
        Title: Field<string>;
        Content: Field<string>;
        Image: ImageField;
        Type: {
          displayName: string;
        };
        Rating: Field<string>;
        Price: Field<string>;
      };
    }];
  };
};

export const ProductLister = (props: ProductListerProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;
  const [cart, setCart] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("featured")

  return (
    <div className={`container mx-auto px-4 py-8 ${sxaStyles}`}>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2"><Text field={props.fields.Title} /></h1>
          <p className="text-xl text-gray-600"><RichText field={props.fields.Subtitle} /></p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="relative">
            <ShoppingCart className="h-4 w-4 mr-2" />
            {/* {t.shopping.cart} */}
            {cart.length > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                {cart.length}
              </Badge>
            )}
          </Button>
        </div>
      </div>

      <Tabs defaultValue="stamps" className="space-y-6">
        <TabsList>
          <TabsTrigger value="stamps">Stamps</TabsTrigger>
          <TabsTrigger value="coins">Coins</TabsTrigger>
        </TabsList>

        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex-1 min-w-64">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        <TabsContent value="stamps">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {props.fields.SelectedStamps.map((stamp, index) => (
              <Card key={index} className="overflow-hidden">
                <Link href={stamp.url}>
                  <div className="aspect-square bg-gray-100">
                    <Image field={stamp.fields.Image} className="w-full h-full object-cover" />
                  </div>
                </Link>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">
                      <Link href={stamp.url} className="hover:text-blue-600">
                        {stamp.displayName}
                      </Link>
                    </CardTitle>
                    <div className="text-xl font-bold text-blue-600">{stamp.fields.Price.value}</div>
                  </div>
                  <CardDescription><RichText field={stamp.fields.Content} /></CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{stamp.fields.Type.displayName}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{stamp.fields.Rating.value}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="coins">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {props.fields.SelectedCoins.map((coin, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square bg-gray-100">
                  <Image field={coin.fields.Image} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg"><Text field={coin.fields.Title} /></CardTitle>
                    <div className="text-xl font-bold text-blue-600">{coin.fields.Price.value}</div>
                  </div>
                  <CardDescription><RichText field={coin.fields.Content} /></CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{coin.fields.Type.displayName}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{coin.fields.Rating.value}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


export const Default = ProductLister;