import { PropsWithChildren } from "react";
import { ColorModeProvider } from "./color-mode-provider";
import { Toaster } from "@/components/ui/sonner";
import { QueryClientProvider } from "./query-client-provider";

export function Providers(props: PropsWithChildren) {
  return (
    <ColorModeProvider defaultTheme="system">
      <QueryClientProvider>{props.children}</QueryClientProvider>
      <Toaster />
    </ColorModeProvider>
  );
}
