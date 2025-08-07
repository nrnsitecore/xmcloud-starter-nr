"use client"

import React, { JSX } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Package } from 'lucide-react'
import { ComponentProps } from 'lib/component-props';
import { withDatasourceCheck } from "@sitecore-content-sdk/nextjs"
import { useVisitor } from "@/context/VisitorContext"
import { VisitorType } from "@/lib/visitorCookie"

export type HeaderProps = ComponentProps & {
  fields: {
    items: [{
      displayName: string;
      fields: {
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
  const pathname = usePathname();
  const { visitorType, setType } = useVisitor();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as VisitorType;
    setType(selected); // updates state and cookie
    router.push(`/${selected}`);
  };

  return (
    <header className={`border-b bg-white sticky top-0 z-50 ${sxaStyles}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 text-sm border-b">
          <div className="flex items-center gap-4">
            <select onChange={handleChange} value={visitorType}>
              <option value="personal">Personal</option>
              <option value="small-business">Small Business</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            Language Selector here
            {/* <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-32 h-8">
                <div className="flex items-center gap-2">
                  <Globe className="h-3 w-3" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
              </SelectContent>
            </Select>
            <Link href="/login" className="text-blue-600 hover:underline">
              {t.nav.signIn}
            </Link> */}
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Package className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">National Post</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {props.fields.items.map((item) => (
              <Link
                key={item.displayName}
                href={item.fields.Link.value.href}
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors ${pathname === item.fields.Link.value.href ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : ''
                  }`}
              >
                {item.displayName}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                {props.fields.items.map((item) => (
                  <Link
                    key={item.displayName}
                    href={item.fields.Link.value.href}
                    className={`text-lg font-medium ${pathname === item.fields.Link.value.href ? 'text-blue-600' : 'text-gray-700'
                      }`}
                  >
                    {item.displayName}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export const Default = withDatasourceCheck()<HeaderProps>(Header);