"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/assets/nikola-logo.png";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px]">
        <SheetHeader className="text-left">
          <SheetTitle className="flex items-center gap-3">
            <Image
              src={LOGO_SRC}
              alt="Nikola Medical Equipment"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <span className="text-lg">Menu</span>
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-2" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-lg px-4 py-3 text-base font-medium",
                "text-foreground hover:bg-primary/10 hover:text-primary",
                "transition-colors"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 border-t border-border pt-4">
            <Button asChild className="w-full bg-accent hover:bg-amber-600 text-white">
              <a href="tel:9255214542" onClick={() => setOpen(false)}>
                Call: (925) 521-4542
              </a>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
