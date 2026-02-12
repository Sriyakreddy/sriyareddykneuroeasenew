import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "NeuroEase",
  description: "AI-powered mental wellness platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body className="bg-white text-gray-900 dark:bg-[#0B1120] dark:text-gray-100 transition-colors duration-500"> 
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}