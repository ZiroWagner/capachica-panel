import "@/app/globals.css"
import localFont from "next/font/local"
import { ThemeProvider } from "@/components/theme-provider"

const inter = localFont({
  src: [
    {
      path: "../public/fonts/Inter/Inter-Regular.woff2",
      weight: "400",
      style: "normal"
    },
  ],
  variable: "--font-inter"
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={false}
          storageKey="panel-emprendedor-theme"
          forcedTheme={undefined}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
