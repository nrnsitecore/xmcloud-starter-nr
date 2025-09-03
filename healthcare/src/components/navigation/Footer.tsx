import React, { JSX } from 'react';
import Link from 'next/link';
import { Field } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react"

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
    <footer className={`bg-muted border-t border-border ${sxaStyles}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-bold text-foreground">HealthCare Plus</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Providing exceptional healthcare services with compassion, innovation, and excellence. Your health and
              well-being are our top priorities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-muted-foreground hover:text-primary transition-colors">
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="text-muted-foreground hover:text-primary transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/patient-portal" className="text-muted-foreground hover:text-primary transition-colors">
                  Patient Portal
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="text-muted-foreground hover:text-primary transition-colors">
                  Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@healthcareplus.com</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>
                  123 Healthcare Ave
                  <br />
                  Medical City, MC 12345
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Hours</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Office Hours</span>
              </div>
              <div className="ml-6 space-y-1">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
                <p className="text-destructive font-medium">Emergency: 24/7</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 HealthCare Plus. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-muted-foreground hover:text-primary transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Default = Footer;
