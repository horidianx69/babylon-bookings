import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import NavBar from "@/components/layout/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import  Container  from "@/components/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BabylonBookings",
  description: "Hotel Bookings at your convenience",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressContentEditableWarning>  
      <body className={inter.className}>
        {/* <header className="flex justify-between">
          <h1>BabylonBookings</h1>
            <UserButton showName/>
          </header> */}
        <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
         >
        <main className="flex flex-col min-h-screen bg-secondary">
          <NavBar/>
          <section className="flex grow">
            <Container>
              {children}
            </Container>
          </section>
        </main>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
