"use client"

import React, { JSX, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"
import { ComponentProps } from 'lib/component-props';
import { withDatasourceCheck } from "@sitecore-content-sdk/nextjs"

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const sxaStyles = `${props.params?.styles || ''}`;

  return (
    <header className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${sxaStyles}`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Gridwell</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/articles"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Articles
            </Link>
            <Link
              href="/grid-status"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Grid Status
            </Link>
            <Link
              href="/alerts"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Alerts
            </Link>
          </nav>

          {/* Search Box */}
          <div className="relative flex-1 max-w-md mx-4">
            <div className="relative">
              {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search grid information..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearchSubmit(searchQuery)
                  }
                }}
                className="pl-10 pr-4"
              /> */}
              SEARCHBOX HERE
            </div>

            {/* Search Suggestions */}
            {/* {showSuggestions && filteredSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-card border rounded-md shadow-lg z-50">
                {filteredSuggestions.slice(0, 5).map((suggestion, index) => (
                  <button
                    key={index}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors"
                    onClick={() => handleSearchSubmit(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )} */}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/articles"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Articles
              </Link>
              <Link
                href="/grid-status"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Grid Status
              </Link>
              <Link
                href="/alerts"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Alerts
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export const Default = withDatasourceCheck()<HeaderProps>(Header);