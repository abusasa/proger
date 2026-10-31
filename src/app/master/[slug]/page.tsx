import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  Clock,
  ShieldCheck,
  MapPin,
  Wrench,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import {
  MASTER_NICHES,
  getMasterBySlug,
  OWNER_PHONE_RAW,
} from "@/data/masters";

export function generateStaticParams() {
  return MASTER_NICHES.map((niche) => ({
    slug: niche.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const niche = getMasterBySlug(slug);
  if (!niche) {
    return { title: "Мастер в Актау" };
  }
  return {
    title: `${niche.shortTitle} в Актау — Выезд за ${niche.arrivalTime} | ${niche.priceFrom}`,
    description: `${niche.heroTitle}. ${niche.heroSubtitle}`,
    keywords: niche.googleAdsKeywords,
  };
}

export default async function MasterLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const niche = getMasterBySlug(slug);

  if (!niche) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/${niche.whatsappPhone}?text=${encodeURIComponent(
    niche.whatsappPrefill
  )}`;

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#141413] pb-24 md:pb-0">
      {/* TOP FAST RIBBON */}
      <div className="bg-[#141413] text-white px-4 py-2.5 border-b-2 border-[#FFD600]">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-bold">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping" />
            <span>
              Срочный выезд по <strong className="text-[#FFD600]">{niche.city}</strong> за{" "}
              {niche.arrivalTime}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-neutral-300">
              Без выходных • {niche.warrantyText}
            </span>
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-[#FFD600] hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> На главную (Все 11 сайтов)
            </Link>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-2xl text-white flex items-center justify-center font-black text-lg border-2 border-[#141413] shadow-[3px_3px_0px_#141413]"
            style={{ backgroundColor: niche.accentColor }}
          >
            <Wrench className="w-5 h-5" />
          </div>
          <div>
            <div className="font-black text-base sm:text-lg leading-tight">
              {niche.shortTitle}
            </div>
            <div className="text-xs text-neutral-600 flex items-center gap-1 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#FF4F18]" /> г. {niche.city} • Дежурный мастер
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-[#141413] font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl border-2 border-[#141413] shadow-[3px_3px_0px_#141413] transition"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            WhatsApp
          </a>
          <a
            href={`tel:${OWNER_PHONE_RAW}`}
            className="inline-flex items-center gap-2 bg-[#141413] text-white font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl border-2 border-[#141413] shadow-[3px_3px_0px_#FF4F18]"
          >
            <Phone className="w-4 h-4" />
            <span>{niche.phone}</span>
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 pt-3 pb-12 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-2 border-[#141413] font-extrabold text-xs sm:text-sm shadow-[3px_3px_0px_#141413]"
              style={{ backgroundColor: niche.accentBg, color: "#141413" }}
            >
              <Clock className="w-4 h-4" />
              {niche.heroBadge}
            </div>

            <h1 className="text-3xl sm:text-5xl font-black leading-[1.08] tracking-tight text-[#141413]">
              {niche.heroTitle}
            </h1>

            <div className="inline-block bg-[#FFD600] border-2 border-[#141413] px-3.5 py-2 rounded-xl font-black text-base sm:text-lg shadow-[4px_4px_0px_#141413]">
              ⚡ {niche.heroHighlight}
            </div>

            <p className="text-base sm:text-lg text-neutral-700 font-medium leading-relaxed">
              {niche.heroSubtitle}
            </p>

            {/* MAIN CALL / WHATSAPP ACTION BOX */}
            <div className="bg-white border-3 border-[#141413] rounded-3xl p-5 sm:p-6 shadow-[8px_8px_0px_#141413] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="text-xs font-extrabold uppercase text-neutral-500">
                    Стоимость работы
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-[#141413]">
                    {niche.priceFrom}
                  </div>
                </div>
                <div className="bg-[#DCFCE7] text-[#15803D] border-2 border-[#141413] px-3 py-1.5 rounded-xl text-xs font-black">
                  Бесплатный выезд и диагностика
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-[#141413] font-black text-base sm:text-lg py-4 px-5 rounded-2xl border-2 border-[#141413] shadow-[4px_4px_0px_#141413] transition"
                >
                  <MessageCircle className="w-6 h-6 fill-current" />
                  Написать в WhatsApp
                </a>
                <a
                  href={`tel:${OWNER_PHONE_RAW}`}
                  className="flex items-center justify-center gap-2.5 bg-[#FF4F18] hover:bg-[#e03e0b] text-white font-black text-base sm:text-lg py-4 px-5 rounded-2xl border-2 border-[#141413] shadow-[4px_4px_0px_#141413] transition"
                >
                  <Phone className="w-6 h-6" />
                  Позвонить сейчас
                </a>
              </div>

              <p className="text-xs font-bold text-neutral-600 text-center">
                Сделаем быстро и на совесть! Оплата наличными или Kaspi QR только после проверки работы.
              </p>
            </div>
          </div>

          {/* RIGHT PHOTO POSTER */}
          <div className="lg:col-span-5">
            <div className="bg-white border-3 border-[#141413] rounded-3xl p-4 shadow-[10px_10px_0px_#141413]">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#141413] aspect-[4/3]">
                <img
                  src={niche.heroImage}
                  alt={niche.shortTitle}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#141413] text-[#FFD600] text-xs font-black px-3 py-1.5 rounded-xl border border-white/20">
                  Выезд за {niche.arrivalTime}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2.5">
                {niche.benefits.map((b, i) => (
                  <div
                    key={i}
                    className="bg-[#FAF6F0] border-2 border-[#141413] rounded-xl p-3 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-black text-xs sm:text-sm text-[#141413]">
                        {b.title}
                      </div>
                      <div className="text-xs text-neutral-600 mt-0.5">{b.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY OF REAL WORK / EQUIPMENT PHOTOS */}
      <section className="py-12 bg-[#F2ECE1] border-y-2 border-[#141413]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <span className="inline-block bg-[#FFD600] border-2 border-[#141413] px-3 py-1 rounded-full font-black text-xs uppercase mb-2">
                Фото работ и оборудования
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#141413]">
                Приезжаем со всеми запчастями и делаем с первого раза
              </h2>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-[#141413] font-black text-sm px-4 py-2.5 rounded-xl border-2 border-[#141413] shadow-[3px_3px_0px_#141413]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Скинуть фото поломки в WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {niche.galleryImages.map((img, i) => (
              <div
                key={i}
                className="bg-white border-3 border-[#141413] rounded-2xl overflow-hidden shadow-[6px_6px_0px_#141413]"
              >
                <div className="h-56 overflow-hidden border-b-2 border-[#141413]">
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 font-extrabold text-sm text-[#141413]">
                  {img.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR PROBLEMS & FAST SOLUTIONS */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-4xl font-black text-[#141413] mb-6">
          Частые поломки, которые мы устраняем за 30–60 минут:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {niche.popularProblems.map((item, i) => (
            <div
              key={i}
              className="bg-white border-2 border-[#141413] rounded-2xl p-5 shadow-[5px_5px_0px_#141413] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-black uppercase bg-[#FEE2E2] text-[#DC2626] border border-[#DC2626] px-2.5 py-0.5 rounded-md">
                    Симптом #{i + 1}
                  </span>
                  <span className="text-xs font-extrabold text-[#15803D] bg-[#DCFCE7] px-2.5 py-0.5 rounded-md border border-[#15803D]">
                    ⏱ {item.time}
                  </span>
                </div>
                <h3 className="text-lg font-black text-[#141413]">{item.problem}</h3>
                <p className="text-sm text-neutral-700 mt-1.5 font-medium">
                  <strong>Решение:</strong> {item.solution}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-dashed border-neutral-300 flex items-center justify-between">
                <span className="text-xs font-bold text-neutral-500">
                  Точная цена по телефону / WhatsApp
                </span>
                <a
                  href={`https://wa.me/${niche.whatsappPhone}?text=${encodeURIComponent(
                    `Здравствуйте! У меня проблема: «${item.problem}» (${niche.shortTitle}, Актау). Сколько стоит ремонт?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-black text-[#141413] bg-[#FFD600] px-3 py-1.5 rounded-lg border border-[#141413] hover:bg-[#FF4F18] hover:text-white transition"
                >
                  Узнать цену в WhatsApp →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Brands ribbon */}
        <div className="mt-8 bg-white border-2 border-[#141413] rounded-2xl p-5 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs sm:text-sm font-black uppercase text-neutral-600">
            Обслуживаем все марки и направления:
          </span>
          <div className="flex flex-wrap gap-2">
            {niche.brands.map((brand) => (
              <span
                key={brand}
                className="bg-[#FAF6F0] border border-[#141413] px-3 py-1 rounded-lg text-xs font-black text-[#141413]"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER NICHES SWITCHER */}
      <section className="py-10 bg-[#141413] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-xs font-extrabold uppercase text-[#FFD600] mb-2">
            Другие сайты сети мастеров Актау (10 направлений)
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/"
              className="bg-[#FF4F18] text-white font-black text-xs px-3 py-2 rounded-xl border border-white/20"
            >
              🪟 Установка Windows (Главный сайт)
            </Link>
            {MASTER_NICHES.map((m) => (
              <Link
                key={m.slug}
                href={`/master/${m.slug}`}
                className={`text-xs font-bold px-3 py-2 rounded-xl border transition ${
                  m.slug === niche.slug
                    ? "bg-[#FFD600] text-[#141413] border-[#FFD600] font-black"
                    : "bg-white/10 text-white border-white/15 hover:bg-white/20"
                }`}
              >
                {m.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FLOATING BOTTOM-LEFT WHATSAPP BUTTON */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-[#141413] font-black text-sm px-4 py-3.5 rounded-full border-3 border-[#141413] shadow-[5px_5px_0px_#141413] whatsapp-pulse transition transform hover:scale-105"
      >
        <div className="w-8 h-8 rounded-full bg-[#141413] text-[#25D366] flex items-center justify-center shrink-0">
          <MessageCircle className="w-5 h-5 fill-current" />
        </div>
        <div className="pr-1 leading-tight">
          <div className="text-[10px] uppercase font-extrabold text-[#141413]/80">
            Выезд за {niche.arrivalTime}
          </div>
          <div className="text-xs sm:text-sm font-black">Вызвать в WhatsApp</div>
        </div>
      </a>
    </div>
  );
}
