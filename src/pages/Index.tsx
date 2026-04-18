import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHOTO = "https://cdn.poehali.dev/projects/8b25d0d8-219a-4f89-a360-9ac0c073bb21/files/ad3af94a-1217-4bcb-9140-a4f2c9182d5b.jpg";

export default function Index() {
  const [form, setForm] = useState({ name: "", guests: "1", attending: "yes", wishes: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen font-cormorant" style={{ background: "var(--wedding-cream)" }}>

      {/* ── HERO ── */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${PHOTO})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,10,14,0.2) 0%, rgba(26,10,14,0.55) 60%, rgba(26,10,14,1) 100%)" }} />

        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <p className="font-montserrat tracking-[0.35em] text-xs uppercase mb-10 opacity-0 animate-fade-up" style={{ color: "var(--wedding-muted)" }}>
            двойное торжество
          </p>

          {/* Первая пара */}
          <div className="flex items-center gap-4 md:gap-8 mb-6 opacity-0 animate-fade-up-delay">
            <h1 className="text-5xl md:text-7xl font-light italic leading-none" style={{ color: "var(--wedding-dark)" }}>Олег</h1>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 md:w-12" style={{ background: "var(--wedding-gold)" }} />
              <span className="text-xl" style={{ color: "var(--wedding-gold)" }}>&</span>
              <div className="h-px w-8 md:w-12" style={{ background: "var(--wedding-gold)" }} />
            </div>
            <h1 className="text-5xl md:text-7xl font-light italic leading-none" style={{ color: "var(--wedding-dark)" }}>Юлия</h1>
          </div>

          {/* Разделитель */}
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-up-delay">
            <div className="h-px flex-1 max-w-[60px]" style={{ background: "rgba(201,150,106,0.3)" }} />
            <span className="font-montserrat text-xs tracking-[0.3em] uppercase" style={{ color: "var(--wedding-muted)" }}>и</span>
            <div className="h-px flex-1 max-w-[60px]" style={{ background: "rgba(201,150,106,0.3)" }} />
          </div>

          {/* Вторая пара */}
          <div className="flex items-center gap-4 md:gap-8 mb-12 opacity-0 animate-fade-up-delay2">
            <h1 className="text-5xl md:text-7xl font-light italic leading-none" style={{ color: "var(--wedding-dark)" }}>Иван</h1>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 md:w-12" style={{ background: "var(--wedding-gold)" }} />
              <span className="text-xl" style={{ color: "var(--wedding-gold)" }}>&</span>
              <div className="h-px w-8 md:w-12" style={{ background: "var(--wedding-gold)" }} />
            </div>
            <h1 className="text-5xl md:text-7xl font-light italic leading-none" style={{ color: "var(--wedding-dark)" }}>Анастасия</h1>
          </div>

          <p className="font-montserrat tracking-[0.2em] text-sm opacity-0 animate-fade-up-delay2" style={{ color: "var(--wedding-muted)" }}>
            26 ИЮЛЯ 2026
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up-delay3">
          <div className="flex flex-col items-center gap-2" style={{ color: "var(--wedding-muted)" }}>
            <span className="font-montserrat text-xs tracking-widest uppercase">прокрутите</span>
            <Icon name="ChevronDown" size={16} />
          </div>
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

      {/* ── О НАС ── */}
      <section className="py-20 px-6" style={{ background: "rgba(196,168,130,0.07)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-montserrat text-xs tracking-[0.35em] uppercase mb-4" style={{ color: "var(--wedding-gold)" }}>
              история
            </p>
            <h2 className="text-5xl font-light italic" style={{ color: "var(--wedding-dark)" }}>Жених и Невеста</h2>
          </div>

          {/* Первая пара */}
          <div className="mb-16">
            <p className="text-center font-montserrat text-xs tracking-[0.3em] uppercase mb-10" style={{ color: "var(--wedding-gold)" }}>
              — первая пара —
            </p>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="text-center">
                <div className="w-28 h-28 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl border" style={{ borderColor: "rgba(201,150,106,0.4)", background: "rgba(201,150,106,0.08)" }}>🤵</div>
                <h3 className="text-3xl font-light italic mb-2" style={{ color: "var(--wedding-dark)" }}>Олег</h3>
                <p className="font-montserrat text-xs tracking-widest uppercase mb-4" style={{ color: "var(--wedding-gold)" }}>Жених</p>
                <div className="w-8 h-px mx-auto mb-4" style={{ background: "var(--wedding-gold)" }} />
                <p className="text-base font-light leading-relaxed" style={{ color: "var(--wedding-muted)" }}>
                  Надёжный и заботливый, с тёплым взглядом и открытой душой. Мечтает о большой семье и жить у моря.
                </p>
              </div>
              <div className="text-center">
                <div className="w-28 h-28 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl border" style={{ borderColor: "rgba(201,150,106,0.4)", background: "rgba(201,150,106,0.08)" }}>👰</div>
                <h3 className="text-3xl font-light italic mb-2" style={{ color: "var(--wedding-dark)" }}>Юлия</h3>
                <p className="font-montserrat text-xs tracking-widest uppercase mb-4" style={{ color: "var(--wedding-gold)" }}>Невеста</p>
                <div className="w-8 h-px mx-auto mb-4" style={{ background: "var(--wedding-gold)" }} />
                <p className="text-base font-light leading-relaxed" style={{ color: "var(--wedding-muted)" }}>
                  Лёгкая на подъём и влюблённая в жизнь. Обожает путешествия, хорошую музыку и искренний смех.
                </p>
              </div>
            </div>
          </div>

          {/* Разделитель */}
          <div className="flex items-center gap-6 mb-16">
            <div className="h-px flex-1" style={{ background: "rgba(201,150,106,0.2)" }} />
            <span className="text-2xl" style={{ color: "rgba(201,150,106,0.4)" }}>✦</span>
            <div className="h-px flex-1" style={{ background: "rgba(201,150,106,0.2)" }} />
          </div>

          {/* Вторая пара */}
          <div>
            <p className="text-center font-montserrat text-xs tracking-[0.3em] uppercase mb-10" style={{ color: "var(--wedding-gold)" }}>
              — вторая пара —
            </p>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="text-center">
                <div className="w-28 h-28 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl border" style={{ borderColor: "rgba(201,150,106,0.4)", background: "rgba(201,150,106,0.08)" }}>🤵</div>
                <h3 className="text-3xl font-light italic mb-2" style={{ color: "var(--wedding-dark)" }}>Иван</h3>
                <p className="font-montserrat text-xs tracking-widest uppercase mb-4" style={{ color: "var(--wedding-gold)" }}>Жених</p>
                <div className="w-8 h-px mx-auto mb-4" style={{ background: "var(--wedding-gold)" }} />
                <p className="text-base font-light leading-relaxed" style={{ color: "var(--wedding-muted)" }}>
                  Спокойный и мудрый, любит природу и простые радости. Говорит мало, но всегда по делу.
                </p>
              </div>
              <div className="text-center">
                <div className="w-28 h-28 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl border" style={{ borderColor: "rgba(201,150,106,0.4)", background: "rgba(201,150,106,0.08)" }}>👰</div>
                <h3 className="text-3xl font-light italic mb-2" style={{ color: "var(--wedding-dark)" }}>Анастасия</h3>
                <p className="font-montserrat text-xs tracking-widest uppercase mb-4" style={{ color: "var(--wedding-gold)" }}>Невеста</p>
                <div className="w-8 h-px mx-auto mb-4" style={{ background: "var(--wedding-gold)" }} />
                <p className="text-base font-light leading-relaxed" style={{ color: "var(--wedding-muted)" }}>
                  Энергичная и творческая. Превращает любой день в праздник — просто своим присутствием.
                </p>
              </div>
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
              { time: "18:00", title: "Фотосессия", desc: "Прогулка по парку усадьбы, памятные фотографии" },
              { time: "19:00", title: "Банкет", desc: "Праздничный ужин, тосты и танцы до рассвета" },
              { time: "22:00", title: "Торт", desc: "Торжественная церемония разрезания свадебного торта" },
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