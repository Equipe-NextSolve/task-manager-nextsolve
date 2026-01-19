import "./globals.css";

export const metadata = {
  title: "NextSolve - Task Manager",
  description: "Gerenciador de tarefas da equipe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-950 text-slate-50 antialiased">{children}</body>
    </html>
  );
}
