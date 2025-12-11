import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { StoreProvider } from "@/src/_app/providers/store";
import { StyleProvider } from "@/src/_app/providers/style";
import { PageLayout } from "@/src/widgets/pageLayout";
import "@/src/_app/style/main.scss";
import { AppHeader } from "@/src/widgets/appHeader";
import { DataProvider } from "../_app/providers/data";

export const plusJakartaFont = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rate my skills 1",
  description: "Movie info search app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaFont.variable}`}>
        <StoreProvider>
          <StyleProvider>
            <DataProvider>
              <PageLayout header={<AppHeader />}>{children}</PageLayout>
            </DataProvider>
          </StyleProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
