"use client";

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { TimerGate } from "@/components/TimerGate";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <TooltipProvider>
        <TimerGate>
          {children}
          <Toaster />
        </TimerGate>
      </TooltipProvider>
    </NextThemesProvider>
  );
}
