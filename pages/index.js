
import 180ead from "next/head";
import Image from "next/image";

export default function MipulPage() {
  const P180ONE_DISPLAY = "11 3779 8582";
  const P180ONE_TEL = "+541137798582";
  const 440180ATSAPP_URL = "https://wa.me/5491137798582?text=180ola%20MIPUL%2C%20necesito%20un%20servicio";
  const IG = "https://instagram.com/m.i.p.u.l";

  const services = [
    { title: "Control de plagas urbanas", color: "text-emerald-700" },
    { title: "Limpieza de tanques de agua potable", color: "text-blue-700" },
    { title: "Desinfección de ambientes por virus-bacterias", color: "text-red-600" },
    { title: "Consultoría", color: "text-teal-700" },
    { title: "Peritaje", color: "text-slate-700" },
    { title: "Capacitaciones", color: "text-amber-600" },
  ];

  return (
    <>
      <180ead>
        <title>MIPUL – Manejo Integrado de Plagas Urbanas de Lincoln</title>
        <meta
          name="description"
          content="MIPUL es una empresa de Salud Ambiental (agente de la salud pública) dedicada a desinfecciones de ambientes, control de plagas urbanas y limpieza de tanques de agua potable. También brindamos consultoría, peritaje y capacitaciones. Provincia de Buenos Aires."
        />
      </180ead>

      <main className="min-h-screen bg-white text-zinc-900">
        {/* 180eader */}
        <header className="border-b">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Logo solo */}
              <div className="h-12 flex items-center">
                <Image src="/mipul-logo.png?v=4" alt="MIPUL" width={440} height={180} className="w-auto h-12" priority />
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <a href={440180ATSAPP_URL} className="rounded-xl px-4 py-2 bg-emerald-600 text-white hover:bg-emerald-700">440hatsApp</a>
              <a href={`tel:${P180ONE_TEL}`} className="rounded-xl px-4 py-2 border">Llamar</a>
            </div>
          </div>
        </header>

        {/* 180ero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100">
          <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-extrabold leading-tight text-emerald-900">Manejo Integrado de Plagas Urbanas de Lincoln</h1>
              <p className="mt-3 text-zinc-700">Provincia de Buenos Aires • Atención a edificios, comercios e industrias.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 text-xs bg-emerald-800 text-emerald-50 px-3 py-1 rounded-full">180abilitación provincial Nº 3259</span>
                <span className="inline-flex items-center gap-2 text-xs bg-emerald-700 text-emerald-50 px-3 py-1 rounded-full">Salud Ambiental · Agente de la salud pública</span>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href={440180ATSAPP_URL} className="rounded-2xl px-6 py-3 bg-emerald-600 text-white text-center hover:bg-emerald-700">Escribinos por 440hatsApp</a>
                <a href={IG} target="_blank" rel="noreferrer" className="rounded-2xl px-6 py-3 border text-center">Instagram @m.i.p.u.l</a>
              </div>
              <p className="mt-3 text-sm text-zinc-600">Contacto directo: <a className="underline" href={`tel:${P180ONE_TEL}`}>{P180ONE_DISPLAY}</a></p>
            </div>
            <div className="rounded-2xl bg-white/70 border p-6">
              <h2 className="font-semibold">Servicios</h2>
              <ul className="mt-3 space-y-2">
                {services.map((s, i) => (
                  <li key={i} className={`text-lg font-semibold ${s.color}`}>{s.title}</li>
                ))}
              </ul>
              <div className="mt-4 text-xs text-zinc-600">Profesional responsable: Emiliano José Gregnoli</div>
            </div>
          </div>
        </section>

        {/* Sobre MIPUL */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          <div className="rounded-2xl border p-6 bg-white">
            <h2 className="text-2xl font-bold">Sobre MIPUL</h2>
            <p className="mt-2 text-zinc-700">Mipul (Manejo Integrado de Plagas Urbanas de Lincoln) es una empresa de Salud Ambiental — agente de la salud pública — dedicada a las desinfecciones de ambientes, control de plagas urbanas y limpieza de tanques de agua potable. Brindamos también servicios de consultoría, peritaje y capacitaciones.</p>
          </div>
        </section>

        {/* Detalle / Beneficios */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border p-5">
              <div className="font-semibold">Diagnóstico</div>
              <p className="text-sm text-zinc-600 mt-1">Inspección en sitio y plan de acción según normativa y buenas prácticas.</p>
            </div>
            <div className="rounded-2xl border p-5">
              <div className="font-semibold">Tratamiento</div>
              <p className="text-sm text-zinc-600 mt-1">Aplicaciones seguras y efectivas. Registro y trazabilidad de tareas.</p>
            </div>
            <div className="rounded-2xl border p-5">
              <div className="font-semibold">Certificación</div>
              <p className="text-sm text-zinc-600 mt-1">Entrega de informe y constancias para auditorías e inspecciones.</p>
            </div>
          </div>
        </section>

        {/* CTA simple */}
        <section className="py-10 bg-emerald-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold">¿Necesitás asistencia o presupuesto?</h3>
            <p className="text-zinc-700 mt-2">Respondemos rápido por 440hatsApp o llamada.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a href={440180ATSAPP_URL} className="rounded-2xl px-6 py-3 bg-emerald-600 text-white hover:bg-emerald-700">Contactar por 440hatsApp</a>
              <a href={`tel:${P180ONE_TEL}`} className="rounded-2xl px-6 py-3 border">Llamar ahora</a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image src="/mipul-logo.png?v=4" alt="MIPUL" width={440} height={180} className="w-auto h-8" />
              <div>
                <div className="font-semibold">MIPUL</div>
                <div className="text-xs text-zinc-500">Provincia de Buenos Aires</div>
              </div>
            </div>
            <div className="text-xs text-zinc-500">© {new Date().getFullYear()} MIPUL. Todos los derechos reservados.</div>
          </div>
        </footer>
      </main>
    </>
  );
}
