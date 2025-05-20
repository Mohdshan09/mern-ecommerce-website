import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { Outlet } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useUserStore } from "@/store";
import DropDownMenu from "./drop-down-menu-component";

export function NavbarComponent() {
  const navItems = [
    {
      name: "Men",
      link: "/category/men",
    },
    {
      name: "Women",
      link: "/category/women",
    },
    {
      name: "Kids",
      link: "/category/kids",
    },
  ];

  const userId = useUserStore((state) => state.userId);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <Link to="/auth/login">
              {userId ? (
                "user Data is present"
              ) : (
                <NavbarButton variant="primary">Login</NavbarButton>
              )}
            </Link>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <Link to="/">
              <NavbarLogo />
            </Link>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <Outlet />
    </div>
  );
}
