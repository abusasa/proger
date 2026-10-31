"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  Flame,
  Sparkles,
  FileSpreadsheet,
  FileText,
  Presentation,
  Award,
  Wrench,
  ChevronRight,
  Star,
  MapPin,
  ArrowUpRight,
  Cpu,
  HardDrive,
  Laptop,
  Lock,
} from "lucide-react";
import {
  MASTER_NICHES,
  OWNER_PHONE_DISPLAY,
  OWNER_PHONE_RAW,
  OWNER_WHATSAPP_NUMBER,
} from "@/data/masters";

function formatTimeUnit(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

export default function WindowsLandingPage() {
  // Top promo timer: 5 days countdown (5 days, 04 hours, 38 minutes, 19 seconds)
  const [fiveDaySeconds, setFiveDaySeconds] = useState(
    5 * 86400 + 4 * 3600 + 38 * 60 + 19
  );

  // Package #3 VIP urgent timer: expires tomorrow in ~5 hours (29 hours, 00 minutes, 00 seconds — or 5 hours 14 mins)
  // User requested: "Акции для последней услуги, третьей услуги, истекут завтра, через 5 часов. Поставь такой таймер."
  const [vipSeconds, setVipSeconds] = useState(5 * 3600 + 14 * 60 + 45);

  useEffect(() => {
    const interval = setInterval(() => {
      setFiveDaySeconds((prev) => (prev > 0 ? prev - 1 : 5 * 86400));
      setVipSeconds((prev) => (prev > 0 ? prev - 1 : 5 * 3600));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const d5 = Math.floor(fiveDaySeconds / 86400);
  const h5 = Math.floor((fiveDaySeconds % 86400) / 3600);
  const m5 = Math.floor((fiveDaySeconds % 3600) / 60);
  const s5 = fiveDaySeconds % 60;

  const hVip = Math.floor(vipSeconds / 3600);
  const mVip = Math.floor((vipSeconds % 3600) / 60);
  const sVip = vipSeconds % 60;

  const getWhatsAppUrl = (text: string) =>
    `https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#141413] relative pb-24 md:pb-0">
      {/* TOP URGENCY BAR — 5 DAYS PROMO */}
      <div className="bg-[#141413] text-white border-b-2 border-[#FF4F18] px-4 py-2.5 sticky top-0 z-40 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-tight">
            <span className="inline-flex items-center gap-1 bg-[#FF4F18] text-white px-2.5 py-0.5 rounded-full text-xs uppercase font-extrabold animate-pulse">
              <Flame className="w-3.5 h-3.5 fill-current" /> Акция в Актау
            </span>
            <span>
              Скидка <span className="text-[#FFD600] underline">-25% и выше</span> на все пакеты установки Windows + выезд 0 ₸!
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-300 hidden md:inline">
              До конца акции осталось:
            </span>
            <div className="flex items-center gap-1 font-mono text-xs sm:text-sm font-extrabold">
              <span className="bg-[#262624] border border-neutral-700 px-2 py-0.5 rounded text-[#FFD600]">
                {d5}д
              </span>
              <span>:</span>
              <span className="bg-[#262624] border border-neutral-700 px-2 py-0.5 rounded text-white">
                {formatTimeUnit(h5)}ч
              </span>
              <span>:</span>
              <span className="bg-[#262624] border border-neutral-700 px-2 py-0.5 rounded text-white">
                {formatTimeUnit(m5)}м
              </span>
              <span>:</span>
              <span className="bg-[#FF4F18] px-2 py-0.5 rounded text-white">
                {formatTimeUnit(s5)}с
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="max-w-6xl mx-auto px-4 pt-5 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#FF4F18] text-white flex items-center justify-center font-black text-xl shadow-[3px_3px_0px_#141413] border-2 border-[#141413]">
            W
          </div>
          <div>
            <div className="font-extrabold text-lg leading-tight flex items-center gap-2">
              WinМастер Актау
              <span className="text-[11px] font-bold bg-[#DCFCE7] text-[#15803D] border border-[#86EFAC] px-2 py-0.5 rounded-full">
                Свободен сейчас
              </span>
            </div>
            <p className="text-xs text-neutral-600 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#FF4F18]" /> Выезд во все мкр Актау за 30 минут
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#packages"
            className="hidden md:inline-flex text-sm font-bold text-neutral-700 hover:text-[#FF4F18] px-3 py-2 transition"
          >
            Пакеты и цены
          </a>
          <a
            href="#all-masters"
            className="hidden md:inline-flex text-sm font-bold text-neutral-700 hover:text-[#FF4F18] px-3 py-2 transition"
          >
            Все мастера Актау (10)
          </a>
          <a
            href={`tel:${OWNER_PHONE_RAW}`}
            className="inline-flex items-center gap-2 bg-[#141413] hover:bg-[#FF4F18] text-white font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-xl border-2 border-[#141413] shadow-[3px_3px_0px_#FF4F18] transition"
          >
            <Phone className="w-4 h-4" />
            <span>{OWNER_PHONE_DISPLAY}</span>
          </a>
        </div>
      </header>

      {/* HERO SECTION — BOLD RETAIL EDITORIAL STYLE */}
      <section className="max-w-6xl mx-auto px-4 pt-4 pb-12 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex flex-wrap items-center gap-2 bg-[#FFE8D6] border-2 border-[#141413] px-3.5 py-1.5 rounded-full shadow-[3px_3px_0px_#141413]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-ping" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-[#141413]">
                Без потери ваших фото и файлов • Выезд на дом 0 ₸
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black leading-[1.06] tracking-tight text-[#141413]">
              Ваш ноутбук или ПК тормозит и зависает?{" "}
              <span className="bg-[#FFD600] px-2.5 py-0.5 rounded-xl border-2 border-[#141413] inline-block mt-1 shadow-[4px_4px_0px_#141413]">
                Ускорим в 5 раз за 45 минут!
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-700 font-medium leading-relaxed max-w-2xl">
              Приеду к вам домой или в офис в любую точку Актау. Установлю чистую быструю{" "}
              <strong className="text-[#141413] font-extrabold">Windows 10 или Windows 11</strong>,
              настрою интернет, принтер и установлю полный пакет{" "}
              <strong className="text-[#141413] font-extrabold">Word, Excel, PowerPoint</strong> с
              бессрочной активацией.
            </p>

            {/* Price Anchor Pill */}
            <div className="bg-white border-2 border-[#141413] rounded-2xl p-4 sm:p-5 shadow-[6px_6px_0px_#141413] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-[#FF4F18] flex items-center gap-1">
                  <Sparkles className="w-4 h-4" /> Горящее предложение недели
                </div>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-3xl sm:text-4xl font-black text-[#141413]">
                    7 000 ₸
                  </span>
                  <span className="text-lg font-bold text-neutral-400 line-through decoration-2 decoration-red-500">
                    15 000 ₸
                  </span>
                  <span className="bg-[#DCFCE7] text-[#15803D] border border-[#15803D] text-xs font-black px-2 py-0.5 rounded-md">
                    ВЫГОДА 8 000 ₸
                  </span>
                </div>
                <p className="text-xs text-neutral-600 mt-1">
                  Честная фиксированная цена без «накруток за каждый драйвер»
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={getWhatsAppUrl(
                    "Салем! Хочу заказать переустановку Windows по акции (от 7 000 ₸) в Актау. Когда сможете подъехать?"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-[#141413] font-black text-base px-6 py-4 rounded-xl border-2 border-[#141413] shadow-[4px_4px_0px_#141413] active:translate-y-0.5 transition cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  Написать в WhatsApp
                </a>
                <a
                  href={`tel:${OWNER_PHONE_RAW}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#FF4F18] hover:bg-[#e03e0b] text-white font-black text-base px-5 py-4 rounded-xl border-2 border-[#141413] shadow-[4px_4px_0px_#141413] active:translate-y-0.5 transition"
                >
                  <Phone className="w-5 h-5" />
                  Позвонить
                </a>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-white/80 border-2 border-[#141413] rounded-xl p-3">
                <div className="font-black text-lg sm:text-xl text-[#FF4F18]">30 мин</div>
                <div className="text-xs font-semibold text-neutral-700">
                  Бесплатный выезд по Актау
                </div>
              </div>
              <div className="bg-white/80 border-2 border-[#141413] rounded-xl p-3">
                <div className="font-black text-lg sm:text-xl text-[#15803D]">100%</div>
                <div className="text-xs font-semibold text-neutral-700">
                  Сохранение фото и документов
                </div>
              </div>
              <div className="bg-white/80 border-2 border-[#141413] rounded-xl p-3">
                <div className="font-black text-lg sm:text-xl text-[#2563EB]">1 год</div>
                <div className="text-xs font-semibold text-neutral-700">
                  Гарантия на систему и программы
                </div>
              </div>
            </div>
          </div>

          {/* Right visual poster card */}
          <div className="lg:col-span-5">
            <div className="relative bg-white border-3 border-[#141413] rounded-3xl p-4 sm:p-5 shadow-[10px_10px_0px_#141413]">
              {/* Discount sticker */}
              <div className="absolute -top-4 -right-3 z-10 bg-[#FF4F18] text-white border-2 border-[#141413] rounded-2xl px-4 py-2 font-black text-sm shadow-[4px_4px_0px_#141413] rotate-3">
                АКЦИЯ -25% НА ВСЁ!
              </div>

              <div className="relative rounded-2xl overflow-hidden border-2 border-[#141413] aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=85"
                  alt="Быстрая установка Windows 10 и 11 на ноутбук в Актау"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-[#141413]/90 backdrop-blur-sm text-white p-3 rounded-xl border border-white/20 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[#0078D4] flex items-center justify-center font-black text-white">
                      W11
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#FFD600]">
                        Windows 10 / 11 Pro + Office
                      </div>
                      <div className="text-[11px] text-neutral-300">
                        Официальные образы без рекламы и вирусов
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-black bg-[#25D366] text-[#141413] px-2.5 py-1 rounded-md">
                    За 45 мин
                  </span>
                </div>
              </div>

              {/* Mini checklist inside visual card */}
              <div className="mt-4 space-y-2.5">
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold bg-[#FAF6F0] p-2.5 rounded-xl border border-neutral-300">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                    Не обманываю как «фирмы из объявлений»
                  </span>
                  <span className="text-[#16A34A] font-black">Фикс. цена</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold bg-[#FAF6F0] p-2.5 rounded-xl border border-neutral-300">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                    Оплата через Kaspi QR только ПОСЛЕ проверки
                  </span>
                  <span className="text-[#FF4F18] font-black">0 ₸ риск</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 PACKAGES SECTION — EXACT USER SPECIFICATION */}
      <section id="packages" className="py-12 md:py-16 bg-[#F2ECE1] border-y-2 border-[#141413]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 bg-[#FFD600] border-2 border-[#141413] px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#141413] mb-3">
              🔥 Специальные пакеты со скидкой по таймеру
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#141413] tracking-tight">
              Выберите свой пакет настройки компьютера
            </h2>
            <p className="text-neutral-700 font-medium mt-3 text-base sm:text-lg">
              Никаких скрытых доплат за «каждый клик». Вы заранее знаете точную сумму до копейки!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {/* PACKAGE 1: 7 000 KZT (was 15 000 KZT) */}
            <div className="bg-white border-3 border-[#141413] rounded-3xl p-6 sm:p-7 shadow-[8px_8px_0px_#141413] flex flex-col justify-between relative">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="bg-[#E0F2FE] text-[#0369A1] border-2 border-[#141413] font-black text-xs uppercase px-3 py-1 rounded-full">
                    Пакет №1 • Старт
                  </span>
                  <span className="bg-[#FF4F18] text-white font-black text-xs px-2.5 py-1 rounded-lg border border-[#141413]">
                    АКЦИЯ -53% (Супер-цена!)
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#141413]">
                  Чистая Windows + Драйверы
                </h3>
                <p className="text-sm text-neutral-600 mt-1">
                  Идеально, если компьютер тормозит, выскакивают ошибки или нужно просто освежить систему.
                </p>

                <div className="my-5 p-4 bg-[#FAF6F0] rounded-2xl border-2 border-[#141413]">
                  <div className="text-xs font-bold text-neutral-500 uppercase">
                    Обычная цена:{" "}
                    <span className="line-through text-red-600 font-extrabold text-sm">
                      15 000 ₸
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl font-black text-[#141413]">7 000 ₸</span>
                    <span className="text-xs font-bold text-[#16A34A]">/ под ключ</span>
                  </div>
                  <div className="mt-2 text-[11px] font-bold text-[#FF4F18] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Цена заморожена на {d5} дн. {formatTimeUnit(h5)}:{formatTimeUnit(m5)}:{formatTimeUnit(s5)}
                  </div>
                </div>

                <ul className="space-y-3 text-sm font-semibold text-neutral-800">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                    <span>Установка быстрой Windows 10 или Windows 11 (x64)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                    <span>Сохранение всех ваших фото и документов на диске</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                    <span>Установка всех драйверов (Wi-Fi, звук, видеокарта)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                    <span>Быстрый браузер + блокировщик всей рекламы в YouTube</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t-2 border-dashed border-neutral-300">
                <div className="text-xs font-extrabold uppercase text-neutral-500 mb-2.5">
                  Что входит в установку:
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 bg-[#E0F2FE] text-[#0284C7] border border-[#0284C7] px-2.5 py-1 rounded-lg text-xs font-extrabold">
                    🪟 Windows 10/11
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-neutral-100 text-neutral-800 border border-neutral-400 px-2.5 py-1 rounded-lg text-xs font-bold">
                    ⚙️ Все драйверы
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-neutral-100 text-neutral-800 border border-neutral-400 px-2.5 py-1 rounded-lg text-xs font-bold">
                    🌐 Chrome + AdBlock
                  </span>
                </div>

                <a
                  href={getWhatsAppUrl(
                    "Салем! Хочу заказать Пакет №1 «Чистая Windows + Драйверы» по акции за 7 000 ₸ (вместо 15 000 ₸)."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#141413] hover:bg-[#FF4F18] text-white font-black text-base py-4 rounded-xl border-2 border-[#141413] shadow-[4px_4px_0px_#FF4F18] transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  Выбрать за 7 000 ₸
                </a>
              </div>
            </div>

            {/* PACKAGE 2: 15 000 KZT (was 20 000 KZT, -25% discount) + WINDOWS & OFFICE ICONS */}
            <div className="bg-[#FFFBEB] border-3 border-[#141413] rounded-3xl p-6 sm:p-7 shadow-[10px_10px_0px_#FF4F18] flex flex-col justify-between relative lg:-translate-y-3">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF4F18] text-white border-2 border-[#141413] px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#141413] whitespace-nowrap">
                ⭐ Хит выбора в Актау • Скидка -25%
              </div>

              <div>
                <div className="flex items-center justify-between gap-2 mb-4 mt-2">
                  <span className="bg-[#FFD600] text-[#141413] border-2 border-[#141413] font-black text-xs uppercase px-3 py-1 rounded-full">
                    Пакет №2 • Офис + Дом
                  </span>
                  <span className="bg-[#16A34A] text-white font-black text-xs px-2.5 py-1 rounded-lg border border-[#141413]">
                    АКЦИЯ -25%
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#141413]">
                  Windows + Полный Microsoft Office + Защита
                </h3>
                <p className="text-sm text-neutral-700 mt-1">
                  Полностью готовый ноутбук для работы, учёбы, бухгалтерии и дома с бессрочным Word и Excel.
                </p>

                <div className="my-5 p-4 bg-white rounded-2xl border-2 border-[#141413]">
                  <div className="text-xs font-bold text-neutral-500 uppercase">
                    Цена без скидки:{" "}
                    <span className="line-through text-red-600 font-extrabold text-sm">
                      20 000 ₸
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl font-black text-[#FF4F18]">15 000 ₸</span>
                    <span className="text-xs font-bold text-[#141413]">/ всё включено</span>
                  </div>
                  <div className="mt-2 text-[11px] font-bold text-[#15803D] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Пожизненная активация Windows и Office!
                  </div>
                </div>

                <ul className="space-y-3 text-sm font-semibold text-neutral-900">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#FF4F18] shrink-0 mt-0.5" />
                    <span>
                      <strong>Всё из Пакета №1</strong> (Windows 10/11 Pro + все драйверы + сохранение данных)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#FF4F18] shrink-0 mt-0.5" />
                    <span>
                      <strong>Полный пакет Microsoft Office (Word, Excel, PowerPoint)</strong> — не слетает!
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#FF4F18] shrink-0 mt-0.5" />
                    <span>
                      Программы на каждый день: PDF-ридер, WinRAR, Zoom, WhatsApp, ЭЦП (NCALayer для eGov и Кабинета налогоплательщика)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#FF4F18] shrink-0 mt-0.5" />
                    <span>
                      Антивирусная защита + отключение слежки и фонового мусора Windows
                    </span>
                  </li>
                </ul>
              </div>

              {/* BOTTOM ICONS FOR WINDOWS & OFFICE PROGRAMS (specifically requested for 2nd service) */}
              <div className="mt-6 pt-5 border-t-2 border-dashed border-neutral-400">
                <div className="text-xs font-black uppercase text-[#141413] mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#FF4F18]" /> Иконки устанавливаемых программ:
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 gap-2 mb-5">
                  {/* Windows Icon Badge */}
                  <div className="flex items-center gap-2 bg-[#0078D4] text-white p-2 rounded-xl border-2 border-[#141413] shadow-[2px_2px_0px_#141413]">
                    <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center font-black text-xs shrink-0">
                      ⊞
                    </div>
                    <div className="leading-tight">
                      <div className="text-[11px] font-black">Windows</div>
                      <div className="text-[9px] opacity-90">10 / 11 Pro</div>
                    </div>
                  </div>

                  {/* Word Icon Badge */}
                  <div className="flex items-center gap-2 bg-[#185ABD] text-white p-2 rounded-xl border-2 border-[#141413] shadow-[2px_2px_0px_#141413]">
                    <div className="w-7 h-7 rounded-lg bg-white text-[#185ABD] flex items-center justify-center font-black text-xs shrink-0">
                      W
                    </div>
                    <div className="leading-tight">
                      <div className="text-[11px] font-black">MS Word</div>
                      <div className="text-[9px] opacity-90">Документы</div>
                    </div>
                  </div>

                  {/* Excel Icon Badge */}
                  <div className="flex items-center gap-2 bg-[#107C41] text-white p-2 rounded-xl border-2 border-[#141413] shadow-[2px_2px_0px_#141413]">
                    <div className="w-7 h-7 rounded-lg bg-white text-[#107C41] flex items-center justify-center font-black text-xs shrink-0">
                      X
                    </div>
                    <div className="leading-tight">
                      <div className="text-[11px] font-black">MS Excel</div>
                      <div className="text-[9px] opacity-90">Таблицы</div>
                    </div>
                  </div>

                  {/* PowerPoint Icon Badge */}
                  <div className="flex items-center gap-2 bg-[#D24726] text-white p-2 rounded-xl border-2 border-[#141413] shadow-[2px_2px_0px_#141413]">
                    <div className="w-7 h-7 rounded-lg bg-white text-[#D24726] flex items-center justify-center font-black text-xs shrink-0">
                      P
                    </div>
                    <div className="leading-tight">
                      <div className="text-[11px] font-black">PowerPoint</div>
                      <div className="text-[9px] opacity-90">Слайды</div>
                    </div>
                  </div>

                  {/* PDF / Adobe Icon Badge */}
                  <div className="flex items-center gap-2 bg-[#B91C1C] text-white p-2 rounded-xl border-2 border-[#141413] shadow-[2px_2px_0px_#141413]">
                    <div className="w-7 h-7 rounded-lg bg-white text-[#B91C1C] flex items-center justify-center font-black text-[10px] shrink-0">
                      PDF
                    </div>
                    <div className="leading-tight">
                      <div className="text-[11px] font-black">Acrobat</div>
                      <div className="text-[9px] opacity-90">Чтение PDF</div>
                    </div>
                  </div>

                  {/* eGov / NCALayer Icon Badge */}
                  <div className="flex items-center gap-2 bg-[#0D9488] text-white p-2 rounded-xl border-2 border-[#141413] shadow-[2px_2px_0px_#141413]">
                    <div className="w-7 h-7 rounded-lg bg-white text-[#0D9488] flex items-center justify-center font-black text-[10px] shrink-0">
                      ЭЦП
                    </div>
                    <div className="leading-tight">
                      <div className="text-[11px] font-black">NCALayer</div>
                      <div className="text-[9px] opacity-90">eGov / Каспи</div>
                    </div>
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl(
                    "Салем! Хочу заказать Пакет №2 «Windows + Полный Office (Word, Excel)» за 15 000 ₸ по скидке -25%."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FF4F18] hover:bg-[#e03e0b] text-white font-black text-base py-4 rounded-xl border-2 border-[#141413] shadow-[4px_4px_0px_#141413] transition"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  Заказать Хит за 15 000 ₸
                </a>
              </div>
            </div>

            {/* PACKAGE 3: 19 000 KZT (was 26 000 KZT, -25%) + EXPIRES TOMORROW IN 5 HOURS TIMER */}
            <div className="bg-[#141413] text-white border-3 border-[#141413] rounded-3xl p-6 sm:p-7 shadow-[8px_8px_0px_#FFD600] flex flex-col justify-between relative">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="bg-[#FFD600] text-[#141413] font-black text-xs uppercase px-3 py-1 rounded-full">
                    Пакет №3 • VIP Максимум
                  </span>
                  <span className="bg-red-600 text-white font-black text-xs px-2.5 py-1 rounded-lg animate-pulse">
                    ГОРЯЩИЙ ТАРИФ -27%
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white">
                  Всё включено + Чистка от перегрева + Тяжёлые программы
                </h3>
                <p className="text-sm text-neutral-300 mt-1">
                  Полное обновление и охлаждение ноутбука/ПК + любые профессиональные программы по вашему списку.
                </p>

                {/* SPECIAL TIMER FOR 3RD SERVICE: EXPIRES TOMORROW IN 5 HOURS */}
                <div className="my-5 p-4 bg-[#222220] rounded-2xl border-2 border-[#FFD600]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-neutral-400 uppercase">
                      Старая цена:{" "}
                      <span className="line-through text-red-400 font-extrabold text-sm">
                        26 000 ₸
                      </span>
                    </span>
                    <span className="text-[11px] font-black bg-[#FFD600] text-[#141413] px-2 py-0.5 rounded">
                      Экономия 7 000 ₸
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl font-black text-[#FFD600]">19 000 ₸</span>
                    <span className="text-xs font-bold text-neutral-300">/ VIP-комплекс</span>
                  </div>

                  {/* Special urgent timer box */}
                  <div className="mt-3 bg-red-950/90 border border-red-500 rounded-xl p-2.5">
                    <div className="text-[11px] font-extrabold text-red-200 flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-[#FFD600] shrink-0" />
                      Акция на 3-й пакет истекает завтра, через 5 часов:
                    </div>
                    <div className="flex items-center gap-1.5 mt-1.5 font-mono text-xs font-black">
                      <span className="bg-red-600 text-white px-2 py-1 rounded">
                        1 день
                      </span>
                      <span className="text-red-300">:</span>
                      <span className="bg-black text-[#FFD600] border border-red-500 px-2 py-1 rounded">
                        {formatTimeUnit(hVip)} ч
                      </span>
                      <span className="text-red-300">:</span>
                      <span className="bg-black text-[#FFD600] border border-red-500 px-2 py-1 rounded">
                        {formatTimeUnit(mVip)} мин
                      </span>
                      <span className="text-red-300">:</span>
                      <span className="bg-black text-white border border-red-500 px-2 py-1 rounded">
                        {formatTimeUnit(sVip)} с
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 text-sm font-semibold text-neutral-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#FFD600] shrink-0 mt-0.5" />
                    <span>
                      <strong>Всё из Пакетов №1 и №2</strong> (Windows 10/11 + полный Microsoft Office + драйверы)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#FFD600] shrink-0 mt-0.5" />
                    <span>
                      <strong>Профессиональный софт на выбор:</strong> Photoshop, CorelDRAW, AutoCAD, 1С, видеомонтаж
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#FFD600] shrink-0 mt-0.5" />
                    <span>
                      <strong>Профилактика перегрева и шума</strong> (чистка системы охлаждения + замена термопасты Arctic MX-4)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#FFD600] shrink-0 mt-0.5" />
                    <span>
                      Ускорение загрузки игр и системы + VIP-гарантия 12 месяцев
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-neutral-700">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="bg-neutral-800 text-[#FFD600] border border-neutral-600 px-2.5 py-1 rounded-lg text-xs font-bold">
                    🎨 Photoshop / AutoCAD
                  </span>
                  <span className="bg-neutral-800 text-white border border-neutral-600 px-2.5 py-1 rounded-lg text-xs font-bold">
                    ❄️ Чистка + Термопаста
                  </span>
                  <span className="bg-neutral-800 text-white border border-neutral-600 px-2.5 py-1 rounded-lg text-xs font-bold">
                    🚀 Ускорение SSD
                  </span>
                </div>

                <a
                  href={getWhatsAppUrl(
                    "Салем! Хочу успеть заказать Пакет №3 «VIP Максимум (Windows + Office + Программы + Чистка)» по акции за 19 000 ₸!"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FFD600] hover:bg-[#ffe033] text-[#141413] font-black text-base py-4 rounded-xl border-2 border-white shadow-[4px_4px_0px_#FF4F18] transition"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  Забронировать за 19 000 ₸
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ME IN AKTAU — ANTI-SCAM GUARANTEE */}
      <section className="py-12 md:py-16 max-w-6xl mx-auto px-4">
        <div className="bg-white border-3 border-[#141413] rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_#141413]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block bg-[#FEE2E2] text-[#DC2626] border border-[#DC2626] font-black text-xs uppercase px-3 py-1 rounded-full">
                Осторожно: как обманывают «фирмы по объявлениям»
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#141413]">
                Почему в Актау вызывают меня напрямую, а не диспетчеров?
              </h2>
              <p className="text-neutral-700 font-medium text-sm sm:text-base">
                Многие «компании» обещают по телефону установку за 2 000 ₸, а дома выписывают счёт на 45 000 ₸ («за каждый драйвер отдельно»).{" "}
                <strong className="text-[#141413]">Я работаю один, честно и на свою репутацию в Актау:</strong>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#FAF6F0] border-2 border-[#141413]">
                  <div className="font-black text-base text-[#141413]">
                    1. Цена ровно как на сайте
                  </div>
                  <p className="text-xs text-neutral-600 mt-1">
                    Выбрали пакет за 7 000 ₸, 15 000 ₸ или 19 000 ₸ — ровно столько и платите после проверки.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF6F0] border-2 border-[#141413]">
                  <div className="font-black text-base text-[#141413]">
                    2. Выезд за 30 минут — 0 ₸
                  </div>
                  <p className="text-xs text-neutral-600 mt-1">
                    Быстро приеду в любой мкр Актау (с 1 по 35 мкр, Шыгыс, Грин Парк, Приморский).
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF6F0] border-2 border-[#141413]">
                  <div className="font-black text-base text-[#141413]">
                    3. Все ваши файлы в сохранности
                  </div>
                  <p className="text-xs text-neutral-600 mt-1">
                    Перед переустановкой бережно переношу семейные фото, отчёты, базы 1С и рабочий стол.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF6F0] border-2 border-[#141413]">
                  <div className="font-black text-base text-[#141413]">
                    4. Поддержка по WhatsApp
                  </div>
                  <p className="text-xs text-neutral-600 mt-1">
                    Если через месяц понадобится помощь — помогу удалённо через AnyDesk бесплатно.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#141413] text-white rounded-2xl p-6 border-2 border-[#141413] space-y-4">
              <div className="text-xs font-extrabold uppercase text-[#FFD600] tracking-wider">
                Быстрая заявка за 10 секунд
              </div>
              <h3 className="text-2xl font-black">
                Напишите мне в WhatsApp — отвечу мгновенно!
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300">
                Нажмите кнопку ниже — откроется чат со мной в WhatsApp, где уже заполнено сообщение на скидку.
              </p>
              <a
                href={getWhatsAppUrl(
                  "Салем! Пишу с сайта по установке Windows в Актау. Хочу вызвать мастера на дом со скидкой!"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-[#141413] font-black text-base py-4 rounded-xl border-2 border-white transition"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Написать в WhatsApp сейчас
              </a>
              <a
                href={`tel:${OWNER_PHONE_RAW}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm py-3 rounded-xl border border-white/20 transition"
              >
                <Phone className="w-4 h-4" />
                Или позвонить: {OWNER_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTORY OF 10 OTHER SERVICE SITES FOR MASTERS IN AKTAU */}
      <section id="all-masters" className="py-12 md:py-16 bg-[#141413] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-block bg-[#FF4F18] text-white font-black text-xs uppercase px-3 py-1 rounded-full mb-3">
                Каталог 10 сайтов для мастеров Актау (Готово под аренду и Google Рекламу)
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Все 10 специализированных сайтов бытовых услуг Актау
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
                Каждая карточка ниже — это отдельный полноценный продающий сайт под конкретную нишу (холодильники, стиральные машины, сантехник, эвакуатор и др.) с фото и кнопкой вызова в WhatsApp.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MASTER_NICHES.map((niche, idx) => (
              <Link
                key={niche.slug}
                href={`/master/${niche.slug}`}
                className="group bg-[#1F1F1D] hover:bg-[#292926] border-2 border-neutral-700 hover:border-[#FFD600] rounded-2xl overflow-hidden transition flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={niche.heroImage}
                      alt={niche.shortTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-[#141413]/90 text-white text-xs font-extrabold px-2.5 py-1 rounded-lg border border-white/15">
                      Сайт #{idx + 1} • {niche.category}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#FFD600] text-[#141413] text-xs font-black px-2.5 py-1 rounded-lg">
                      {niche.priceFrom}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-black text-white group-hover:text-[#FFD600] transition flex items-center justify-between gap-2">
                      <span>{niche.shortTitle}</span>
                      <ArrowUpRight className="w-5 h-5 shrink-0 text-[#FFD600]" />
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1.5 line-clamp-2">
                      {niche.heroSubtitle}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-2 border-t border-neutral-800 flex items-center justify-between text-xs font-bold">
                  <span className="text-[#25D366]">⚡ Выезд: {niche.arrivalTime}</span>
                  <span className="text-white underline group-hover:text-[#FFD600]">
                    Открыть лендинг →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0C0C0B] text-neutral-400 py-8 border-t border-neutral-800 text-xs">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <strong className="text-white font-bold">WinМастер Актау</strong> — Профессиональная установка Windows 10/11 и программ с выездом на дом.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/google-ads" className="text-[#FFD600] hover:underline font-bold">
              Шпаргалка Google Ads (Настройка за 10 мин)
            </Link>
            <a href={`tel:${OWNER_PHONE_RAW}`} className="text-white font-bold">
              {OWNER_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </footer>

      {/* FLOATING BOTTOM-LEFT WHATSAPP BUTTON (EXACT USER REQUEST) */}
      <a
        href={getWhatsAppUrl(
          "Салем! Пишу с сайта по переустановке Windows в Актау. Хочу вызвать мастера по акции!"
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в WhatsApp по установке Windows"
        className="fixed bottom-5 left-5 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-[#141413] font-black text-sm sm:text-base px-4 py-3.5 rounded-full border-3 border-[#141413] shadow-[5px_5px_0px_#141413] whatsapp-pulse transition transform hover:scale-105"
      >
        <div className="w-8 h-8 rounded-full bg-[#141413] text-[#25D366] flex items-center justify-center shrink-0">
          <MessageCircle className="w-5 h-5 fill-current" />
        </div>
        <div className="pr-1 leading-tight">
          <div className="text-[10px] uppercase font-extrabold text-[#141413]/80">
            Онлайн в Актау
          </div>
          <div className="text-xs sm:text-sm font-black">WhatsApp по Windows</div>
        </div>
      </a>
    </div>
  );
}
