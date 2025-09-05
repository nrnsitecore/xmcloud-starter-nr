import React, { JSX } from 'react'
import { ComponentProps } from 'lib/component-props'
import { Field, ImageField } from '@sitecore-content-sdk/nextjs'

export type GEOProductProps = ComponentProps & {
  fields: {
    metaTitle: Field<string>;
    metaDescription: Field<string>;
    Image: ImageField;
    Brand: Field<string>;
    Price: Field<string>;
    SKU: Field<string>;
  }
}

const GEOProduct = (props: GEOProductProps): JSX.Element => {
  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": props.fields.metaTitle.value,
    "image": props.fields.Image.value?.src,
    "description": props.fields.metaDescription.value,
    "brand": {
      "@type": "Organization",
      "name": props.fields.Brand.value
    },
    "sku": props.fields.SKU.value,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": props.fields.Price.value,
      "availability": "https://schema.org/InStock"
    }
  };

  // logging for demo purposes if needed to show
  console.log(JSON.stringify(productJsonLd));
  return (
    <>
      <script
        key="product-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
    </>
  )
}

export const Default = GEOProduct;