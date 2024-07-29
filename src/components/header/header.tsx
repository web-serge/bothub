import logo from '../../assets/images/logo.svg'
import arrow from '../../assets/images/icon/arrow.svg'
import { Wrapper } from '../wrapper/wrapper'
import { Button } from '../button/button.tsx'
import { Select } from '../select/select.tsx'
import lang from '../../assets/images/icon/lang.svg'
import telegram from '../../assets/images/icon/telegram.svg'
import portfolio from '../../assets/images/icon/portfolio.svg'
import aggregator from '../../assets/images/icon/agregator.svg'
import { useState } from 'react'
import clsx from 'clsx'
import { NavItem } from './navItem/navItem.tsx'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={'w-full border-b border-gray-3 bg-[#121825] py-5'}>
      <Wrapper className={'flex items-center justify-between'}>
        <div className={'flex'}>
          <img src={logo} alt="logo" className={'pr-6 md:border-r md:border-gray-3'} />
          <nav className={'ml-6 hidden lg:flex'}>
            <ul className={'flex items-center gap-8'}>
              <li className={'relative'}>
                <Button
                  variant={'pure'}
                  className={'flex items-center gap-2'}
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <span>Продукты</span>
                  <img src={arrow} alt="arrow" className={clsx(isOpen && 'scale-[-1]', 'transition-[0.3s]')} />
                </Button>
                {isOpen && (
                  <>
                    <ul
                      className={
                        'absolute top-[65px] bg-gray-4 p-3.5 lg:flex lg:w-[700px] lg:flex-wrap lg:gap-10 lg:rounded-[17px]'
                      }
                    >
                      <NavItem
                        icon={aggregator}
                        title={'Агрегатор нейросетей BotHub'}
                        subtitle={'ChatGPT на базе 3.5 и 4.0 версии OpenAI'}
                      />
                      <NavItem
                        icon={telegram}
                        title={'Telegram бот'}
                        subtitle={'Удобный бот в Telegram который всегда под рукой'}
                      />
                      <NavItem
                        icon={portfolio}
                        title={'Бизнес бот'}
                        subtitle={'ChatGPT для эффективного решения бизнес задач'}
                      />
                    </ul>
                  </>
                )}
              </li>
              <Button variant={'pure'} as={'a'}>
                Пакеты
              </Button>
              <Button variant={'pure'} as={'a'}>
                API
              </Button>
              <Button variant={'pure'} as={'a'}>
                Блог
              </Button>
            </ul>
          </nav>
        </div>
        <div className={'flex'}>
          <img src={lang} alt="lang" className={'mr-1.5'} />
          <Select />
          <Button>Авторизация</Button>
        </div>
      </Wrapper>
    </header>
  )
}
