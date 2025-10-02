import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { ComponentProps } from "lib/component-props";

export type HeaderProps = ComponentProps & {
  fields: {
    items: Array<{
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
    }>;
  };
};

export const Header = (props: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sxaStyles = `${props.params?.styles || ""}`;

  return (
    <header className={`bg-white shadow-sm border-b sticky top-0 z-50 ${sxaStyles}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center" aria-label="Home">
              <img
                src="https://www.neurocrine.com/media/images/neurocrine-logo_u5cN3KL.original.svg"
                alt="Neurocrine"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <Link href="/academics" className="text-gray-700 hover:text-emerald-600 font-medium">
                Academics
              </Link>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-emerald-600 font-medium flex items-center">
                Admissions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link
                    href="/admissions/undergraduate"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                  >
                    Undergraduate
                  </Link>
                  <Link
                    href="/admissions/graduate"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                  >
                    Graduate
                  </Link>
                  <Link
                    href="/admissions/international"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                  >
                    International Students
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/campus-life" className="text-gray-700 hover:text-emerald-600 font-medium">
              Campus Life
            </Link>
            <Link href="/research" className="text-gray-700 hover:text-emerald-600 font-medium">
              Research
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-emerald-600 font-medium">
              About
            </Link>
            <Button className="bg-emerald-600 hover:bg-emerald-700">Apply Now</Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
    {isMenuOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
          <Link href="/academics" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
            Academics
          </Link>
          <Link href="/admissions" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
            Admissions
          </Link>
          <Link href="/campus-life" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
            Campus Life
          </Link>
          <Link href="/research" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
            Research
          </Link>
          <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
            About
          </Link>
          <div className="px-3 py-2">
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Apply Now</Button>
          </div>
        </div>
      </div>
    )}
  </div>
</header>
);
};

export const Default = Header;
