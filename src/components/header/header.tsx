import { Wrapper } from '../wrapper/wrapper'
import { Button } from '../button/button.tsx'
import { Select } from '../select/select.tsx'
import { Navigation } from '../navigationMenu/navigationMenu.tsx'
import { BothubAgg, BusinessColored, Close, Lang, TgColored } from '../icons'
import { ReactNode, useState } from 'react'
import { LogoDark, Menu as MenuIcon } from '../icons'
import { MobileMenu } from '../mobileMenu/mobileMenu.tsx'

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
  const [isMobile, setIsMobile] = useState(false)

  const toggleMenu = () => setIsMobile((prev) => !prev)

  return (
    <>
      <header className={'w-full border-b border-gray-3 bg-[#121825] py-5'}>
        <Wrapper className={'flex items-center justify-between'}>
          <div className={'flex'}>
            <a href="/" aria-label="Go to homepage">
              <LogoDark />
            </a>
            <Navigation links={links} />
          </div>
          <div className={'flex items-center gap-x-6 md:gap-x-8'}>
            <Select icon={<Lang />} />
            <Button className={'hidden md:block'}>Авторизация</Button>
            <Button className={'block lg:hidden'} variant={'icon'} onClick={toggleMenu}>
              {!isMobile ? <MenuIcon /> : <Close />}
            </Button>
          </div>
        </Wrapper>
      </header>
      {isMobile && (
        <div className="absolute left-0 right-0 z-20 h-dvh bg-dark lg:hidden">
          <Wrapper>
            <MobileMenu links={links} />
          </Wrapper>
        </div>
      )}
    </>
  )
}

export type link = {
  icon?: ReactNode
  title: string
  subtitle: string
}
