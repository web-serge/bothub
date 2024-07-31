import { ReactNode } from 'react'
import { BothubAvatarSmall, Email, Send } from '../../icons'

type Column = {
  title: string
  links: { href: string; text: string; icon?: ReactNode }[]
}
const columns: Column[] = [
  {
    title: 'Информация',
    links: [
      { href: '', text: 'Главная страница' },
      { href: '', text: 'Тарифы' },
      { href: '', text: 'Контакты' },
      { href: '', text: 'Наши возможности' },
      { href: '', text: 'Модели нейросетей' },
      { href: '', text: 'О Нас' },
      { href: '', text: 'Для инвесторов' },
    ],
  },
  {
    title: 'Наши продукты',
    links: [
      { href: '', text: 'ChatGPT для бизнеса' },
      { href: '', text: 'Агрегатор нейросетей' },
      { href: '', text: 'ChatGPT в Telegram' },
    ],
  },
  {
    title: 'Ссылки',
    links: [
      { href: '', text: 'Сообщество в телеграм', icon: <Send /> },
      { href: '', text: 'Телеграм бот', icon: <BothubAvatarSmall width={18} /> },
      { href: 'mailto:email@bothub.chat', text: 'email@bothub.chat', icon: <Email /> },
    ],
  },
  {
    title: 'Блог',
    links: [
      { href: '', text: 'Наш блог' },
      { href: '', text: 'Habr' },
      { href: '', text: 'Телеграм' },
    ],
  },
]

export const FooterLinks = () => {
  return (
    <div className={'flex flex-col gap-6 md:flex-row lg:gap-x-[73px] lg:gap-y-[30px]'}>
      {columns.map((column) => {
        return (
          <div key={column.title} className={'flex flex-col gap-y-5'}>
            <h6 className={'font-semibold text-gray-1'}>{column.title}</h6>
            <nav>
              <ul className={'flex flex-col gap-y-5'}>
                {column.links.map((link) => {
                  return (
                    <li key={link.text}>
                      <a
                        href={link.href}
                        className={'flex items-center gap-x-2 text-nowrap transition-[0.3s] hover:opacity-70'}
                      >
                        {link.icon}
                        {link.text}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        )
      })}
    </div>
  )
}
