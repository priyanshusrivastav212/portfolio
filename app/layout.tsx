import { Metadata } from "next";
import "./globals.css";
import "@/assets/css/font.css";

export const metadata: Metadata = {
  title: "Priyanshu Srivastav | ML Enthusiast | Data Scientist ",
  description:
    "CSE graduate and passionate ML enthusiast, aspiring to be a skilled and innovative data scientist.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: "https://nothing.com",
    title: "Priyanshu Srivastav | ML Enthusiast | Data Scientist ",
    description:
      "CSE graduate and passionate ML enthusiast, aspiring to be a skilled and innovative data scientist.",
    siteName: "My Website",
    images: [
      {
        url: "/og-image.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-poppins bg-[#f6f5f4] h-screen overflow-hidden max-md:overflow-y-scroll`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
