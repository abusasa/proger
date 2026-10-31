import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "cyrillic-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Установка Windows 10/11 и программ в Актау — Выезд на дом за 30 минут",
  description:
    "Профессиональная переустановка Windows в Актау на дому с сохранением всех фото и документов. Установка Microsoft Office, драйверов, антивируса. Скидка -25% по акции — от 7 000 ₸!",
  keywords: [
    "установка windows актау",
    "переустановка виндовс актау",
    "компьютерный мастер актау",
    "установить microsoft office актау",
    "ремонт ноутбуков актау на дому",
    "чистка ноутбука актау",
  ],
};

export const viewport: Viewport = {
  themeColor: "#FF4F18",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={jakarta.variable}>
      <body className="min-h-screen bg-[#FAF7F2] text-[#141413] font-sans selection:bg-[#FF4F18] selection:text-white">
        {children}
      </body>
    </html>
  );
}
