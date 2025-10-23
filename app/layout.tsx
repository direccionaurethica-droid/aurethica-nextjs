export const metadata = {
  title: "Auréthica — Próximamente",
  description: "Sistema emocional‑estético: test visual, IA Gigi y recomendación profesional."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}