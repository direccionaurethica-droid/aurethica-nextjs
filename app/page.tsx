'use client';
import { useState } from 'react';

export default function Page() {
  const [email, setEmail] = useState('');
  return (
    <main className="min-h-screen flex items-center">
      <div className="container max-w-5xl mx-auto px-4 py-16">
        <header className="mb-10">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">Auréthica</h1>
          <p className="mt-3 text-sm sm:text-base" style={{color:'var(--muted)'}}>
            Sistema emocional‑estético para decidir tu look con precisión: test visual, IA Gigi y recomendación profesional.
          </p>
        </header>

        <section className="rounded-2xl p-6 sm:p-8 shadow-lg" style={{background:'var(--card)'}}>
          <p className="text-lg">Estamos preparando el estreno.
            <span className="ml-2 text-sm" style={{color:'var(--muted)'}}>Barcelona · LATAM · EU</span>
          </p>
          <form action="https://formspree.io/f/xxxxxxxx" method="POST" className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
            <input required name="email" type="email" placeholder="Tu email"
              value={email} onChange={e=>setEmail(e.target.value)}
              className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)]"/>
            <button type="submit" className="rounded-xl bg-white text-black font-semibold px-5 py-3 hover:opacity-90 transition">Avísame</button>
            <label className="sm:col-span-2 flex items-start gap-2 text-sm mt-1" style={{color:'var(--muted)'}}>
              <input required type="checkbox" className="mt-1"/>
              <span>Acepto recibir una notificación sobre el lanzamiento y la política de privacidad.</span>
            </label>
          </form>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              {n:'01', t:'Test visual', d:'Elige cómo quieres verte y cómo te ves hoy.'},
              {n:'02', t:'Gigi IA', d:'Traduce emociones en corte, color y mantenimiento.'},
              {n:'03', t:'Cita inteligente', d:'Conecta con el salón adecuado y evita malentendidos.'},
            ].map((b)=> (
              <div key={b.n} className="rounded-xl bg-black/30 border border-white/10 p-4">
                <p className="text-sm" style={{color:'var(--muted)'}}>{b.n}</p>
                <p className="mt-1 font-semibold">{b.t}</p>
                <p className="text-sm" style={{color:'var(--muted)'}}>{b.d}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm" style={{color:'var(--muted)'}}>
          <div>© {new Date().getFullYear()} Auréthica. Todos los derechos reservados.</div>
          <nav className="flex gap-4">
            <a className="hover:underline opacity-70" href="#" aria-disabled="true">Política de privacidad</a>
            <a className="hover:underline opacity-70" href="mailto:hola@aurethica.com">Contacto</a>
          </nav>
        </footer>
      </div>
    </main>
  );
}