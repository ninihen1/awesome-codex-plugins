import './globals.css';

export const metadata = {
  title: 'Awesome Codex Plugins',
  description: 'A curated list of awesome OpenAI Codex plugins, skills, and resources.',
  openGraph: {
    title: 'Awesome Codex Plugins',
    description: 'A curated list of awesome OpenAI Codex plugins, skills, and resources.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
