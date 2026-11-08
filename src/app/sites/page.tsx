"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  Zap,
  Flame,
  Sparkles,
  MapPin,
  Laptop,
  Globe,
  Star,
  Download,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Clock,
  Code2,
  Smartphone,
  ChevronRight,
  ChevronDown,
  Layers,
  BarChart3,
  HelpCircle,
  ExternalLink,
} from "lucide-react";

const OWNER_PHONE_DISPLAY = "+7 (778) 804-69-20";
const OWNER_PHONE_RAW = "+77788046920";
const OWNER_WHATSAPP_NUMBER = "77788046920";

function getWhatsAppUrl(text: string) {
  return `https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function SitesLandingPage() {
  // Calculator state
  const [selectedPackage, setSelectedPackage] = useState<"start" | "hit" | "pro">("hit");
  const [needKzDomain, setNeedKzDomain] = useState(false);
  const [needMultilingual, setNeedMultilingual] = useState(false);
  const [needKaspiQr, setNeedKaspiQr] = useState(false);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const packagePrices = {
    start: 25000,
    hit: 55000,
    pro: 95000,
  };

  const packageNames = {
    start: "Экспресс-Визитка (25 000 ₸)",
    hit: "Бизнес-Хит / Услуги & Автосервис (55 000 ₸)",
    pro: "Премиум Каталог & PWA (95 000 ₸)",
  };

  const calculateTotal = () => {
    let total = packagePrices[selectedPackage];
    if (needKzDomain) total += 3500;
    if (needMultilingual) total += 10000;
    if (needKaspiQr) total += 8000;
    return total;
  };

  const getCalcWhatsAppUrl = () => {
    const total = calculateTotal();
    const domainText = needKzDomain ? " + домен .kz" : "";
    const langText = needMultilingual ? " + казахский язык" : "";
    const kaspiText = needKaspiQr ? " + Kaspi QR" : "";
    const message = `Салем, Абдулла! Рассчитал стоимость сайта на твоём калькуляторе:\n- Пакет: ${packageNames[selectedPackage]}${domainText}${langText}${kaspiText}\nИтоговая сумма: ${total.toLocaleString("ru-RU")} ₸.\nХочу обсудить проект для моего бизнеса!`;
    return getWhatsAppUrl(message);
  };

  const packages = [
    {
      id: "start",
      badge: "Быстрый запуск • 24-48 часов",
      badgeColor: "bg-[#DCFCE7] text-[#15803D] border-[#86EFAC]",
      title: "Экспресс-Визитка",
      subtitle: "Идеально для мастеров, услуг и быстрого теста ниши",
      price: "25 000 ₸",
      timeline: "Срок: 1–2 дня",
      popular: false,
      features: [
        "1 продающая страница с высокой конверсией",
        "Адаптив 100% под мобильные экраны и браузеры",
        "Прямой переход клиентов в твой WhatsApp",
        "Блок с прайс-листом и описанием услуг",
        "Интеграция с локацией, картой и кнопкой звонка",
        "Размещение на быстром бесплатном хостинге Vercel",
        "Пожизненно без абонентской платы",
      ],
      whatsappMsg: "Салем, Абдулла! Хочу заказать тариф «Экспресс-Визитка» за 25 000 ₸.",
    },
    {
      id: "hit",
      badge: "🔥 Самый популярный выбор в Актау",
      badgeColor: "bg-[#FFD600] text-[#141413] border-[#141413]",
      title: "Бизнес-Хит / Услуги",
      subtitle: "Для автосервисов, клининга, ремонта, салонов и аренды",
      price: "55 000 ₸",
      timeline: "Срок: 2–3 дня",
      popular: true,
      features: [
        "Всё из пакета «Визитка» + полный функционал",
        "Сайт уровня mangistau.vercel.app (с таймерами и акциями)",
        "PWA: клиент может установить иконку сайта на экран смартфона",
        "Интерактивный калькулятор стоимости для клиентов",
        "Оптимизация под рекламу в Instagram/Target (быстрое открытие в Webview)",
        "Базовая SEO-оптимизация под Google и Яндекс (Актау)",
        "Точки на 2GIS и Яндекс Картах с прямым маршрутом",
        "Помощь с привязкой персонального домена .kz",
      ],
      whatsappMsg: "Салем, Абдулла! Хочу заказать тариф «Бизнес-Хит» за 55 000 ₸.",
    },
    {
      id: "pro",
      badge: "Максимальный функционал",
      badgeColor: "bg-[#F3E8FF] text-[#7E22CE] border-[#D8B4FE]",
      title: "Премиум Каталог & PWA",
      subtitle: "Для магазинов, баз отдыха на Каспии и компаний",
      price: "95 000 ₸",
      timeline: "Срок: 4–6 дней",
      popular: false,
      features: [
        "Всё из пакета «Бизнес-Хит»",
        "Полноценный каталог товаров / услуг с поиском и фильтрами",
        "База данных (Supabase) + панель управления ценами",
        "Мультиязычность: полноценные версии на казахском и русском",
        "Интеграция онлайн-записи или кнопки Kaspi QR",
        "Расширенная SEO-структура для топа поисковой выдачи",
        "1 месяц бесплатного технического сопровождения",
      ],
      whatsappMsg: "Салем, Абдулла! Интересует тариф «Премиум Каталог & PWA» за 95 000 ₸.",
    },
  ];

  const comparisons = [
    {
      criteria: "Скорость загрузки первого экрана",
      mySite: "0.3–0.6 сек (мгновенно на 4G)",
      tilda: "2.8–5.0 сек (тяжелые скрипты)",
    },
    {
      criteria: "Ежемесячная абонентская плата",
      mySite: "0 ₸ навсегда (хостинг бесплатный)",
      tilda: "от 6 000 ₸ / месяц (72 000 ₸ в год!)",
    },
    {
      criteria: "Установка на телефон как приложение (PWA)",
      mySite: "Да, иконка ставится прямо на рабочий стол",
      tilda: "Нет или через сложные костыли",
    },
    {
      criteria: "Открытие внутри WhatsApp и Instagram",
      mySite: "Летает без зависаний и белых экранов",
      tilda: "Часто подвисает на слабых смартфонах",
    },
    {
      criteria: "Право собственности на сайт",
      mySite: "Исходный код ваш навсегда на GitHub",
      tilda: "Привязаны к платформе, не перенести",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Обсуждение задачи в WhatsApp",
      desc: "Вы отправляете свои услуги, цены, фото и пожелания. За 15 минут формируем структуру будущего сайта.",
    },
    {
      step: "02",
      title: "Сборка и продающий дизайн",
      desc: "Пишу продающие тексты без воды, верстаю быстрый интерфейс в едином стиле под ваш бренд.",
    },
    {
      step: "03",
      title: "Тестирование на вашем телефоне",
      desc: "Скидываю готовую рабочую ссылку. Вы открываете сайт на своём смартфоне, нажимаете кнопки, проверяете заявки.",
    },
    {
      step: "04",
      title: "Запуск и оплата Kaspi",
      desc: "Подключаем домен, настраиваем аналитику. Оплата происходит только ПОСЛЕ того, как вы приняли работу!",
    },
  ];

  const faqs = [
    {
      q: "Нужно ли будет платить каждый месяц за сайт?",
      a: "Нет! В отличие от конструкторов вроде Tilda или Wix, где с вас берут от 6 000 ₸ ежемесячно, этот сайт написан на чистом коде (Next.js/React). Он размещается на современном бесплатном хостинге Vercel. Единственный возможный расход — продление личного домена (.kz стоит всего ~3 500 ₸ раз в год).",
    },
    {
      q: "Как ко мне будут приходить заявки клиентов?",
      a: "На сайте установлены умные кнопки связи. Когда клиент нажимает на услугу или кнопку связи, у него сразу открывается WhatsApp с уже вписанным готовым сообщением (например: «Здравствуйте! Хочу заказать химчистку за 15 000 ₸»). Клиенту остаётся лишь нажать «Отправить».",
    },
    {
      q: "Подойдет ли такой сайт для рекламы в Instagram и 2GIS?",
      a: "Это лучший формат для рекламы. Когда люди кликают по ссылке из сторис или профиля Instagram, сайт открывается мгновенно, без задержек. Страница не теряет ни одного потенциального клиента из-за долгой загрузки.",
    },
    {
      q: "Что такое PWA и зачем оно бизнесу?",
      a: "PWA (Progressive Web App) позволяет вашим постоянным клиентам нажать одну кнопку и добавить иконку вашего сервиса на домашний экран iPhone или Android как обычное приложение из AppStore/GooglePlay, без необходимости скачивать его через маркеты.",
    },
    {
      q: "Как происходит оплата?",
      a: "Я работаю честно и без кота в мешке: собираю сайт, показываю вам живой результат по ссылке. Вы тестируете всё лично на телефоне. Когда всё нравится — переводите оплату через Kaspi Pay или Kaspi Gold.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#141413] relative pb-28 md:pb-16">
      {/* TOP NOTIFICATION BAR */}
      <div className="bg-[#141413] text-white border-b-2 border-[#FF4F18] px-4 py-2.5 sticky top-0 z-40 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold">
            <span className="inline-flex items-center gap-1 bg-[#15803D] text-white px-2.5 py-0.5 rounded-full text-xs uppercase font-black">
              <Zap className="w-3.5 h-3.5 fill-current" /> Актау • Разработка сайтов
            </span>
            <span>
              Готовые продающие лендинги от <strong className="text-[#FFD600] underline">25 000 ₸</strong> с оплатой после приёмки!
            </span>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs text-neutral-300 hover:text-white underline font-semibold transition"
          >
            ← Вернуться к установке Windows
          </Link>
        </div>
      </div>

      {/* HEADER */}
      <header className="max-w-6xl mx-auto px-4 pt-5 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#141413] text-[#FFD600] flex items-center justify-center font-black text-2xl shadow-[3px_3px_0px_#FF4F18] border-2 border-[#141413]">
            ⚡
          </div>
          <div>
            <div className="font-black text-lg sm:text-xl leading-tight flex items-center gap-2">
              Абдулла А. • WebDev
              <span className="text-[11px] font-bold bg-[#DCFCE7] text-[#15803D] border border-[#86EFAC] px-2 py-0.5 rounded-full">
                Приём заказов
              </span>
            </div>
            <p className="text-xs text-neutral-600 flex items-center gap-1 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#FF4F18]" />
              Разработка быстрых сайтов • Актау и Жанаозен
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={getWhatsAppUrl("Салем, Абдулла! Хочу проконсультироваться по созданию сайта для своего бизнеса.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-[#141413] font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl border-2 border-[#141413] shadow-[3px_3px_0px_#141413] transition"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Написать в WhatsApp</span>
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

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 pt-6 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#FFE8D6] border-2 border-[#141413] px-3.5 py-1.5 rounded-full shadow-[3px_3px_0px_#141413]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-ping" />
              <span className="text-xs sm:text-sm font-black uppercase text-[#141413]">
                Сайты с прямой конверсией в WhatsApp
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-black leading-[1.08] tracking-tight text-[#141413]">
              Разработка продающих сайтов и PWA под ключ в Актау{" "}
              <span className="bg-[#FF4F18] text-white px-3 py-0.5 rounded-xl border-2 border-[#141413] inline-block shadow-[4px_4px_0px_#141413]">
                от 25 000 ₸
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-700 font-medium leading-relaxed">
              Создаю такие же сверхбыстрые и понятные сайты, как этот. Без тормозящих конструкторов.
              Сайт открывается за доли секунды в Instagram и WhatsApp, ставится на экран телефона как приложение и сразу генерирует готовые заказы.
            </p>

            {/* Quick Action Box */}
            <div className="bg-white border-3 border-[#141413] rounded-3xl p-5 sm:p-6 shadow-[6px_6px_0px_#141413] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-[#FF4F18]">
                    🚀 Лендинг под ключ с гарантией:
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-[#141413]">
                    от 25 000 ₸{" "}
                    <span className="text-sm font-bold text-neutral-400">/ готовность 1-3 дня</span>
                  </div>
                </div>
                <span className="bg-[#DCFCE7] text-[#15803D] border border-[#15803D] text-xs font-black px-3 py-1 rounded-lg">
                  Оплата ПОСЛЕ приёмки
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={getWhatsAppUrl("Салем, Абдулла! Хочу заказать продающий сайт для своего бизнеса в Актау.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-[#141413] font-black text-base py-4 rounded-xl border-2 border-[#141413] shadow-[4px_4px_0px_#141413] transition active:translate-x-0.5 active:translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-current" /> Написать в WhatsApp
                </a>
                <a
                  href={`tel:${OWNER_PHONE_RAW}`}
                  className="flex items-center justify-center gap-2 bg-[#FF4F18] hover:bg-[#e03e0b] text-white font-black text-base py-4 rounded-xl border-2 border-[#141413] shadow-[4px_4px_0px_#141413] transition active:translate-x-0.5 active:translate-y-0.5"
                >
                  <Phone className="w-5 h-5" /> Позвонить: {OWNER_PHONE_DISPLAY}
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-neutral-200 text-xs font-bold text-neutral-600">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D]" /> Без ежемесячных оплат
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D]" /> Загрузка за 0.4 сек
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D]" /> Kaspi оплата
                </span>
              </div>
            </div>
          </div>

          {/* Right Hero Feature Bento */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#141413] text-white border-3 border-[#141413] rounded-3xl p-6 shadow-[6px_6px_0px_#FFD600] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-[#FFD600] tracking-wider">
                  🔥 Живой пример перед глазами
                </span>
                <span className="bg-[#262624] text-xs font-mono font-bold px-2 py-0.5 rounded text-neutral-300">
                  Next.js + PWA
                </span>
              </div>

              <h3 className="text-xl font-black leading-snug">
                Сайт, на котором вы находитесь — живое доказательство скорости и удобства
              </h3>

              <div className="space-y-2.5 text-xs text-neutral-300 font-medium">
                <div className="flex items-start gap-2.5 bg-[#262624] p-3 rounded-xl border border-neutral-700">
                  <Zap className="w-4 h-4 text-[#FFD600] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold">Молниеносная скорость</strong>
                    Не тупит в сотовых сетях Kcell/Tele2/Beeline, загружается моментально.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-[#262624] p-3 rounded-xl border border-neutral-700">
                  <Smartphone className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold">100% мобильный фокус</strong>
                    92% клиентов в Актау заказывают услуги с телефона через WhatsApp.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-[#262624] p-3 rounded-xl border border-neutral-700">
                  <ShieldCheck className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold">Чистый код без конструкторов</strong>
                    Сайт принадлежит вам на 100%, исходники на GitHub, никакой аренды.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#pricing"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FFD600] hover:bg-[#FACC15] text-[#141413] font-black text-sm py-3 rounded-xl border-2 border-[#141413] shadow-[3px_3px_0px_white] transition"
                >
                  <span>Выбрать тариф ниже</span>
                  <ChevronDown className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON: NEXT.JS VS TILDA */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-[#FEF3C7] border border-[#B45309] text-[#B45309] text-xs font-black px-3 py-1 rounded-full uppercase">
            Честное сравнение
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#141413]">
            Почему чистый код выгоднее, чем конструкторы
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-semibold">
            Реальная разница между сайтом на современном стеке и шаблонными сервисами
          </p>
        </div>

        <div className="overflow-x-auto bg-white border-3 border-[#141413] rounded-3xl shadow-[6px_6px_0px_#141413]">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b-2 border-[#141413] bg-[#F2ECE1]">
                <th className="p-3.5 sm:p-4 font-black text-neutral-800">Критерий</th>
                <th className="p-3.5 sm:p-4 font-black bg-[#DCFCE7] text-[#15803D] border-x-2 border-[#141413]">
                  ⚡ Мой сайт (Next.js / PWA)
                </th>
                <th className="p-3.5 sm:p-4 font-black text-neutral-500">
                  Типовая Tilda / Конструктор
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {comparisons.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"}>
                  <td className="p-3.5 sm:p-4 font-bold text-[#141413]">{row.criteria}</td>
                  <td className="p-3.5 sm:p-4 font-black text-[#15803D] bg-[#F0FDF4] border-x-2 border-[#141413]">
                    {row.mySite}
                  </td>
                  <td className="p-3.5 sm:p-4 text-neutral-500 font-medium">{row.tilda}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* PRICING PACKAGES */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-[#FF4F18] text-white text-xs font-black px-3 py-1 rounded-full uppercase">
            Прозрачный прайс-лист
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#141413]">
            Тарифы на разработку сайтов в Актау
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-semibold">
            Фиксированная цена ДО старта. Никаких скрытых платежей и предоплат кота в мешке.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl border-3 border-[#141413] p-6 flex flex-col justify-between transition relative ${
                pkg.popular
                  ? "bg-white shadow-[8px_8px_0px_#141413] ring-4 ring-[#FFD600]/40 -translate-y-1"
                  : "bg-white shadow-[5px_5px_0px_#141413]"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-lg border ${pkg.badgeColor}`}>
                    {pkg.badge}
                  </span>
                  <span className="text-xs font-bold text-neutral-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {pkg.timeline}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#141413]">{pkg.title}</h3>
                  <p className="text-xs text-neutral-600 font-semibold mt-1">{pkg.subtitle}</p>
                </div>

                <div className="p-3 bg-[#FAF6F0] rounded-2xl border-2 border-neutral-300">
                  <div className="text-xs font-black uppercase text-neutral-500">Стоимость под ключ:</div>
                  <div className="text-3xl font-black text-[#141413]">{pkg.price}</div>
                </div>

                <div className="space-y-2 pt-2 border-t border-neutral-200">
                  <div className="text-xs font-black uppercase text-neutral-700">Что входит в стоимость:</div>
                  <ul className="space-y-2 text-xs font-bold text-neutral-700">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href={getWhatsAppUrl(pkg.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl border-2 border-[#141413] font-black text-sm transition active:translate-x-0.5 active:translate-y-0.5 ${
                    pkg.popular
                      ? "bg-[#25D366] hover:bg-[#1ebe5d] text-[#141413] shadow-[4px_4px_0px_#141413]"
                      : "bg-[#FFD600] hover:bg-[#FACC15] text-[#141413] shadow-[3px_3px_0px_#141413]"
                  }`}
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Заказать за {pkg.price}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE CALCULATOR */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-[#141413] text-white border-3 border-[#141413] rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0px_#FF4F18] space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-neutral-700 pb-4">
            <div>
              <span className="text-[#FFD600] text-xs font-black uppercase tracking-wider">
                Калькулятор стоимости
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Соберите точную конфигурацию сайта
              </h3>
            </div>
            <span className="bg-[#262624] text-neutral-300 text-xs font-semibold px-3 py-1 rounded-lg border border-neutral-700">
              Расчет за 10 секунд
            </span>
          </div>

          {/* Step 1: Base Package */}
          <div className="space-y-3">
            <div className="text-xs font-black uppercase text-neutral-400">1. Выберите базовый тариф:</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: "start", name: "Экспресс-Визитка", price: "25 000 ₸" },
                { id: "hit", name: "Бизнес-Хит (Услуги)", price: "55 000 ₸" },
                { id: "pro", name: "Премиум Каталог & PWA", price: "95 000 ₸" },
              ].map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedPackage(p.id as any)}
                  className={`p-3.5 rounded-xl border-2 text-left transition ${
                    selectedPackage === p.id
                      ? "bg-[#FFD600] text-[#141413] border-white font-black shadow-[3px_3px_0px_white]"
                      : "bg-[#262624] text-neutral-300 border-neutral-700 hover:border-neutral-500 font-bold"
                  }`}
                >
                  <div className="text-xs uppercase">{p.name}</div>
                  <div className="text-base font-black mt-1">{p.price}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Add-ons */}
          <div className="space-y-3">
            <div className="text-xs font-black uppercase text-neutral-400">2. Дополнительные опции:</div>
            <div className="space-y-2">
              <label className="flex items-center justify-between p-3 bg-[#262624] hover:bg-[#2e2e2c] rounded-xl border border-neutral-700 cursor-pointer transition">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={needKzDomain}
                    onChange={(e) => setNeedKzDomain(e.target.checked)}
                    className="w-4 h-4 accent-[#FFD600] rounded"
                  />
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white">
                      Персональный домен .KZ (например, vashsalon.kz)
                    </div>
                    <div className="text-[11px] text-neutral-400">Регистрация и привязка DNS на 1 год</div>
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-black text-[#FFD600]">+3 500 ₸</span>
              </label>

              <label className="flex items-center justify-between p-3 bg-[#262624] hover:bg-[#2e2e2c] rounded-xl border border-neutral-700 cursor-pointer transition">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={needMultilingual}
                    onChange={(e) => setNeedMultilingual(e.target.checked)}
                    className="w-4 h-4 accent-[#FFD600] rounded"
                  />
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white">
                      Мультиязычность (Казахский + Русский переключатель)
                    </div>
                    <div className="text-[11px] text-neutral-400">Грамотный перевод интерфейса и услуг на қазақша</div>
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-black text-[#FFD600]">+10 000 ₸</span>
              </label>

              <label className="flex items-center justify-between p-3 bg-[#262624] hover:bg-[#2e2e2c] rounded-xl border border-neutral-700 cursor-pointer transition">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={needKaspiQr}
                    onChange={(e) => setNeedKaspiQr(e.target.checked)}
                    className="w-4 h-4 accent-[#FFD600] rounded"
                  />
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white">
                      Интеграция Kaspi QR / Оплата на сайте
                    </div>
                    <div className="text-[11px] text-neutral-400">Кнопка быстрой оплаты или перевод по QR-коду</div>
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-black text-[#FFD600]">+8 000 ₸</span>
              </label>
            </div>
          </div>

          {/* Result Box */}
          <div className="bg-[#262624] p-4 sm:p-5 rounded-2xl border-2 border-neutral-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs text-neutral-400 font-semibold uppercase">Итоговая стоимость проекта:</div>
              <div className="text-3xl sm:text-4xl font-black text-[#FFD600]">
                {calculateTotal().toLocaleString("ru-RU")} ₸
              </div>
              <div className="text-[11px] text-[#22C55E] font-bold mt-0.5">
                Оплата через Kaspi только после готовности сайта!
              </div>
            </div>

            <a
              href={getCalcWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-[#141413] font-black text-sm px-6 py-4 rounded-xl border-2 border-[#141413] shadow-[4px_4px_0px_white] transition active:translate-x-0.5 active:translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Зафиксировать цену в WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* HOW WE WORK STEPS */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-[#DCFCE7] text-[#15803D] border border-[#15803D] text-xs font-black px-3 py-1 rounded-full uppercase">
            Прозрачный процесс
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#141413]">
            Как строится работа от заявки до запуска
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-semibold">
            Всего 4 простых шага без лишней бюрократии и сложных технических терминов
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((st, i) => (
            <div
              key={i}
              className="bg-white border-3 border-[#141413] rounded-3xl p-5 shadow-[5px_5px_0px_#141413] space-y-3 flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-black text-[#FF4F18] font-mono">{st.step}</span>
                <h4 className="text-base font-black text-[#141413] mt-1">{st.title}</h4>
                <p className="text-xs text-neutral-600 font-medium leading-relaxed mt-2">{st.desc}</p>
              </div>
              <div className="pt-2 flex items-center gap-1 text-[11px] font-bold text-[#15803D]">
                <CheckCircle2 className="w-3.5 h-3.5" /> Шаг согласован
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SHOWCASE / EXAMPLES */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-[#FAF7F2] border-3 border-[#141413] rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#141413] space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b-2 border-neutral-200 pb-4">
            <div>
              <span className="text-xs font-black uppercase text-[#FF4F18]">Портфолио & Примеры</span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#141413]">
                Сайты, которые уже работают на реальный результат
              </h3>
            </div>
            <span className="bg-[#DCFCE7] text-[#15803D] font-bold text-xs px-3 py-1 rounded-lg border border-[#86EFAC]">
              Живые проекты
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Project 1 */}
            <div className="bg-white border-2 border-[#141413] rounded-2xl p-4 shadow-[4px_4px_0px_#141413] space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-[#FFE8D6] text-[#C2410C] text-[10px] font-black uppercase px-2 py-0.5 rounded">
                  Компьютерные услуги
                </span>
                <span className="text-xs font-mono font-bold text-neutral-400">mangistau.vercel.app</span>
              </div>
              <h4 className="font-black text-base text-[#141413]">Mangistau IT Service</h4>
              <p className="text-xs text-neutral-600 font-medium">
                Лендинг для услуг компьютерного мастера в Актау: динамический таймер скидки, WhatsApp-заявки, калькулятор пакетов.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#FF4F18] hover:underline"
              >
                <span>Открыть сайт</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Project 2 */}
            <div className="bg-white border-2 border-[#141413] rounded-2xl p-4 shadow-[4px_4px_0px_#141413] space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-[#E0F2FE] text-[#0369A1] text-[10px] font-black uppercase px-2 py-0.5 rounded">
                  Автобизнес
                </span>
                <span className="text-xs font-mono font-bold text-neutral-400">PWA App</span>
              </div>
              <h4 className="font-black text-base text-[#141413]">Car-PWA Автосервис</h4>
              <p className="text-xs text-neutral-600 font-medium">
                Веб-приложение для клиентов СТО и автоуслуг: быстрый выбор поломки, расчет стоимости и моментальная запись в бокс.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-neutral-500">
                PWA • Установка на телефон
              </span>
            </div>

            {/* Project 3 */}
            <div className="bg-white border-2 border-[#141413] rounded-2xl p-4 shadow-[4px_4px_0px_#141413] space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-[#FEF3C7] text-[#B45309] text-[10px] font-black uppercase px-2 py-0.5 rounded">
                  EdTech / База данных
                </span>
                <span className="text-xs font-mono font-bold text-neutral-400">Supabase</span>
              </div>
              <h4 className="font-black text-base text-[#141413]">Qazaqpedia</h4>
              <p className="text-xs text-neutral-600 font-medium">
                Интерактивная образовательная платформа с быстрой фильтрацией, поиском и мобильной оптимизацией.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-neutral-500">
                Next.js • Supabase
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-[#F2ECE1] border border-neutral-300 text-neutral-800 text-xs font-black px-3 py-1 rounded-full uppercase">
            Вопросы и ответы
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#141413]">
            Часто задаваемые вопросы
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-[#141413] rounded-2xl shadow-[4px_4px_0px_#141413] overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-left font-black text-sm sm:text-base text-[#141413] hover:bg-[#FAF7F2] transition"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 transition-transform ${openFaq === idx ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed border-t border-neutral-200 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="max-w-6xl mx-auto px-4 pt-6 pb-12">
        <div className="bg-[#FF4F18] text-white border-3 border-[#141413] rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_#141413] text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-[#141413] text-[#FFD600] px-3.5 py-1 rounded-full text-xs font-black uppercase">
            ⚡ Начнём уже сегодня
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight max-w-3xl mx-auto">
            Готовы запустить продающий сайт для вашего бизнеса в Актау?
          </h2>

          <p className="text-xs sm:text-base font-semibold max-w-xl mx-auto text-white/90">
            Напишите в WhatsApp, расскажите о своих услугах — и уже завтра у вас будет готовый рабочий прототип с реальными ценами и кнопками приёма заявок.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={getWhatsAppUrl("Салем, Абдулла! Хочу заказать продающий сайт. Можем обсудить детали?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-[#141413] font-black text-sm sm:text-base px-6 py-4 rounded-xl border-2 border-[#141413] shadow-[4px_4px_0px_#141413] transition active:translate-x-0.5 active:translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Написать в WhatsApp</span>
            </a>
            <a
              href={`tel:${OWNER_PHONE_RAW}`}
              className="inline-flex items-center gap-2 bg-[#141413] hover:bg-neutral-800 text-white font-black text-sm sm:text-base px-6 py-4 rounded-xl border-2 border-[#141413] shadow-[4px_4px_0px_white] transition active:translate-x-0.5 active:translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              <span>Позвонить: {OWNER_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-4 pt-6 border-t-2 border-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs font-bold text-neutral-600">
        <div>
          © {new Date().getFullYear()} Абдулла А. • Разработка продающих сайтов и PWA в Актау.
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="hover:text-[#FF4F18] underline transition">
            Ремонт и переустановка Windows
          </Link>
          <a
            href={getWhatsAppUrl("Салем, Абдулла!")}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#15803D] underline transition"
          >
            WhatsApp мастера
          </a>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={getWhatsAppUrl("Здравствуйте, Абдулла! Пишу со страницы по разработке сайтов.")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-[#141413] font-black text-sm px-4 py-3.5 rounded-full border-3 border-[#141413] shadow-[5px_5px_0px_#141413] whatsapp-pulse transition active:translate-x-0.5 active:translate-y-0.5"
      >
        <div className="w-8 h-8 rounded-full bg-[#141413] text-[#25D366] flex items-center justify-center shrink-0">
          <MessageCircle className="w-5 h-5 fill-current" />
        </div>
        <div className="pr-1 leading-tight">
          <div className="text-[10px] uppercase font-extrabold text-[#141413]/80">Заказать сайт</div>
          <div className="text-xs sm:text-sm font-black">WhatsApp мастера</div>
        </div>
      </a>
    </div>
  );
}
