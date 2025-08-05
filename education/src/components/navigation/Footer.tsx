import React, { JSX } from 'react'
import Link from "next/link"
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { Field, Text } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';

export type FooterProps = ComponentProps & {
  fields: {
    data: {
     links: {
        Title: Field<string>,
        Subtitle: Field<string>,
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
    <footer className={`bg-gray-900 text-white ${sxaStyles}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold">Learnwell</span>
            </div>
            <p className="text-gray-300">
              Empowering minds, shaping futures, and building tomorrow's leaders through excellence in education and
              research.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-emerald-400 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-emerald-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-emerald-400 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-emerald-400 cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-emerald-400 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Academics</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/undergraduate" className="text-gray-300 hover:text-emerald-400">
                  Undergraduate
                </Link>
              </li>
              <li>
                <Link href="/graduate" className="text-gray-300 hover:text-emerald-400">
                  Graduate
                </Link>
              </li>
              <li>
                <Link href="/online-learning" className="text-gray-300 hover:text-emerald-400">
                  Online Learning
                </Link>
              </li>
              <li>
                <Link href="/continuing-education" className="text-gray-300 hover:text-emerald-400">
                  Continuing Education
                </Link>
              </li>
              <li>
                <Link href="/academic-calendar" className="text-gray-300 hover:text-emerald-400">
                  Academic Calendar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Campus Life</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/housing" className="text-gray-300 hover:text-emerald-400">
                  Housing & Dining
                </Link>
              </li>
              <li>
                <Link href="/student-activities" className="text-gray-300 hover:text-emerald-400">
                  Student Activities
                </Link>
              </li>
              <li>
                <Link href="/athletics" className="text-gray-300 hover:text-emerald-400">
                  Athletics
                </Link>
              </li>
              <li>
                <Link href="/health-services" className="text-gray-300 hover:text-emerald-400">
                  Health Services
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-gray-300 hover:text-emerald-400">
                  Campus Safety
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/admissions" className="text-gray-300 hover:text-emerald-400">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/financial-aid" className="text-gray-300 hover:text-emerald-400">
                  Financial Aid
                </Link>
              </li>
              <li>
                <Link href="/library" className="text-gray-300 hover:text-emerald-400">
                  Library
                </Link>
              </li>
              <li>
                <Link href="/career-services" className="text-gray-300 hover:text-emerald-400">
                  Career Services
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="text-gray-300 hover:text-emerald-400">
                  Alumni
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">© 2024 Pinnacle University. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-emerald-400 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-emerald-400 text-sm">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-emerald-400 text-sm">
                Accessibility
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-emerald-400 text-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Default = Footer;
