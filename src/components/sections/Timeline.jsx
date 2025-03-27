import React from "react";
import Timeline from "./ui/timeline";
import { assets } from "/src/assets/assets.js";

const TimelineDemo = () => {
  const data = [
    {
      title: "Pierwsze Kroki",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
            Stworzenie strony fizykafascynuje.pl i rozpoczęcie mojej przygody z
            programowaniem.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              assets.startup1,
              assets.startup2,
              assets.startup3,
              assets.startup4,
            ].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="startup template"
                width="500"
                height="500"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Rozwój i Nauka",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
            Po stworzeniu strony rozpocząłem intensywną naukę programowania,
            zgłębiając nowe technologie oraz rozwijając swoje umiejętności w
            różnych projektach.
          </p>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
            Poznanie różnych frameworków i narzędzi programistycznych było
            kluczowe w dalszym rozwoju mojej kariery.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[assets.featuresSection, assets.proBentoGrids, assets.cards].map(
              (img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="template"
                  width="500"
                  height="500"
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                />
              )
            )}
          </div>
        </div>
      ),
    },
    {
      title: "Projekt Barbershop",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-4">
            Ostatni projekt: System obsługi rezerwacji dla barbershopu.
          </p>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-4">
            Zrealizowano pełen panel klienta, panel administratora oraz panel
            pracownika.
          </p>
          <div className="mb-8">
            {[
              "- Implementacja systemu rezerwacji",
              "- Stworzenie panelu klienta",
              "- Utworzenie panelu administratora",
              "- Realizacja panelu pracownika",
              "- Integracja z systemem powiadomień i kalendarzem",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              assets.barbershop1,
              assets.barbershop2,
              assets.barbershop3,
              assets.barbershop4,
            ].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="barbershop project"
                width="500"
                height="500"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-black">
      <Timeline data={data} />
    </div>
  );
};

export default TimelineDemo;
