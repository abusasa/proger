"use client";

import React, { useEffect, useState } from "react";
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  Flame,
  Sparkles,
  MapPin,
  Laptop,
  Cpu,
  Gamepad2,
  Palette,
  FolderLock,
  Code2,
  Printer,
  Globe,
  Star,
  Download,
  AlertTriangle,
  FileText,
  BadgeCheck,
} from "lucide-react";

function formatTimeUnit(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

const OWNER_PHONE_DISPLAY = "+7 (778) 804-69-20";
const OWNER_PHONE_RAW = "+77788046920";
const OWNER_WHATSAPP_NUMBER = "77788046920";

export default function WindowsLandingPage() {
  const [fiveDaySeconds, setFiveDaySeconds] = useState(
    5 * 86400 + 4 * 3600 + 38 * 60 + 19
  );
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

  const quickServices = [
    {
      title: "Установка любой программы / утилиты",
      desc: "Архиватор, PDF, плеер, мессенджеры, браузер с блокировкой рекламы",
      price: "от 1 000 ₸",
      badge: "Быстрый старт",
      color: "bg-[#DCFCE7] text-[#15803D]",
      icon: Download,
    },
    {
      title: "Настройка принтера / МФУ / сканера",
      desc: "Установка драйверов, подключение по Wi-Fi или USB на месте или удалённо",
      price: "5 000 ₸",
      badge: "Популярно для офиса",
      color: "bg-[#E0F2FE] text-[#0369A1]",
      icon: Printer,
    },
    {
      title: "Установка Microsoft Office (Лицензия)",
      desc: "Полный пакет Word, Excel, PowerPoint, Outlook — пожизненная активация",
      price: "7 000 ₸",
      badge: "Без слётов",
      color: "bg-[#FEF3C7] text-[#B45309]",
      icon: FileText,
    },
    {
      title: "Выезд мастера + базовая диагностика",
      desc: "Выезд по всем мкр Актау за 30 минут, осмотр и проверка накопителей",
      price: "5 000 ₸",
      badge: "Приедем за 30 мин",
      color: "bg-[#F3E8FF] text-[#7E22CE]",
      icon: MapPin,
    },
  ];

  const proPrograms = [
    "Adobe Photoshop",
    "Premiere Pro",
    "Illustrator",
    "InDesign",
    "Lightroom",
    "After Effects",
    "Media Encoder",
    "Acrobat Pro DC",
    "DaVinci Resolve",
    "CorelDraw",
    "3DS Max",
    "Corona Render",
    "V-Ray",
    "AutoCAD",
    "Revit",
    "ArchiCAD",
    "КОМПАС-3D",
    "Lumion",
    "Movavi",
    "Sony Vegas Pro",
    "SketchUp",
    "Art Cut",
    "Cinema 4D",
    "Topaz AI",
    "1С Бухгалтерия",
    "Hetman Recovery",
    "Camtasia",
    "Mirillis Action",
  ];

  const gamesList = [
    "Cyberpunk 2077",
    "Hogwarts Legacy",
    "Atomic Heart",
    "GTA 5 & GTA 4 ModPack",
    "Red Dead Redemption 2",
    "Forza Horizon 4 & 5",
    "The Sims 4 Deluxe",
    "HITMAN III",
    "Resident Evil Village",
    "Call of Duty MW3",
    "Mortal Kombat 11",
    "Far Cry 6",
    "S.T.A.L.K.E.R Remake",
    "Metro Exodus",
    "Dying Light 2",
    "Watch Dogs 2",
  ];

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#141413] relative pb-28 md:pb-12">
      {/* BANNER 1: TOP URGENT FLASH PROMO */}
      <div className="bg-[#141413] text-white border-b-2 border-[#FF4F18] px-4 py-2.5 sticky top-0 z-40 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold">
            <span className="inline-flex items-center gap-1 bg-[#FF4F18] text-white px-2.5 py-0.5 rounded-full text-xs uppercase font-black animate-pulse">
              <Flame className="w-3.5 h-3.5 fill-current" /> Актау • 31А мкр
            </span>
            <span>
              Скидка <strong className="text-[#FFD600] underline">-25% на комплексы</strong> + программы от 1 000 ₸!
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-300 hidden md:inline">До конца акции:</span>
            <div className="flex items-center gap-1 font-mono text-xs sm:text-sm font-black">
              <span className="bg-[#262624] border border-neutral-700 px-2 py-0.5 rounded text-[#FFD600]">{d5}д</span>
              <span>:</span>
              <span className="bg-[#262624] border border-neutral-700 px-2 py-0.5 rounded text-white">{formatTimeUnit(h5)}ч</span>
              <span>:</span>
              <span className="bg-[#262624] border border-neutral-700 px-2 py-0.5 rounded text-white">{formatTimeUnit(m5)}м</span>
              <span>:</span>
              <span className="bg-[#FF4F18] px-2 py-0.5 rounded text-white">{formatTimeUnit(s5)}с</span>
            </div>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="max-w-6xl mx-auto px-4 pt-5 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#FF4F18] text-white flex items-center justify-center font-black text-2xl shadow-[3px_3px_0px_#141413] border-2 border-[#141413]">
            💻
          </div>
          <div>
            <div className="font-black text-lg sm:text-xl leading-tight flex items-center gap-2">
              Абдулла А. • WinМастер
              <span className="text-[11px] font-bold bg-[#DCFCE7] text-[#15803D] border border-[#86EFAC] px-2 py-0.5 rounded-full">
                Онлайн 24/7
              </span>
            </div>
            <p className="text-xs text-neutral-600 flex items-center gap-1 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#FF4F18]" /> г. Актау, 31А мкр, 21/22 • Выезд за 30 мин
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppUrl("Здравствуйте, Абдулла! Хочу заказать переустановку Windows / настройку ПК в Актау.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-[#141413] font-black text-sm px-4 py-2.5 rounded-xl border-2 border-[#141413] shadow-[3px_3px_0px_#141413] transition"
          >
            <MessageCircle className="w-4 h-4 fill-current" /> Написать в WhatsApp
          </a>
          <a
            href={`tel:${OWNER_PHONE_RAW}`}
            className="inline-flex items-center gap-2 bg-[#141413] hover:bg-[#FF4F18] text-white font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl border-2 border-[#141413] shadow-[3px_3px_0px_#FF4F18] transition"
          >
            <Phone className="w-4 h-4" />
            <span>{OWNER_PHONE_DISPLAY}</span>
          </a>
        </div>
      </header>

      {/* BANNER 2: ATTENTION GRABBING BENEFIT TICKER */}
      <div className="max-w-6xl mx-auto px-4 mt-2">
        <div className="bg-[#FFD600] border-2 border-[#141413] rounded-2xl p-3 shadow-[4px_4px_0px_#141413] flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-black">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FF4F18]" />
            <span>ГАРАНТИЯ СОХРАННОСТИ: Ваши семейные фото, базы 1С и документы на 100% останутся на месте!</span>
          </div>
          <span className="bg-[#141413] text-white px-3 py-1 rounded-lg text-xs uppercase">
            Оплата Kaspi только ПОСЛЕ проверки
          </span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 pt-6 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#FFE8D6] border-2 border-[#141413] px-3.5 py-1.5 rounded-full shadow-[3px_3px_0px_#141413]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-ping" />
              <span className="text-xs sm:text-sm font-black uppercase text-[#141413]">
                Компьютерная помощь • Выезд по Актау и Жанаозену
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black leading-[1.08] tracking-tight text-[#141413]">
              Профессиональная переустановка Windows и программ{" "}
              <span className="bg-[#FF4F18] text-white px-3 py-0.5 rounded-xl border-2 border-[#141413] inline-block shadow-[4px_4px_0px_#141413]">
                от 1 000 ₸
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-700 font-medium leading-relaxed">
              Установка чистой <strong>Windows 11, 10, 8, 7 (лицензия)</strong>, Microsoft Office, драйверов, любых профессиональных программ (AutoCAD, Photoshop, 1С) и игр. Удалённо через AnyDesk или выезд на дом за 30 минут.
            </p>

            {/* Quick Action Box */}
            <div className="bg-white border-3 border-[#141413] rounded-3xl p-5 sm:p-6 shadow-[6px_6px_0px_#141413] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-[#FF4F18]">
                    🔥 Выезд + Установка системы:
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-[#141413]">
                    от 5 000 ₸{" "}
                    <span className="text-sm font-bold text-neutral-400 line-through">10 000 ₸</span>
                  </div>
                </div>
                <span className="bg-[#DCFCE7] text-[#15803D] border border-[#15803D] text-xs font-black px-3 py-1 rounded-lg">
                  Экономия 50%
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={getWhatsAppUrl("Здравствуйте, Абдулла! Хочу вызвать мастера по установке Windows/программ в Актау.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-[#141413] font-black text-base py-4 rounded-xl border-2 border-[#141413] shadow-[4px_4px_0px_#141413] transition"
                >
                  <MessageCircle className="w-5 h-5 fill-current" /> Написать в WhatsApp
                </a>
                <a
                  href={`tel:${OWNER_PHONE_RAW}`}
                  className="flex items-center justify-center gap-2 bg-[#FF4F18] hover:bg-[#e03e0b] text-white font-black text-base py-4 rounded-xl border-2 border-[#141413] shadow-[4px_4px_0px_#141413] transition"
                >
                  <Phone className="w-5 h-5" /> Позвонить: {OWNER_PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>

          {/* Right Visual Profile Poster */}
          <div className="lg:col-span-5">
            <div className="bg-white border-3 border-[#141413] rounded-3xl p-5 shadow-[10px_10px_0px_#141413] space-y-4">
              <div className="flex items-center gap-3 p-3 bg-[#FAF6F0] rounded-2xl border-2 border-[#141413]">
                <div className="w-14 h-14 rounded-2xl bg-[#141413] text-[#FFD600] flex items-center justify-center text-2xl font-black shrink-0 border border-neutral-700">
                  АА
                </div>
                <div>
                  <div className="text-base font-black text-[#141413] flex items-center gap-1.5">
                    Абдулла А <BadgeCheck className="w-4 h-4 text-[#0284C7] fill-current" />
                  </div>
                  <div className="text-xs text-neutral-600 font-semibold">
                    Исполнитель • 2 курс ВТиПО (Кибербезопасность)
                  </div>
                  <div className="text-[11px] text-[#15803D] font-extrabold flex items-center gap-1 mt-0.5">
                    ⭐ 2 место WorldSkills по кибербезопасности
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs font-bold text-neutral-800">
                <div className="p-3 bg-[#F2ECE1] rounded-xl flex items-center justify-between border border-neutral-300">
                  <span>📍 Локация мастера:</span>
                  <span className="font-black text-[#141413]">Актау, 31А мкр, 21/22</span>
                </div>
                <div className="p-3 bg-[#F2ECE1] rounded-xl flex items-center justify-between border border-neutral-300">
                  <span>⚡ Выезд на дом:</span>
                  <span className="font-black text-[#15803D]">Да, во все мкр за 30 мин</span>
                </div>
                <div className="p-3 bg-[#F2ECE1] rounded-xl flex items-center justify-between border border-neutral-300">
                  <span>🌐 Удалённая помощь:</span>
                  <span className="font-black text-[#0284C7]">TeamViewer / AnyDesk</span>
                </div>
              </div>

              <div className="p-3.5 bg-[#FFFBEB] border-2 border-[#FFD600] rounded-xl text-xs font-semibold text-neutral-800">
                «Не накручиваю заоблачные цены за каждый клик, как сомнительные фирмы. Называю точную цену ДО начала работы, ставлю чистую систему без вирусов и мусора».
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SERVICES FROM 1000 KZT & PRINTER (EXACT USER REQUEST) */}
      <section className="py-8 bg-[#F2ECE1] border-y-2 border-[#141413]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-[#141413] text-[#FFD600] font-black text-xs uppercase px-3 py-1 rounded-full">
              Быстрые услуги от 1 000 ₸
            </span>
            <span className="text-xs sm:text-sm font-bold text-neutral-700">
              Нужно решить одну точечную задачу? Сделаем за 15 минут!
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border-2 border-[#141413] rounded-2xl p-4 shadow-[4px_4px_0px_#141413] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-9 h-9 rounded-xl bg-[#FAF6F0] border border-[#141413] flex items-center justify-center text-[#FF4F18]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${srv.color}`}>
                        {srv.badge}
                      </span>
                    </div>
                    <h3 className="font-black text-sm text-[#141413] leading-snug">{srv.title}</h3>
                    <p className="text-xs text-neutral-600 mt-1">{srv.desc}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between">
                    <span className="text-lg font-black text-[#141413]">{srv.price}</span>
                    <a
                      href={getWhatsAppUrl(`Здравствуйте! Нужна услуга: «${srv.title}» (${srv.price}). Как быстро сделаете?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-black bg-[#FFD600] hover:bg-[#FF4F18] hover:text-white px-2.5 py-1.5 rounded-lg border border-[#141413] transition"
                    >
                      Заказать →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FULL PRICE PACKAGES LIST (ALL FROM USER'S OLX PROFILE) */}
      <section id="packages" className="py-12 max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="bg-[#FF4F18] text-white border-2 border-[#141413] px-3.5 py-1 rounded-full font-black text-xs uppercase shadow-[3px_3px_0px_#141413]">
            Честный прайс-лист
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#141413] mt-2">
            Пакеты услуг по установке Windows и программ
          </h2>
          <p className="text-sm sm:text-base text-neutral-700 font-medium mt-1">
            Все цены фиксированные — без скрытых доплат за драйверы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* PACKAGE 1: 10 000 KZT */}
          <div className="bg-white border-3 border-[#141413] rounded-3xl p-6 shadow-[6px_6px_0px_#141413] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-[#E0F2FE] text-[#0369A1] border border-[#141413] font-black text-xs px-2.5 py-0.5 rounded-full">
                  Пакет «Стандарт»
                </span>
                <span className="text-xs font-black text-neutral-500">Для дома и фильмов</span>
              </div>
              <h3 className="text-xl font-black text-[#141413]">
                Windows 11, 10, 8, 7 (Лицензия) + Драйвера
              </h3>
              <div className="text-3xl font-black text-[#141413] my-3">10 000 ₸</div>
              <ul className="space-y-2 text-xs sm:text-sm font-semibold text-neutral-800">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>Установка чистой Windows с сохранением файлов</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>Установка всех драйверов по модели материнки/ноутбука</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>Браузер с блокировкой рекламы + системные обновления</span>
                </li>
              </ul>
            </div>
            <a
              href={getWhatsAppUrl("Салем! Хочу заказать Пакет за 10 000 ₸ (Windows + драйверы).")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full text-center bg-[#141413] hover:bg-[#FF4F18] text-white font-black py-3 rounded-xl border-2 border-[#141413] shadow-[3px_3px_0px_#FF4F18] transition"
            >
              Заказать за 10 000 ₸
            </a>
          </div>

          {/* PACKAGE 2: 15 000 KZT */}
          <div className="bg-[#FFFBEB] border-3 border-[#141413] rounded-3xl p-6 shadow-[8px_8px_0px_#FF4F18] flex flex-col justify-between relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF4F18] text-white border-2 border-[#141413] px-3 py-0.5 rounded-full text-xs font-black uppercase whitespace-nowrap">
              ⭐ Самый частый выбор
            </div>
            <div>
              <div className="flex items-center justify-between mb-3 mt-1">
                <span className="bg-[#FFD600] text-[#141413] border border-[#141413] font-black text-xs px-2.5 py-0.5 rounded-full">
                  Пакет «Офис + Учёба»
                </span>
                <span className="bg-[#16A34A] text-white font-black text-[10px] px-2 py-0.5 rounded">ХИТ</span>
              </div>
              <h3 className="text-xl font-black text-[#141413]">
                Windows + Microsoft Office + Драйвера
              </h3>
              <div className="text-3xl font-black text-[#FF4F18] my-3">15 000 ₸</div>
              <ul className="space-y-2 text-xs sm:text-sm font-semibold text-neutral-900">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4F18] shrink-0 mt-0.5" />
                  <span>Всё из первого пакета (Windows + все драйвера)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4F18] shrink-0 mt-0.5" />
                  <span>Полный Microsoft Office: Word, Excel, PowerPoint, Outlook</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4F18] shrink-0 mt-0.5" />
                  <span>Лицензионный архиватор (WinRAR), PDF Acrobat, Zoom</span>
                </li>
              </ul>
            </div>
            <a
              href={getWhatsAppUrl("Салем! Хочу заказать Пакет за 15 000 ₸ (Windows + Office Word Excel + Драйвера).")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full text-center bg-[#FF4F18] hover:bg-[#e03e0b] text-white font-black py-3.5 rounded-xl border-2 border-[#141413] shadow-[4px_4px_0px_#141413] transition"
            >
              Заказать Хит за 15 000 ₸
            </a>
          </div>

          {/* PACKAGE 3: 20 000 KZT (POPULAR MAX) */}
          <div className="bg-[#141413] text-white border-3 border-[#141413] rounded-3xl p-6 shadow-[6px_6px_0px_#FFD600] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-[#FFD600] text-[#141413] font-black text-xs px-2.5 py-0.5 rounded-full">
                  Пакет «Максимум»
                </span>
                <span className="bg-red-600 text-white font-black text-[10px] px-2 py-0.5 rounded">7 ПРОГРАММ</span>
              </div>
              <h3 className="text-xl font-black text-white">
                Windows + Office + Антивирус + 7 программ
              </h3>
              <div className="text-3xl font-black text-[#FFD600] my-3">20 000 ₸</div>
              <ul className="space-y-2 text-xs sm:text-sm font-semibold text-neutral-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD600] shrink-0 mt-0.5" />
                  <span>Windows + Office (Word, Excel, PowerPoint) + драйвера</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD600] shrink-0 mt-0.5" />
                  <span>7 программ: Chrome, Adobe Acrobat Pro, WinRAR, Telegram, WhatsApp, NCALayer (ЭЦП eGov), Zoom</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD600] shrink-0 mt-0.5" />
                  <span>Надёжный антивирус + чистка автозагрузки и ускорение</span>
                </li>
              </ul>
            </div>
            <a
              href={getWhatsAppUrl("Салем! Хочу заказать Пакет за 20 000 ₸ (Windows + Office + Антивирус + 7 программ + NCALayer).")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full text-center bg-[#FFD600] hover:bg-[#ffe033] text-[#141413] font-black py-3 rounded-xl border-2 border-white transition"
            >
              Заказать за 20 000 ₸
            </a>
          </div>
        </div>
      </section>

      {/* PRO SOFTWARE CATALOG (ADOBE, AUTOCAD, 1C ETC) */}
      <section className="py-12 bg-white border-y-2 border-[#141413]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="bg-[#E0F2FE] text-[#0284C7] border border-[#0284C7] font-black text-xs uppercase px-3 py-1 rounded-full">
                Графический, инженерный и бухгалтерский софт
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#141413] mt-2">
                Установка любых программ любого года — от 7 000 ₸
              </h2>
              <p className="text-sm text-neutral-600 mt-1">
                Для архитекторов, дизайнеров, бухгалтеров, проектировщиков и видеоблогеров
              </p>
            </div>
            <a
              href={getWhatsAppUrl("Здравствуйте! Нужна установка специальной программы (Photoshop / AutoCAD / 1C / другое). Сколько будет стоить?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-[#141413] font-black text-sm px-4 py-3 rounded-xl border-2 border-[#141413] shadow-[3px_3px_0px_#141413]"
            >
              <MessageCircle className="w-4 h-4 fill-current" /> Спросить программу в WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {proPrograms.map((prog, idx) => (
              <span
                key={idx}
                className="bg-[#FAF6F0] hover:bg-[#FFD600] border-2 border-[#141413] text-[#141413] font-bold text-xs sm:text-sm px-3.5 py-2 rounded-xl transition cursor-default shadow-[2px_2px_0px_#141413]"
              >
                {prog}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* GAMES INSTALLATION (ALL FROM USER'S OLX PROFILE) */}
      <section className="py-12 bg-[#141413] text-white border-b-2 border-[#FF4F18]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 text-xs font-black text-[#FFD600] uppercase mb-2">
            <Gamepad2 className="w-4 h-4 text-[#FF4F18]" /> Игровой сервис в Актау
          </div>
          <h2 className="text-2xl sm:text-4xl font-black">
            Установка и оптимизация тяжелых игр под ваш ПК
          </h2>
          <p className="text-neutral-400 text-sm mt-1 max-w-2xl">
            Помогу установить, настроить и выжать максимальный FPS без лагов и вылетов.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
            {gamesList.map((game, idx) => (
              <div
                key={idx}
                className="bg-[#242422] border border-neutral-700 p-3 rounded-xl text-xs sm:text-sm font-bold text-neutral-200 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                <span>{game}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-[#262624] border-2 border-[#FFD600] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs sm:text-sm font-semibold text-neutral-300 text-center sm:text-left">
              Хотите другую игру? Напишите название в WhatsApp — скачаем и настроим!
            </div>
            <a
              href={getWhatsAppUrl("Здравствуйте! Хочу установить игру на компьютер. Подскажите, потянет ли мой ПК?")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFD600] text-[#141413] font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-white whitespace-nowrap"
            >
              Написать по играм в WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* ADDITIONAL IT SERVICES (BOTS, WEBSITES, SCRIPTING) */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-black text-[#141413] mb-6">
          Дополнительные услуги программиста:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border-2 border-[#141413] p-4 rounded-2xl shadow-[4px_4px_0px_#141413]">
            <Code2 className="w-6 h-6 text-[#FF4F18] mb-2" />
            <h4 className="font-black text-sm text-[#141413]">Сайты и боты для бизнеса</h4>
            <p className="text-xs text-neutral-600 mt-1">
              Разработка лендингов, Telegram/WhatsApp ботов для приёма заказов в Актау.
            </p>
          </div>
          <div className="bg-white border-2 border-[#141413] p-4 rounded-2xl shadow-[4px_4px_0px_#141413]">
            <Globe className="w-6 h-6 text-[#0284C7] mb-2" />
            <h4 className="font-black text-sm text-[#141413]">Удалённая помощь</h4>
            <p className="text-xs text-neutral-600 mt-1">
              Подключение через TeamViewer / AnyDesk — решим проблему за 15 минут без выезда.
            </p>
          </div>
          <div className="bg-white border-2 border-[#141413] p-4 rounded-2xl shadow-[4px_4px_0px_#141413]">
            <ShieldCheck className="w-6 h-6 text-[#15803D] mb-2" />
            <h4 className="font-black text-sm text-[#141413]">Очистка от вирусов</h4>
            <p className="text-xs text-neutral-600 mt-1">
              Удаление троянов, вымогателей, сброс забытого пароля Windows.
            </p>
          </div>
          <div className="bg-white border-2 border-[#141413] p-4 rounded-2xl shadow-[4px_4px_0px_#141413]">
            <Cpu className="w-6 h-6 text-[#7E22CE] mb-2" />
            <h4 className="font-black text-sm text-[#141413]">Сборка и апгрейд ПК</h4>
            <p className="text-xs text-neutral-600 mt-1">
              Подбор комплектующих, замена старого HDD на быстрый SSD диск (ускорение в 10 раз).
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0C0C0B] text-neutral-400 py-8 border-t border-neutral-800 text-xs">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <strong className="text-white font-bold">Абдулла А.</strong> — Компьютерная помощь в Актау (31А мкр).
          </div>
          <a href={`tel:${OWNER_PHONE_RAW}`} className="text-white font-bold">
            {OWNER_PHONE_DISPLAY}
          </a>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON (BOTTOM-LEFT) */}
      <a
        href={getWhatsAppUrl("Здравствуйте, Абдулла! Пишу с сайта по установке Windows и программ.")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-[#141413] font-black text-sm px-4 py-3.5 rounded-full border-3 border-[#141413] shadow-[5px_5px_0px_#141413] whatsapp-pulse transition transform hover:scale-105"
      >
        <div className="w-8 h-8 rounded-full bg-[#141413] text-[#25D366] flex items-center justify-center shrink-0">
          <MessageCircle className="w-5 h-5 fill-current" />
        </div>
        <div className="pr-1 leading-tight">
          <div className="text-[10px] uppercase font-extrabold text-[#141413]/80">Онлайн в Актау</div>
          <div className="text-xs sm:text-sm font-black">WhatsApp мастера</div>
        </div>
      </a>
    </div>
  );
}
