import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { StoreProvider } from "@/src/app/providers/store";
import { StyleProvider } from "@/src/app/providers/style";
import { PageLayout } from "@/src/shared/ui/PageLayout";
import "@/src/app/style/main.scss";
import { AppHeader } from "@/src/widgets/appHeader";

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
            <PageLayout header={<AppHeader/>}>
              {children}
            </PageLayout>
          </StyleProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
