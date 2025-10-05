import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Волонтеры Коммунарки - Помощь нуждающимся',
  description: 'Мы собираем посылки, проводим мероприятия и занимаемся спортом вместе. Присоединяйтесь к нашей волонтерской организации!',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}