import { Wrapper } from '../wrapper/wrapper'
import { Button } from '../button/button.tsx'
import { Select } from '../select/select.tsx'
import { Menu } from '../navigationMenu/navigationMenu.tsx'
import { BothubAgg, BusinessColored, Lang, TgColored } from '../icons'
import { ReactNode } from 'react'
import LogoDark from '../icons/LogoDark.tsx'

const links: link[] = [
  {
    icon: <BothubAgg />,
    title: 'Агрегатор нейросетей BotHub',
    subtitle: 'ChatGPT на базе 3.5 и 4.0 версии OpenAI',
  },
  { icon: <TgColored />, title: 'Telegram бот', subtitle: 'Удобный бот в Telegram который всегда под рукой' },
  { icon: <BusinessColored />, title: 'Бизнес бот', subtitle: 'ChatGPT для эффективного решения бизнес задач' },
]

export const Header = () => {
  return (
    <header className={'w-full border-b border-gray-3 bg-[#121825] py-5'}>
      <Wrapper className={'flex items-center justify-between'}>
        <div className={'flex'}>
          <a href="/">
            <LogoDark />
          </a>
          <Menu links={links} />
        </div>
        <div className={'flex items-center'}>
          <Lang className={'mr-1.5'} />
          <Select />
          <Button className={'hidden md:block'}>Авторизация</Button>
        </div>
      </Wrapper>
    </header>
  )
}

export type link = {
  icon?: ReactNode
  title: string
  subtitle: string
}
