import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Flame, MessageCircle, Search, ShieldAlert } from "lucide-react";
import { MASTER_NICHES, OWNER_PHONE_DISPLAY } from "@/data/masters";

export default function GoogleAdsGuidePage() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#141413] py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#141413] text-white font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4" /> Вернуться на главный сайт Windows
          </Link>
          <span className="bg-[#FFD600] border-2 border-[#141413] px-3 py-1 rounded-full font-black text-xs">
            Готовый комплект запуска за 15 минут
          </span>
        </div>

        <div className="bg-white border-3 border-[#141413] rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0px_#141413] space-y-6">
          <h1 className="text-2xl sm:text-4xl font-black">
            Как запустить Google Рекламу в Актау, чтобы звонки пошли уже завтра
          </h1>
          <p className="text-neutral-700 font-medium text-sm sm:text-base">
            Вся техническая часть (11 быстрых лендингов, заголовки под поиск Google и кнопки WhatsApp на номер{" "}
            <strong>{OWNER_PHONE_DISPLAY}</strong>) уже настроена. Вот готовые тексты объявлений и ключевые слова — просто скопируй и вставь в кабинет{" "}
            <strong>ads.google.com</strong>.
          </p>

          {/* STEP 1 */}
          <div className="bg-[#FAF6F0] border-2 border-[#141413] rounded-2xl p-5 space-y-3">
            <div className="font-black text-lg flex items-center gap-2 text-[#FF4F18]">
              <Flame className="w-5 h-5" /> Шаг 1. Настройки кампании (чтобы не слить бюджет)
            </div>
            <ul className="space-y-2 text-sm font-semibold text-neutral-800">
              <li>
                • <strong>Режим:</strong> при создании кампании нажми внизу «Перейти в режим эксперта» → «Создать кампанию без цели» → <strong>«Поисковая сеть» (Search)</strong>.
              </li>
              <li>
                • <strong>Сети:</strong> ОБЯЗАТЕЛЬНО сними галочку с «Контекстно-медийная сеть (КМС)»! Оставляем только чистый Поиск Google, где люди сами ищут мастера.
              </li>
              <li>
                • <strong>Местоположение:</strong> выбери город <strong>Актау (Мангистауская область)</strong> → в «Вариантах местоположения» выбери «Присутствие: люди, находящиеся в целевых местоположениях».
              </li>
              <li>
                • <strong>Дневной бюджет:</strong> поставь <strong>2 000 – 3 000 ₸ в день</strong> (один клик по Актау стоит ~60–120 ₸, один заказ за 7 000–19 000 ₸ окупает неделю рекламы с первой же заявки).
              </li>
            </ul>
          </div>

          {/* STEP 2: WINDOWS CAMPAIGN */}
          <div className="bg-[#FFFBEB] border-2 border-[#141413] rounded-2xl p-5 space-y-3">
            <div className="font-black text-lg flex items-center gap-2">
              <Search className="w-5 h-5 text-[#FF4F18]" /> Шаг 2. Ключевые слова и объявления для ТВОЕГО сайта (Установка Windows)
            </div>
            <div className="text-xs font-bold uppercase text-neutral-500">
              Ключевые слова (вставить списком):
            </div>
            <pre className="bg-[#141413] text-[#FFD600] p-4 rounded-xl text-xs font-mono overflow-x-auto">
{`"установка windows актау"
"переустановка виндовс актау"
"установить виндовс актау на дому"
"компьютерный мастер актау"
"установка microsoft office актау"
"чистка ноутбука от пыли актау"
"ремонт ноутбуков актау выезд"`}
            </pre>

            <div className="text-xs font-bold uppercase text-neutral-500 pt-2">
              Минус-слова (чтобы не платить за тех, кто ищет бесплатный торрент):
            </div>
            <pre className="bg-red-950 text-red-200 p-3 rounded-xl text-xs font-mono overflow-x-auto">
{`скачать бесплатно торрент ключ активатор образ флешка самостоятельно ютуб драйверпак`}
            </pre>

            <div className="text-xs font-bold uppercase text-neutral-500 pt-2">
              Готовые заголовки объявления Google Ads:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold">
              <div className="bg-white p-2.5 rounded-lg border border-neutral-300">
                Заголовок 1: Установка Windows в Актау 7000₸
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-neutral-300">
                Заголовок 2: Выезд На Дом за 30 Мин — 0 ₸!
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-neutral-300">
                Заголовок 3: Windows 10/11 + Office (Word)
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-neutral-300">
                Заголовок 4: Акция -25% • Гарантия 1 Год
              </div>
            </div>
          </div>

          {/* STEP 3: WHATSAPP AUTO-REPLY SCRIPT */}
          <div className="bg-[#DCFCE7] border-2 border-[#141413] rounded-2xl p-5 space-y-3">
            <div className="font-black text-lg flex items-center gap-2 text-[#15803D]">
              <MessageCircle className="w-5 h-5" /> Шаг 3. Готовый текст для твоего автоответчика в WhatsApp Business
            </div>
            <p className="text-xs sm:text-sm text-neutral-800 font-medium">
              В приложении <strong>WhatsApp Business</strong> → Настройки → Инструменты для бизнеса → «Приветственное сообщение» вставь этот текст:
            </p>
            <pre className="bg-white border-2 border-[#141413] p-4 rounded-xl text-xs sm:text-sm font-semibold whitespace-pre-wrap text-[#141413]">
{`Сәлеметсіз бе! Здравствуйте! 👋
Я компьютерный мастер по Актау (выезд на дом 0 ₸ за 30 минут).

За вами закреплена СКИДКА с сайта по акции:
✅ Пакет №1 (Чистая Windows 10/11 + драйверы) — 7 000 ₸ (вместо 15 000 ₸)
⭐ Пакет №2 (Windows + полный Word, Excel, PowerPoint + защита) — 15 000 ₸
🔥 Пакет №3 (Всё включено + проф. программы + чистка от перегрева) — 19 000 ₸

Напишите, пожалуйста:
1. Какой у вас компьютер (ноутбук или ПК)?
2. В какой микрорайон Актау подъехать и в какое время вам удобно?`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
