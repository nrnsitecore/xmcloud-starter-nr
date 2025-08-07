"use client"

import React, { JSX } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Package, User, Building, Briefcase, Globe } from 'lucide-react'
import { ComponentProps } from 'lib/component-props';
import { withDatasourceCheck } from "@sitecore-content-sdk/nextjs"
import { useLanguage } from "../../contexts/language-context"
import { useUserType } from "../../contexts/user-type-context"

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

const { language, setLanguage, t } = useLanguage()
const { userType, setUserType } = useUserType()
const pathname = usePathname()

const userTypes = [
  { value: "personal", label: t.userTypes.personal, icon: User },
  { value: "small-business", label: t.userTypes.smallBusiness, icon: Building },
  { value: "commercial", label: t.userTypes.commercial, icon: Briefcase }
]

const getCurrentUserType = () => {
  return userTypes.find(type => type.value === userType)
}

const getNavigation = () => {
  switch (userType) {
    case "small-business":
      return [
        { name: t.nav.home, href: "/" },
        { name: t.nav.shipping, href: "/shipping" },
        { name: t.nav.returns, href: "/returns" },
        { name: t.nav.sellOnline, href: "/sell-online" },
        { name: t.nav.marketing, href: "/marketing" },
        { name: t.nav.postalServices, href: "/postal-services" }
      ]
    case "commercial":
      return [
        { name: t.nav.home, href: "/" },
        { name: t.nav.shipping, href: "/shipping" },
        { name: t.nav.returns, href: "/returns" },
        { name: t.nav.marketing, href: "/marketing" },
        { name: t.nav.ecommerce, href: "/ecommerce" },
        { name: t.nav.identityServices, href: "/identity-services" },
        { name: t.nav.postalServices, href: "/postal-services" }
      ]
    default: // personal
      return [
        { name: t.nav.home, href: "/" },
        { name: t.nav.shipping, href: "/shipping" },
        { name: t.nav.returns, href: "/returns" },
        { name: t.nav.services, href: "/services" },
        { name: t.nav.shopping, href: "/shopping" }
      ]
  }
}

const navigation = getNavigation()

export const Header = (props: HeaderProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;


  return (
    <header className={`border-b bg-white sticky top-0 z-50 ${sxaStyles}`}>
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b">
          <div className="flex items-center gap-4">
            <Select value={userType} onValueChange={setUserType}>
              <SelectTrigger className="w-48 h-8">
                <div className="flex items-center gap-2">
                  {(() => {
                    const currentType = getCurrentUserType()
                    const IconComponent = currentType?.icon
                    return IconComponent ? <IconComponent className="h-3 w-3" /> : null
                  })()}
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent>
                {userTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    <div className="flex items-center gap-2">
                      <type.icon className="h-3 w-3" />
                      {type.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-4">
            <Select value={language} onValueChange={setLanguage}>
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
            </Link>
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
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors ${pathname === item.href ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : ''
                  }`}
              >
                {item.name}
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
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-lg font-medium ${pathname === item.href ? 'text-blue-600' : 'text-gray-700'
                      }`}
                  >
                    {item.name}
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