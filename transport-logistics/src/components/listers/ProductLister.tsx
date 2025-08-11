"use client"

import Link from 'next/link';
import React, { JSX } from 'react';
import { ComponentProps } from 'lib/component-props';
import { useI18n } from 'next-localization';
import {
  Plane,
} from "lucide-react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Star, Filter, Search } from 'lucide-react'

export type ProductListerProps = ComponentProps & {
  fields: {
    items: [{
      displayName: string;
      fields:  {
        Link: {
          value: {
            anchor: string;
            href: string;
            linktype: string;
            target: string;
            text: string;
          };
        };
      };
    }];
  };
};

export const ProductLister = (props: ProductListerProps): JSX.Element => {
  const { t } = useI18n();
  const sxaStyles = `${props.params?.styles || ''}`;
  const [cart, setCart] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("featured")


  // const stamps = [
  //   {
  //     id: 1,
  //     name: t.shopping.stamps.items[0].name,
  //     price: "$1.07",
  //     image: "/placeholder.svg?height=200&width=200",
  //     description: t.shopping.stamps.items[0].desc,
  //     category: "commemorative"
  //   },
  //   {
  //     id: 2,
  //     name: t.shopping.stamps.items[1].name,
  //     price: "$1.30",
  //     image: "/placeholder.svg?height=200&width=200",
  //     description: t.shopping.stamps.items[1].desc,
  //     category: "wildlife"
  //   },
  //   {
  //     id: 3,
  //     name: t.shopping.stamps.items[2].name,
  //     price: "$2.71",
  //     image: "/placeholder.svg?height=200&width=200",
  //     description: t.shopping.stamps.items[2].desc,
  //     category: "holiday"
  //   }
  // ]

  // const coins = [
  //   {
  //     id: 4,
  //     name: t.shopping.coins.items[0].name,
  //     price: "$29.95",
  //     image: "/placeholder.svg?height=200&width=200",
  //     description: t.shopping.coins.items[0].desc,
  //     category: "commemorative"
  //   },
  //   {
  //     id: 5,
  //     name: t.shopping.coins.items[1].name,
  //     price: "$149.95",
  //     image: "/placeholder.svg?height=200&width=200",
  //     description: t.shopping.coins.items[1].desc,
  //     category: "precious-metal"
  //   },
  //   {
  //     id: 6,
  //     name: t.shopping.coins.items[2].name,
  //     price: "$39.95",
  //     image: "/placeholder.svg?height=200&width=200",
  //     description: t.shopping.coins.items[2].desc,
  //     category: "sets"
  //   }
  // ]




  return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            {/* <h1 className="text-4xl font-bold mb-2">{t.shopping.title}</h1>
            <p className="text-xl text-gray-600">{t.shopping.subtitle}</p> */}
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
            {/* <TabsTrigger value="stamps">{t.shopping.tabs.stamps}</TabsTrigger>
            <TabsTrigger value="coins">{t.shopping.tabs.coins}</TabsTrigger>
            <TabsTrigger value="supplies">{t.shopping.tabs.supplies}</TabsTrigger> */}
          </TabsList>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  // placeholder={t.shopping.search}
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
                {/* <SelectItem value="featured">{t.shopping.sort.featured}</SelectItem>
                <SelectItem value="price-low">{t.shopping.sort.priceLow}</SelectItem>
                <SelectItem value="price-high">{t.shopping.sort.priceHigh}</SelectItem>
                <SelectItem value="newest">{t.shopping.sort.newest}</SelectItem> */}
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              {/* {t.shopping.filters} */}
            </Button>
          </div>

          <TabsContent value="stamps">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* {stamps.map((stamp) => (
                <Card key={stamp.id} className="overflow-hidden">
                  <Link href={`/shopping/stamps/${stamp.id}`}>
                    <div className="aspect-square bg-gray-100">
                      <img
                        src={stamp.image || "/placeholder.svg"}
                        alt={stamp.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">
                        <Link href={`/shopping/stamps/${stamp.id}`} className="hover:text-blue-600">
                          {stamp.name}
                        </Link>
                      </CardTitle>
                      <div className="text-xl font-bold text-blue-600">{stamp.price}</div>
                    </div>
                    <CardDescription>{stamp.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{stamp.category}</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">4.8</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full mt-4"
                      onClick={() => addToCart(stamp)}
                    >
                      {t.shopping.addToCart}
                    </Button>
                  </CardContent>
                </Card>
              ))} */}
            </div>
          </TabsContent>

          <TabsContent value="coins">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* {coins.map((coin) => (
                <Card key={coin.id} className="overflow-hidden">
                  <div className="aspect-square bg-gray-100">
                    <img
                      src={coin.image || "/placeholder.svg"}
                      alt={coin.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{coin.name}</CardTitle>
                      <div className="text-xl font-bold text-blue-600">{coin.price}</div>
                    </div>
                    <CardDescription>{coin.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{coin.category}</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">4.9</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full mt-4"
                      onClick={() => addToCart(coin)}
                    >
                      {t.shopping.addToCart}
                    </Button>
                  </CardContent>
                </Card>
              ))} */}
            </div>
          </TabsContent>

          <TabsContent value="supplies">
            <div className="text-center py-12">
              {/* <h3 className="text-2xl font-semibold mb-4">{t.shopping.supplies.title}</h3>
              <p className="text-gray-600 mb-6">{t.shopping.supplies.desc}</p>
              <Button>{t.shopping.supplies.browse}</Button> */}
            </div>
          </TabsContent>
        </Tabs>
      </div>
  )
}


export const Default = ProductLister;