import { ThemeProvider } from "@/providers/theme-provider";
import AuthProvider from "@/providers/auth-provider";
import { Toaster } from "@/components/ui/sonner";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({ subsets: ["latin"] });

export const metadata = {
  title: "چارسوق",
  // title: "22879243",
  description: "چارسوق",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <meta
        name="google-site-verification"
        content="PfcWmLyAGzPWd6FTLNEtMg08Xi2vNHbp5DcCrZplL5Y"
      />
      <body className={vazir.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            {children}
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
