import Footer from "@/components/footer";
import Header from "@/components/header";
import ThemeSwitch from "@/components/theme-switch";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const baseUrlMeta = `${new URL("https://afivdickyefendy.vercel.app/")}`;
export const metadata = {
  metadataBase: new URL("https://afivdickyefendy.vercel.app/"),
  title: "Afiv Dicky Efendy | Portfolio",
  description:
    "Afiv Dicky Efendy is a mobile developer with 3 years of experience.",
  author: "Afiv Dicky Efendy",
  subject: "Mobile Development",
  copyright: "© Afiv Dicky Efendy",
  keywords: ["Afiv Dicky Efendy", "Mobile Developer", "Flutter", "Kotlin"],
  generator: "Next.js",
  applicationName: "Afiv Dicky Efendy | Portfolio",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark",
  creator: "Afiv Dicky Efendy",
  publisher: "Afiv Dicky Efendy",
  language: "id",
  geo: {
    country: "ID",
    placename: "Blitar",
  },
  openGraph: {
    images: [
      {
        url: `${baseUrlMeta}images/profile.jpg`,
        alt: "Afiv Dicky Efendy",
      },
    ],
    description:
      "Afiv Dicky Efendy is a mobile developer with 3 years of experience.",
    author: "Afiv Dicky Efendy",
  },
  basic: {
    title: "Afiv Dicky Efendy - Mobile Developer",
    type: "Mobile Developer",
    image: {
      url: `${baseUrlMeta}images/profile.jpg`,
      alt: "Afiv Dicky Efendy",
    },
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-10 md:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-cyan-500 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        {/* <div className="bg-[#fbe2e3] absolute bottom-[-6rem] -z-10 left-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute bottom-[-1rem] -z-10 right-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[-33rem] lg:right-[-28rem] xl:right-[-15rem] 2xl:right-[-5rem] dark:bg-[#676394]"></div> */}

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
