"use client"

import React, { JSX } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react'
import { ComponentProps } from 'lib/component-props'
import { Field, ImageField, Image, Text } from '@sitecore-content-sdk/nextjs'
import { RichText } from "@sitecore-content-sdk/react"

export type ProductDetailProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Content: Field<string>;
    Image: ImageField;
    Type: Field<string>;
    Price: Field<string>;
    SKU: Field<string>;
    Rating: Field<string>;
  }
}

const ProductDetail = (props: ProductDetailProps): JSX.Element => {
  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Product Images */}
      <div className="space-y-4">
        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <Image field={props.fields.Image} />
        </div>
        {/* <div className="flex gap-2">
          {stamp.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${selectedImage === index ? 'border-blue-600' : 'border-gray-200'
                }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${stamp.name} view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div> */}
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <div>
          <Badge variant="secondary" className="mb-2">{props.fields.Type.value}</Badge>
          <h1 className="text-3xl font-bold mb-2"><Text field={props.fields.Title} /></h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(Number(props.fields.Rating.value))
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                    }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {props.fields.Rating.value} (124 reviews)
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-3xl font-bold text-blue-600"><Text field={props.fields.Price} /></div>
          {/* {stamp.originalPrice && (
            <div className="text-xl text-gray-500 line-through">{stamp.originalPrice}</div>
          )} */}
          <Badge variant="destructive">15% OFF</Badge>
        </div>

        <div className="text-gray-600 leading-relaxed"><RichText field={props.fields.Content} /></div>

        {/* Quantity and Add to Cart */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <label className="font-medium">Quantity:</label>
            <div className="flex items-center border rounded-lg">
              <button
                // onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 hover:bg-gray-100"
              >
                -
              </button>
              {/* <span className="px-4 py-2 border-x">{quantity}</span> */}
              <button
                // onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-3">
            <Button className="flex-1">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Shipping Info */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Truck className="h-4 w-4 text-green-600" />
            <span>Free shipping on orders over $25</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Shield className="h-4 w-4 text-blue-600" />
            <span>Secure packaging and handling</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <RotateCcw className="h-4 w-4 text-orange-600" />
            <span>30-day return policy</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Default = ProductDetail;