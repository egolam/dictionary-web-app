import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import Header from "@/components/Header";
import SearchBox from "@/components/SearchBox";
import { Suspense } from "react";

export const metadata = {
  title: "Next Dictionary",
  description: "Challenge by Frontend Mentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-dvh font-sans">
        <main className="mx-auto md:max-w-[46rem] sm:py-16 py-8 flex flex-col gap-11 px-6 sm:px-14 lg:px-0">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Suspense fallback={<p>Loading Entire App...</p>}>
              <Header />
              <SearchBox />
              {children}
            </Suspense>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
