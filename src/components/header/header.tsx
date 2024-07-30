import logo from '../../assets/images/logo.svg'
import { Wrapper } from '../wrapper/wrapper'
import { Button } from '../button/button.tsx'
import { Select } from '../select/select.tsx'
import lang from '../../assets/images/icon/lang.svg'
import { Menu } from '../navigationMenu/navigationMenu.tsx'
import aggregator from '../../assets/images/icon/agregator.svg'
import telegram from '../../assets/images/icon/telegram.svg'
import portfolio from '../../assets/images/icon/portfolio.svg'

const links: link[] = [
  { icon: aggregator, title: 'Агрегатор нейросетей BotHub', subtitle: 'ChatGPT на базе 3.5 и 4.0 версии OpenAI' },
  { icon: telegram, title: 'Telegram бот', subtitle: 'Удобный бот в Telegram который всегда под рукой' },
  { icon: portfolio, title: 'Бизнес бот', subtitle: 'ChatGPT для эффективного решения бизнес задач' },
]

export const Header = () => {
  return (
    <header className={'w-full border-b border-gray-3 bg-[#121825] py-5'}>
      <Wrapper className={'flex items-center justify-between'}>
        <div className={'flex'}>
          <img src={logo} alt="logo" className={'pr-6 md:border-r md:border-gray-3'} />
          <Menu links={links} />
        </div>
        <div className={'flex'}>
          <img src={lang} alt="lang" className={'mr-1.5'} />
          <Select />
          <Button className={'hidden md:block'}>Авторизация</Button>
        </div>
      </Wrapper>
    </header>
  )
}

export type link = {
  icon?: string
  title: string
  subtitle: string
}
