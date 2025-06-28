
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  useMousePosition,
} from "@/components/ui/navigation-menu";
import { Search } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const { mousePosition, handleMouseEnter } = useMousePosition();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fffbea] border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-auto flex items-center justify-center">
              <img src="https://merops.oncorithms.institute/simbolo.png" alt="MEROPS Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-merops-gray hidden md:block font-brand">MEROPS</h1>
              <p className="text-sm font-bold text-merops-gray-light -mt-1">Peptidase Database</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Peptidase Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger  onMouseEnter={handleMouseEnter} className="text-merops-gray bg-[#fffbea] hover:bg-[#fffbea] hover:text-merops-green">
                    Peptidase
                  </NavigationMenuTrigger>
                  <NavigationMenuContent mousePosition={mousePosition}>
                    <div className="w-80 p-6 bg-white">
                      <div className="grid gap-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/peptidase/name-index"
                            className="block p-3 rounded-lg hover:bg-merops-green-50 transition-colors"
                          >
                            <div className="font-medium text-merops-gray">Name Index</div>
                            <div className="text-sm text-merops-gray-light">Browse peptidases by name</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/peptidase/id-index"
                            className="block p-3 rounded-lg hover:bg-merops-green-50 transition-colors"
                          >
                            <div className="font-medium text-merops-gray">ID Index</div>
                            <div className="text-sm text-merops-gray-light">Browse peptidases by identifier</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/peptidase/gene-index"
                            className="block p-3 rounded-lg hover:bg-merops-green-50 transition-colors"
                          >
                            <div className="font-medium text-merops-gray">Gene Index</div>
                            <div className="text-sm text-merops-gray-light">Browse peptidases by gene</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/peptidase/organism-index"
                            className="block p-3 rounded-lg hover:bg-merops-green-50 transition-colors"
                          >
                            <div className="font-medium text-merops-gray">Organism Index</div>
                            <div className="text-sm text-merops-gray-light">Browse peptidases by organism</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/peptidase/substrate-menu"
                            className="block p-3 rounded-lg hover:bg-merops-green-50 transition-colors"
                          >
                            <div className="font-medium text-merops-gray">Substrate Menu</div>
                            <div className="text-sm text-merops-gray-light">Browse substrates and inhibitors</div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Family & Clan */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger onMouseEnter={handleMouseEnter} className="text-merops-gray bg-[#fffbea] hover:text-merops-green">
                    Classification
                  </NavigationMenuTrigger>
                  <NavigationMenuContent mousePosition={mousePosition}>
                    <div className="w-64 p-6 bg-white">
                      <div className="grid gap-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/family-index"
                            className="block p-3 rounded-lg hover:bg-merops-green-50 transition-colors"
                          >
                            <div className="font-medium text-merops-gray">Family Index</div>
                            <div className="text-sm text-merops-gray-light">Browse peptidase families</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/clan-index"
                            className="block p-3 rounded-lg hover:bg-merops-green-50 transition-colors"
                          >
                            <div className="font-medium text-merops-gray">Clan Index</div>
                            <div className="text-sm text-merops-gray-light">Browse peptidase clans</div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Tools */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger onMouseEnter={handleMouseEnter} className="bg-[#fffbea] text-merops-gray hover:text-merops-green">
                    Tools
                  </NavigationMenuTrigger>
                  <NavigationMenuContent mousePosition={mousePosition}>
                    <div className="w-64 p-6 bg-white">
                      <div className="grid gap-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/search"
                            className="block p-3 rounded-lg hover:bg-merops-green-50 transition-colors"
                          >
                            <div className="font-medium text-merops-gray">Search</div>
                            <div className="text-sm text-merops-gray-light">Search the database</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/blast-merops"
                            className="block p-3 rounded-lg hover:bg-merops-green-50 transition-colors"
                          >
                            <div className="font-medium text-merops-gray">BLAST MEROPS</div>
                            <div className="text-sm text-merops-gray-light">BLAST against MEROPS sequences</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/submissions"
                            className="block p-3 rounded-lg hover:bg-merops-green-50 transition-colors"
                          >
                            <div className="font-medium text-merops-gray">Submissions</div>
                            <div className="text-sm text-merops-gray-light">Submit data to MEROPS</div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Information */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger onMouseEnter={handleMouseEnter} className="text-merops-gray bg-[#fffbea] hover:text-merops-green">
                    Information
                  </NavigationMenuTrigger>
                  <NavigationMenuContent mousePosition={mousePosition}>
                    <div className="w-80 p-6 bg-white">
                      <div className="grid gap-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/info/about"
                            className="block p-3 rounded-lg hover:bg-merops-green-50 transition-colors"
                          >
                            <div className="font-medium text-merops-gray">About</div>
                            <div className="text-sm text-merops-gray-light">About MEROPS database</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/info/whats-new"
                            className="block p-3 rounded-lg hover:bg-merops-green-50 transition-colors"
                          >
                            <div className="font-medium text-merops-gray">What's New</div>
                            <div className="text-sm text-merops-gray-light">Latest updates and news</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/info/statistics-index"
                            className="block p-3 rounded-lg hover:bg-merops-green-50 transition-colors"
                          >
                            <div className="font-medium text-merops-gray">Statistics</div>
                            <div className="text-sm text-merops-gray-light">Database statistics</div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/info/download-list"
                            className="block p-3 rounded-lg hover:bg-merops-green-50 transition-colors"
                          >
                            <div className="font-medium text-merops-gray">Downloads</div>
                            <div className="text-sm text-merops-gray-light">Download database files</div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Search Button */}
            <Button
              variant="outline"
              size="sm"
              className="ml-4 text-merops-gray bg-[#fffbea] border-merops-green hover:bg-merops-green hover:text-white"
              asChild
            >
              <Link to="/search">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-merops-gray"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/search"
                className="block px-3 py-2 text-merops-gray hover:text-merops-green hover:bg-merops-green-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Search
              </Link>
              <Link
                to="/peptidase/name-index"
                className="block px-3 py-2 text-merops-gray hover:text-merops-green hover:bg-merops-green-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Peptidase Name Index
              </Link>
              <Link
                to="/family-index"
                className="block px-3 py-2 text-merops-gray hover:text-merops-green hover:bg-merops-green-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Family Index
              </Link>
              <Link
                to="/clan-index"
                className="block px-3 py-2 text-merops-gray hover:text-merops-green hover:bg-merops-green-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Clan Index
              </Link>
              <Link
                to="/blast-merops"
                className="block px-3 py-2 text-merops-gray hover:text-merops-green hover:bg-merops-green-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                BLAST MEROPS
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
