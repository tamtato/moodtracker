import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import "./globals.css";
import ApolloProviderWrapper from "@/store/ApolloProviderWrapper";

const readex = Readex_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contentWrapper: String = "xl:w-2/5 lg:w-1/2 md:w-3/5 w-full";
  return (
    <html lang="en">
      <body className={readex.className}>
        <div className="w-full flex flex-col items-center ">
          <div
            className={`${contentWrapper} border-solid border-b-[1.5px] border-gray-100 py-10 mb-10`}
          >
            <h1 className="text-2xl text-primary-text opacity-80">
              Mood Tracker :)
            </h1>
          </div>
          <ApolloProviderWrapper>
            <div className={`${contentWrapper}`}>{children}</div>
          </ApolloProviderWrapper>
        </div>
      </body>
    </html>
  );
}
