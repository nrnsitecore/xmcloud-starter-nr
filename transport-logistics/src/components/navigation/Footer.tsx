import React, { JSX } from 'react'
import Link from "next/link"
import { Package } from "lucide-react"
import { Field, Text } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';

export type FooterProps = ComponentProps & {
  fields: {
    data: {
      links: {
        Title: {
          jsonValue: {
            value: string;
          }
        },
        Subtitle: {
          jsonValue: {
            value: string;
          }
        },
        ContactHeader: Field<string>,
        Email: Field<string>,
        PhoneNumber: Field<string>,
        Additional: Field<string>,
        children: {
          results: [
            {
              displayName: string;
              Title: Field<string>;
              children: {
                results: [
                  {
                    displayName: string;
                    Link: {
                      jsonValue: {
                        value: {
                          anchor: string;
                          href: string;
                          linktype: string;
                          target: string;
                          text: string;
                          url: string;
                        };
                      };
                    };
                  }
                ];
              };
            }
          ];
        };
      };
    };
  };
};

const Footer = (props: FooterProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  return (
    <footer className={`bg-gray-900 text-white py-12 mt-16 ${sxaStyles}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Package className="h-6 w-6" />
              <span className="text-xl font-bold"><Text field={props.fields.data.links.Title.jsonValue} /></span>
            </div>
            <p className="text-gray-400"><Text field={props.fields.data.links.Subtitle.jsonValue} /></p>
          </div>

          {props.fields?.data.links.children.results.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4"><Text field={section.Title} /></h3>
              <ul className="space-y-2 text-gray-400">
                {section.children.results.map((link, i) => (
                  <li key={i}>
                    <Link href={link.Link.jsonValue.value.href} className="hover:text-white transition-colors">
                      {link.displayName}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 National Post. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export const Default = Footer;
