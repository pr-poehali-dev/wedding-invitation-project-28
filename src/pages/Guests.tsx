import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const API_URL = "https://functions.poehali.dev/61572151-08f5-4572-bf6f-0e1231ef96a1";

interface Rsvp {
  id: number;
  name: string;
  attending: string;
  guests: number;
  wishes: string | null;
  created_at: string;
}

export default function Guests() {
  const [list, setList] = useState<Rsvp[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then(r => r.json())
      .then(data => {
        const parsed = typeof data === "string" ? JSON.parse(data) : data;
        setList(parsed.rsvp || []);
        setTotal(parsed.total_coming || 0);
      })
      .finally(() => setLoading(false));
  }, []);

  const coming = list.filter(r => r.attending === "yes");
  const notComing = list.filter(r => r.attending === "no");

  return (
    <div className="min-h-screen font-cormorant" style={{ background: "var(--wedding-cream)" }}>
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Заголовок */}
        <div className="text-center mb-16">
          <p className="font-montserrat text-xs tracking-[0.35em] uppercase mb-4" style={{ color: "var(--wedding-muted)" }}>
            список гостей
          </p>
          <h1 className="text-5xl font-light italic mb-8" style={{ color: "var(--wedding-dark)" }}>Подтверждения</h1>

          {/* Счётчики */}
          <div className="grid grid-cols-3 gap-0 border-t border-b max-w-sm mx-auto" style={{ borderColor: "rgba(201,150,106,0.3)" }}>
            {[
              { label: "Всего ответов", value: list.length },
              { label: "Придут", value: total },
              { label: "Не придут", value: notComing.length },
            ].map((s, i) => (
              <div key={i} className="py-6 px-4 text-center border-r last:border-r-0" style={{ borderColor: "rgba(201,150,106,0.3)" }}>
                <p className="text-3xl font-light mb-1" style={{ color: "var(--wedding-dark)" }}>{s.value}</p>
                <p className="font-montserrat text-xs" style={{ color: "var(--wedding-muted)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {loading ? (
          <p className="text-center font-montserrat text-xs" style={{ color: "var(--wedding-muted)" }}>Загрузка...</p>
        ) : list.length === 0 ? (
          <p className="text-center text-xl font-light italic" style={{ color: "var(--wedding-muted)" }}>Пока нет ответов</p>
        ) : (
          <div className="space-y-4">
            {/* Придут */}
            {coming.length > 0 && (
              <div>
                <p className="font-montserrat text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--wedding-gold)" }}>
                  Придут — {coming.length}
                </p>
                <div className="space-y-3">
                  {coming.map(r => (
                    <div key={r.id} className="border-b py-4 flex items-start justify-between gap-4" style={{ borderColor: "rgba(201,150,106,0.2)" }}>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xl font-light" style={{ color: "var(--wedding-dark)" }}>{r.name}</span>
                          <span className="font-montserrat text-xs px-2 py-0.5 rounded" style={{ background: "rgba(201,150,106,0.15)", color: "var(--wedding-gold)" }}>
                            {r.guests} чел.
                          </span>
                        </div>
                        {r.wishes && (
                          <p className="font-montserrat text-xs italic" style={{ color: "var(--wedding-muted)" }}>«{r.wishes}»</p>
                        )}
                      </div>
                      <p className="font-montserrat text-xs flex-shrink-0" style={{ color: "var(--wedding-muted)" }}>
                        {new Date(r.created_at).toLocaleDateString("ru-RU")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Не придут */}
            {notComing.length > 0 && (
              <div className="mt-10">
                <p className="font-montserrat text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--wedding-muted)" }}>
                  Не придут — {notComing.length}
                </p>
                <div className="space-y-3">
                  {notComing.map(r => (
                    <div key={r.id} className="border-b py-4 flex items-start justify-between gap-4 opacity-50" style={{ borderColor: "rgba(201,150,106,0.2)" }}>
                      <div className="flex-1">
                        <span className="text-xl font-light" style={{ color: "var(--wedding-dark)" }}>{r.name}</span>
                        {r.wishes && (
                          <p className="font-montserrat text-xs italic mt-1" style={{ color: "var(--wedding-muted)" }}>«{r.wishes}»</p>
                        )}
                      </div>
                      <p className="font-montserrat text-xs flex-shrink-0" style={{ color: "var(--wedding-muted)" }}>
                        {new Date(r.created_at).toLocaleDateString("ru-RU")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-16 text-center">
          <a href="/" className="font-montserrat text-xs tracking-widest uppercase" style={{ color: "var(--wedding-muted)" }}>
            <Icon name="ArrowLeft" size={12} className="inline mr-2" />
            Вернуться к приглашению
          </a>
        </div>
      </div>
    </div>
  );
}
