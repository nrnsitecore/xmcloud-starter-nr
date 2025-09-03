import Link from 'next/link';
import React, { JSX } from 'react';
import { ComponentProps } from 'lib/component-props';
import {
     Phone, MapPin,
} from "lucide-react"
import { Button } from '../ui/button';

export type HeaderProps = ComponentProps & {
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

export const Header = (props: HeaderProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  return (
        <header className={`bg-background border-b border-border sticky top-0 z-50 ${sxaStyles}`}>
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Healthcare Ave, Medical City</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Emergency: Call 911</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-bold text-foreground">HealthCare Plus</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))} */}
            {props.fields?.items?.map((item, index) => (
                <Link key={index} href={item.fields?.Link?.value?.href ?? '#'} prefetch={false} className="text-foreground hover:text-primary transition-colors font-medium">
                  {item.displayName}
                </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/appointments">Book Appointment</Link>
            </Button>
            <Button asChild>
              <Link href="/patient-portal">Patient Portal</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            {/* <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button> */}
          </div>
        </div>

        {/* Mobile navigation */}
        {/* {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/appointments">Book Appointment</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/patient-portal">Patient Portal</Link>
                </Button>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </header>
  );
};

export const Default = Header;