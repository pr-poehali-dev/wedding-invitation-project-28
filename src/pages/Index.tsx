import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHOTO = "https://cdn.poehali.dev/projects/8b25d0d8-219a-4f89-a360-9ac0c073bb21/files/ad3af94a-1217-4bcb-9140-a4f2c9182d5b.jpg";
const PHOTO_OLEG_YULIA = "https://cdn.poehali.dev/projects/8b25d0d8-219a-4f89-a360-9ac0c073bb21/bucket/44471da9-c4bf-4e7c-9c1d-859b17bf4e2c.jpg";
const PHOTO_IVAN_ANASTASIA = "https://cdn.poehali.dev/projects/8b25d0d8-219a-4f89-a360-9ac0c073bb21/bucket/7a7b03df-a0a3-4482-b331-c6bd83f96041.jpg";

export default function Index() {
  const [form, setForm] = useState({ name: "", guests: "1", attending: "yes", wishes: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen font-cormorant" style={{ background: "var(--wedding-cream)" }}>

      {/* ── ЗАГОЛОВОК ── */}
      <div className="pt-16 pb-8 text-center opacity-0 animate-fade-up" style={{ background: "var(--wedding-cream)" }}>
        <p className="font-montserrat tracking-[0.35em] text-xs uppercase mb-3" style={{ color: "var(--wedding-muted)" }}>приглашение</p>
        <h1 className="text-4xl md:text-6xl font-light italic" style={{ color: "var(--wedding-dark)" }}>Двойное торжество</h1>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="h-px w-12" style={{ background: "var(--wedding-gold)" }} />
          <span className="font-montserrat text-xs tracking-widest" style={{ color: "var(--wedding-muted)" }}>26 ИЮЛЯ 2026</span>
          <div className="h-px w-12" style={{ background: "var(--wedding-gold)" }} />
        </div>
      </div>

      {/* ── ПЕРВАЯ ПАРА — ОЛЕГ И ЮЛИЯ ── */}
      <section className="relative flex flex-col md:flex-row overflow-hidden" style={{ minHeight: "60vh" }}>
        {/* Левая часть — фото */}
        <div className="md:w-1/2 relative overflow-hidden" style={{ minHeight: "50vh" }}>
          <img
            src={PHOTO_OLEG_YULIA}
            alt="Олег и Юлия"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 65%, var(--wedding-cream) 100%)" }} />
          <div className="absolute inset-0 md:hidden" style={{ background: "linear-gradient(to bottom, transparent 60%, var(--wedding-cream) 100%)" }} />
        </div>

        {/* Правая часть — только имена первой пары */}
        <div className="md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12 md:py-0" style={{ background: "var(--wedding-cream)" }}>
          <p className="font-montserrat tracking-[0.35em] text-xs uppercase mb-6 opacity-0 animate-fade-up-delay" style={{ color: "var(--wedding-muted)" }}>
            первая пара
          </p>
          <div className="opacity-0 animate-fade-up-delay">
            <h2 className="text-6xl md:text-7xl font-light italic leading-tight" style={{ color: "var(--wedding-dark)" }}>Олег</h2>
            <div className="flex items-center gap-3 my-2">
              <div className="h-px w-8" style={{ background: "var(--wedding-gold)" }} />
              <span className="text-xl" style={{ color: "var(--wedding-gold)" }}>&</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-light italic leading-tight" style={{ color: "var(--wedding-dark)" }}>Юлия</h2>
          </div>
        </div>
      </section>

      {/* ── ВТОРАЯ ПАРА — ИВАН И АНАСТАСИЯ ── */}
      <section className="relative flex flex-col md:flex-row overflow-hidden" style={{ minHeight: "60vh" }}>

        {/* Левая часть — имена */}
        <div className="md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12 md:py-0 order-2 md:order-1" style={{ background: "var(--wedding-cream)" }}>
          <p className="font-montserrat tracking-[0.35em] text-xs uppercase mb-6" style={{ color: "var(--wedding-muted)" }}>
            вторая пара
          </p>
          <h2 className="text-6xl md:text-7xl font-light italic leading-tight" style={{ color: "var(--wedding-dark)" }}>Иван</h2>
          <div className="flex items-center gap-3 my-2">
            <div className="h-px w-8" style={{ background: "var(--wedding-gold)" }} />
            <span className="text-xl" style={{ color: "var(--wedding-gold)" }}>&</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-light italic leading-tight" style={{ color: "var(--wedding-dark)" }}>Анастасия</h2>
        </div>

        {/* Правая часть — фото */}
        <div className="md:w-1/2 relative overflow-hidden order-1 md:order-2" style={{ minHeight: "50vh" }}>
          <img
            src={PHOTO_IVAN_ANASTASIA}
            alt="Иван и Анастасия"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to left, transparent 65%, var(--wedding-cream) 100%)" }} />
          <div className="absolute inset-0 md:hidden" style={{ background: "linear-gradient(to bottom, transparent 60%, var(--wedding-cream) 100%)" }} />
        </div>
      </section>

      {/* ── ДЕТАЛИ СОБЫТИЯ ── */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-montserrat text-xs tracking-[0.35em] uppercase mb-4" style={{ color: "var(--wedding-gold)" }}>
              торжество
            </p>
            <h2 className="text-5xl font-light italic" style={{ color: "var(--wedding-dark)" }}>Основная информация</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border-t border-b" style={{ borderColor: "rgba(196,168,130,0.3)" }}>
            {[
              { icon: "Calendar", label: "Дата", value: "26 июля 2026", sub: "воскресенье" },
              { icon: "Clock", label: "Время", value: "12:30", sub: "начало регистрации" },
              { icon: "MapPin", label: "Место", value: "ЗАГС", sub: "с. Быстрый Исток, ул. Советская, 3" },
            ].map((item, i) => (
              <div
                key={i}
                className="py-12 px-8 text-center border-b md:border-b-0 md:border-r last:border-r-0"
                style={{ borderColor: "rgba(196,168,130,0.3)" }}
              >
                <Icon name={item.icon} fallback="Calendar" size={20} className="mx-auto mb-4" style={{ color: "var(--wedding-gold)" }} />
                <p className="font-montserrat text-xs tracking-[0.25em] uppercase mb-3" style={{ color: "var(--wedding-muted)" }}>
                  {item.label}
                </p>
                <p className="text-2xl font-light mb-1" style={{ color: "var(--wedding-dark)" }}>{item.value}</p>
                <p className="font-montserrat text-xs" style={{ color: "var(--wedding-muted)" }}>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── ДРЕСС-КОД ── */}
      <section className="py-24 px-6" style={{ background: "rgba(201,150,106,0.06)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-montserrat text-xs tracking-[0.35em] uppercase mb-4" style={{ color: "var(--wedding-gold)" }}>
              дресс-код
            </p>
            <h2 className="text-5xl font-light italic" style={{ color: "var(--wedding-dark)" }}>Стиль вечера</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-0 border-t border-b" style={{ borderColor: "rgba(201,150,106,0.3)" }}>

            {/* Девушки */}
            <div className="py-12 px-10 md:border-r" style={{ borderColor: "rgba(201,150,106,0.3)" }}>
              <p className="font-montserrat text-xs tracking-[0.3em] uppercase mb-6 text-center" style={{ color: "var(--wedding-muted)" }}>Девушки</p>
              <div className="flex justify-center gap-3 mb-6">
                {["#8B0000", "#C0392B", "#E74C3C", "#FF6B6B", "#C9485B"].map((color) => (
                  <div key={color} className="w-8 h-8 rounded-full border-2" style={{ background: color, borderColor: "rgba(201,150,106,0.3)" }} />
                ))}
              </div>
              <p className="text-center text-xl font-light italic mb-2" style={{ color: "var(--wedding-dark)" }}>Оттенки красного</p>
              <p className="font-montserrat text-xs text-center leading-relaxed" style={{ color: "var(--wedding-muted)" }}>
                бордо · алый · малиновый · рубиновый
              </p>
            </div>

            {/* Мужчины */}
            <div className="py-12 px-10">
              <p className="font-montserrat text-xs tracking-[0.3em] uppercase mb-6 text-center" style={{ color: "var(--wedding-muted)" }}>Мужчины</p>
              <div className="flex justify-center gap-3 mb-6">
                {["#1a1a1a", "#3d3d3d", "#f5f5f5", "#ffffff"].map((color) => (
                  <div key={color} className="w-8 h-8 rounded-full border-2" style={{ background: color, borderColor: "rgba(201,150,106,0.3)" }} />
                ))}
              </div>
              <p className="text-center text-xl font-light italic mb-2" style={{ color: "var(--wedding-dark)" }}>Чёрный и белый</p>
              <p className="font-montserrat text-xs text-center leading-relaxed" style={{ color: "var(--wedding-muted)" }}>
                чёрный · графит · белый · молочный
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ПРОГРАММА ── */}
      <section className="py-28 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-montserrat text-xs tracking-[0.35em] uppercase mb-4" style={{ color: "var(--wedding-gold)" }}>
              расписание
            </p>
            <h2 className="text-5xl font-light italic" style={{ color: "var(--wedding-dark)" }}>Программа дня</h2>
          </div>

          <div className="relative">
            <div className="absolute left-[105px] top-0 bottom-0 w-px" style={{ background: "rgba(196,168,130,0.3)" }} />

            {[
              { time: "12:00", title: "Сбор гостей", desc: "Добро пожаловать в ЗАГС, с. Быстрый Исток, ул. Советская, 3" },
              { time: "12:30", title: "Церемония", desc: "Торжественная регистрация брака" },
              { time: "13:30", title: "Фотосессия", desc: "Памятные фотографии молодожёнов и гостей" },
              { time: "16:00", title: "Банкет", desc: "Праздничный ужин, тосты и танцы до рассвета" },
              { time: "19:00", title: "Торт", desc: "Торжественная церемония разрезания свадебного торта" },
            ].map((item, i) => (
              <div key={i} className="flex gap-8 mb-10 last:mb-0">
                <div className="w-[90px] text-right flex-shrink-0 pt-1">
                  <span className="font-montserrat text-sm font-light" style={{ color: "var(--wedding-gold)" }}>
                    {item.time}
                  </span>
                </div>
                <div className="relative pl-8 pb-2">
                  <div
                    className="absolute left-[-8px] top-[5px] w-3 h-3 rounded-full border-2"
                    style={{ borderColor: "var(--wedding-gold)", background: "var(--wedding-cream)" }}
                  />
                  <h4 className="text-xl font-light mb-1" style={{ color: "var(--wedding-dark)" }}>{item.title}</h4>
                  <p className="font-montserrat text-xs leading-relaxed" style={{ color: "var(--wedding-muted)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ФОРМА ── */}
      <section className="py-28 px-6" style={{ background: "rgba(196,168,130,0.07)" }}>
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-montserrat text-xs tracking-[0.35em] uppercase mb-4" style={{ color: "var(--wedding-gold)" }}>
              ответ
            </p>
            <h2 className="text-5xl font-light italic mb-4" style={{ color: "var(--wedding-dark)" }}>Подтверждение</h2>
            <p className="font-montserrat text-xs leading-relaxed" style={{ color: "var(--wedding-muted)" }}>
              Пожалуйста, подтвердите своё присутствие до 1 июля 2026 года
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-6">🌸</div>
              <h3 className="text-3xl font-light italic mb-4" style={{ color: "var(--wedding-dark)" }}>Спасибо!</h3>
              <p className="font-montserrat text-xs" style={{ color: "var(--wedding-muted)" }}>
                Мы с нетерпением ждём вас на нашем торжестве
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="font-montserrat text-xs tracking-widest uppercase block mb-3" style={{ color: "var(--wedding-muted)" }}>
                  Ваше имя
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Иван Иванов"
                  className="w-full bg-transparent border-b py-3 text-lg font-light outline-none transition-colors placeholder:opacity-40"
                  style={{ borderColor: "rgba(196,168,130,0.4)", color: "var(--wedding-dark)" }}
                />
              </div>

              <div>
                <label className="font-montserrat text-xs tracking-widest uppercase block mb-4" style={{ color: "var(--wedding-muted)" }}>
                  Вы придёте?
                </label>
                <div className="flex gap-6 flex-wrap">
                  {[{ v: "yes", l: "С радостью приду" }, { v: "no", l: "К сожалению, нет" }].map(opt => (
                    <label key={opt.v} className="flex items-center gap-3 cursor-pointer">
                      <div
                        className="w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all cursor-pointer"
                        style={{
                          borderColor: form.attending === opt.v ? "var(--wedding-gold)" : "rgba(196,168,130,0.4)",
                          background: form.attending === opt.v ? "var(--wedding-gold)" : "transparent",
                        }}
                        onClick={() => setForm({ ...form, attending: opt.v })}
                      >
                        {form.attending === opt.v && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <span className="text-base font-light" style={{ color: "var(--wedding-dark)" }}>{opt.l}</span>
                    </label>
                  ))}
                </div>
              </div>

              {form.attending === "yes" && (
                <div>
                  <label className="font-montserrat text-xs tracking-widest uppercase block mb-3" style={{ color: "var(--wedding-muted)" }}>
                    Количество гостей
                  </label>
                  <select
                    value={form.guests}
                    onChange={e => setForm({ ...form, guests: e.target.value })}
                    className="w-full bg-transparent border-b py-3 text-lg font-light outline-none"
                    style={{ borderColor: "rgba(196,168,130,0.4)", color: "var(--wedding-dark)" }}
                  >
                    {["1", "2", "3", "4"].map(n => (
                      <option key={n} value={n} style={{ background: "#1a0a0e" }}>
                        {n === "1" ? "Только я" : `${n} человека`}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="font-montserrat text-xs tracking-widest uppercase block mb-3" style={{ color: "var(--wedding-muted)" }}>
                  Пожелания молодожёнам
                </label>
                <textarea
                  rows={3}
                  value={form.wishes}
                  onChange={e => setForm({ ...form, wishes: e.target.value })}
                  placeholder="Напишите что-нибудь тёплое..."
                  className="w-full bg-transparent border-b py-3 text-lg font-light outline-none resize-none placeholder:opacity-40"
                  style={{ borderColor: "rgba(196,168,130,0.4)", color: "var(--wedding-dark)" }}
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 border font-montserrat text-xs tracking-[0.3em] uppercase transition-all duration-300 hover:opacity-60"
                  style={{ borderColor: "var(--wedding-dark)", color: "var(--wedding-dark)", background: "transparent" }}
                >
                  Подтвердить присутствие
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-16 text-center px-6" style={{ borderTop: "1px solid rgba(196,168,130,0.2)" }}>
        <p className="text-3xl font-light italic mb-1" style={{ color: "var(--wedding-dark)" }}>
          Олег & Юлия
        </p>
        <p className="font-montserrat text-xs tracking-widest mb-3" style={{ color: "rgba(201,150,106,0.5)" }}>и</p>
        <p className="text-3xl font-light italic mb-3" style={{ color: "var(--wedding-dark)" }}>
          Иван & Анастасия
        </p>
        <p className="font-montserrat text-xs tracking-widest" style={{ color: "var(--wedding-muted)" }}>
          26 · 07 · 2026
        </p>
      </footer>
    </div>
  );
}